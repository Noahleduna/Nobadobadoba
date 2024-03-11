
<script>
    let firstname = ''
    let lastname = ''
    let pressed = false
    function handleSubmit() {
    pressed=true
    console.log('Form submitted!');
    }
    
</script>

<h1>Registration Form</h1>
<form on:submit|preventDefault={handleSubmit}>
    <div>
    <label for="firstName">First Name:</label>
    <input id="firstName" type="text" bind:value={firstname}/>
    <label for="lastName">Last Name:</label>
    <input id="lastName" type="text" bind:value={lastname}/>
    <label for="email">Email:</label>
    <input id="email" type="email"/>
    <label for="password">Password:</label>
    <input id="password" type="password"/>
    <label for = 'birthdate'>Birth date</label>
    <input id='birthdate' type="date">
    </div>
    <button type="submit">Login</button>


</form>
{#if pressed}  
    <h3>Thank you {firstname +  ' ' + lastname} for registering</h3>
{:else}
<h3>Please fill out the form</h3>
<p>Dont have an account? <a

    href="/register">Register</a>></p>
{/if}
<style>
    button{
        margin-left:70px;
        min-width: 300px;
        max-width: 500px;
    }
    div{
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        display:grid;
        width:60vw;
        max-width:500px;
        min-width:300px;
        margin:auto;
    }
    form{margin:auto;
        max-width:500px;
        min-width:300px; 
    }
</style>