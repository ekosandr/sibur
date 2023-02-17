function queryDecorator(fn, count, delay) {
  let timer;
  const fetchTodo = fn.bind(fetchObject);

  return (id) => {
    fetchTodo(id).catch(() => {
      timer = setInterval(() => {
        if (count) {
          fetchTodo(id).then(() => clearInterval(timer));
          --count;
        } else {
          clearInterval(timer);
        }
      }, delay);
    });
  };
}
const fetchObject = {
  url: 'https://sonplaceholder.typicode.com/todos',
  getTodoById(id) {
    console.log(this.url);
    return fetch(`${this.url}/${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  },
};
fetchObject.getTodoById = queryDecorator(fetchObject.getTodoById, 5, 1000);
fetchObject.getTodoById(1);
