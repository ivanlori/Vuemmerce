<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <ul>
              <li v-for="item in footerListOne">
                <strong>{{ item.title }}</strong>
                <ul>
                  <li v-for="link in item.links">
                    {{ link }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <ul>
              <li v-for="item in footerListTwo">
                <strong>{{ item.title }}</strong>
                <ul>
                  <li v-for="link in item.links">
                    {{ link }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <ul>
              <li v-for="item in footerListThree">
                <strong>{{ item.title }}</strong>
                <ul>
                  <li v-for="link in item.links">
                    {{ link }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="row inner-footer">
          <div class="col-md-8">
            <h3 class="logo">Vuemmerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <div class="col-md-8">
            <h3>Stay connected</h3>
            <ul>
              <li v-for="social in footerListSocial">
                {{ social.facebook }}
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <h3>Newsletter</h3>
            <at-input v-model="inputValue4" placeholder="Email" size="small" append-button>
              <template slot="append">
                <i class="icon icon-chevron-right"></i>
              </template>
            </at-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        footerListOne: [
          {
            title: 'Customer care',
            links: ['Link1', 'Link2', 'Link3'],
          },
        ],
        footerListTwo: [
          {
            title: 'Corporate',
            links: ['Link1', 'Link2', 'Link3'],
          },
        ],
        footerListThree: [
          {
            title: 'Mobile Apps',
            links: ['iOS', 'Android', 'Windows Phone'],
          },
        ],
        footerListSocial: [
          {
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            youtube: '',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .container-fluid {
    border-top: 2px solid #000;
    margin-top: 20px;
    padding: 20px 0;
  }
  .inner-footer {
    border-top: 1px solid #E7E7E7;
    margin-top: 20px;
    padding: 15px 0;
  }
  .inner-footer .logo {
    font-size: 30px;
  }
</style>
