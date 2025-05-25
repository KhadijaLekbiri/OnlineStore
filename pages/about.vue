<template>

  <div>
    <input type="text" v-model="in_name">
    <select>
      <option value=""></option>
    </select>

    <div v-for="user in filtered_name" :key="user.id">
      <p>{{user.name.firstname }} **** {{ user.name.lastname }}</p>
    </div>

    <input type="text" v-model="new_name">
    <button @click="add()" style="color: brown;">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      in_name: "",
      new_name:"",
      users: [],
    }
  },
  methods:{
    add(){
      const new_ = {
        "name": {
          "firstname": this.new_name,
          "lastname": this.new_name
        },
      };
      this.addUser(new_);
    },
    addUser(newUser) {
    // Add the new user to the `users` array
      this.users.push(newUser);
      const product = { title: 'New Product', price: 29.99 };
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(data => console.log(data));
      console.log(users);
  },
  },
  computed:{
    filtered_name(){
      return this.users.filter((user) => {
        const match = user.name.firstname.toLowerCase().includes(this.in_name.toLowerCase()) 
        || user.name.lastname.toLowerCase().includes(this.in_name.toLowerCase());
        return match;
      })
    }
  },
  async mounted(){
    try{
      const res = await fetch('https://fakestoreapi.com/users');
      this.users = await res.json();
    }catch{
      console.log("oooops");
    }
  }
}
</script>

<style>

</style>