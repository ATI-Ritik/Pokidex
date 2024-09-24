<script>
    import "../app.css";
    import { page } from "$app/stores";
    import { caughtMonsters } from "$lib/stores";
  </script>

<div class=" flex justify-between p-4 bg-gray-800 text-white items-center">
  <a class=" hover:text-blue-500 decoration-none {$page.url.pathname === "/"?'border-[1px] border-white rounded-lg':''} p-2" 
  href="/">Home</a>
  <h2 class="text-2xl">POKIDEX</h2>
  <a class=" hover:text-blue-500 decoration-none {$page.url.pathname === "/my-monsters"?'border-[1px] border-white rounded-lg':''} p-2" 
  href="/my-monsters">My Monsters ({$caughtMonsters.length})</a>
</div>
 
<div class=" my-4 mx-auto max-w-screen-xl w-11/12">
  <slot />
</div>