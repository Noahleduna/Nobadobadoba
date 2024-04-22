<script>
  let cards = [];
  let redPoints=0
  let bluePoints=0
  let turn = false
  let numberImages = 9
  
  let compareImage=[]
  let images = ['https://assets-global.website-files.com/619776e2e737e7a8e46f94af/655f0a5da86be8959c4efb72_world-of-mouth-podcast-episode-28-petter-nilsson-from-petri-in-stockholm.jpg','https://assets-global.website-files.com/619776e2e737e7a8e46f94af/655f0a5da86be8959c4efb72_world-of-mouth-podcast-episode-28-petter-nilsson-from-petri-in-stockholm.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmICa6NJ1qNQOVcmUfOnO-ySUXbqqwfsMBYw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmICa6NJ1qNQOVcmUfOnO-ySUXbqqwfsMBYw&s','data:image/jpeg;base64,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','data:image/jpeg;base64,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']

  for (let i =0;i<(numberImages-3);i++){
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
