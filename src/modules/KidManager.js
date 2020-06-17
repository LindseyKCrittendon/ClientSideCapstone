const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/kids/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/kids`).then(result => result.json())
  }
}