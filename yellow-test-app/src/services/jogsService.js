class JogsService {
  _apiBase = 'https://jogtracker.herokuapp.com/api/v1/data/'
  uuid = 'eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf';

  getJogs = async () => {
   const res = await fetch(`${this._apiBase}sync`,{
     headers: {
       Authorization: `Bearer ${this.uuid}`,
       credentials: 'include'
     },
     method: "GET",
   })
    return await res.json()
  };
}

export {
  JogsService
}