const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/updates/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/updates`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:8000/updates/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newUpdate) {
    return fetch(`${remoteURL}/updates`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUpdate)
    }).then(data => data.json())
}
}