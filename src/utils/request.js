import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 10000,
  withCredentials: false
})

const requestHandler = config => {
  // do something before request is sent

  return config
}

const responseHandler = response => {
  const res = response.data

  // do something with response data
  if (res.code === 20000) {
    return res
  } else {
    return Promise.reject(new Error(res.message))
  }
}

const errorHandler = error => {
  // do something with response error

  return Promise.reject(error)
}

service.interceptors.request.use(
  requestHandler,
  errorHandler
)
service.interceptors.response.use(
  responseHandler,
  errorHandler
)

export default service
