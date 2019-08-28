# Beautify




<h1 align="center">
  <img src="./client\src\assets\img\logo.png" alt="Logo" width="65%"></a>
</h1>



<h2 align="center">A Full Stack MERN Web Application providing beauty, health, and wellness services to your home.

[Link to Deployed Application](https://beautify-app.herokuapp.com)

</h2>



# Description
`Beautify` is a health and wellness booking service app providing services to users. 

This is a full-stack web-based application built upon the `Node.js` environment, heavily relying on `Express` for functionality and utilizes API routes from our database which populates our site's content.

`Beautify` also utilizes user authentication through `Passport` and saves those users' unique IDs in a cloud database so that the user can log in and bookmark/favorite animals that they are interested in to follow up on at a later time.

The front-end is built with the `Materialize` CSS framework and utilizes `Handlebars` for templating elements of our application for continuous reuse, reducing the amount of hardcoding needed for all of the different pages and views within the application flow.
<br><br>

# How It Works

<h2 align="center">
<img src="public/assets/img/readme-images/how-it-works-icons.png" alt="How It Works" width='100%' />
</h2>

<br>

# GIF of Application

<h2 align="center">
<img src="public/assets/img/readme-images/site_gif.gif" alt="GIF of Application" width='100%' />
</h2>

<br>

# Features
* User sign in/sign up via Passport Authentication
* User login saved and unique Passport ID stored in database
* Option to book services or become a provider and post services
* Option to select multiple choices for each category within the search form
* Bookmark or favorite pets
* Pet favorites saved on user favorites page
* Option to remove favorite
* Pet profile page with pet details
* Provided with organization contact information for each pet including (if applicable) address, email, phone, URL link, and map
* Google Maps Embed integrated with directions to organization location
<br><br>

# Okta Authentication - User Model
<h2 align="center">
<img src="public/assets/img/readme-images/login.PNG" alt="Screenshot of Application" width='50%' />
</h2>


* Login/Authenticate with username/email and password through Google/Okta
* Store unique id from returned token in database
* Store unique id into local cookies (routing/paths)

<br>

# Results - PetFinder API
<h2 align="center">
<img src="public/assets/img/readme-images/screen1.png" alt="Screenshot of Application" width='50%' />
</h2>

* Search for pet inputting filters:
    * Type of pet
    * Breed 
    * Gender
    * Age 
    * Size 
    * Coat
    * Location
* Once a user starts typing in the Breed input, data from API is used to autofill
* Option to select multiple choices for each category 
* Input our filter data into API 
* Take results and put them into cards on results page
* Each pet result card links to a pop up Modal with with brief details, a favorites button, and a link to their pet profile page

<br>

# Favorites Model - Handlebars
<h2 align="center">
<img src="public/assets/img/readme-images/screen2.png" alt="Screenshot of Application" width='50%' />
</h2>

```
Favorites.findAll();  
```
* A user can favorite any animal they want and as many animals as they want
* Get the favorites from the database with `findAll()` method
* The call to the petfinder API gives us a promise
* The user can click the heart in the top right corner to view all of their saved favorited pets
* Use of handlebars to generate the favorites page
* On the favorites page, the user can delete favorites from their saved favorites. 
* They also have the option to go to each pet profile page 

<br>

# Pet Profile - PetFinder API
<h2 align="center">
<img src="public/assets/img/readme-images/profile.PNG" alt="Screenshot of Application" width='50%' />
</h2>

* Each pet profile page is dynamiclally generated using their Pet ID as a unique identifier
* The call to the petfinder API gives us a response for each pet ID
* Append the data response to the page for the following information:                      
    * Photo
    * Description
    * Organization contact information (if not null) such as: Address, email, phone, URL link, and a map of their location

<br>

# Google Maps Embed API
<h2 align="center">
<img src="public/assets/img/readme-images/map.PNG" alt="Screenshot of Application" width='50%' />
</h2>

* Uses Google Maps Embed
* Dynamically displays a map to the organization address on the pet profile page
* The call to the petfinder API gives us a response for each pet ID including organization address
* For instances with P.O. boxes, "P.O." is removed and the map locates to that area

<br>

# Built With

######
| Technology | Description |
| --------------- | --------- |
| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | Structure of Web Page |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling of HTML |
| [Reactstrap](https://materializecss.com/) | CSS Framework for styling HTML |
| [ES6 JavaScript](https://www.javascript.com/) | Powers the dynamic behavior of web app |
| [jQuery](https://jquery.com/) | JavaScript library |
| [React](https://react.com/) | HT
 |
######

## M.E.R.N Stack

######
| Technology | Description |
| --------------- | --------- |
| [Axios](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) | Handles API requests |
| [Sequelize](http://docs.sequelizejs.com/) | Open-source ORM |
| [Express](https://expressjs.com/) | MVC Application Framework |
| [MySQL](https://www.mysql.com/) | Database |
| [JawsDB](https://www.jawsdb.com/docs/) | Heroku Cloud Database |
| [Passport Authentication](https://www.jawsdb.com/docs/) | Handles User Authentication |
| [ASW3](https://www.jawsdb.com/docs/) | Amazon Web Services Cloud for Photo Storage |

######

## APIs Used

######
| APIs | Description |
| --------------- | --------- |
| [Okta Authentication](https://developer.okta.com/docs/reference/api/authn/) | Provides operations to authenticate users and build end-to-end login experience |
| [Petfinder](https://www.petfinder.com/developers/v2/docs/#get-animal-types) | Provides access to data for Petfinder's hundreds of thousands of adoptable pets and the organizations that care for them |
| [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial) | Used to place an interactive map on site app with an HTTP request |
######


## Authors
* Alfred Chan | [GitHub Link](https://github.com/b0bland)
* Christopher Celestino | [GitHub Link](https://github.com/BAANG)
* Hallie Calhoun | [GitHub Link](https://github.com/halliecalhoun)
* Victoire Baron | [GitHub Link](https://github.com/Victoire44)

### Authors: Alton Shu, Cristina Alekseeva, Hallie Calhoun and Joey Badua
