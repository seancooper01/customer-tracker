// Coding Challenge 00

// Step 2
let customers = [
    {   name: "Bob", 
        email: "bobthebuilder@gmail.com", 
        purchases: ["Hammer", "Wood", "Nails"] 
    },
    {
        name: "John Brian Johnson",
        email: "JBJ@gmail.com",
        purchases: ["Shirts", "Pants", "Socks"]
    },
    {
        name: "ElChapo",
        email: "ELChapo@gmail.com",
        purchases: ["Gunpowder", "BodyBag", "Gasoline"]
    }
    ]; 
      //  console.log(customers); 

// Step 3
    customers.push({
        name: "Jose", 
        email: "JoseCuervo@gmail.com",
        purchases: ["Agave", "Glass Bottle","Water"] 
    }); 

    customers.shift(0); 

   //   console.log(customers); 

// Step 4
    customers[0].email = "bobdotcom@gmail.com"; 

    //  console.log(customers)

    customers[0].purchases.push("Tool Box"); 
   //   console.log(customers)

// Step 5 
    customers.forEach(customers => {
        console.log(
            `
            Name: ${customers.name}
            Email: ${customers.email}
            Purchases: ${customers.purchases}
            `
        )
    });

// Code goes here