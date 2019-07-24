<template>
    <div class="container">
        <div v-if="products.length !== 0">
            <h2>{{$t("message.CartDetail.confirmHeader")}} </h2>
            <table class="table"   style="width: 100%;">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{$t("message.CartDetail.productName")}}</th>
                    <th scope="col">{{$t("message.CartDetail.price")}}</th>
                    <th scope="col">{{$t("message.CartDetail.quantity")}}</th>
                    <th scope="col">{{$t("message.CartDetail.action")}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, index) in products" :key="product.id">
                    <td>
                        {{index + 1}}
                    </td>
                    <td>
                        {{product.title}}
                    </td>
                    <td>
                        {{product.price}}
                    </td>
                    <td>
                        <span class="icon" @click="lessQuantity(product)">
                            <i class="fa fa-caret-left"></i>
                        </span>
                        {{product.quantity}}
                        <span class="icon" @click="moreQuantity(product)">
                            <i class="fa fa-caret-right"></i>
                        </span>
                    </td>
                    <td>
                        <span class="icon" @click="removeItem(product.id)">
                            <i class="fa fa-trash"></i>
                        </span>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4">{{$t("message.CartDetail.totalPrice")}} {{sum}}</td>
                        <td><button class="button is-success" @click="confirmOrder">{{$t("message.CartDetail.confirm")}}</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div v-else class="has-text-centered">
            <p>{{ $t("message.CartDetail.cartEmpty")}}</p>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex';
  export default {
    name: "CartDetail",
    computed:{
      products () {
        return this.productsAdded();
      },
      sum () {
        return this.productsAdded().map(el => el.quantity * el.price).reduce((a,b) => a + b);
      }
    },
    methods:{
      ...mapMutations(['setAddedBtn','removeFromCart','quantity']),
      ...mapGetters(['productsAdded']),
      removeItem(id){
        this.removeFromCart(id);
        this.setAddedBtn({ id: id, status: false });
      },
      lessQuantity(product){
        this.quantity({...product, quantity: product.quantity - 1});
      },
      moreQuantity(product){
        this.quantity({...product, quantity: product.quantity + 1});
      },
      confirmOrder(){
        this.$router.push('/order');
      }
    }
  }
</script>

<style scoped>

</style>
