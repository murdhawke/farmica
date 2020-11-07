<template>
    <div id="home">
        <div id="header-wrapper">
             <b-img id="header-image" src="https://images.pexels.com/photos/3458362/pexels-photo-3458362.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"> </b-img>
        </div>
        <div id="what-we-do">
            <b-container class="section2-row">
                <b-row id="section2-row">
                    <b-col>
                        <b-card class="feature-card" border-variant="success" align="center">
                            <b-img src=" ../assets/img/convenient.png"></b-img>
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
                            <b-img src=" ../assets/img/convenient.png"></b-img>
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
                           <b-img src=" ../assets/img/convenient.png"></b-img>
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
            <carousel-3d :height="700" :loop=true :autoplay="true">
                <slide v-for="(slide,imgIndex) in slides" :key="imgIndex" :index="imgIndex" >
                    <h4> Slide {{imgIndex}}</h4>
                </slide>
            </carousel-3d>
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
                { name: "slide1", imgIndex:1},
                { name: "slide2", imgIndex:2},
                { name: "slide3", imgIndex:3},
                { name: "slide4", imgIndex:4},
                { name: "slide5", imgIndex:5},
                { name: "slide6", imgIndex:6}
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
#what-we-do {
    background-color: #f5f5f5;
    margin: 0;
    padding: 100px;
    width: 100%;
    position: relative;
    height:100%;
}
.feature-icon {
    height: 100%;
    width: 100%;
}
#how-it-works {
    width: 100%;
}
</style>