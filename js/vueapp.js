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
        usr:{
            phone:'',
            reference:'',
            address:'',
            firstname:'',
            lastname:'',
            email:'',
            times:'',
            country:'Nigeria',
            currency:'Naira'
        },
        currency: currency

    },

    computed:{
        fullname(){
            return this.usr.firstname + ' ' + this.usr.lastname
        }
    },
methods:{
    goto(){
        window.location = "registration_send.html"
    },
    formatCurrency(value){
        console.log(value)
      return this.currency[value-1]

    }
},
    watch:{
        timeRate(newValue,oldValue){
            if(newValue != null){
                this.show = true
            }
        }
    }



})