import { useEffect, useState } from 'react'

function ScenicSpot(props) {
  const [rows, setRows] = useState([])
  let n = 1

  async function fetchdata() {
    const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${
      30 * (n - 1)
    }`
    const request = new Request(url, {
      method: 'GET',
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('回傳資料 : ', data)
    // setRows(data)
    setRows((prevState) => {
      return [...prevState, ...data]
    })
    n = n + 1
  }
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }
  let callback = (entries, observer) => {
    // entries 能拿到所有目標元素進出(intersect)變化的資訊
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('n :', n)
        fetchdata()
      } else {
        // 只在目標元素離開 viewport 時執行這裡的工作
      }
    })
  }
  useEffect(() => {
    n = 1
    // fetchdata()
    const observe_target = document.querySelector('#TARGET_ELEMENT')

    let observer = new IntersectionObserver(callback, options)
    observer.observe(observe_target)
  }, [])
  let ScienicDisplay = (
    <>
      {rows.map((value, i) => (
        <>
          <div key={i} className={`col-xl-4 col-lg-5 col-md-6 `}>
            <div className="product  fish-card w-100 position-relative">
              <div className="fish-img-box w-100">
                <img
                  // src={
                  //   Object.keys(value.Picture).length > 0
                  //     ? `${value.Picture.PictureUrl1}`
                  //     : 'imgnotfound.png'
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
                <h5 className="fish-card-title">{value.Name}</h5>
                <p className="fish-card-text">{value.DescriptionDetail}</p>
                <hr className="fish-product-hr" />
                <div className="fish-product-price mb-1">{value.p_price}</div>
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
      <div className="d-flex flex-wrap">{ScienicDisplay}</div>
    </>
  )
}
export default ScenicSpot
