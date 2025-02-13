const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8" 
    },
    body: JSON.stringify({
        title: "Postagem TESTE",
        body: "Corpo da postagem",
        userId: 56
    })
};

fetch(url, options)
.then((response) => response.json())
.then((json) => json.id)
.then((id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  method: 'PUT',
  body: JSON.stringify({
    id: id,
    title: 'Título alterado',
    body: 'Corpo alterado',

    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
});



