module.exports = function formatCommunities(communities){
  const formattedCommunities = [];
  let communityData = {};
  communities.forEach(community => {
    communityData.id = community.dataValues.id;
    communityData.title = community.dataValues.title;
    communityData.description = community.dataValues.description;
    communityData.createdAt = community.dataValues.createdAt;
    communityData.updatedAt = community.dataValues.updatedAt;

    formattedCommunities.push(communityData);
    communityData = {};
  });

  return formattedCommunities;
}