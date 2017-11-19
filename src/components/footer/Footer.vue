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

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./footer.js"></script>

<style lang="scss" src="./footer.scss" scoped></style>
