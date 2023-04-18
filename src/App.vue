
<template>
    <div class="wall">
        <transition name="anim">
            <img :src="movies[current].background" :key="movies[current].id" alt="">
        </transition>
        <div class="fade">
            <Header @show="showTickets"/>
            <Details  :movies="movies" :current="current"/>
            <Carousel @update="updateCurrent" :movies="movies" />
            <div class="grid">
            <Seats />
            <Ticket @updatest="updateSeat"  @pay="pay" :seatList="seatList" :movies="movies" :current="current"
            :date="date" :time="time"/>    
            <History  :tickets="tickets" @clear="clearTickets"/>
            </div>
            
        </div>
            <div class="pay">
            <div class="box">
                <h1>Payment Successful</h1>
                <span class="material-symbols-outlined">task_alt</span>
                <button @click="close">x</button>
            </div>
            </div>
        
    </div>
  
  
</template>

<script>

import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Details from './components/Details.vue';
import Seats from './components/Seats.vue';
import Ticket from './components/Ticket.vue';
import History from './components/History.vue'

export default({
    name: 'App',
    components: {
        Header,
        Carousel,
        Details,
        Seats,
        Ticket,
        History,
    },
    data(){
        return {
            current: 0,
            seatList: [],
            date: 0,
            time:"0",
            tickets:[],
            movies: [
            {
                    id:1,
                    name: "A SIMPLE FAVOUR",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/611/180/32/blake-lively-a-simple-favor-2018-movie-poster-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/528/758/558/anna-kendrick-in-a-simple-favour-wallpaper-ce4f35fb802c9ff2bef05d8c60ab105c.jpg",
                    year:"Stephanie is a widowed, single mother who works as a vlogger in Connecticut. Her best friend, Emily, seems to have it all -- a successful career, a loving family and a glamorous lifestyle. When Emily mysteriously disappears one day, Stephanie launches her own investigation by digging into her friend's past -- and finding a few surprises along the way.",
                    rating: "6.8",
                },
                {
                    id:2,
                    name: "POLAR",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/266/590/386/mads-mikkelsen-movies-movie-poster-polar-movie-men-hd-wallpaper-preview.jpg",
                    background: "https://w0.peakpx.com/wallpaper/512/702/HD-wallpaper-polar-duncan-vizla-poster-2019-movie-mads-mikkelsen-polar-movie.jpg",
                    year:"The world's top assassin, Duncan Vizla, aka The Black Kaiser, is settling into retirement when his former employer marks him as a liability to the firm. Against his will, he finds himself back in the game going head-to-head with an army of younger, faster, ruthless killers who will stop at nothing to have him silenced.",
                    rating: "6.3",
                },
                {
                    id:3,
                    name: "THE JOKER",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/267/666/423/joker-2019-movie-joker-joaquin-phoenix-movies-dancing-hd-wallpaper-7930983d318a2d8b8607387f80e1463d.jpg",
                    year:"Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
                    rating: "8.4",
                },
                {
                    id:4,
                    name: "THE BLACK WIDOW",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/467/882/571/black-widow-movie-poster-marvel-cinematic-universe-portrait-display-hd-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/233/534/355/black-widow-movies-florence-pugh-uniform-scarlett-johansson-hd-wallpaper-033bd378f0a16b48498a0d12970ff691.jpg",
                    rating: "6.7",
                    year:"Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises.",
                },
               
                {
                    id:5,
                    name: "BATMAN VS SUPERMAN",
                    sub:"DAWN OF JUSTICE",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/744/527/629/batman-v-superman-dawn-of-justice-batman-superman-movie-poster-movies-hd-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/780/198/350/batman-vs-superman-4k-download-hd-high-resolution-wallpaper-c5c6a4e61ccea8e73be434a889fbab79.jpg",
                    year:"Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all.",
                    rating: "6.4",
                },
                {
                    id:6,
                    name: "INCEPTION",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/267/487/613/inception-movies-wallpaper-d980c82d71aa5dfb86e7f8fff071265d.jpg",
                    year:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
                    rating: "8.8",
                },
                {
                    id:7,
                    name: "STAR WARS",
                    sub:"THE LAST JEDI",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/144/450/423/star-wars-movies-star-wars-the-last-jedi-poster-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/545/584/901/star-wars-the-last-jedi-movies-star-wars-rey-wallpaper-193008adf13a5d2b6687087f4021960d.jpg",
                    year:"Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.",
                    rating: "6.9",
                },
                {
                    id:8,
                    name: "THE WATCHMEN",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/667/622/414/watchmen-rorschach-silk-spectre-dr-manhattan-malin-akerman-the-comedian-movie-posters-nite-owl-ozyma-entertainment-movies-hd-art-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/621/194/343/watchmen-watchmen-movie-dr-manhattan-rorschach-wallpaper-5f1180cc6bff110f42f6fe28fa837387.jpg",
                    year:"Rorschach, a vigilante, sets out to investigate the mysterious circumstances under which one of his colleagues died. In the process of doing so, he discovers some disturbing secrets.",
                    rating: "7.6",
                },
                {
                    id:9,
                    name: "AQUAMAN",
                    sub:"",
                    thumbnail: "https://c4.wallpaperflare.com/wallpaper/929/709/303/aquaman-dc-comics-justice-league-warner-brothers-wallpaper-preview.jpg",
                    background: "https://r4.wallpaperflare.com/wallpaper/685/547/683/men-movies-aquaman-jason-momoa-tattoo-hd-wallpaper-63ea13ea98e5dc7d68429e13d1f8a231.jpg",
                    year:"Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.",
                    rating: "5.6",
                },
                
        ]
        }
    },
    methods:{
        updateCurrent(id){
            this.current=id-1;
            console.log(id+ "id")
            console.log(this.current)
        },
        updateSeat(){
            this.seatList=[];
            console.log('here')
            const Seats = document.querySelectorAll('input[type=checkbox]');
            const sumBtn = document.querySelector('#tick-sum');
            const Summary = document.querySelector('.summary');

            // const date = ;
            document.querySelectorAll('input[name="dates"]:checked').length ==0 ? alert("select date") :(
                this.date=document.querySelectorAll('input[name="dates"]:checked')[0].value,
                document.querySelectorAll('input[name="time"]:checked').length =="0" ? alert("select time") :(
                    this.time= document.querySelectorAll('input[name="time"]:checked')[0].value,
                    Seats.forEach((seat)=> {seat.checked==true? this.seatList.push(seat.id) : null}),
                    this.seatList.length==0? alert("select seat"): (sumBtn.style.display ='none', Summary.style.display= 'block' )) 
            ) ;

            // const time =;
            
            
            
            
            ;
            
            
        },
        pay(){
            const Seats = document.querySelectorAll('input[type=checkbox]')
            let id= (JSON.parse(localStorage.getItem('tickets'))).length== null? 0 :(JSON.parse(localStorage.getItem('tickets'))).length;
            let ticket = {uid: id+1,Name:this.movies[this.current].name, date:this.date, time: this.time, count: this.seatList};
            confirm("Confirm Payment?")?(Seats.forEach((seat)=> {seat.checked==true? seat.checked= false : null}),
            document.querySelector(".pay").style.display ='inline',
            this.tickets.push(ticket),
            localStorage.setItem('tickets', JSON.stringify(this.tickets))
            ): null;
            
        },
        close(){
            document.querySelector(".pay").style.display ='none';
            document.querySelectorAll('input[name="dates"]:checked')[0].checked = false;
            document.querySelectorAll('input[name="time"]:checked')[0].checked = false;
            document.querySelector('.summary').style.display ='none';
            document.querySelector('#tick-sum').style.display ='inline'
        },
        showTickets(){
            console.log("tickets"+ this.tickets.length);
            this.tickets= JSON.parse(localStorage.getItem('tickets'));

            this.tickets.length==0?( document.querySelector(".no-ticket").style.display= 'inline',
            document.querySelector(".clear").style.display= 'none')
            :(document.querySelector(".no-ticket").style.display= 'none',
            document.querySelector(".clear").style.display= 'inline');

            document.querySelector('.history').style.display ='inline';
            
        },
        clearTickets(){
            confirm("Clear History?")?(this.tickets=[],
            localStorage.setItem('tickets', '[]'),
            document.querySelector(".no-ticket").style.display= 'inline',
            document.querySelector(".clear").style.display= 'none'
            ): null;
            
        }
    }
})
</script>

<style scoped>
.wall{
    height: 100vh;
    width: 100v;
    overflow-x: hidden;
    background-size: cover ;
    background-color: black;
}

.fade{
    /* height: 100vh; */
    padding-left: 20px;
    margin: 0px;
    border: 1px solid black;
    background: linear-gradient(rgba(0, 0, 0, 0.699),rgba(0, 0, 0, 0.397),rgba(0, 0, 0, 0.61),rgba(0, 0, 0, 0.801), rgb(0, 0, 0));
}

img{
    position: fixed;
    
    width: 100%;
}

.anim-enter-active,
.anim-leave-active {
  transition: all 1.3s ease-in-out;
}

.anim-enter-from {
  opacity: 0;
  transition-delay: 0.5s;
  transform: rotate(10deg) scale(1.5) skew(60deg);
}

.anim-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
  transform: rotate(-10deg) scale(1.25) skew(-60deg);

}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.grid{
    grid-template-columns: auto auto auto;
}

.pay{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.151);
    height: 100vh;
    width: 100vw;
    z-index: 20;
    text-align: center;
    color: rgb(87, 153, 74);
    font-size: 1.5rem;
    font-weight: 100;
}

.box{
    margin-top: 10%;
    padding-top: 80px;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.781);
    border: 1px solid rgb(68, 185, 58);
    animation: fade_in_show 0.5s ease-in-out;

}
.material-symbols-outlined{
    font-size: 3rem;
    font-weight: 100;
    
}
button{
    background-color: rgba(0, 0, 0, 0.055);
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
    position: absolute;
    right: 5px;
    top: 0;
    cursor: pointer;
}
@keyframes fade_in_show {
     0% {
          opacity: 0;
          transform: scale(0)
     }

     100% {
          opacity: 1;
          transform: scale(1)
     }
}
</style>
