webpackJsonp([0],Array(32).concat([function(t,e,a){"use strict";var i=a(9),s=a(143),n=a(120),r=a.n(n),o=a(121),c=a.n(o),u=a(122),l=a.n(u),d=a(124),v=a.n(d),m=a(111),h=a.n(m),f=a(117),p=a.n(f),g=a(116),_=a.n(g),y=a(114),b=a.n(y),C=a(115),w=a.n(C);i.a.use(s.a),e.a=new s.a({routes:[{path:"",redirect:function(t){return null!==window.localStorage.getItem("generations-idle")?"/overview":"/newgame"}},{path:"/overview",component:r.a,children:[{path:"/",name:"Overview",component:c.a},{path:"player",name:"Overview - Player",component:l.a}]},{path:"/training",name:"Training",component:v.a},{path:"/job",name:"Job",component:h.a},{path:"/options",name:"Options",component:p.a},{path:"/newgame",component:_.a,children:[{path:"/",name:"New game",component:b.a},{path:"customize",name:"New game - customize",component:w.a}]}]})},function(t,e,a){"use strict";var i=a(9),s=a(145),n=a(44),r=a(43),o=a(38),c=a(41),u=a(40),l=a(42),d=a(39);i.a.use(s.a),e.a=new s.a.Store({state:n.a,mutations:r,actions:o,modules:{time:c.a,player:u.a,training:l.a,job:d.a}})},function(t,e){},,function(t,e,a){function i(t){a(92)}var s=a(0)(a(45),a(126),i,null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(9),s=a(36),n=a.n(s),r=a(32),o=a(33),c=a(34),u=(a.n(c),a(35));a.n(u);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:n.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"setSaveInfo",function(){return u}),a.d(e,"saveGame",function(){return l}),a.d(e,"loadGame",function(){return d}),a.d(e,"importGame",function(){return v}),a.d(e,"resetGame",function(){return m}),a.d(e,"runOneTick",function(){return h}),a.d(e,"toggleEngine",function(){return f});var i=a(11),s=a.n(i),n=a(10),r=a.n(n),o=a(19),c=a.n(o),u=function(t,e){var a=t.commit;a("setPlayed",e.played),a("setVersion",e.version),a("setStartingDate",e.startingDate)},l=function(t){var e=t.state,a=t.rootState,i={};i.saveInfo={played:e.played,version:e.version,startingDate:e.startingDate},i.time={day:a.time.day,month:a.time.month,year:a.time.year},i.player=a.player,i.training=a.training,i.job=a.job,localStorage.setItem("generations-idle",c()(i))},d=function(t){var e=(t.state,t.dispatch),a=(t.rootState,JSON.parse(localStorage.getItem("generations-idle")));e("setSaveInfo",a.saveInfo),e("setTime",a.time),e("setPlayerInfo",a.player),e("setTraining",a.training),e("setJob",a.job)},v=function(t,e){var a=t.dispatch,i=JSON.parse(window.atob(e));a("setSaveInfo",i.saveInfo),a("setTime",i.time),a("setPlayerInfo",i.player),a("setTraining",i.training),a("setJob",i.job)},m=function(){null!==localStorage.getItem("generations-idle")&&localStorage.removeItem("generations-idle"),window.location.assign("/generations-idle")},h=function(t){var e=t.commit,a=t.dispatch,i=t.rootState,n=[31,28,31,30,31,30,31,31,30,31,30,31];if(i.time.year%4!=0?n[1]=28:i.time.year%100!=0?n[1]=29:i.time.year%400==0?n[1]=29:n[1]=28,e("addDays",1),a("addTraining",1),i.time.day>n[i.time.month-1]){if(e("addMonths",1),e("resetDay"),i.time.month>12){e("addYears",1),e("resetMonth");var o=i.job.base,c=!0,u=!1,l=void 0;try{for(var d,v=r()(s()(i.job.attributes));!(c=(d=v.next()).done);c=!0){var m=d.value;o+=i.job.multiplier*i.job.attributes[m]*i.player.statistics[m]}}catch(t){u=!0,l=t}finally{try{!c&&v.return&&v.return()}finally{if(u)throw l}}console.log("yearlySalary",o),e("addPlayerMoney",o)}a("saveGame")}},f=function(t){var e=t.state,a=t.dispatch;e.running?(e.engineRunning=!e.engineRunning,clearInterval(e.engineInterval)):(e.engineRunning=!e.engineRunning,e.engineInterval=setInterval(function(){a("runOneTick")},1e3)),console.log("Toggled engine:",e.engineRunning)}},function(t,e,a){"use strict";var i={name:"",description:"",visibleSince:0,visibleUntil:0,base:0,multiplier:0,attributes:{power:0,speed:0,health:0,education:0,wisdom:0,charisma:0}},s={setJobName:function(t,e){t.name=e},setJobDescription:function(t,e){t.description=e},setJobVisibleSince:function(t,e){t.visibleSince=e},setJobVisibleUntil:function(t,e){t.visibleUntil=e},setJobBase:function(t,e){t.base=e},setJobMultiplier:function(t,e){t.multiplier=e},setJobAttributePower:function(t,e){t.attributes.power=e},setJobAttributeSpeed:function(t,e){t.attributes.speed=e},setJobAttributeHealth:function(t,e){t.attributes.health=e},setJobAttributeEducation:function(t,e){t.attributes.education=e},setJobAttributeWisdom:function(t,e){t.attributes.wisdom=e},setJobAttributeCharisma:function(t,e){t.attributes.charisma=e}},n={setJobAttributes:function(t,e){var a=t.commit;a("setJobAttributePower",e.power),a("setJobAttributeSpeed",e.speed),a("setJobAttributeHealth",e.health),a("setJobAttributeEducation",e.education),a("setJobAttributeWisdom",e.wisdom),a("setJobAttributeCharisma",e.charisma)},setJob:function(t,e){var a=t.commit,i=t.dispatch;a("setJobName",e.name),a("setJobDescription",e.description),a("setJobVisibleSince",e.visibleSince),a("setJobVisibleUntil",e.visibleUntil),a("setJobBase",e.base),a("setJobMultiplier",e.multiplier),i("setJobAttributes",e.attributes)}};e.a={state:i,mutations:s,actions:n}},function(t,e,a){"use strict";var i={firstName:"",lastName:"",age:0,gender:"",avatar:0,money:0,statistics:{power:0,speed:0,health:0,education:0,wisdom:0,charisma:0}},s={setPlayerFirstName:function(t,e){t.firstName=e},setPlayerLastName:function(t,e){t.lastName=e},setPlayerAge:function(t,e){t.age=e},setPlayerGender:function(t,e){t.gender=e},setPlayerAvatar:function(t,e){t.avatar=e},setPlayerMoney:function(t,e){t.money=e},setPlayerPower:function(t,e){t.statistics.power=e},setPlayerSpeed:function(t,e){t.statistics.speed=e},setPlayerHealth:function(t,e){t.statistics.health=e},setPlayerEducation:function(t,e){t.statistics.education=e},setPlayerWisdom:function(t,e){t.statistics.wisdom=e},setPlayerCharisma:function(t,e){t.statistics.charisma=e},addPlayerMoney:function(t,e){t.money+=e},addPlayerPower:function(t,e){t.statistics.power+=e},addPlayerSpeed:function(t,e){t.statistics.speed+=e},addPlayerHealth:function(t,e){t.statistics.health+=e},addPlayerEducation:function(t,e){t.statistics.education+=e},addPlayerWisdom:function(t,e){t.statistics.wisdom+=e},addPlayerCharisma:function(t,e){t.statistics.charisma+=e}},n={setPlayerStatistics:function(t,e){var a=t.commit;a("setPlayerPower",e.power),a("setPlayerSpeed",e.speed),a("setPlayerHealth",e.health),a("setPlayerEducation",e.education),a("setPlayerWisdom",e.wisdom),a("setPlayerCharisma",e.charisma)},setPlayerInfo:function(t,e){var a=t.commit,i=t.dispatch;a("setPlayerFirstName",e.firstName),a("setPlayerLastName",e.lastName),a("setPlayerAge",e.age),a("setPlayerGender",e.gender),a("setPlayerAvatar",e.avatar),a("setPlayerMoney",e.money),i("setPlayerStatistics",e.statistics)}};e.a={state:i,mutations:s,actions:n}},function(t,e,a){"use strict";var i={day:1,month:1,year:1930},s={setDay:function(t,e){t.day=e},setMonth:function(t,e){t.month=e},setYear:function(t,e){t.year=e},addDays:function(t){++t.day},addMonths:function(t){++t.month},addYears:function(t){++t.year},resetDay:function(t){t.day=1},resetMonth:function(t){t.month=1}},n={setTime:function(t,e){var a=t.commit;a("setDay",e.day),a("setMonth",e.month),a("setYear",e.year)}};e.a={state:i,mutations:s,actions:n}},function(t,e,a){"use strict";var i=a(11),s=a.n(i),n=a(10),r=a.n(n),o={name:"",progress:0,goal:0,change:{power:0,speed:0,health:0,education:0,wisdom:0,charisma:0}},c={setTrainingName:function(t,e){t.name=e},setTrainingProgress:function(t,e){t.progress=e},setTrainingGoal:function(t,e){t.goal=e},setTrainingPower:function(t,e){t.change.power=e},setTrainingSpeed:function(t,e){t.change.speed=e},setTrainingHealth:function(t,e){t.change.health=e},setTrainingEducation:function(t,e){t.change.education=e},setTrainingWisdom:function(t,e){t.change.wisdom=e},setTrainingCharisma:function(t,e){t.change.charisma=e},addTrainingProgress:function(t,e){t.progress+=e}},u={setTrainingAttributeChanges:function(t,e){var a=t.commit;a("setTrainingPower",e.power),a("setTrainingSpeed",e.speed),a("setTrainingHealth",e.health),a("setTrainingEducation",e.education),a("setTrainingWisdom",e.wisdom),a("setTrainingCharisma",e.charisma)},setTraining:function(t,e){var a=t.commit,i=t.dispatch;a("setTrainingName",e.name),a("setTrainingProgress",e.progress),a("setTrainingGoal",e.goal),i("setTrainingAttributeChanges",e.change)},addTraining:function(t,e){var a=t.commit;if(a("addTrainingProgress",e),o.progress>=o.goal){o.progress-=o.goal;var i=!0,n=!1,c=void 0;try{for(var u,l=r()(s()(o.change));!(i=(u=l.next()).done);i=!0){var d=u.value;a("addPlayer"+d[0].toUpperCase()+d.slice(1),o.change[d])}}catch(t){n=!0,c=t}finally{try{!i&&l.return&&l.return()}finally{if(n)throw c}}}}};e.a={state:o,mutations:c,actions:u}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"setPlayed",function(){return i}),a.d(e,"setVersion",function(){return s}),a.d(e,"setStartingDate",function(){return n});var i=function(t,e){t.played=e},s=function(t,e){t.version=e},n=function(t,e){t.setStartingDate=e}},function(t,e,a){"use strict";var i=new Date;e.a={engineRunning:!1,engineInterval:null,played:!1,version:"0.1.0",startingDate:i}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(113),s=a.n(i),n=a(112),r=a.n(n);e.default={name:"app",components:{Navbar:s.a,MainMenu:r.a},beforeCreate:function(){null!==window.localStorage.getItem("generations-idle")&&(this.$store.dispatch("loadGame"),this.$store.dispatch("toggleEngine"))}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(11),s=a.n(i),n=a(10),r=a.n(n);e.default={props:["jobData"],computed:{active:function(){return this.jobData.name===this.$store.state.job.name},currentYear:function(){return this.$store.state.time.year},visible:function(){return this.currentYear>=this.jobData.visibleSince&&this.currentYear<=this.jobData.visibleUntil},jobAttributes:function(){var t=[],e=!0,a=!1,i=void 0;try{for(var n,o=r()(s()(this.jobData.attributes));!(e=(n=o.next()).done);e=!0){var c=n.value;0!==this.jobData.attributes[c]&&t.push(c[0].toUpperCase())}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}return t.join(" ")},yearlySalary:function(){var t=this.jobData.base,e=!0,a=!1,i=void 0;try{for(var n,o=r()(s()(this.jobData.attributes));!(e=(n=o.next()).done);e=!0){var c=n.value;t+=this.jobData.multiplier*this.jobData.attributes[c]*this.$store.state.player.statistics[c]}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}return t}},methods:{chooseJob:function(){this.$store.dispatch("setJob",this.jobData)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(110),s=a.n(i),n=a(147);e.default={computed:{jobList:function(){return n},currentYear:function(){return this.$store.state.time.year}},components:{JobCard:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{newGame:function(){return!1===this.$store.state.played}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{month:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"][this.$store.state.time.month-1]},year:function(){return this.$store.state.time.year}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{randomize:function(){},customize:function(){this.$router.push({name:"New game - customize"})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{phase:1,firstName:"",lastName:"",gender:"",firstQuestion:0,secondQuestion:0,thirdQuestion:0}},computed:{player:function(){return{firstName:this.firstName,lastName:this.lastName,age:20,gender:this.gender,avatar:0,money:2e4,statistics:{power:1===this.firstQuestion?2:1,speed:2===this.firstQuestion?2:1,health:1===this.thirdQuestion?2:1,education:1===this.secondQuestion?2:1,wisdom:2===this.thirdQuestion?2:1,charisma:2===this.secondQuestion?2:1}}}},methods:{randomizeAvatar:function(){if("Male"===this.player.gender)this.player.avatar=Math.floor(50*Math.random())+1;else if("Female"===this.player.gender)this.player.avatar=Math.floor(31*Math.random())+1;else{var t=Math.random()<.5;this.player.avatar=t?Math.floor(50*Math.random())+1:-1*(Math.floor(31*Math.random())+1)}},submitInfo:function(){if(1===this.phase)this.phase=2;else{this.randomizeAvatar(),this.$store.dispatch("setPlayerInfo",this.player);var t={played:!0,version:"0.1.0",startingDate:new Date};this.$store.dispatch("setSaveInfo",t),this.$store.dispatch("saveGame"),this.$router.push("/overview"),this.$store.dispatch("toggleEngine")}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(19),s=a.n(i);e.default={data:function(){return{gameDataString:""}},methods:{saveGame:function(){this.$store.dispatch("saveGame")},exportGame:function(){var t={};t.saveInfo={played:this.$store.state.played,version:this.$store.state.version,startingDate:this.$store.state.startingDate},t.time={day:this.$store.state.time.day,month:this.$store.state.time.month,year:this.$store.state.time.year},t.player=this.$store.state.player,t.training=this.$store.state.training,t.job=this.$store.state.job,this.gameDataString=window.btoa(s()(t))},importGame:function(){""!==this.gameDataString&&(this.$store.dispatch("importGame",this.gameDataString),this.gameDataString="",this.$store.dispatch("toggleEngine"))},resetGame:function(){this.$store.dispatch("resetGame")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{firstName:function(){var t=this.$store.state.player.firstName;return""!==t?t:"John"},lastName:function(){var t=this.$store.state.player.lastName;return""!==t?t:"Smith"},avatar:function(){var t="../../../../static/avatars/";if("Male"===this.$store.state.player.gender||"Female"===this.$store.state.player.gender)t=t+this.$store.state.player.gender.toLowerCase()+"/"+this.$store.state.player.avatar+".png";else{var e=this.$store.state.player.avatar>0?"Male":"Female";t="Male"===e?t+e.toLowerCase()+"/"+this.$store.state.player.avatar+".png":t+e.toLowerCase()+"/"+-1*this.$store.state.player.avatar+".png"}return t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{spouseNotFound:!0}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(118),s=a.n(i),n=a(119),r=a.n(n);e.default={components:{PlayerCard:s.a,SpouseCard:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{firstName:function(){return this.$store.state.player.firstName},lastName:function(){return this.$store.state.player.lastName},age:function(){return this.$store.state.player.age},gender:function(){return this.$store.state.player.gender},money:function(){return this.$store.state.player.money},physicalAttributes:function(){return{Power:this.$store.state.player.statistics.power,Speed:this.$store.state.player.statistics.speed,Health:this.$store.state.player.statistics.health}},mentalAttributes:function(){return{Education:this.$store.state.player.statistics.education,Wisdom:this.$store.state.player.statistics.wisdom,Charisma:this.$store.state.player.statistics.charisma}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["courseData"],methods:{chooseCourse:function(){this.courseData.progress=0,this.$store.dispatch("setTraining",this.courseData)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(125),s=a.n(i),n=a(123),r=a.n(n),o=a(148);e.default={computed:{anyCourseActive:function(){return""!==this.$store.state.training.name},courseList:function(){return o}},components:{TrainingProgress:s.a,CourseCard:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={computed:{courseName:function(){return this.$store.state.training.name},value:function(){return this.$store.state.training.progress},total:function(){return this.$store.state.training.goal}},mounted:function(){t(".ui.progress").progress({value:this.value,total:this.total})},watch:{value:function(){t(".ui.progress").progress("set progress",this.value)},total:function(){t(".ui.progress").progress("set total",this.total)}}}}.call(e,a(31))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"static/img/10.4fde884.png"},function(t,e,a){function i(t){a(100)}var s=a(0)(a(46),a(134),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(104)}var s=a(0)(a(47),a(138),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(105)}var s=a(0)(a(48),a(139),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(98)}var s=a(0)(a(49),a(132),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(99)}var s=a(0)(a(50),a(133),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(93)}var s=a(0)(a(51),a(127),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(108)}var s=a(0)(a(52),a(142),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(97)}var s=a(0)(a(53),a(131),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(107)}var s=a(0)(a(54),a(141),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(101)}var s=a(0)(a(55),a(135),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(102)}var s=a(0)(a(56),a(136),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(94)}var s=a(0)(a(57),a(128),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(95)}var s=a(0)(a(58),a(129),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(106)}var s=a(0)(a(59),a(140),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(96)}var s=a(0)(a(60),a(130),i,null,null);t.exports=s.exports},function(t,e,a){function i(t){a(103)}var s=a(0)(a(61),a(137),i,"data-v-a8d41d68",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),t._v(" "),a("div",{staticClass:"ui container"},[a("MainMenu"),t._v(" "),a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1===t.phase?[a("h3",{staticClass:"ui center aligned header"},[t._v("Basic info")]),t._v(" "),a("form",{staticClass:"ui form"},[a("p",[t._v("\n        We need basic information about your character. Answers won't have any influence over your character's statistics.\n      ")]),t._v(" "),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v("First name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{placeholder:"Enter first name...",type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Last name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{placeholder:"Enter last name...",type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"grouped fields"},[a("label",[t._v("Gender:")]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{name:"gender",type:"radio",value:"Male"},domProps:{checked:t._q(t.gender,"Male")},on:{__c:function(e){t.gender="Male"}}}),t._v(" "),a("label",[t._v("Male")])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{name:"gender",type:"radio",value:"Female"},domProps:{checked:t._q(t.gender,"Female")},on:{__c:function(e){t.gender="Female"}}}),t._v(" "),a("label",[t._v("Female")])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{name:"gender",type:"radio",value:"Other"},domProps:{checked:t._q(t.gender,"Other")},on:{__c:function(e){t.gender="Other"}}}),t._v(" "),a("label",[t._v("Other")])])])])]),t._v(" "),a("div",{staticClass:"ui center aligned container"},[a("button",{staticClass:"ui button",on:{click:t.submitInfo}},[t._v("Submit")])])]:t._e(),t._v(" "),2===t.phase?[a("h3",{staticClass:"ui center aligned header"},[t._v("Details")]),t._v(" "),a("p",[t._v("\n      We would like to know what personality should your character have, that's why you need to fill a short survey.\n    ")]),t._v(" "),a("form",{staticClass:"ui form"},[a("p",[t._v("\n        1. Muscles... Strength... The more you workout, the more powerful you become. But bigger muscles can make you slower. And slowness means that may not be able to escape dangerous situations. So... What do you prefer?\n      ")]),t._v(" "),a("div",{staticClass:"grouped fields"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstQuestion,expression:"firstQuestion"}],attrs:{name:"first-question",type:"radio"},domProps:{value:1,checked:t._q(t.firstQuestion,1)},on:{__c:function(e){t.firstQuestion=1}}}),t._v(" "),a("label",[t._v("Power")])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstQuestion,expression:"firstQuestion"}],attrs:{name:"first-question",type:"radio"},domProps:{value:2,checked:t._q(t.firstQuestion,2)},on:{__c:function(e){t.firstQuestion=2}}}),t._v(" "),a("label",[t._v("Speed")])])])]),t._v(" "),a("p",[t._v("\n        2. Imagine that you are in school. You can of course learn a lot here, but you can also make friends there. More knowledge = better job, whereas friends can make getting certain things easier. What is your choice?\n      ")]),t._v(" "),a("div",{staticClass:"grouped fields"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.secondQuestion,expression:"secondQuestion"}],attrs:{name:"second-question",type:"radio"},domProps:{value:1,checked:t._q(t.secondQuestion,1)},on:{__c:function(e){t.secondQuestion=1}}}),t._v(" "),a("label",[t._v("Knowledge")])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.secondQuestion,expression:"secondQuestion"}],attrs:{name:"second-question",type:"radio"},domProps:{value:2,checked:t._q(t.secondQuestion,2)},on:{__c:function(e){t.secondQuestion=2}}}),t._v(" "),a("label",[t._v("Friends")])])])]),t._v(" "),a("p",[t._v("\n        3. Being healthy can make you live longer, so that you can achieve more. Wisdom can bring you bright future, you can get higher and higher, but you may at some point forget about your health and die. The question is... What is more important to you?\n      ")]),t._v(" "),a("div",{staticClass:"grouped fields"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.thirdQuestion,expression:"thirdQuestion"}],attrs:{name:"third-question",type:"radio"},domProps:{value:1,checked:t._q(t.thirdQuestion,1)},on:{__c:function(e){t.thirdQuestion=1}}}),t._v(" "),a("label",[t._v("Health")])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"ui radio checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.thirdQuestion,expression:"thirdQuestion"}],attrs:{name:"third-question",type:"radio"},domProps:{value:2,checked:t._q(t.thirdQuestion,2)},on:{__c:function(e){t.thirdQuestion=2}}}),t._v(" "),a("label",[t._v("Wisdom")])])])])]),t._v(" "),a("div",{staticClass:"ui center aligned container"},[a("button",{staticClass:"ui button",on:{click:t.submitInfo}},[t._v("Submit")])])]:t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"ui center aligned header"},[t._v("Your family")]),t._v(" "),a("div",{staticClass:"ui three centered cards"},[a("PlayerCard"),t._v(" "),a("SpouseCard")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"ui center aligned header"},[t._v("Your character")]),t._v(" "),a("h3",[t._v("Basic info")]),t._v(" "),a("div",{staticClass:"ui list"},[a("div",{staticClass:"item"},[t._v("First name: "+t._s(this.firstName))]),t._v(" "),a("div",{staticClass:"item"},[t._v("Last name: "+t._s(this.lastName))]),t._v(" "),a("div",{staticClass:"item"},[t._v("Age: "+t._s(this.age))]),t._v(" "),a("div",{staticClass:"item"},[t._v("Gender: "+t._s(this.gender))]),t._v(" "),a("div",{staticClass:"item"},[t._v("Money: "+t._s(this.money)+"$")])]),t._v(" "),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"eight wide column"},[a("h3",{staticClass:"ui center aligned header"},[t._v("Physical attributes")]),t._v(" "),a("table",{staticClass:"ui very basic selectable table"},[t._m(0),t._v(" "),a("tbody",t._l(this.physicalAttributes,function(e,i){return a("tr",[a("td",[t._v(t._s(i))]),t._v(" "),a("td",[t._v(t._s(e))])])}))])]),t._v(" "),a("div",{staticClass:"eight wide column"},[a("h3",{staticClass:"ui center aligned header"},[t._v("Mental attributes")]),t._v(" "),a("table",{staticClass:"ui very basic selectable table"},[t._m(1),t._v(" "),a("tbody",t._l(this.mentalAttributes,function(e,i){return a("tr",[a("td",[t._v(t._s(i))]),t._v(" "),a("td",[t._v(t._s(e))])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Attribute")]),t._v(" "),a("th",[t._v("Value")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Attribute")]),t._v(" "),a("th",[t._v("Value")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"ui center aligned header"},[t._v("Current training")]),t._v(" "),t.anyCourseActive?a("TrainingProgress"):a("h3",{staticClass:"ui center aligned header"},[t._v("There is no active course!")]),t._v(" "),a("h1",{staticClass:"ui center aligned header"},[t._v("Available courses:")]),t._v(" "),a("div",{staticClass:"ui three cards"},t._l(t.courseList,function(t){return a("CourseCard",{key:t.name,attrs:{"course-data":t}})}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ui centered stackable grid"},[a("div",{staticClass:"four wide column"},[a("button",{staticClass:"ui fluid green button",on:{click:t.saveGame}},[t._v("Save")])]),t._v(" "),a("div",{staticClass:"four wide column"},[a("button",{staticClass:"ui fluid olive button",on:{click:t.exportGame}},[t._v("Export")])]),t._v(" "),a("div",{staticClass:"four wide column"},[a("button",{staticClass:"ui fluid yellow button",on:{click:t.importGame}},[t._v("Import")])]),t._v(" "),a("div",{staticClass:"four wide column"},[a("button",{staticClass:"ui fluid red button",on:{click:t.resetGame}},[t._v("Reset")])]),t._v(" "),a("div",{staticClass:"sixteen wide column"},[a("div",{staticClass:"ui fluid input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gameDataString,expression:"gameDataString"}],attrs:{type:"text",placeholder:"Game data string..."},domProps:{value:t.gameDataString},on:{input:function(e){e.target.composing||(t.gameDataString=e.target.value)}}})])])]),t._v(" "),a("h3",{staticClass:"ui center aligned header"},[t._v("Game autosaves at the beginning of every month.")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui menu"},[a("div",{staticClass:"ui container"},[a("router-link",{staticClass:"item header",attrs:{to:"/"}},[t._v("Generations Idle")]),t._v(" "),a("span",{staticClass:"item"},[t._v(t._s(t.month+" "+t.year))])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("\n    Before you can play this game you need to create a character. You can enter infomations by yourself or let us randomize everything. What do you want to do?\n  ")]),t._v(" "),a("div",{staticClass:"ui center aligned container"},[a("button",{staticClass:"ui disabled button",on:{click:t.randomize}},[t._v("Randomize")]),t._v(" "),a("button",{staticClass:"ui button",on:{click:t.customize}},[t._v("Customize")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(this.jobData.name)),this.active?a("span",{staticClass:"ui red top right attached label"},[t._v("Current job")]):t._e()]),t._v(" "),a("div",{staticClass:"meta"},[t._v("Attrubutes: "+t._s(this.jobAttributes))]),t._v(" "),a("div",{staticClass:"meta"},[t._v("Estimated yearly salary: "+t._s(this.yearlySalary)+"$")]),t._v(" "),a("div",{staticClass:"description"},[t._v(t._s(this.jobData.description))])]),t._v(" "),a("div",{staticClass:"ui bottom attached teal button",on:{click:t.chooseJob}},[t._v("Apply for the job!")])]):t._e()},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blurring dimmable card",class:{dimmed:t.spouseNotFound}},[a("div",{staticClass:"ui inverted dimmer",class:{active:t.spouseNotFound}},[t._m(0)]),t._v(" "),t.spouseNotFound?[t._m(1),t._v(" "),t._m(2)]:t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"center"},[a("h3",{staticClass:"ui header"},[t._v("Your character hasn't found a spouse yet! Work in progress!")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui image"},[i("img",{attrs:{src:a(109),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("Jane Doe")]),t._v(" "),a("div",{staticClass:"meta"},[t._v("Your spouse")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("h3",{staticClass:"ui center aligned header"},[t._v(t._s(t.courseName))]),t._v(" "),t._m(0)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui indicating progress"},[a("div",{staticClass:"bar"},[a("div",{staticClass:"progress"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ui three cards"},t._l(t.jobList,function(t){return a("JobCard",{key:t.name,attrs:{"job-data":t}})})),t._v(" "),a("h1",{staticClass:"ui center aligned header"},[t._v("Work in progress!")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui item secondary pointing red menu",class:t.newGame?"two":"four"},[t.newGame?a("router-link",{staticClass:"item",attrs:{to:"/newgame","active-class":"active"}},[t._v("New game")]):[a("router-link",{staticClass:"item",attrs:{to:"/overview","active-class":"active"}},[t._v("Overview")]),t._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/training","active-class":"active"}},[t._v("Training")]),t._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/job","active-class":"active"}},[t._v("Job")])],t._v(" "),a("router-link",{staticClass:"item",attrs:{to:"/options","active-class":"active"}},[t._v("Options")])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"center aligned header"},[t._v(t._s(t.courseData.name))]),t._v(" "),a("div",{staticClass:"description"},[a("table",{staticClass:"ui very basic two column table"},[t._m(0),t._v(" "),a("tbody",t._l(t.courseData.change,function(e,i){return 0!==e?a("tr",[a("td",[t._v(t._s(i[0].toUpperCase()+i.slice(1)))]),t._v(" "),a("td",[t._v(t._s((e>0?"+":"-")+e))])]):t._e()}))])])]),t._v(" "),a("div",{staticClass:"ui bottom attached teal button",on:{click:t.chooseCourse}},[t._v("Join the course!")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Ability")]),t._v(" "),a("th",[t._v("Change")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"card",attrs:{to:"./player",append:""}},[a("div",{staticClass:"ui image"},[a("img",{attrs:{src:t.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(t.firstName+" "+t.lastName))]),t._v(" "),a("div",{staticClass:"meta"},[t._v("Current character")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},,,,,function(t,e){t.exports=[{name:"Priest",description:"A priest is a person authorized to perform the sacred rituals of a religion, especially as a mediatory agent between humans and one or more deities.",visibleSince:1930,visibleUntil:9999,base:300,multiplier:200,attributes:{power:0,speed:0,health:0,education:1,wisdom:1,charisma:1}},{name:"Engineer",description:"An engineer is a practitioner of engineering, concerned with applying scientific knowledge, mathematics, and ingenuity to develop solutions for technical, societal and commercial problems.",visibleSince:1930,visibleUntil:9999,base:300,multiplier:200,attributes:{power:1,speed:0,health:0,education:1,wisdom:1,charisma:0}}]},function(t,e){t.exports=[{name:"PowerUP",goal:360,change:{power:1,speed:0,health:0,education:0,wisdom:0,charisma:0}},{name:"SpeedUP",goal:360,change:{power:0,speed:1,health:0,education:0,wisdom:0,charisma:0}},{name:"HealthUP",goal:360,change:{power:0,speed:0,health:1,education:0,wisdom:0,charisma:0}},{name:"EducationUP",goal:360,change:{power:0,speed:0,health:0,education:1,wisdom:0,charisma:0}},{name:"WisdomUP",goal:360,change:{power:0,speed:0,health:0,education:0,wisdom:1,charisma:0}},{name:"CharismaUP",goal:360,change:{power:0,speed:0,health:0,education:0,wisdom:0,charisma:1}}]}]),[37]);
//# sourceMappingURL=app.5c2d8d28478c297c1f9e.js.map