const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/updates/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/updates`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:8000/kids/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}