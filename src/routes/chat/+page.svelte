<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";

  import { chat_store } from "$lib/stores";

  $: chat_string = $chat_store;


  import { onMount } from 'svelte'
  let chat = []
  onMount(() => {
    if (chat_string.length>2){
    
      chat = JSON.parse(chat_string)
    }else{
      chat = [{ user: "eliza", text: eliza.getInitial() }, ];
    }
  });
    

  let eliza = new ElizaBot();

  

  async function write(message) {
    // TODO: yeet in the new message

    chat = [...chat, {user:"me",text:message}]

    // random delay for writing
    var element = document.getElementById("visible");
//Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex";


    await new Promise((r) => setTimeout(r, 2000 + Math.random() * 1000));
    element.style.display = "none";

    chat=[...chat,{user:'eliza', text:eliza.transform(message)}]
    chat_string = JSON.stringify(chat);
    chat_store.set(chat_string);
    // TODO: write the text
  }

</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    
      {#each chat as message}
      <article class={message.user}>
      <span>
        {message.text}
      </span>
    </article>
      {/each}

    <article id="visible">
      <span class='circle'></span>
      <span class='circle'></span>
      <span class='circle'></span>
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
</div>
<style>

@keyframes load{
  0%{transform: scale(1);}
  50%{transform: scale(1.4);}
  100%{transform: scale(1);}
}



#visible{
  width: 100px;
  height: 60px;
  padding:0;
  display:none;
  background-color:rgba(117, 26, 111, 0.26) ;
  
}
.circle{
  width:10px;
  height: 10px;
  border-radius: 50%;
  background-color: aliceblue;
  margin:auto;
  animation-name: load;
animation-duration: 1000ms; 
animation-timing-function: ease;
}

.eliza{
  background-color: rgba(117, 26, 111, 0.26);
  width:fit-content;
}
.me{
  text-align: right;
  background-color: rgba(34, 99, 84, 0.511);
  width:fit-content;
  margin-left:auto;
}

</style>