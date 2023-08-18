// import axios from 'axios'

// const request = axios.create({
//    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
//    params: {
//       key: "AIzaSyCYPMZfpNLXqd8GWM80ZaM5OdqjS3sae6c",
//    },
// })

// export default request
import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
   },
})

export default request