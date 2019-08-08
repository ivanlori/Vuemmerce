<template>
	<div class = "field is-grouped">
		<div class="control has-icons-left">
			<input
				class="input is-rounded"
				type="text"
				v-model="value"
				:placeholder="placeholder"
				@keyup.enter="search"
			>
			<span class="icon is-small is-left">
				<i class="fas fa-search"></i>
			</span>		
		</div>
		<b-checkbox class="is-small is-right" v-model="searchInWithList">In wishlist</b-checkbox>	
	</div>
</template>

<script>
export default {
  name: 'search-component',
	data () {
		return {
			value: '',
			placeholder: 'Search...',
			searchInWithList: false
		}
	},
	methods: {
		search () {
			this.value.length !== 0 && this.$router.push(`/search-results?q=${this.value}&wishlist=${this.searchInWithList}`)
		}
	}
}
</script>

