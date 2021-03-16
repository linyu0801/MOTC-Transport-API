import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function City(props) {
  const [rows, setRows] = useState([])
  const { changecity, setChangecity } = props
  let n = 1
  let { city } = useParams()

  async function fetchcity() {
    const url =
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}` +
      `?$top=${30}`
    const request = new Request(url, {
      method: 'GET',
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('回傳資料 : ', data)
    if (changecity === false) {
      if (data.length >= 30) {
        setRows((prevState) => {
          return [...prevState, ...data]
        })
        n = n + 1
      } else {
        setRows(data)
      }
    } else {
      setRows(data)
    }
  }

  useEffect(() => {
    const observe_target = document.querySelector('#TARGET_ELEMENT')
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    }
    let callback = (entries, observer) => {
      // entries 能拿到所有目標元素進出(intersect)變化的資訊
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('n :', n)
          fetchcity()
        } else {
          // 只在目標元素離開 viewport 時執行這裡的工作
        }
      })
    }
    let observer = new IntersectionObserver(callback, options)
    observer.observe(observe_target)
  }, [])
  useEffect(() => {
    if (changecity === true) {
      fetchcity()
      setChangecity(!changecity)
    }
  }, [changecity])
  let ScienicDisplay = (
    <>
      {rows.map((value, i) => (
        <>
          <div key={i} className={`col-xl-4 col-lg-5 col-md-6 `}>
            <div className="product  fish-card w-100 position-relative">
              <div className="fish-img-box w-100">
                <img
                  src={
                    value.Picture.PictureUrl1
                      ? `${value.Picture.PictureUrl1}`
                      : 'imgnotfound.png'
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
  useEffect(() => {
    console.log('rows : ', rows)
  }, [rows])
  return (
    <>
      <img src="imgnotfound.png" alt="" />
      <div className="d-flex flex-wrap">{ScienicDisplay}</div>
    </>
  )
}
export default City
