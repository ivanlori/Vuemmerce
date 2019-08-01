<template>
  <div class="columns is-centered is-multiline">
    <div class="profile" v-if="isUserLoggedIn">
        <table>
        <tbody>
        <tr>
            <td colspan="2"><img width="150px" :src="getAvatar"></td>
        <tr><br />
        <tr>
            <td>Email:</td>
            <td><input :class="isEmailCorrect ? '' : 'red-border'" type="email" :placeholder="getUserEmail" v-model="email"></td>
        </tr>
        <tr>
            <td>Address:</td>
            <td><input :class="isAddressCorrect ? '' : 'red-border'" :placeholder="getUserAddress" v-model="address"></td>
        </tr>
        <tr>
            <td>New Password:</td>
            <td><input :class="isPasswordCorrect ? '' : 'red-border'" type="password" v-model="password"></td>
        </tr>
        <tr>
            <td>Confirmation:</td>
            <td><input :class="isPasswordCorrect ? '' : 'red-border'" type="password" v-model="repeatPassword"></td>
        </tr>
        <tr>
            <td>Avatar:</td>
            <td><input type="file" @change="readFile"></td>
        </tr>
        </tbody>
        </table><br />
        <button @click="save">Save</button>
    </div>
    <div class="profile" v-else>
        Please login to see profile data.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'user-profile-component',

  computed: {
    ...mapGetters(['isUserLoggedIn', 'getUserAddress', 'getUserEmail', 'getAvatar']),
  },

  data() {
    return {
        email: '',
        address: '',
        password: '',
        repeatPassword: '',
        avatarBinary: '',
        isEmailCorrect: true,
        isAddressCorrect: true,
        isPasswordCorrect: true,
    }
  },

  methods: {
    readFile(event) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = (e) => {
            this.avatarBinary = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    },
    save() {
        let changes = [];
        let isCorrect = true;

        this.isEmailCorrect = true;
        if ( this.email !== "" && this.email.match(/.+@.+\..+/) ) {
            changes.push(() => this.$store.commit('setUserEmail', this.email));
        } else if ( this.email !== "" ) {
            isCorrect = this.isEmailCorrect = false;
        }

        this.isAddressCorrect = true;
        if ( this.address !== "" && this.address.match(/.+/) ) {
            changes.push(() => this.$store.commit('setUserAddress', this.address));
        } else if ( this.address !== "" ) {
            isCorrect = this.isAddressCorrect = false;
        }

        this.isPasswordCorrect = true;
        if ( this.password !== "" && this.password === this.repeatPassword ) {
            changes.push(() => this.$store.commit('setUserPassword', this.password));
        } else if ( this.password !== "" ) {
            isCorrect = this.isPasswordCorrect = false;
        }

        if ( this.avatarBinary ) {
            this.$store.commit('saveAvatar', this.avatarBinary);
        }

        if ( isCorrect ) {
            changes.map(f => f());
        }
    },
  }
};
</script>

<style lang="scss" scoped>
.profile {
margin: 40px;
}
.red-border {
    border-color: red,
}
td {
    padding-right: 5px;
}
</style>
