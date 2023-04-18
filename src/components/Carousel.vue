<template>
    <div class="carousel" :movies="movies">
        <button class="control left">&lt</button>
        <button class="control right">&gt</button> 
        <ul class="container" >
            <li @click="changecurrent(movie.id)" v-for="movie in movies" :key="movie.id"><img class="thumbnail"  :src="movie.thumbnail" alt="thumbnail"></li>
        </ul>
    </div>
</template>

<script>

export default({
    name: 'Carousel',
    props:{
        current : Number,
        movies: Array,
    },
    methods:{
        changecurrent(id){
            this.$emit('update', id)
            // console.log(id+ "carousel")
        },
    }
})
</script>

<style scoped>
.carousel{
    height: 100vh;

}
ul{
    bottom: 5px;
    left: 45%;
    z-index: 10; 
    /* border: 1px solid black; */
    position: absolute; 
    /* height: 250px; */
    width: 60%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding-right: 140px;
    padding-top: 20px;
    padding-bottom: 25px;
} 

.container::-webkit-scrollbar {
  width: 4px;
  height: 2px;
}

.container::-webkit-scrollbar-thumb {
  background-color: #99999959;
  border-radius: 4px;
}

.container::-webkit-scrollbar-track {
  background-color: #eeeeee15;
}
li{
    display: inline-block;
    /* position: relative; */
    height: 35vh;
    width: 25vh;
    margin: 0px;
    margin-right: 20px ;
    overflow: hidden;
}
img:hover{
    transform: scale(1.05);
}
img{
    height: 35vh;
    width: 25vh;
}
.control{
    font-family: 'Source Code Pro', monospace;    font-size: 1rem;
    font-weight: 100;
    position: absolute;
    bottom:15%;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    color: white;
    border:  white;
    
    background-color: rgba(0, 0, 0, 0.37);
}
.control:hover{
    background-color: rgba(0, 0, 0, 0.596);
}
.left{
    left: 38%;
}
.right{
    left: 42%;
}
</style>