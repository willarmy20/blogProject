

// Tables Category, Comments, Posts, Users

// Categories

// Categories hasMany Posts (categoryID)

// Comments

// Comments belongsTo Posts (postID)
// Comments belongsTo Users (userID)

// Posts

// Posts hasMany Comments (postID)
// Posts belongsTo Users  (userID)
// Posts belongsTo Categories (categoryID)

// Users

// User hasMany posts   (userID)
// User hasMany comments (userID)