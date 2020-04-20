import axios from 'axios'

function request(config) {
    return new Promise((resolve, reject) => {
        const instance = new axios.create({
            baseURL: 'https://httpbin.org',
            timeout: 30 * 1000
        })

        instance(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export {
    request
}