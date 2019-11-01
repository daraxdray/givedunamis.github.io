new Vue({
    el:"#app",
    data:{
        one:true,
        timeRate:null,
        show:false,
        usr:{
            phone:'',
            firstname:'',
            lastname:'',
            email:'',
            times:'',
            country:'Nigeria',
            currency:'Naira'
        }

    },
methods:{
    goto(){
        window.location = "registration_send.html"
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