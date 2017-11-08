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
        </div>
        <div class="row inner-footer">
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
    border-top: 1px solid #000;
  }
</style>
