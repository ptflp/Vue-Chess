import axios from 'axios'

export default class {
  constructor (url = 'http://avlek.ykt.ru:8089') {
    this.baseurl = url
  }

  getBestMove (fen, difficulty = 3) {
    return axios.get(`${this.baseurl}/api/getpreparedmoves`, { params: { fen, difficulty } })
  }
}
