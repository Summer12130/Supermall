import axios from 'axios'

//数据接口
//http://123.207.32.32:8000/home/multidata
//http://123.207.32.32:8000/home/data?type=sell&page=3


//新接口 http://152.136.185.210:8000/api/w6/recommend
//http://152.136.185.210:8000/api/w6/data/home/data
export function request(config){

  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000
  })

  //设置拦截器
  //响应拦截器
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error);
  })

  return instance(config)

}