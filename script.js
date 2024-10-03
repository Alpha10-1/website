body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

header {
    background-color: white;
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header .logo {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 163px;
    height: auto;
}
header h1 {
    margin-left: 144px;
    color: black;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /* Align items vertically */
}

nav ul li {
    margin-left: 30px;

}

nav ul li a {
    color: black;
    text-decoration: none;
    top: 30px;
    font-size: 1.2rem;
}

nav ul li a:hover {
    text-decoration:underline;
    color: red;
}

.burger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.burger-menu div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
main h2{
  font-size: 4rem;
}
main p{
  font-size: 1.2rem;
  line-height: 1.8;

}
main section ul li {
  font-size: 1.2rem;
  line-height: 1;
  margin-bottom: 1rem;
}


.section {
    min-width: 100vw;
    padding: 40px;
    box-sizing: border-box;
    color: white;
    position: relative;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease-in-out; /* Smooth transition */
}
#intro{
    background-image: url('https://github.com/Alpha10-1/khanya/blob/main/DSC01017.JPG?raw=true');
}
#mission {
    background-image: url('https://github.com/Alpha10-1/khanya/blob/main/DSC00021.JPG?raw=true');
}

#vision {
    background-image: url('https://github.com/Alpha10-1/khanya/blob/main/DSC00663.JPG?raw=true');
}

#values {
    background-image: url('https://github.com/Alpha10-1/khanya/blob/main/DSC00660.JPG?raw=true');
}

#about-us {
    display: flex;
    flex-direction: row; /* Display sections horizontally */
    width: 100vw;
    overflow-x: hidden;
    position: relative;
    transition: transform 0.5s ease-in-out;
}

#services {
    background-color: black;
    color: white;
    text-align: center;
}

#services h2 {
    text-align: center;
    margin-bottom: 20px;
    text-decoration: underline;
}

#about-us .nav-arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

.nav-arrows .arrow {
    font-size: 50px;
    color: white;
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
}

.left {
    padding-left: 10px;
}

.right {
    padding-right: 10px;
}

.services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}


.service-tile {
    width: 45%;
    margin: 10px;
    padding: 15px;
    box-sizing: border-box;
    color: white;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}
.service-tile ul li {
  font-size: 1.2rem;
  line-height: 1;
  list-style: none;
  text-align: left;
}
.service-tile h3{
  padding: 0;
  margin: 5px;
  text-decoration: underline;
}

.service-tile:nth-child(1) {
    background-color: #1a1a1a;
}

.service-tile:nth-child(2) {
    background-color: #333333;
}

.service-tile:nth-child(3) {
    background-color: #4d4d4d;
}

.service-tile:nth-child(4) {
    background-color: #666666;
}

.service-tile:hover {
    transform: scale(1.05);
    background-color: #DB0000;
    color: white;
}

#our-staff {
    background-color: black;
    text-align: center;
    padding: 50px 20px;
    border-top: 5px solid grey;
}

#our-staff h2 {
    color: white;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    text-decoration: underline;
}

.staff-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.staff-member {
    width: 250px;
    margin: 10px;
    padding: 20px;
    color: white;
    line-height: 0.75;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}
.staff-member:nth-child(1){
    background-color: #999999;
    color:#black;
}
.staff-member:nth-child(2){
    background-color: #B2B2B2;
    color:#4d4d4d;
}
.staff-member:nth-child(3){
    background-color: #CCCCCC;
    color: #333333;
}
.staff-member:nth-child(4){
    background-color: #E5E5E5;
    color: #1a1a1a;
}
.staff-member:nth-child(5){
    background-color: #EFEFEF;
    color: black;
}
.staff-member img {
  width: 150px; /* Set a fixed width */
  height: 150px; /* Set a fixed height */
  object-fit: cover; /* Ensures the image maintains its aspect ratio while filling the container */
  border-radius: 50%;
  margin-bottom: 15px;
}

.staff-member:hover {
    transform: scale(1.05);
    background-color: #DB0000;
    color: white;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-media a {
    margin: 0 10px;
    font-size: 24px;
    color: #4CAF50;
    transition: color 0.3s ease;
}

.social-media a:hover {
    color: #45a049;
}

#contact {
    background-color: #111;
    color: white;
    padding: 40px;
    border-top: 5px solid grey;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
}

#contact h2 {
    margin-bottom: 20px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-media a {
    margin: 0 10px;
    font-size: 24px;
    color: #4CAF50;
    transition: color 0.3s ease;
}

.social-media a:hover {
    color: #45a049;
}

/* .contact-form {
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
}

.contact-form form {
    display: flex;
    flex-direction: column;
}
.contact-form label {
    margin: 10px 0 5px;
}
.contact-form input, .contact-form textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #333;
    background-color: #222;
    color: white;
    border-radius: 5px;
}
.contact-form input::placeholder, .contact-form textarea::placeholder {
    color: #888;
}
.contact-form button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.contact-form button:hover {
    background-color: #45a049;
} */
/* Media query for smartphones and tablets */
@media (max-width: 768px) {
    .contact-info {
        flex-direction: column;
    }

    .social-media a {
        font-size: 20px;
    }
}
/* Media query for smartphones and tablets */
@media (max-width: 768px) {
    nav ul {
        display: none;
        flex-direction: column;
        background-color: #4CAF50;
        position: absolute;
        top: 60px;
        right: 20px;
        width: 150px;
        border-radius: 5px;
    }

    nav ul.show {
        display: flex;
    }

    .burger-menu {
        display: flex;
    }

    header h1 {
        flex: 1;
        text-align: left;
    }

    nav {
        flex: 1;
        justify-content: flex-end;
    }

    .service-tile {
        width: 90%;
    }

    .staff-member {
        width: 90%;
    }
}
