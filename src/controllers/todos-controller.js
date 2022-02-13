const todos = require("../data/todos.json")
//Bütün Todoları dönüyoruz
getAllTodos = () => {
    return todos
}
//Id'ye göre arama gerçekleştiriyoruz
getTodosById = (userId) => {
    todos.filter(x=>x.id == userId);
}


module.exports = {getAllTodos,getTodosById}