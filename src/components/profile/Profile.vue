<template>
  <div class="columns is-centered is-multiline">
    <div class="profile" v-if="isUserLoggedIn">
        <table>
        <tbody>
        <tr>
            <td colspan="2"><img width="150px" :src="getAvatar"></td>
        <tr><br />
        <tr>
            <td>{{ $t("profile.email") }}:</td>
            <td><input type="email" :placeholder="getUserEmail" v-model="email" :class="{'red-border': !isEmailCorrect}"></td>
        </tr>
        <tr>
            <td>{{ $t("profile.address") }}:</td>
            <td><input :placeholder="getUserAddress" v-model="address" :class="{'red-border': !isAddressCorrect}"></td>
        </tr>
        <tr>
            <td>{{ $t("profile.password") }}:</td>
            <td><input type="password" v-model="password" :class="{'red-border': !isPasswordCorrect}"></td>
        </tr>
        <tr>
            <td>{{ $t("profile.confirmation") }}:</td>
            <td><input type="password" v-model="repeatPassword" :class="{'red-border': !isPasswordCorrect}"></td>
        </tr>
        <tr>
            <td>{{ $t("profile.avatar") }}:</td>
            <td><input type="file" @change="readFile"></td>
        </tr>
        </tbody>
        </table><br />
        <button @click="save">Save</button>
    </div>
    <div class="profile" v-else>
        {{ $t("profile.pleaseLogin") }}
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
        console.log(this.isEmailCorrect, this.isAddressCorrect, this.isPasswordCorrect);

        if ( isCorrect ) {
            changes.map(f => f());
        }
    },
  },
  metaInfo: {
    title: 'Vuemmerce | Profile',
  },
};
</script>

<style lang="scss" scoped>
.profile {
margin: 40px;
}
.red-border {
    border-color: red;
}
td {
    padding-right: 5px;
}
input {
    margin: 2px;
}
</style>
