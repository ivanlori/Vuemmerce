<template>
  <div>
    <VmHeader></VmHeader>
    <router-view></router-view>
    <VmFooter></VmFooter>
    <VmLoginModal></VmLoginModal>
    <VmRegistrationModal></VmRegistrationModal>
    <VmCheckoutModal></VmCheckoutModal>
  </div>
</template>

<script>
import VmHeader from './components/header/Header';
import VmFooter from './components/footer/Footer';
import VmLoginModal from './components/modal/Login';
import VmRegistrationModal from './components/modal/Registration';
import VmCheckoutModal from './components/modal/Checkout';

export default {
  name: 'app',
  components: {
    VmHeader,
    VmFooter,
    VmLoginModal,
    VmRegistrationModal,
    VmCheckoutModal
  }
};
</script>

<style lang="scss" src="./global-style.scss">

</style>
