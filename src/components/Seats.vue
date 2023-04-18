<template>
    <div class="seat">
        <div class="grid-container">
            <span class="c a">F</span>
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span>
            <span class="c a">E</span> 
            <span class="material-symbols-outlined">weekend</span>
            <input type="checkbox" id="E2" ><label for="E2"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="E3" ><label for="E3"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="E4" ><label for="E4"><span class="material-symbols-outlined">weekend</span></label> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="c a">D</span>
            <span class="material-symbols-outlined">weekend</span> 
            <input type="checkbox" id="D2"><label for="D2"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="D3"><label for="D3"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="D4"><label for="D4"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="D5"><label for="D5"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="D6"><label for="D6"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="D7"><label for="D7"><span class="material-symbols-outlined">weekend</span></label> 
            <span class="c a">C</span>
            <span class="material-symbols-outlined">weekend</span> 
            <input type="checkbox" id="C2"><label for="C2"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="C3"><label for="C3"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="C4"><label for="C4"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="C5"><label for="C5"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="C6"><label for="C6"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="C7"><label for="C7"><span class="material-symbols-outlined">weekend</span></label> 
            <span class="c a">B</span>
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <input type="checkbox" id="B4"><label for="B4"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="B5"><label for="B5"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="B6"><label for="B6"><span class="material-symbols-outlined">weekend</span></label> 
            <input type="checkbox" id="B7"><label for="B7"><span class="material-symbols-outlined">weekend</span></label> 
            <span class="c a">A</span>
            <span></span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span class="material-symbols-outlined">weekend</span> 
            <span></span> 
            <span class="c b"></span><span class="c b">1</span><span class="c b">2</span><span class="c b">3</span><span class="c b">4</span><span class="c b">5</span><span class="c b">6</span><span class="c b">7</span>
        </div>
    </div>

</template>

<script>

export default({
    name: 'Seats',
    
})
</script>

<style scoped>
.c{
    color: rgb(143, 138, 138);
    font-size: 0.7rem;
}
.a{
    margin-right: 100px;
}
.b{
    margin-top: 40px;
}
.seat{
    margin: 0;
    height: 100vh;
    position: absolute;
    padding-top: 100px;
    right: 0;
    /* border: 1px solid green; */
    width: 49%;
    display: inline-block;
    align-items: center;
    text-align: center;
}
.grid-container{
    margin-left: auto;
    margin-right: auto;
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    column-gap: 15px;
    row-gap: 20px;
    font-size: 0.25rem;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:checked + label {
  /* background-color: #007bff; */
  color: #e4a32b;
}
label {
  display: inline-block;
  width: 20px;
  height: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  color: rgb(151, 148, 148);
}
.material-symbols-outlined{
   font-size: 2rem;
}
</style>