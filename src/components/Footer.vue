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
            <at-input placeholder="Email" size="small" append-button>
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

<script src="./script/footer.js"></script>

<style lang="scss" scoped>

  @import 'style/_base.scss';

  .container-fluid {
    border-top: 2px solid $black;
    margin-top: 20px;
    padding: 20px 0;

    .inner-footer {
      border-top: 1px solid #E7E7E7;
      margin-top: 20px;
      padding: 15px 0;

      .logo {
        font-size: 30px;
      }
    }
  }

</style>
