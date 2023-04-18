<template>
    <div class="details" :movies="movies" :current="current">
        <span class="number">0{{ movies[current].id }}</span>
        <h1>{{movies[current].name}}</h1>
        <span class="sub">{{ movies[current].sub }}</span><br>
        
        <p class="para">{{ movies[current].year }}</p>
        <p>IMDB: &nbsp &nbsp&nbsp{{ movies[current].rating }} /10 &nbsp &nbsp&nbsp
        <span class="material-symbols-outlined">star_rate</span>
        <span class="material-symbols-outlined">star_rate</span>
        <span class="material-symbols-outlined">star_rate</span>
        <span class="material-symbols-outlined">star_rate_half</span></p>
        <a href="#book"><button class="watch">Book Tickets</button></a> 
        <button class="dwn">Trailer</button>

    </div>
</template>

<script>

export default({
    name: 'Details',
    props:{
        movies:Array,
        current: Number,
    }
})
</script>
<style scoped>

.details{
    float: left;
    margin-top: 8%;
    margin-left: 5%;
    color: white;
    width: 30%;
    z-index: 12;
}
.para{
    height: 150px;
    overflow-y: scroll;
    margin-bottom: 15px;
}
h1{
    font-size: 4rem;
    color: white;
    font-weight:300;
    line-height: 1;
}
.number{
    font-size: 8rem;
    line-height: 1;
    display: inline-block;
    font-family: 'Gruppo', cursive;
}
button{
    width: 100px;
    height: 35px;
    margin: 20px;
    border-radius: 20px;
    background-color: rgba(255, 0, 0, 0.747);
    color: white;
    font-weight: 100;
    border: none;
}
button:hover {
    background-color: rgb(255, 0, 0);
    cursor: pointer;
}
.dwn{
    background-color: black;
    color: white;
}
.sub{
    font-size: 1.25rem;
    margin-left: 10px;
    padding-bottom: 10px;
    
}
.material-symbols-outlined{
    font-size: 1.5rem;
    color: gold;
}
@media(max-width: 1440px){
    .para{
        height: 80px;
    }
}
</style>