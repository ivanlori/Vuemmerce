<template>
	<div class = "field is-grouped">
		<div class="control has-icons-left">
			<input
				class="input is-rounded"
				type="text"
				v-model="query"
				:placeholder="placeholder"
				@keyup.enter="search"
			>
			<span class="icon is-small is-left">
				<i class="fas fa-search"></i>
			</span>		
		</div>
		<b-checkbox class="is-small is-right" v-model="searchInWishList">In wishlist</b-checkbox>	
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: 'search-component',
	data () {
		return {
			placeholder: 'Search...'
		}
	},

	computed: {
		query: {
			get() {
				return this.getSearchConrolsSate().queryStringInputText
			},
			set (value) {
				this.setSearchConrolsSateQueryStringInputText(value)
			}
		},
		searchInWishList: {
			get() {
				return this.getSearchConrolsSate().searchInWishListCheckboxValue
			},
			set (value) {
				this.setSearchConrolsSateSearchInWishListCheckboxValue(value)
			}
		}
	},

	methods: {
		...mapGetters (['getSearchConrolsSate']),
    	...mapMutations (['setSearchConrolsSateQueryStringInputText', 'setSearchConrolsSateSearchInWishListCheckboxValue', 'setSearchParams']),
		search () {
			console.log({query: this.query, searchInWishList: this.searchInWishList})
			this.setSearchParams({query: this.query, searchInWishList: this.searchInWishList})
			this.$router.push({ path: '/search-results'})
		}
	}
}
</script>

