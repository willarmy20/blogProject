module.exports = function (post){
    const formattedPost = {};
    formattedPost.title = post.dataValues.title;
    formattedPost.body = post.dataValues.body;
    formattedPost.username = post.dataValues.user.dataValues.first_name;
    formattedPost.createdAt = post.dataValues.createdAt;
    formattedPost.userID = post.dataValues.user.dataValues.id

    return formattedPost;
}