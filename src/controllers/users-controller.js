const users = require("../data/users.json")
//Bütün userleri dönüyoruz
getAllUser = () => {
    return users;
}
//Id'ye göre arama gerçekleştiriyoruz
getUserById = (userId)=>{
    return users.filter(x=>x.id == userId);
}   

module.exports = { getAllUser}