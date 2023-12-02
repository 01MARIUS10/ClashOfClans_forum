<script setup>
import "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
import { RouterView } from 'vue-router'
import NavBar from './components/Molecules/NavBar.vue';
import Footer from './components/Molecules/Footer.vue';

 
        /* Add "https://api.ipify.org?format=json" statement
       this will communicate with the ipify servers in
       order to retrieve the IP address $.getJSON will
       load JSON-encoded data from the server using a
       GET HTTP request */
 
        $.getJSON("https://api.ipify.org?format=json",
            function (data) {
 
                // Setting text of element P with id gfg
                console.log('ip is',data.ip)
            })
</script>

<template>
  <div class="content w-full min-h-screen flex flex-col ">
    <div class="nav z-10 flex px-28 border border-slate-500 py-5 flex justify-center ">
      <NavBar class="max-w-screen-xl"/>
    </div>
    <div class="border border-slate-500 relative flex justify-center grow">
      <RouterView class="border border-slate-300 "/>
    </div>
    <div class="footer px-">
      <Footer />
    </div>
  </div>
</template>

<style >
.content{
  background-image: url('/img/pattern.png');
  background-color: rgba(220,220,220,.38);
}

</style>
