<template>
  
  <div>
    looo
  </div>
  <button @click="add()">ziiiiiiid</button>
</template>

<!-- <script>
export default {
    methods:{
        async add() {
            const product = { title: "New Product", price: 29.99 };
            const res = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            });
            const data = await res.json();
            console.log(data); 
        },
    }
    
}
</script> -->


<script>
// export default {
//   methods: {
//     // async add() {
//     //   const product = { title: "New Product", price: 29.99 };
//     //   try {
//     //     const response = await fetch("http://localhost:3000/products", {
//     //       method: "POST",
//     //       headers: { "Content-Type": "application/json" },
//     //       body: JSON.stringify(product),
//     //     });

//     //     if (!response.ok) {
//     //       throw new Error(`Failed to add product: ${response.statusText}`);
//     //     }

//     //     const data = await response.json();
//     //     console.log("Product added successfully:", data);
//     //   } catch (error) {
//     //     console.error("Error adding product:", error);
//     //   }
//     // },
//     async add() {
//   const product = { title: "New Product", price: 29.99 };
//   try {
//     const response = await fetch("http://localhost:3000/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(product),
//     });
    
//     // Log the raw response for debugging
//     console.log("Raw response:", response);

//     // Check for non-JSON response

//     // Parse JSON if the response is valid
//     const data = await response.json();
//     console.log("Product added successfully:", data);
//   } catch (error) {
//     console.error("Error adding product:", error);
//   }
// }

//   },
// };
</script>

<style>

</style>