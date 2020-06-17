const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/updates/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/updates`).then(result => result.json())
  }
}