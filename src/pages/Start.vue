<template>
<div class="start-page">
  <span id="start-here">Start here</span>
  <input type="text" v-model="uid" placeholder="123456789" />
  <router-link :to="'/survey/'+uid" id="router-button">
    Submit
  </router-link >
  <p>
    Tip: Keep the survey tab open on your device after submitting. Refreshing the survey will update the date, but remember your uid.
  </p>
</div>
</template>

<script>
export default {
  data(){
    return{
      uid: "",
    }
  },
}
</script>

<style scoped>
.start-page{
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 60px 10px;
  margin: 0 auto;
}
.start-page input{
  margin-bottom: 30px;
  font-size: 16px;
  padding: 10px;
}
#start-here{
  font-size: 20px;
  margin-bottom: 50px;
}
#router-button{
  width: fit-content;
  padding: 10px;
  border-radius: 6px;
  margin: 40px auto;
  border: 1px solid gray;
  color: black;
  text-decoration: none;
}
.start-page p{
  margin-top: 50px;
  color:gray;
  text-align: left;
}
</style>