<template>
    <header>
        <ul class="list-1">
            <li class="brand"><b>BoxOfficeX</b></li>
            <li>
            <select name="location" id="local">
                <option value="Asia">Asia</option>
                <option value="Asia">Australia</option>
                <option value="Asia">North America</option>
                <option value="Asia">South America</option>
                <option value="Asia">Africa</option>
                <option value="Asia">Europe</option>


            </select>
          </li>
        </ul>
        <ul class="list-2">
          
            
            <!-- <li>App</li> -->
            <li><button @click="showTickets">Tickets</button></li>
        </ul>
    </header>
</template>

<script>
export default({
    name : 'Header',
    methods:{
      showTickets(){
        this.$emit('show');
        console.log("header");
      }
    }
})

</script>

<style scoped>

select{
    background-color: rgba(0, 0, 0, 0.103);
    color: white;
    border: none;
    border-bottom: 1px solid white;
}
select:focus{
    background-color: rgb(0, 0, 0);
    outline: none;
    border: none;
}
option{
    background-color: rgba(0, 0, 0, 0.075);
}
ul{
    z-index: 10;
    /* border: 1px solid black; */
    font-size: 0.9rem;
    position: absolute;
    margin: 0;
    padding: 10px;
    font-size: 1rem;
    color: white;
  }
  li{
    display: inline-block;
    margin: 30px;
  }
  .list-1{
    float: left;
    padding-left: 40px;
    /* background-color: white; */
  }
  .list-2{
    right: 10px;
    /* background-color: blue; */
  }
  button{
    color: white;
    height: 30px;
    width: 90px;
    border-radius: 20px;
    border:1px solid white;
    background-color: rgba(0, 0, 0, 0.116);
  }
  button:hover{
    background-color: rgba(141, 136, 136, 0.651);
    cursor: pointer;
  }
  .brand{
    font-size: 1.4rem;
    color: rgb(255, 255, 255);
  }
  .fas{
    z-index: 10;
    color: white;
  }
</style>