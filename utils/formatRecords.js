module.exports = function formatRecords(records){
    const allPosts = [];
    let post = {};
    
    records.forEach(record => {
        // Loop through and pull data pieces that we need
        // save inside of a post object
        post.title = record.dataValues.title;
        post.body = record.dataValues.body;
        post.username = record.dataValues.user.dataValues.first_name;
        post.categoryName = record.dataValues.category.dataValues.title;
        post.id = record.dataValues.id;
        post.url = `/${post.categoryName}/comments/${post.id}/${post.title.split(' ').join('_')}`
        post.createdAt = record.dataValues.createdAt;
        post.updatedAt = record.dataValues.updatedAt;

        // Push that object into final array and reset post
        // so that we can continue storing additional posts
        allPosts.push(post);
        post = {};
    })

    return allPosts;
}