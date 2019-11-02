
var currency = [
    '(Af)',								
																				
   '(L)',								
                                                    
   '(Kz)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '(ƒ)',								
                                                    
   '(ман)',								
                                                    
   '(КМ)',								
                                                    
   '($)',								
                                                    
   '(৳)',								
                                                    
   '(лв)',								
                                                    
   '(ب.د)',								
                                                    
   '(₣)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '(Bs.)',								
                                                    
   '(R$)',								
                                                    
   '($)',								
                                                    
   '()',								
                                                    
   '(P)',								
                                                    
   '(Br)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '(₣)',								
                                                    
   '(₣)',								
                                                    
   '($)',								
                                                    
   '(¥)',								
                                                    
   '($)',								
                                                    
   '(₡)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '(Kč)',								
                                                    
   '(₣)',								
                                                    
   '(kr)',								
                                                    
   '($)',								
                                                    
   '(د.ج)',								
                                                    
   '(£)',								
                                                    
   '(Nfk)',								
                                                    
   '()',								
                                                    
   '(€)',								
                                                    
   '($)',								
                                                    
   '(£)',								
                                                    
   '(£)',								
                                                    
   '(ლ)',								
                                                    
   '(₵)',								
                                                    
   '(£)',								
                                                    
   '(D)',								
                                                    
   '(₣)',								
                                                    
   '(Q)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '(L)',								
                                                    
   '(Kn)',								
                                                    
   '(G)',								
                                                    
   '(Ft)',								
                                                    
   '(Rp)',								
                                                    
   '(₪)',								
                                                    
   '(₹)',								
                                                    
   '(ع.د)',								
                                                    
   '(﷼)',								
                                                    
   '(Kr)',								
                                                    
   '($)',								
                                                    
   '(د.ا)',								
                                                    
   '(¥)',								
                                                    
   '(Sh)',								
                                                    
   '()',								
                                                    
   '(៛)',								
                                                    
   '(₩)',								
                                                    
   '(₩)',								
                                                    
   '(د.ك)',								
                                                    
   '($)',								
                                                    
   '(〒)',								
                                                    
   '(₭)',								
                                                    
   '(ل.ل)',								
                                                    
   '(Rs)',								
                                                    
   '($)',								
                                                    
   '(L)',								
                                                    
   '(ل.د)',								
                                                    
   '(د.م.)',								
                                                    
   '(L)',								
                                                    
   '()',								
                                                    
   '(ден)',								
                                                    
   '(K)',								
                                                    
   '(₮)',								
                                                    
   '(P)',								
                                                    
   '(UM)',								
                                                    
   '(₨)',								
                                                    
   '(ރ.)',								
                                                    
   '(MK)',								
                                                    
   '($)',								
                                                    
   '(RM)',								
                                                    
   '(MTn)',								
                                                    
   '($)',								
                                                    
   '(₦)',

                        
   '(C$)',								
                                                    
   '(kr)',								
                                                    
   '(₨)',								
                                                    
   '($)',								
                                                    
   '(ر.ع.)',								
                                                    
   '(B/.)',								
                                                    
   '(S/.)',								
                                                    
   '(K)',								
                                                    
   '(₱)',								
                                                    
   '(₨)',								
                                                    
   '(zł)',								
                                                    
   '(₲)',								
                                                    
   '(ر.ق)',								
                                                    
   '(L)',								
                                                    
   '(din)',								
                                                    
   '(р.)',								
                                                    
   '(₣)',								
                                                    
   '(ر.س)',								
                                                    
   '($)',								
                                                    
   '(₨)',								
                                                    
   '(£)',								
                                                    
   '(kr)',								
                                                    
   '($)',								
                                                    
   '(£)',								
                                                    
   '(Le)',								
                                                    
   '(Sh)',								
                                                    
   '($)',								
                                                    
   '(Db)',								
                                                    
   '(ل.س)',								
                                                    
   '(L)',								
                                                    
   '(฿)',								
                                                    
   '(ЅМ)',								
                                                    
   '(m)',								
                                                    
   '(د.ت)',								
                                                    
   '(T$)',								
                                                    
   '(₤)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '(Sh)',								
                                                    
   '(₴)',								
                                                    
   '(Sh)',								
                                                    
   '($)',								
                                                    
   '($)',								
                                                    
   '()',								
                                                    
   '(Bs F)',								
                                                    
   '(₫)',								
                                                    
   '(Vt)',								
                                                    
   '(T)',								
                                                    
   '(₣)',								
                                                    
   '($)',								
                                                    
   '(₣)',								
                                                    
   '(﷼)',								
                                                    
   '(R)',								
                                                    
   '(ZK)',								
                                                    
   '($)',
]
new Vue({
    el:"#app",
    data:{
        one:true,
        timeRate:null,
        show:false,
        isPayFlutter:'',
        isPayPaystack:'',
        API_publicKey:"FLWPUBK_TEST-c4f6ace72bd66767285d1da656847f8e-X",
        usr:{
            phone:'',
            reference:'',
            address:'',
            firstname:'',
            lastname:'',
            email:'',
            times:'',
            country:'Nigeria',
            currency:'',
            amount:''
        },
        currency: currency,
        allCountries:''

    },

    computed:{
        fullname(){
            return this.usr.firstname + ' ' + this.usr.lastname
        }
    },
methods:{
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
        console.log(this.usr.amount)
        var handler = PaystackPop.setup({
            key: 'pk_test_50c50bba0d09666cc46820850f20853b3628f06d',
            email: this.usr.email,
            amount: 4000000,
            currency: this.usr.currency,
            metadata: {
               custom_fields: [
                  {
                      display_name: "Mobile Number",
                      variable_name: "mobile_number",
                      value: this.usr.phone
                  }
               ]
            },
            callback: function(response){
                alert('success. transaction ref is ' + response.reference);
            },
            onClose: function(){
                inst.$refs.paymentRes.click();
            }
          });
          handler.openIframe();
    },
    raveapp(){
        console.log('rave is active')
       
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
                    this.goto()
                    } else {
                        // redirect to a failure page.
                    }
    
                    x.close(); // use this to close the modal immediately after payment.
                }
            });
        
    },
    goto(){
       return window.location = "registration_send.html"
    },
    formatCurrency(value){
      return this.currency[value-1]

    }
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