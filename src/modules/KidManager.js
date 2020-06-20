const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/kids/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/kids?_expand=neighborhood`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:8000/kids/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newKid) {
    return fetch(`${remoteURL}/kids`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newKid)
    }).then(data => data.json())
},
update(editedKid) {
  return fetch(`${remoteURL}/kids/${editedKid.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedKid)
  }).then(data => data.json());
}
}