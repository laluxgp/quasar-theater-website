<template>
  <q-page class="q-pa-lg">
  <div class="q-pa-lg row items-start q-gutter-lg">
   <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white center">
        <div class="text-h6">Contact Us</div>
        <div class="text-subtitle2">Feel free to drop a line below</div>
      </q-card-section>

      <q-card-actions vertical align="center" class="q-pa-md">
       Full Name:   <q-input placeholder="Enter your Full Name" />
       Email:   <q-input placeholder="Enter your Email Id" />
       Phone Number:   <q-input placeholder="Your Message here please"  />
       Message:   <textarea></textarea>
        <q-btn style="background: #FF0080; color: white;margin-top:10px;">Submit</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  </q-page>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactUs'
})
</script>
<style scoped>
</style>
