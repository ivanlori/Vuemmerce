<template>
  <div class="section">
    <div class="card">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account-component',
  data () {
    return {

    };
  }
};
</script>