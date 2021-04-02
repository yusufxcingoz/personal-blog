  
class Unsplash {
    constructor() {
      this.base_url = 'https://api.unsplash.com/users/yusufxcingoz'
      this.client_id = `client_id=K4aryANDmKnO54mf3cd21b8xo59w5p_z5h-WWqyVPZ4`
    }
  
    async getData(url) {
      const res = await fetch(url, {
        method: 'get'
      })
      return await res.json()
    }
  
    getStats() {
      const url = [this.base_url, '/statistics?', this.client_id].join('')
      return this.getData(url)
    }
  
    getPhotos() {
      const url = [this.base_url, '/photos?per_page=50&', this.client_id].join('')
      return this.getData(url)
    }
  }
  
  export default new Unsplash()