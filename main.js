const constraints = {
     username: {
          presence: true,
          exclusion: {
               within: ['admin'],
               message: "^Cannot register with %{value} for username, sorry"
          }
     },
     email: {
          presence: true,
          email: true
     },
     password: {
          presence: true,
     },
     fullname: {
          presence: true,
     },
     title: {
          presence: true,
     },
     gender: {
          presence: true,
     },
     language: {
          presence: true,
     },
     

}
var app = Vue.createApp({

     data() {

          return {
               formdata: {
                    username: null,
                    email: null,
                    password: null,
                    fullname: null,
                    title: null,
                    gender: null,
               },
               language_lists: [{
                         id: 1,
                         name: 'Thai'
                    },
                    {
                         id: 2,
                         name: 'English'
                    },
                    {
                         id: 3,
                         name: 'Chinese'
                    }
               ],
               msg: 'Hello,Vue3',
               firstname: 'Surapong',
               lastname: 'Chamalai',
               position: 'Sorcerer Supreme',
               pathimage: './images/mypic.jpg',

               errors: null,
          }
     },
     methods: {
          errorCheck: function () {
               this.errors = validate(this.formdata, constraints)
               console.log(this.errors);
               if (!this.errors) {
                    alert("Registered successfully.")
               }
          }

     }

})
app.component('display-error', {
     props: {
          errors: {
               type: Object,
               required: true,
          },
          field: {
               type: String,
               required: true,
          }
     },
     template:
          /*html*/
          `
     <div v-if="errors && errorList">
         <p v-for="error in errorList" class="text-red-500">{{error}}</p>
     </div>
     `,
     computed: {
          errorList() {
               return this.errors[this.field]
          }
     }
})

app.mount('#app')