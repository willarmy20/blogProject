async function populateCommunities(){
  const communityListJson = await fetch('/communityList/10');
  const communityList = await communityListJson.json();
  appendCommunities(communityList.communities);
}

function appendCommunities(communityList){
  const communityListElement = document.querySelector('#community-list');
  let convertToHTML = "";
  communityList.forEach((community, index) => {
    convertToHTML += `<li role="presentation"><a role="menuitem" tabindex="-${index + 2}" href="/community/${community.title}/${community.id}">${community.title}</a></li>`;
  });
  communityListElement.innerHTML += convertToHTML;
}

populateCommunities();