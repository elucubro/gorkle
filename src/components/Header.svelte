<script>
    let mobilenav = 'hidden';
   /* let toggleMobileNav = () => {
        if (mobilenav == 'hidden') {
            mobilenav = 'visible';
        } else {
            mobilenav = 'hidden';
        }
        console.log(mobilenav);
    }*/
</script>


<div class='flex flex-col fixed w-full '>
<nav class="w-full box-border h-12 bg-background border-b-black border-solid border flex px-5 justify-between items-center font-mediu">
    <a href="/"><h1 class="text-lg">gorkle.design</h1></a>
    <button on:click={toggleMobileNav}><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"/></svg></button>
</nav>

<!-- Mobile Nav -->
<ul class='h-64 bg-background border-b-black flex-col flex justify-around border-solid border px-5 py-2' style="visibility: {mobilenav};">
    <li class="flex justify-between items-center">
        <h2 class="text-lg">Frequently Asked Questions</h2>
        <h3 class="text-sm">one</h3>
    </li>
    <li class="flex justify-between items-center">
        <h2 class="text-lg">How We Work</h2>
        <h3 class="text-sm">two</h3>
    </li>
    <li class="flex justify-between items-center">
        <h2 class="text-lg">Our Mission</h2>
        <h3 class="text-sm">three</h3>
    </li>
    <li class="flex justify-between items-center">
        <h2 class="text-lg">Pricing</h2>
        <h3 class="text-sm">four</h3>
    </li>
    <li class="flex justify-between items-center">
        <h2 class="text-lg">Experiments</h2>
        <h3 class="text-sm">five</h3>
    </li>


</ul>
</div>