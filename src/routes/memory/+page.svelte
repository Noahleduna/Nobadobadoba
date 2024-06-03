<script>
  let cards = [];
  let redPoints=0
  let bluePoints=0
  let turn = false
  let numberImages = 9
  
  let compareImage=[]
  let images = []

  for (let i =0;i<(numberImages);i++){
    images.push("https://picsum.photos/200/300?random="+i.toString());
    images.push("https://picsum.photos/200/300?random="+i.toString())}
  for (let index = 0; index < 2*numberImages; index++) {
    cards.push({
      id: index, 
      img: images.splice((Math.floor(Math.random() * images.length-1)),1)[0],
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if ( !card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      card.flipped=true
      flipcount++
      compareImage.push(card.img)

      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        if(compareImage[0]==compareImage[1]){
          if (turn){bluePoints++}else{redPoints++}
          cards.forEach((card) => {
            if(card.flipped){card.completed=true}
          });
          
        }else{turn=!turn}
        compareImage=[]
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
        }, 2000);
      }
      cards = cards;
    }
    
  }
</script>

<main>
  {#if (redPoints+bluePoints) == 9}
    {#if redPoints>bluePoints}
    <win style='color:red;'>Red wins!!</win>{/if}
    {#if redPoints<bluePoints}
    <win style='color:blue;'>Blue wins!!</win>
    {/if}
  {/if}
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
  
    {/each}
  </div>
<div class='box' id="red-box">
  <p>{redPoints}</p></div>

<div class='box' id="blue-box">
  <p>{bluePoints}</p></div>

<div class='box' id='turn-box' style={turn?"right: 10px;":"left:10px"}></div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
  on:click={() => {location.reload()
}}
class='box' id='resetButton'><p>↺</p></div>
</main>
<div style="width:600px; height:800px; background-
color:bisque;"></div>

<style>
  win {
    position: fixed;
    margin-top: 100px;
    text-align: center;
    font-size: 200px;
    z-index: 5;
  }

  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(6, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(10, 100px);

    }
  }

  .card {
    border: 15px solid rgb(188, 191, 189);
    border-radius: 50px 20px;
    cursor:grab;
    transition: transform 2s;
    transform-style:preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
.box {
width: 100px;
height: 100px;
position: fixed;
text-align: center;
font-size: 30px;
}

#resetButton{
  bottom:10px;
  background-color: blueviolet;
  border-radius: 20px;
  cursor: pointer;
  
}

  #red-box, #blue-box {
bottom : 0;
z-index: 2;
border-radius: 20px;
margin-bottom: 10px;

}
#red-box {
background-color: rgb(255, 96, 81);
left:10px;
}
#blue-box {
background-color: rgb(112, 112, 255);
right:10px
}
#turn-box{
bottom: 10px;
z-index: 1;
background-color: rgb(197, 27, 152);
box-shadow: 0 0 20px 20px rgb(197, 27, 152);
}
p{
  text-align: center;
  margin-top: 0px;
  font-size: 86px;
}
</style>
