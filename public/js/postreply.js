let submitForm = document.getElementById('postform');

submitForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let reply = document.querySelector('#reply').value;
  let userId = document.querySelector('#userPost>p').id;

  let data = { reply, userId };

  fetch(window.location.href,{
      method:"POST",
      headers:{
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
      body:JSON.stringify(data)
  })
  .then(data=>console.log('success'))
  .catch(err=>console.log('err'));

  location.reload();
});