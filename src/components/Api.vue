<template> 
 <div id="api2" class="content">
     <h1>cas</h1>
     {{info}}
 </div>
</template>

<script>
 import axios from 'axios';
    export default {
        name: '#api2',
        data () {
            return {
            info: null
            }
        },
        mounted () {
            axios
            .get('http://apifintech-team1.3it.cl/hackathon/clients/all')
            .then(response => (this.info = response.data))
        }
   
    }  
</script>

<style>
</style>