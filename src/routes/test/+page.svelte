<script>
    import { onMount } from 'svelte';
    
    // Function to generate a random number between min and max
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    onMount(() => {
      // Select each slot
      const slots = document.querySelectorAll('.slot');
  
      // Apply animation to each slot
      slots.forEach(slot => {
        const start = getRandomInt(0, 9) * 36;
        const end = getRandomInt(0, 9) * 36;
  
        slot.animate(
          [
            { transform: `rotateX(${start}deg)` },
            { transform: `rotateX(${-1 * end - 720}deg)` },
            { transform: `rotateX(${-1 * end - 1080}deg)` },
            { transform: `rotateX(${-1 * end - 1404}deg)` },
            { transform: `rotateX(${-1 * end - 1440}deg)` }
          ],
          {
            duration: 5000 + Math.random() * 3000,
            iterations: 1,
            fill: 'both',
            easing: 'linear'
          }
        );
      });
    });
  </script>
  
  <style>

  
    .slots {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90vw;
      height: 40vw;
      transform: translate3d(-50%, -50%, 0);
      perspective:800vw;
      overflow: hidden;
      background-color: #050505;
      border-radius: 20%;
    }
  
    .slots:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.8) 12%,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0.8) 90%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  
    .slot {
      position: absolute;
      top: 0vw;
      width: 30%;
      height: 20vw;
      margin: 0;
      padding: 0;
      list-style-type: none;
      background-color: rgba(152, 12, 12, 0.1);
      transform-style: preserve-3d;
      transform-origin: 50% 100%;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-fill-mode: both;
    }
  
    .slot:nth-child(1) {
      left: 3%;
    }
  
    .slot:nth-child(2) {
      left: 35%;
    }
  
    .slot:nth-child(3) {
      left: 67%;
    }
  
    .number {
      position: absolute;
      top: 10vw;
      right: 0;
      left: 0;
      display: flex;
      height: 20vw;
      justify-content: center;
      align-items: center;
      font-size: 8vw;
      box-shadow: inset 0 0 2vw rgba(0, 0, 0, 0.8), inset 0 0 0.5vw rgba(0, 0, 0, 0.5);
      background-color: rgba(204, 193, 163, 0.95);
      transform-origin: 50% 50%;
    }
  
    .number:nth-child(1) {
      transform: rotateX(0deg) translateZ(30vw);
    }
  
    .number:nth-child(2) {
      transform: rotateX(36deg) translateZ(30vw);
    }
  
    .number:nth-child(3) {
      transform: rotateX(72deg) translateZ(30vw);
    }
  
    .number:nth-child(4) {
      transform: rotateX(108deg) translateZ(30vw);
    }
  
    .number:nth-child(5) {
      transform: rotateX(144deg) translateZ(30vw);
    }
  
    .number:nth-child(6) {
      transform: rotateX(180deg) translateZ(30vw);
    }
  
    .number:nth-child(7) {
      transform: rotateX(216deg) translateZ(30vw);
    }
  
    .number:nth-child(8) {
      transform: rotateX(252deg) translateZ(30vw);
    }
  
    .number:nth-child(9) {
      transform: rotateX(288deg) translateZ(30vw);
    }
  
    .number:nth-child(10) {
      transform: rotateX(324deg) translateZ(30vw);
    }
  
    body {
      background-color: #260726;
    }
.button{
    background-color: #801080;
    border-radius: 50%;
    width:10vw;
    height:5vh;
    text-align: center;
    font-size: large;
    font-family:fantasy;
    display:inline-block;
    margin:10px 20%;
}
.button:hover{
    background-color:#4f094f;
}
h1{
    color: aliceblue;
    padding-top: 5px;
}
  </style>
  <body>
 <div class='button'
 on:click={()=>{
    // Select each slot
    const slots = document.querySelectorAll('.slot');

    // Apply animation to each slot
    slots.forEach(slot => {
      const start = getRandomInt(0, 9) * 36;
      const end = getRandomInt(0, 9) * 36;

      slot.animate(
        [
          { transform: `rotateX(${start}deg)` },
          { transform: `rotateX(${-1 * end - 720}deg)` },
          { transform: `rotateX(${-1 * end - 1080}deg)` },
          { transform: `rotateX(${-1 * end - 1404}deg)` },
          { transform: `rotateX(${-1 * end - 1440}deg)` }
        ],
        {
          duration: 5000 + Math.random() * 3000,
          iterations: 1,
          fill: 'both',
          easing: 'linear'
        }
      );
    });
  }}
  on:keypress><h1>Spin</h1></div>
  <div style='margin-right:0px;margin-top:0px;' class='button'
  on:click={()=>{window.location.href='/casino'}}
  on:keypress><h1>Return to hub</h1></div>
  <div class="machine">
    <div class="slots">
      <ul class="slot">
        <li class="number">❤️</li>
        <li class="number">💀</li>
        <li class="number">😭</li>
        <li class="number">🔥</li>
        <li class="number">✅</li>
        <li class="number">✨</li>
        <li class="number">😊</li>
        <li class="number">😂</li>
        <li class="number">🤓</li>
        <li class="number">🗿</li>
      </ul>
      <ul class="slot">
        <li class="number">❤️</li>
        <li class="number">💀</li>
        <li class="number">😭</li>
        <li class="number">🔥</li>
        <li class="number">✅</li>
        <li class="number">✨</li>
        <li class="number">😊</li>
        <li class="number">😂</li>
        <li class="number">🤓</li>
        <li class="number">🗿</li>
      </ul>
      <ul class="slot">
        <li class="number">❤️</li>
        <li class="number">💀</li>
        <li class="number">😭</li>
        <li class="number">🔥</li>
        <li class="number">✅</li>
        <li class="number">✨</li>
        <li class="number">😊</li>
        <li class="number">😂</li>
        <li class="number">🤓</li>
        <li class="number">🗿</li>
      </ul>
    </div>
  </div>
  
</body>