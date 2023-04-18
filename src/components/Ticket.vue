<template>
    <Transition name="slide-up">
        <div class="j" id="book" :seatList="seatList" :movies="movies" :current="current"
        :date="date" :time="time">
        <h1>BOOK TICKETS</h1>
        <span class="m">Movie :</span> <h2>{{ movies[current].name }}</h2><h3 style="margin-left: 20px;">{{ movies[current].sub }}</h3><br>
        <span class="m">Ticket price :</span><h3> ₹ 300</h3> per person<br>
        <div class="book-tick" id="tick-sum">
            <input type="radio" name="dates" id="date-1" value="18"><label class="date-container" for="date-1">
                <span class="date"> 18</span><br><span class="day">Mon</span> 
            </label>
            <input type="radio" name="dates" value="19" id="date-2"><label class="date-container" for="date-2">
                <span class="date"> 19</span><br><span class="day">Tue</span> 
            </label>
            <input type="radio" name="dates" value="20" id="date-3"><label class="date-container" for="date-3">
                <span class="date"> 20</span><br><span class="day">Wed</span> 
            </label>
            <input type="radio" name="dates" value="21" id="date-4"><label class="date-container" for="date-4">
                <span class="date"> 21</span><br><span class="day">Thu</span> 
            </label>
            
            <br>
            <input type="radio" name="time" value="10:30" id="time-1"><label class="time-cont" for="time-1">
                <span class="time">10:30</span>
            </label>
            <input type="radio" name="time" value="12:30" id="time-2"><label class="time-cont" for="time-2">
                <span class="time">12:30</span>
            </label>
            <input type="radio" name="time" value="16:00" id="time-3"><label class="time-cont" for="time-3">
                <span class="time">16:00</span>
            </label>
            <input type="radio" name="time" value="20:30" id="time-4"><label class="time-cont" for="time-4">
                <span class="time">20:30</span>
            </label><br>
            <button @click="updateSeat()" style="margin-top: 50px;" >Book</button>
        </div>
            <!-- <input type="radio">
            <input type="radio">
            <input type="radio"> -->
        <div class="summary">
            <h2 style="display: block; margin-bottom: 10px;">{{ movies[current].name }}</h2>
            <span class="sum"><span class="material-symbols-outlined">calendar_today</span>&nbsp; {{date}}/04/23</span>
            <span class="sum"><span class="material-symbols-outlined">schedule</span>&nbsp; {{time}}</span>
            <span class="sum">count: {{ seatList.length }}</span>
            
            <ul>
            <span class="m">Seats :</span>
            <li class="m" v-for="seat in seatList" key="seat">{{ seat }}</li>
        </ul>
        <div style="margin: 20px;">&nbsp; USE CARD: <br>  <br>
        <h2 style="border: 1px solid grey; border-radius: 5px;">&nbsp 47XX XXXX XXXX XX61 &nbsp</h2>
        </div>
        <h3 style="margin-left: 30px;"> Amount to pay: </h3><h2 style="margin-right: 50px;">₹{{ seatList.length*300 }}</h2>
        <button @click="pay">Proceed</button>
        <button @click="Edit">Edit</button>
        </div>
        
    </div>
    </Transition>
    
</template>

<script>

export default({
    name: 'Ticket',
    props:{
        seatList:Array,
        movies:Array,
        current:Number,
        time: String,
        date:Number,
    },
    methods:{
        updateSeat(){
           this.$emit('updatest')
           
        },
        pay(){
            this.$emit('pay')
        },
        Edit(){
            const sumBtn = document.querySelector('#tick-sum');
            const Summary = document.querySelector('.summary');
            sumBtn.style.display ='inline';
            Summary.style.display= 'none'; 
        }
    },
})
</script>



<style scoped>
.j{
    width: 49%;
    position: relative;
    left: 0;
    height: 100vh;
    padding-top: 3%;
    padding-left: 50px;
    color: rgb(129, 123, 123);
    font-family: 'Figtree', sans-serif;
        /* display: inline-block; */
    /* border: 1px solid green; */

}
p{
    color: white;
}
h1{
    color: white;
    font-size: 3rem;
}
h2{
    display: inline-block;
    color: white;
    font-size: 1.3rem;
    margin-left: 30px;
}
h3{
    display: inline-block;
    color: rgb(218, 213, 213);
    font-size: 0.95rem;
}
button{
    display: inline-block;
    width: 100px;
    height: 35px;
    margin: 20px;
    margin-right: 5px;
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
.sum{
    color: white;
    margin-right: 100px;
    line-height: 1;
    margin-bottom: 30px;
    margin-left: 20px;
}
li{
    color: white;
    display: inline-block;
}
.summary{
    background-color: rgba(36, 36, 36, 0.432);
    display: none;
    margin-top: 50px;
    padding: 20px;
}
.material-symbols-outlined{
    color: rgb(100, 97, 97);
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
}


.m{
    color: rgb(216, 211, 211);
    margin-right: 15px;
    margin-top: 20px;
}
.date-container{
    display: inline-block;
    margin-top: 30px;
    margin-right: 30px;
    color: rgb(216, 210, 210);
    border: 1px solid rgb(121, 117, 117);
    border-radius: 10px;
    text-align: center;
    width: 60px;
    height: 70px;
    cursor: pointer;

}
.date{
    /* border: 1px solid green; */
    font-size: 2.7rem;
    font-weight: 100;
    line-height: 1;
}
.day{
    /* border: 1px solid green; */
    margin: 0;
}

.time-cont{
    width: 60px;
    margin-top: 30px;
    margin-right: 20px;
    border: 1px solid white;
    color: white;
    text-align: center;
    border-radius: 20px;
    display: inline-block;
    cursor: pointer;

}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  color: #e4a32b;
}
</style>