new Vue({
    el:"#app",
    data:{
        one:true,
        timeRate:null,
        show:false,
        isPayFlutter:'',
        isPayPaystack:'',
        display:false,
        API_publicKey:"FLWPUBK_TEST-c4f6ace72bd66767285d1da656847f8e-X",
        usr:{
            phone:'',
            giveType:'',
            address:'',
            firstname:'',
            lastname:'',
            email:'',
            times:'',
            country:'Nigeria',
            currency:'NGN',
            amount:''

        },
        allCountries:''

    },

    computed:{
        fullname(){
            return this.usr.firstname + ' ' + this.usr.lastname
        }
    },
methods:{

    isAvailableMerchant(){
        if(this.usr.currency=="NGN" || this.usr.currency == "USD"){
            return true
        }
        return false
    },
    getCountries(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
        console.log(res.data)
        this.allCountries = res.data
    },
    err=>console.log(err))        
        

    },
    selectedPay(par){
        if(par == 1){
        this.isPayFlutter = true
        this.isPayPaystack = false
        }
        else{           
            this.isPayPaystack = true
            this.isPayFlutter = false
         }
    }
    ,
    paystackapp(){
        var inst = this; 
   
        var handler = PaystackPop.setup({
            key: 'pk_test_50c50bba0d09666cc46820850f20853b3628f06d',
            email: this.usr.email,
            amount: this.usr.amount,
            currency: this.usr.currency,
            metadata: {
               custom_fields: [
                  {
                      display_name: "Mobile Number",
                      variable_name: "mobile_number",
                      value: this.usr.phone
                  },
                  {
                      display_name: "Name",
                      variable_name: "name",
                      value: this.fullname
                  },
                  {
                      display_name: "Address",
                      variable_name: "address",
                      value: this.usr.address
                  },
                  {
                      display_name: "Country",
                      variable_name: "country",
                      value: this.usr.country
                  },
                  {
                      display_name: "Give For",
                      variable_name: "give",
                      value: this.usr.giveType
                  }
                 
               ]
            },
            callback: function(response){
                window.location = "registration_send.html"
            },
            onClose: function(){
                inst.$refs.paymentRes.click();
            }
          });
          handler.openIframe();
    },
    raveapp(){
            var x = getpaidSetup({
                PBFPubKey: this.API_publicKey,
                customer_email: this.usr.email,
                amount: this.usr.amount,
                customer_phone: this.usr.phone,
                currency: this.usr.currency,
                txref: "rave-123456",
                meta: [{
                    metaname: "user_name",
                    metavalue: this.fullname
                }],
                onclose: function() {},
                callback: function(response) {
                    var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
                    console.log("This is the response returned after a charge", response);
                    if (
                        response.tx.chargeResponseCode == "00" ||
                        response.tx.chargeResponseCode == "0"
                    ) {
                        window.location = "registration_send.html"
                        
                    } else {
                        // redirect to a failure page.
                    }
    
                    x.close(); // use this to close the modal immediately after payment.
                }
            });
        
    },
    goto(){
        window.location = "registration_send.html"
    },

},
    watch:{
        timeRate(newValue,oldValue){
            if(newValue != null){
                this.show = true
            }
        }
    },

    mounted(){
        this.getCountries()
    }



})