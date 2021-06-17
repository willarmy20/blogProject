module.exports = function formatComments(comments){
    // We are putting together a list of comments
    // a list is an array, we represent comment as an object
    // comment - body, username, createdat
    // [{}, {}, {}]
    const formattedComments = [];
    let commentData = {}; 

    comments.forEach(comment => {
        commentData.body = comment.dataValues.body;
        commentData.createdAt = comment.dataValues.createdAt;
        commentData.username = comment.dataValues.user.dataValues.first_name;

        formattedComments.push(commentData);
        commentData = {};
    })

    return formattedComments;
}