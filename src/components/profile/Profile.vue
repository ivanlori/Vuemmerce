<template>
    <div class="profile">
        <div class="container has-margin-top-20 has-margin-bottom-20 has-padding-right-15-mobile has-padding-left-15-mobile">
            <div class="columns is-centered is-multiline" v-if="isUserLoggedIn">
                <div class="column is-6-desktop is-6-tablet is-12-mobile">
                    <div class="field ">
                        <div class="file is-boxed justify-center-mobile">
                            <label class="file-label ">
                                <input class="file-input" type="file" @change="readFile" name="resume">
                                <figure class="image is-128x128">
                                    <img :src="avatarSrc?avatarSrc:'https://bulma.io/images/placeholders/128x128.png'">
                                </figure>
                            </label>
                        </div>
                    </div>

                    <div class="field ">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" :class="{'is-danger': !isNameCorrect}" type="text" :placeholder="$t('profile.name')" v-model="name">
                            <span class="icon is-small is-left">
                                 <i class="fas fa-user-alt"></i>
                             </span>
                            <span class="icon is-small is-right" v-if="!isNameCorrect">
                                  <i class="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="!isNameCorrect">Name is required</p>
                    </div>


                    <div class="field ">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" :class="{'is-danger': !isEmailCorrect}" type="email" :placeholder="$t('profile.email')" v-model="email">
                            <span class="icon is-small is-left">
                                 <i class="fas fa-envelope"></i>
                             </span>
                            <span class="icon is-small is-right" v-if="!isEmailCorrect">
                                 <i class="fas fa-exclamation-triangle"></i>
                             </span>
                        </div>
                        <p class="help is-danger" v-if="!isEmailCorrect">This email is invalid</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" :class="{'is-danger': !isAddressCorrect}" type="text" :placeholder="$t('profile.address')" v-model="address">
                            <span class="icon is-small is-left">
                                 <i class="fas fa-home"></i>
                             </span>
                            <span class="icon is-small is-right" v-if="!isAddressCorrect">
                                 <i class="fas fa-exclamation-triangle"></i>
                             </span>
                        </div>
                        <p class="help is-danger" v-if="!isAddressCorrect">This address is invalid</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" :class="{'is-danger': !isPasswordCorrect}" type="password" :placeholder="$t('profile.password')" v-model="password">
                            <span class="icon is-small is-left">
                                 <i class="fas fa-lock"></i>
                             </span>
                            <span class="icon is-small is-right" v-if="!isPasswordCorrect">
                                 <i class="fas fa-exclamation-triangle"></i>
                             </span>
                        </div>
                        <p class="help is-danger" v-if="!isPasswordCorrect">This password is invalid</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" :class="{'is-danger': !isPasswordCorrect}" type="password" :placeholder="$t('profile.confirmation')" v-model="repeatPassword">
                            <span class="icon is-small is-left">
                                 <i class="fas fa-lock"></i>
                             </span>
                            <span class="icon is-small is-right" v-if="!isPasswordCorrect">
                                 <i class="fas fa-exclamation-triangle"></i>
                             </span>
                        </div>
                        <p class="help is-danger" v-if="!isPasswordCorrect">This password is invalid</p>
                    </div>

                    <div class="field">
                        <p class="control">
                            <button class="button is-info is-medium is-full-width-mobile" @click="save">
                                Save
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="notification is-warning" v-else>
                {{ $t("profile.pleaseLogin") }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'user-profile-component',

  computed: {
    ...mapGetters(['isUserLoggedIn', 'getUserAddress', 'getUserEmail', 'getAvatar', 'getUserName']),
  },

  data() {
    return {
        name: '',
        email: '',
        address: '',
        password: '',
        repeatPassword: '',
        avatarBinary: '',
        avatarSrc:'',
        isEmailCorrect: true,
        isAddressCorrect: true,
        isPasswordCorrect: true,
        isNameCorrect: true,
    }
  },
    mounted(){
        if(this.getAvatar){
            this.avatarSrc=this.getAvatar;
        }
        this.email = this.getUserEmail;
        this.address = this.getUserAddress;
        this.name = this.getUserName;
    },
  methods: {
    readFile(event) {
        if (!event.target.files.length) { return }
        var reader = new FileReader();
        reader.onload = (e) => {
            this.avatarBinary = e.target.result;
            this.avatarSrc =this.avatarBinary;
        };
        reader.readAsDataURL(event.target.files[0]);
    },
    save() {
        let changes = [];
        let isCorrect = true;


        this.isNameCorrect = true;
        if ( this.name !== "" && this.name.match(/.+/) ) {
            changes.push(() => this.$store.commit('setUserName', this.name));
        } else if ( this.name !== "" ) {
            isCorrect = this.isNameCorrect = false;
        }

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
</style>
