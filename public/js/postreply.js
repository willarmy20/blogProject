let submitButton = document.getElementById('submitbutton');

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  let reply = document.querySelector('#reply').value
  let data = { reply: reply};
  console.log(window.location.href)
  fetch(window.location.href,{
      method:"POST",
      headers:{
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
      body:JSON.stringify(data)
  })
  .then(data=>console.log('success'))
  .catch(err=>console.log('err'));

});       