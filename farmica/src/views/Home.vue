<template>
    <div id="home">
        <div id="header-wrapper">
             <b-img id="header-image" src="https://images.pexels.com/photos/3458362/pexels-photo-3458362.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"> </b-img>
             <header id="header-text">
                 <h1 class="main-heading">Innovative Farming</h1>
                 <br>
                 <h3 class="subheading">Hassle free farming at the palm of your hands!</h3>
             </header>
        </div>
        <div id="what-we-do">
            <b-container class="section2-row" fluid>
                <b-row id="section2-row">
                    <b-col>
                        <b-card class="feature-card" border-variant="success" align="center">
                            <b-img class="feature-icon" src="https://www.flaticon.com/svg/static/icons/svg/1557/1557703.svg" ></b-img>
                            <b-card-text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                                a type specimen book.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="feature-card" border-variant="success" align="center">
                            <b-img class="feature-icon" src=" https://www.flaticon.com/svg/static/icons/svg/3062/3062250.svg"></b-img>
                            <b-card-text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                                a type specimen book.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="feature-card " border-variant="success" align="center">
                           <b-img  class="feature-icon" src=" https://www.flaticon.com/premium-icon/icons/svg/2648/2648231.svg"></b-img>
                            <b-card-text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                                a type specimen book.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>

            </b-container>
        </div>
        <div id="how-it-works">
            <carousel-3d :width="500" :height="700" :loop=true :autoplay="true" :controls-visible="true" >
                <slide v-for="(slide,imgIndex) in slides" :key="imgIndex" :index="imgIndex" >
                    <h4> {{slide.name}} </h4>
                    <b-img id="slider-image" :src="slide.imgUrl"></b-img> <!--Bind the image url to the src -->
                </slide>
            </carousel-3d>
        </div>
        <div id="footer" class="overlay">
            <b-container>
                <b-row class="footer-row">
                    <b-col id="footer1">
                        <h5>FARMICA</h5>
                        <hr>
                        <p>Nairobi, Kenya</p>
                        <p>farmica@mail.com</p>
                        <p>+245712345678</p>
                    </b-col>
                    <b-col id="footer2">Copyright &copy; 2020 Farmica</b-col>
                    <b-col id="footer3">
                        <ul id="footer-permalinks">
                            <li>Home</li>
                            <li>Careers</li>
                            <li>Service Agreement</li>
                            <li>Locations</li>
                            <li>About Us</li>
                            <li>Help</li>
                        </ul>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import {Carousel3d,Slide} from 'vue-carousel-3d' //import carousel3d plugin locally
export default {
    components: {Carousel3d, Slide},
    data (){
        return {
            slides: [
                { name: "slide1", imgIndex:1, imgUrl:"https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-1786433.jpg&fm=jpg"},
                { name: "slide2", imgIndex:2, imgUrl:"https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?cs=srgb&dl=pexels-element-digital-1194760.jpg&fm=jpg"},
                { name: "slide3", imgIndex:3, imgUrl:"https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-1786433.jpg&fm=jpg"},
                { name: "slide4", imgIndex:4, imgUrl:"https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?cs=srgb&dl=pexels-element-digital-1194760.jpg&fm=jpg"},
                { name: "slide5", imgIndex:5, imgUrl:"https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-1786433.jpg&fm=jpg"},
                { name: "slide6", imgIndex:6, imgUrl:"https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?cs=srgb&dl=pexels-element-digital-1194760.jpg&fm=jpg"}
            ]
        }
    }
    
}
</script>

<style>
#header-image {
    bottom: 0%;
    padding: 0%;
    width: 100%;
    overflow:hidden;
    position: relative;
    top: -5rem;
    margin-bottom: -5rem;
}
#header-text {
    top: 0;
    position: absolute;
    margin-top: 10rem;
    margin-left: 5rem;
    z-index: 1;
    padding: 0;
}
.main-heading {
    font-size: 60px;
}
.subheading {
    font-size: 30px;
    color: white;
    font-style: italic;
    margin-right: 40%;
    padding-left: 60px;
}
#slider-image {
    height: 700px;
}
#what-we-do {
    background-color: #f5f5f5;
    margin: 0;
    padding: 100px;
    width: 100%;
    position: relative;
    height:100%;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-20px);} 
   60% {transform: translateY(-15px);}
}
.feature-icon {
    height: 60px;
    width: 60px;
    margin-bottom: 50px;
    -webkit-animation: bounce 5s ease
}
#how-it-works {
    width: 100%;
    padding-top: 100px;
}
#footer {
    background-color: #18A64D;
    z-index: 1;
    height: 500px;  
    margin-top: 100px;
    color: white;
}
.footer-row {
    padding-top: 100px;
}
#footer2 {
  margin-top: 30%;
  font-style: italic;
}
#footer-permalinks {
    list-style: none;
    line-height: 40px;

}   
</style>