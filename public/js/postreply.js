let submitButton = document.query ...

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  let reply = document.query ....
  let data = { comment: reply.value };

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