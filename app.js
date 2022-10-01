    const app=Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn vue!',
            courseGoalB:'Master in vue and build amazing apps',
            vueLink:'https://vuejs.org/'                                                                                                                                
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if ( randomNumber <0.5){
                return this.courseGoalA;
            }else{
                return 'Master Vue!';
            }
            }
        }
    });
app.mount('#user-goal');