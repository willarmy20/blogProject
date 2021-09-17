# <p align="center"> Game Lounge </p>
<p align="center">
  <img src="public/images/logo_3.png">
</p>
<br>
<p align="center"><a href="https://evening-shelf-23921.herokuapp.com/>Live Demo</a></p>
## <p align="center">About this project 📝</p>
<hr>
  Game Lounge is a blog page simliar to Reddit. Its a place where users can chat about anything related to games!!! You have to be side in to be able to create community for on this site. You can see anyone post once coming to the page. You have to registering as a new user if you want to create a post. If you are an existing user, your credentials are authenticated and you can creat a post on to the wall.<br>
<br>
<br>
<br>

## <p align="center"> ## Tech Stack 💻</p>
<hr>
<br>
<p align="center">
<img alt="Node Js" src="https://img.shields.io/badge/nodejs%20-%23E34F26.svg?&style=for-the-badge&logo=nodejs&logoColor=white"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
* HTML,  CSS, Express.js
* Backend: Sequelize
 <p>
<br>


## <p align="center">Code snipets</p>
<hr>


<p> This is the how the post and images are rendering on the page at once. 
<br>

``` <div class="container">
             <div class="row">
                  <div class="col-lg-8 col-md-8">
                       <% for( let index = 0; index < formattedRecords.length; index++ ) { %>
                          <!-- POST -->
                          <div class="post">
                              <div class="wrap-ut pull-left">
                                  <div class="userinfo pull-left">
                                        <div class="avatar">
                                            <img src="/images/babygamer.jpeg"  alt="" />
                                           <p><%= formattedRecords[index].username %> </p>
                                        <div class="status green">&nbsp;</div>
                                  </div>
                          </div>
```

<br>
<br>
                                
 ##  <p align="center">Database</p>
<hr>
 <img src="/public/images/Layout_database.png">
<br>
<br>
<br>
<br>
                                
  ## MVP
* Register new users
* Authenticate users at login
* Add new user to database
* Add new user to family
* Add/update/retrieve/delete new user
* Mobile responsive
* Use PostgreSQL for database
* Create at least 3 tables, with Model classes as is appropriate
* Make sure that at least 2 of the tables are related (via foreign keys)
* Allow user login, with passwords encrypted with bcrypt.

## Stretch Goals (Future)
* Add more communities
* Add emjois to post feed
* User who creates a group can email invites to others
* Working Contact Us Page                             




##  <p align="center">Authors</p>
<hr>
* [LaQuinta Williams](https://github.com/willarmy20)<br>
* [Matthew Fisher](https://github.com/MicroFish91)                             
                                </hr>          
<br>
