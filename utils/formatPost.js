module.exports = function (post){
    const formattedPost = {};
    formattedPost.title = post.dataValues.title;
    formattedPost.body = post.dataValues.body;
    formattedPost.username = post.dataValues.user.dataValues.first_name;
    formattedPost.categoryName = post.dataValues.category.dataValues.title;
    formattedPost.createdAt = post.dataValues.createdAt;
    formattedPost.userID = post.dataValues.user.dataValues.id

    return formattedPost;
}