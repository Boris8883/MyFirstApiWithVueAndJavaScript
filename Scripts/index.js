Vue.component('table-users', {

    data:()=>{

        return{
           
        }
    },

    mounted()
    {
    },

    template: Content.loadContent('table_users.html')
})
var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {

        return {
            decision: false,
            users_data:[],
            headers:[
                {text: 'Name', value: 'name'},
                {text: 'Email', value: 'email'},
                {text: 'Phone', value: 'phone'},
                {text: 'Website', value: 'website'},
            ],
        }
      
       
    },
    methods:
    {
        GetUsersFromAPI()
        {
            let data;
            $.ajax({
                type: "GET",
                async:false,
                url: "https://jsonplaceholder.typicode.com/users",
                dataType: "json",
                success: function (jsonResponse) {
                   
                    app.decision = true;
                    data = jsonResponse;  


                    app.users_data = data;

                    console.log(this.users_data);

                },
                failure: function (data) {
                    alert(data.responseText);
                  },
                  error: function (data) {
                    alert(data.responseText);
                  }
        
            });
        },
    },

});


    

   








  