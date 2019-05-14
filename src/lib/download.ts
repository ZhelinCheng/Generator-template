/**
 * Created by ChengZheLin on 2019/5/14.
 * Features: download
 */

import rq from 'request'
import fs from 'fs'

interface DownloadInterface {
  label: string
  url: string
}

export default function (obj: DownloadInterface) {
  return new Promise((resolve, reject) => {

    rq.get(obj.url)
      .on('response', (response) => {
        console.log(response.statusCode)
        console.log(response.headers['content-type'])
      })
      .on('data', (data) => {
        console.log(data.length)
      })
      .on('error', (e) => {
        reject(e)
      })
      .pipe(fs.createWriteStream('doodle.zip'))
      .on('finish', () => {
        console.log('结束')
        resolve()
      })
  })
}
