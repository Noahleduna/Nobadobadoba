<script>
    let adder=''
    let todo=['hej','på','dig']
    let done=[]
</script>

<div class="container">
    <h1>TODO LIST</h1>
    <input bind:value={adder}>
    <button on:click={()=>{todo.push(adder);todo=todo}}>Add to the list</button>
    <div class='layout'>
        <div>
            <h1>NEW</h1>
            <ol style="height:300px;overflow-y:scroll">
                {#each todo as obj,i}
                    <li>{obj}
                    <button on:click={()=>{todo.splice(i,1);done.push(obj);todo=todo;done=done}}>done</button>
                    </li>
                {/each}
            </ol>
        </div>
        <div style='position:relative'>
            <h1>COMPLETED</h1>
            <ul style="height:300px;overflow-y:scroll">
                {#each done as obj}
                    <li style='margin:4px'>{obj}</li>
                {/each}
            </ul>
            <button style='position:absolute;right:5%' on:click={()=>{done=[];done=done}}>Clear</button>
        </div>
    </div>
</div>

<style>
.container{
    width: 80vw;
    height: 70vw;
    background-color: rgb(43, 174, 226);
    border-style: double;
    border-radius: 30px;
    border-color:blueviolet;
    padding-top: 10px;
    padding-left: 20px
}
.layout{
    display: grid;
    width: 100%;
    grid-template-columns: 47% 47% auto;
    
}
ol{
    list-style-type:decimal;
}
ul{
    list-style-type:circle;
}
button{
    padding:3px 7px;margin:1px 10px;
    color:blueviolet;
    background-color:rgb(255, 127, 210);
    border-color:blueviolet;
    border-radius:5px;
}

input{
    padding:3px 3px;
    border-style:double;
    border-radius: 5px;
    border-color: blueviolet;
}
::-webkit-scrollbar {
    width: 17px;
}

::-webkit-scrollbar-track {
    background-color:lightskyblue;
    border-radius: 5px;
}


::-webkit-scrollbar-thumb {
    background-color:rgb(255, 127, 210);
    border-radius: 5px;
}


::-webkit-scrollbar-thumb:hover {
    background-color:rgb(232, 115, 191);
}

</style>