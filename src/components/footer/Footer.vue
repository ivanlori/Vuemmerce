<template>
  <div class="footer">
    <div class="columns container">
      <div class="column">
        <p><a href="https://otus.ru/lessons/javascript/?int_source=courses_catalog&int_term=programming" target="_blank">OTUS JS course</a> powered e-commerce UI</p>
      </div>
    <div class="column has-text-right">
      <code>v {{settings.version}}</code><p>Vuemmerce | Made with ❤</p>
    </div>
    </div>
  </div>
</template>

<script>
import settings from '@/settings'
export default {
  name: 'footer-component',
  data: () => {
    return {
      settings
    }
  }
}
</script>

<style lang="scss" scoped>
 .footer {
   background: #b9e2fc;
   color: black;
 }
</style>
