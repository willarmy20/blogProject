module.exports = function (posts, categoryName) {
  const formattedPosts = [];
  let postObject = {};
  posts.forEach(post => {
    postObject.id = post.dataValues.id;
    postObject.title = post.dataValues.title;
    postObject.body = post.dataValues.body;
    postObject.createdAt = post.dataValues.createdAt;
    postObject.username = post.dataValues.user.dataValues.first_name;
    postObject.url = `/${categoryName}/comments/${postObject.id}/${postObject.title.split(' ').join('_')}`;

    formattedPosts.push(postObject);
    postObject = {};
  })

  return formattedPosts;
}