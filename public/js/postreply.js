let submitForm = document.querySelector('#contactForm')

        submitForm.addEventListener('submit',(e)=>{
          e.preventDefault();
          let name= document.querySelector('#name').value
          let email= document.querySelector('#email').value
          let message= document.querySelector('#message').value
          let subject= document.querySelector('#subject').value
          let data = { name, email, message, subject };

          fetch("https://submit-form.com/kEipJxSO",{
              method:"POST",
              headers:{
                    'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                },
              body:JSON.stringify(data)
          })
          .then(data=>console.log('success'))
          .catch(err=>console.log('err'));

          document.querySelector('#name').value = "";
          document.querySelector('#email').value = "";
          document.querySelector('#message').value = "";
          document.querySelector('#subject').value = "";

          alert("Message sent!");
        });       