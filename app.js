Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: "<a href='https://google.com'>Google</a>",
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    incrementAge() {
      this.age++;
    },
    updateLastName(msg, event) {
      // event.preventDefault();
      // we added .prevent to the html tag
      console.log(msg);
      this.lastName = event.target.value.toUpperCase();
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
}).mount("#app");
