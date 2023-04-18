<template>
    <div class="history" :tickets="tickets">
        <div class="box">
            <button @click="closeHistory" class="x">X</button>
            <div class="container">
                
            <h3 class="no-ticket">No Tickets to display</h3>
            <ul>
                <!-- <li><div class="reciept">
                    <h3>Movie</h3>
                    <span style="margin-right: 60px;">date</span>
                    <span style="margin-right: 40px;">time</span>
                    <span>count</span>
                </div></li> -->
                <li><div class="reciept" v-for="ticket in tickets" >
                    <h3>{{ ticket.Name }}</h3>
                    <span>Date: {{ ticket.date }}/04/23</span>
                    <span>Show-time: {{ ticket.time }}</span>
                    <span>Seats: {{ ticket.count.toString() }}</span><br>
                    <h3>Amount: ₹ {{ ticket.count.length*300 }}</h3>
                    
                </div></li>
            </ul>
            </div>
            
            <button class="clear" @click="clear">clear</button>
        </div>
    </div>
</template>

<script>
export default({
    name: 'History',
    props:{
        tickets:Array,
    },
    methods:{
        closeHistory(){
            document.querySelector('.history').style.display ='none';
        },
        clear(){
            this.$emit('clear');
        }
    }
})
</script>

<style scoped>
.history{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.616);
    /* border: 1px solid rgb(68, 185, 58); */
    height: 100vh;
    width: 100vw;
    z-index: 20;
    /* text-align: center; */
    color: rgb(190, 197, 189);
    font-size: 1.2rem;
    font-weight: 100;
}
.no-ticket{
    margin-left: 50px;
    margin-top: 100px;
    display: none;
}
.container{
    /* border: 1px solid green; */
    height: 400px;
    overflow-y: scroll;
}
.box{
    margin-top: 50px;
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    min-height: 500px;
    background-color: rgba(0, 0, 0, 0.781);
    /* border: 1px solid rgb(68, 185, 58); */
    animation: fade_in_show 0.5s ease-in-out;

}
h3{
    display: inline-block;
    width: 300px;
    font-size: 1.2rem;
}
span{
    margin-right: 20px;
}
ul{
    list-style-type: none;
}
.reciept{
    padding: 10px;
    margin: 10px 20px;
    /* margin: 5px; */
    border: 1px solid grey;
}
button{
    background-color: rgba(0, 0, 0, 0.055);
    color: white;
    font-size: 1rem;
    font-weight: 100;
    position: absolute;
    
    cursor: pointer;
}
.x{
    right: 10px;
    top: 10px;
}
.clear{
    left: 45%;
    bottom: 15px;
    border: 1px solid grey;
    border-radius: 20px;
    width: 100px;
}
</style>