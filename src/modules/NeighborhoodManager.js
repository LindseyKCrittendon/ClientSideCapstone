const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/neighborhoods/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/neighborhoods`).then(result => result.json())
  }
}