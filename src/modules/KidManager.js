const remoteURL = "http://localhost:8000"

export default {
  get(id) {
    return fetch(`${remoteURL}/kids/${id}`).then(result => result.json())
  },
  // Use & to fetch multiple things at once, but can use conditional to speed up app
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
},
    // changes the boolean of completed from false to true when the checkbox is clicked in served
    served(id) {
      return fetch(`${remoteURL}/kids/${id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({ served: true })
       }).then(r => r.json())
   }
}