<script>
    import "../app.css";
    import { page } from "$app/stores";
  </script>

<div class=" flex justify-between p-4 bg-gray-800 text-white items-center">
  <a class=" hover:text-blue-500 decoration-none active:border-[1px] active:border-white active:rounded-lg p-2" 
  class:active={$page.url.pathname === "/"} href="/">Home</a>
  <h2 class="text-2xl">POKIDEX</h2>
  <a class=" hover:text-blue-500 decoration-none active:border-[1px] active:border-white active:rounded-lg p-2" 
  class:active={$page.url.pathname === "/my-monsters"} href="/my-monsters">My Monsters</a>
</div>
 
<div class=" my-4 mx-auto max-w-screen-xl w-11/12">
  <slot />
</div>

<style>
  .active{
    border: 1px solid white;
    border-radius: 0.5rem;
  }
</style>