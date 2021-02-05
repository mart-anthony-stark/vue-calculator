new Vue({
    el: '#root',
    data(){
        return{
            current: '',
            operator: null,
            previous: '',
            operatorClicked: false
        }
        
    },
    methods:{
        append(num){
            if(this.operatorClicked){
                this.current = ''
                this.operatorClicked = false
            }
            this.current = `${this.current}${num}`
        },
        clear(){
            this.current = ''
        },
        decimal(){
            if(!this.current.includes('.')){
                this.append('.')
            }
        },
        percent(){
            this.current = `${parseFloat(this.current / 100 )}`
        },
        negative(){
            if(!this.current.includes('-') && this.current !== ''){
                this.current = `-${this.current}`
            }else{
                this.current = `${this.current.slice(1)}`
            }
        },
        multiply(){
            this.operator = (a,b) => a*b
            this.operatorClicked = true
            this.previous = this.current
        },
        add(){
            this.operator = (a,b) => a+b
            this.operatorClicked = true
            this.previous = this.current
        },
        subtract(){
            this.operator = (a,b) => a-b
            this.operatorClicked = true
            this.previous = this.current
        },
        divide(){
            this.operator = (a,b) => a/b
            this.operatorClicked = true
            this.previous = this.current
        },
        equal(){
            this.current = `${this.operator(
                parseFloat(this.previous),
                parseFloat(this.current))}`
        }
    }
})