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
 new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        users:[],
        headers:[
            {text: 'Name', value: 'name'},
            {text: 'Email', value: 'email'},
            {text: 'Phone', value: 'phone'},
            {text: 'Website', value: 'website'},
        ],
       
    },
    methods:
    {
        GetUsersFromAPI()
        {
            let data;
            $.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/users",
                dataType: "json",
                success: function (jsonResponse) {
        
 
                    data = jsonResponse;  
                    this.users = data;

                    console.log(this.users);

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


    

   








  