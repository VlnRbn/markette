new Vue({
    el: '#root-app',

    data: {
        companyName : "",
        companyPhone: "",
        companyWebsite: "",
        adminName: "",
        adminPhone: "",
        adminEmail: "",
        message: ""
    },

    methods: {
        onSubmit() {
            axios.post('https://www.spot-backend/api/login', {
                companyName : this.companyName,
                companyPhone: this.companyPhone,
                companyWebsite: this.companyWebsite,
                adminName: this.adminName,
                adminPhone: this.adminPhone,
                adminEmail: this.adminEmail,
                message: this.message
              })
              .then(this.onSuccess)
              .catch(
                  function (error) {
                    console.log(error);
                }
               );
        },

        onSuccess(response) {
            console.log(response);
            alert(response.success.message);
            this.companyName = "";
            this.companyPhone = "";
            this.companyWebsite = "";
            this.adminName = "";
            this.adminPhone = "";
            this.adminEmail = "";
            this.message = "";
        }
    }
})