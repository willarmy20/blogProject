module.exports = function formatComments(comments){
    // We are putting together a list of comments
    // a list is an array, we represent comment as an object
    // comment - body, username, createdat
    // [{}, {}, {}]
    const formattedComments = [];


    comments.forEach(comment => {

        comment.body = comment.dataValues.body;
        comment.createdAt = comment.dataValues.createdAt;
        comment.username = comment.dataValues.user.dataValues.first_name;

        formattedComments.push(comment);

    })
        // console.log("commentArray", formattedComments)
    return formattedComments;
}