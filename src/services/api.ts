import http from './http'

export function test(data = {}) {
    return http.get('https://api.douban.com/v2/movie/top250', data)
}
