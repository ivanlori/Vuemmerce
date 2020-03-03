<template>
  <section>
    <slot
      name="itemsOnPage"
      :itemsOnPage="itemsOnPage"
    ></slot>
    <b-pagination v-if="total"
                  :total="total"
                  :current.sync="current"
                  :per-page="perPage"
                  :range-before="range"
                  :range-after="range"
                  order="is-centered"
                  icon-pack="fas">
    </b-pagination>
  </section>
</template>

<script>
export default {
  name: "pagination-other-component",

  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    grid: {
      type: Number,
      default: 3
    }
  },

  data() {
    return {
      total: this.items.length,
      current: 1,
      perPage: this.grid,
      maxPerPage: 99,
      range: 2,
      itemsOnPage: []
    };
  },

  watch: {
    items: function (val, old) {
      if (val !== old) {
        this.total = this.items.length
        if (this.current === 1) {
          this.setItemsOnPage()
        } else {
          this.current = 1
        }
      }
    },
    perPage: function (val, old) {
      if (val !== old) {
        this.setItemsOnPage()
      }
    },
    current: function (val, old) {
      if (val !== old) {
        this.setItemsOnPage()
      }
    }
  },

  methods: {
    setItemsOnPage() {
      const start = (this.current - 1) * this.perPage
      const end = start + this.perPage
      this.itemsOnPage = this.items.slice(start, end)
    }
  },

  mounted() {
    this.setItemsOnPage()
  }
}
</script>
