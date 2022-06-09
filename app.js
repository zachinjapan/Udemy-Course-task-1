Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: "<a href='https://google.com'>Google</a>",
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount("#app");
