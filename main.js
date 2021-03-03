const constraints={
    username: {
         presence : true,

    },
    email: {
         presence : true,
         email:true
    },
    password: {
         presence : true,
    },
    fullname: {
         presence : true,
    },
    title: {
         presence : true,
    },
    gender: {
         presence : true,
    },
    language: {
         presence : true,
    },
    exclusion: {
      within: {admin:"admin"},
      message: "^Cannot register with %{value} for username, sorry"
    }

}
const app ={

    data(){

        return {
            username : null,
            email : null,
            password : null,
            fullname : null,
            title : null,
            gender : null,
            language_lists : [{id:1,name:'Thai'},
                   {id:2,name:'English'},
                  {id:3,name:'Chinese'}
            ],
        }
    }
} 
    Vue.createApp(app).mount('#app')
