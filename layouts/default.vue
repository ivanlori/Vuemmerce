<template>
  <div>
    <VmHeader />
    <main>
      <nuxt/>
      <VmLoginModal />
      <VmSignupModal />
      <VmCheckoutModal />
    </main>
    <VmFooter />
  </div>
</template>

<script>
import VmHeader from '@/components/header/Header';
import VmFooter from '@/components/footer/Footer';
import VmLoginModal from '@/components/modal/Login';
import VmSignupModal from '@/components/modal/Signup';
import VmCheckoutModal from '@/components/modal/Checkout';

export default {
  components: {
    VmHeader,
    VmFooter,
    VmLoginModal,
    VmSignupModal,
    VmCheckoutModal
  }
}
</script>

<style lang="scss">
  body {
    @apply flex;
    @apply flex-col;
    height:100vh;
    margin:0;
  }

  .input {
    @apply block;
    @apply w-full;
    @apply px-4;
    @apply py-2;
    @apply text-xl;
    @apply font-normal;
    @apply bg-white;
    @apply bg-clip-padding;
    @apply border;
    @apply border-solid;
    @apply rounded;
    @apply transition;
    @apply ease-in-out;
    @apply m-0;
    @apply focus:bg-white;
    @apply focus:outline-none;
  }

  .modal {
    @apply top-0;
    @apply right-0;
    @apply left-0;
    @apply bottom-0;
    @apply z-50;
    @apply items-center;
    @apply justify-center;
  }

  .modal-background {
    @apply bg-grey_dark/80;
    @apply w-full;
    @apply h-full;
    @apply z-10;
    @apply fixed;
    @apply top-0;
  }

  .modal-wrapper {
    @apply bg-white;
    @apply z-20;
    @apply rounded-2xl;
    @apply w-96;
  }
</style>
