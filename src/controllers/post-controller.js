const posts =require("../data/posts.json");
// Bütün postları döndürüyoruz
getAllPosts = () =>{
    return posts;
}
//Id'ye göre arama gerçekleştiriyoruz
getPostById = (postId) =>{
    return posts.filter(x => x.id == postId);
}

module.exports = {getAllPosts, getPostById}