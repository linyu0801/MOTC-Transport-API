import { useEffect, useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'

function City(props) {
  const [rows, setRows] = useState([]) //狀態 rows 用來儲存回傳資料
  let n = 1
  //使用url param讀取使用者選取的縣市

  async function fetchcity(city) {
    const url =
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/' +
      city +
      `?$top=${30}&$skip=${30 * (n - 1)}`
    //一次抓三十筆第二次抓30筆時跳過已經抓取過的30筆
    const request = new Request(url, {
      method: 'GET',
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('回傳資料 : ', data)
    setRows((prevState) => {
      return [...prevState, ...data]
    })
    n = n + 1
  }
  //Intersection Obeserver API options 控制甚麼情況呼叫callback
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
  }
  let callback = (entries, observer) => {
    // entries 能拿到所有目標元素進出(intersect)變化的資訊
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 只在目標元素進入 viewport 時執行這裡的工作
        console.log('observecity :', props.match.params.city)
        fetchcity(props.match.params.city)
      } else {
        // 只在目標元素離開 viewport 時執行這裡的工作
      }
    })
  }
  useEffect(() => {
    const observe_target = document.querySelector('#TARGET_ELEMENT')

    let observer = new IntersectionObserver(callback, options)
    observer.observe(observe_target)
  }, [])

  useEffect(() => {
    console.log('rows :', rows) //紀錄資料變化
  }, [rows])

  let ScienicDisplay = (
    <>
      {rows.map((value, i) => (
        <>
          <div key={props.city} className={`col-xl-4 col-lg-5 col-md-6 `}>
            <div className="product  fish-card w-100 position-relative">
              <div className="fish-img-box w-100">
                <img
                  src={
                    value.Picture.PictureUrl1
                      ? `${value.Picture.PictureUrl1}`
                      : process.env.PUBLIC_URL + '/img/notfound.jpg'
                  }
                  className="fish-product-img"
                  alt={`${value.Name}` + `圖片`}
                />
              </div>
              <div className="fish-card-body w-100">
                <h5 className="fish-card-title">
                  {value.City}－{value.Name}
                </h5>
                <p className="fish-card-text">{value.DescriptionDetail}</p>
                <hr className="fish-product-hr" />
                <div className="fish-product-text mb-1">
                  經緯度: {value.Position.PositionLat},
                  {value.Position.PositionLon}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <div id="TARGET_ELEMENT"></div>
    </>
  )

  return (
    <>
      {/* <img src="http://localhost:3000/logo192.png" alt="" className="bg-img" /> */}
      {/* <div className="h-60"></div> */}
      <div className="row justify-content-center">
        <div className="d-flex flex-wrap">{ScienicDisplay}</div>
      </div>
    </>
  )
}
export default withRouter(City)
