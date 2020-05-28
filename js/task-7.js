const users = [
    {name:'Alex', age:15, canKiss: false},
    {name:'Anton', age:25, canKiss: true},
    {name:'Sveta', age:35},
    {name:'Rita', age:65},
    {name:'Vita', age:15},
   ];

   function foo(obj) {
       const allUsers = Object.values(obj);

       for (const user of allUsers){
           console.log(user);
           console.log(allUsers);
           
     
           
       }
       
    }

   console.log(foo(users));



