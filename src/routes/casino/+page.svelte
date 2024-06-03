<script>
let games=[]
let img = ['/blackjack.png','/roulette.png','/slots.png']
let names = ['Blackjack','Roulette','Slots']
let pages = ['/casino/blackjack','/casino/roulette','/casino/slots']

for (let i = 0; i < img.length; i++) {
    games.push({ 
        img: img[i],
        name:names[i],
        page:pages[i],
    });
}

</script>


<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon">


</svelte:head>




<main>
<div class='box'></div>
<div class='containr'>
    <h1 class="font-effect-neon">Casino</h1>
</div>
<div class='image'></div>
<div class='box' style='height:17px;'><h2>Our games</h2></div>
<div class="row">
    {#each games as game, i}
    <div class = 'game'
        style = 'background-image: url({game.img});'
        on:click={() => {  
            window.location.href = game.page;
        }}
        on:keypress={() => { 
            window.location.href = game.page;
        }}
    ><h3>{game.name}</h3></div>
    {/each}
</div>
</main>

<style>

.game{
    height: 30vh;
    width: 33.3vw;
    background-size: cover;
    transition: transform 0.5s;
}
.game:hover{
    transform: scale(1.1);
}

.row {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
}
.image{
    top: 0;
    width: 100vw;
    height: 40vh;
    background-image: url('/backround.png');
    background-size: cover;
}

main{
    background-color: rgb(15, 15, 15);
    height:100vh;
    width: 100vw;
    overflow:hidden;
    z-index:1;
}

.box{
    height:10px;
    margin-bottom: 10px;
}

.containr{
    background-color: rgb(30, 29, 29);
    height: 80px;
}

.font-effect-neon{
    position:absolute;
    margin:10px;
    vertical-align:middle;
}

h1{
    color:rgb(203, 43, 147);
    font-size:40px;
    font-family:"Sofia", sans-serif;
    font-style: oblique;
}
h2{
    color:rgb(255, 255, 255);
    font-size: 20px;
    text-align: center;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
h3{
    color:white;
    font-size: 16px;
    margin-left:10px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}


</style>