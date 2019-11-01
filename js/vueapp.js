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
    changeFrequency(data){
        this.show = true;
        this.frequency = data

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