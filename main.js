const app = Vue.createApp({
  data() {
    return {
      cart: 1,
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inventory: 11,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ]
    }
  },

  methods: {
    addToCart() {
      this.cart += 1
    },
    updatedImage(variantImage) {
      this.image = variantImage
    }
  }
})
