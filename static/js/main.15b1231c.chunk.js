(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Michael Scott",image:"https://vignette.wikia.nocookie.net/theoffice/images/0/07/Michael-portal.png/revision/latest/scale-to-width-down/150?cb=20091222014939"},{id:2,name:"Dwight Schrute",image:"https://vignette.wikia.nocookie.net/theoffice/images/0/0c/Dwight-portal.png/revision/latest/scale-to-width-down/150?cb=20091222014909"},{id:3,name:"Jim Halpert",image:"https://vignette.wikia.nocookie.net/theoffice/images/f/fc/Jim-portal.png/revision/latest/scale-to-width-down/150?cb=20091222014925"},{id:4,name:"Pam Beesly",image:"https://vignette.wikia.nocookie.net/theoffice/images/1/1e/Pam-portal.png/revision/latest/scale-to-width-down/150?cb=20091222014950"},{id:5,name:"Ryan Howard",image:"https://vignette.wikia.nocookie.net/theoffice/images/6/6f/Ryan-portal.png/revision/latest/scale-to-width-down/150?cb=20091222015002"},{id:6,name:"Andy Bernard",image:"https://vignette.wikia.nocookie.net/theoffice/images/e/e7/Andy-portal.png/revision/latest/scale-to-width-down/150?cb=20091222014855"},{id:7,name:"Angela Martin",image:"https://vignette.wikia.nocookie.net/theoffice/images/1/13/Angela-portal.png/revision/latest/scale-to-width-down/150?cb=20100119200006"},{id:8,name:"Kelly Kapoor",image:"https://vignette.wikia.nocookie.net/theoffice/images/8/88/Kelly-portal.png/revision/latest/scale-to-width-down/150?cb=20100119200019"},{id:9,name:"Toby Flenderson",image:"https://vignette.wikia.nocookie.net/theoffice/images/e/ef/Toby-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215528"},{id:10,name:"Creed Bratton",image:"https://vignette.wikia.nocookie.net/theoffice/images/6/60/Creed-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215412"},{id:11,name:"Darryl Philbin",image:"https://vignette.wikia.nocookie.net/theoffice/images/8/88/Darryl-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215424"},{id:12,name:"Kevin Malone",image:"https://vignette.wikia.nocookie.net/theoffice/images/f/f6/Kevin-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215434"},{id:13,name:"Meredith Palmer",image:"https://vignette.wikia.nocookie.net/theoffice/images/8/86/Meredith-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215443"},{id:14,name:"Oscar Martinez",image:"https://vignette.wikia.nocookie.net/theoffice/images/b/b5/Oscar-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215458"},{id:15,name:"Phyllis Vance",image:"https://vignette.wikia.nocookie.net/theoffice/images/2/29/Phyllis-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215508"},{id:16,name:"Stanley Hudson",image:"https://vignette.wikia.nocookie.net/theoffice/images/f/f4/Stanley-portal.png/revision/latest/scale-to-width-down/150?cb=20130523215520"}]},,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(3),c=a.n(o),r=(a(16),a(7)),s=a(4),l=a(5),h=a(8),d=a(6),m=a(9);a(17);var g=function(e){return n.a.createElement("nav",{className:"navbar navbar-dark bg-info"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game"),n.a.createElement("span",{className:"navbar-text"},"Score: ",e.score," | Top Score: ",e.topScore))};a(18);var p=function(e){return n.a.createElement("div",{id:"wrapper",className:"wrapper"},e.children)};a(19);var f=function(e){var t=e.children;return n.a.createElement("div",{className:"banner"},t)};a(20);var w=function(e){return n.a.createElement("a",{href:"#wrapper"},n.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},className:"imageCard ".concat(e.incorrect)},n.a.createElement("img",{className:"image",alt:e.name,src:e.image})))};a(21);var u=function(){return n.a.createElement("footer",{className:"footer bg-info"},n.a.createElement("div",{className:"text-center py-3"},"\xa9 2019 Copyright:",n.a.createElement("a",{href:"https://github.com/jsevern94/clicky-game",rel:"noopener noreferrer",target:"_blank"}," Jonah Severn")))},v=a(1),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={cards:v,score:0,topScore:0,clicked:[],incorrect:""},a.shuffleCards=function(e){var t,a,i;for(i=e.length-1;i>0;i--)t=Math.floor(Math.random()*(i+1)),a=e[i],e[i]=e[t],e[t]=a;return e},a.handleClick=function(e){a.removeWobble(),a.state.clicked.includes(e)?a.setState({score:0,clicked:[],incorrect:"wobble"},function(){alert("Game over... Try again!"),console.log(this.state.clicked)}):a.setState(function(t){return{score:a.state.score+1,clicked:[].concat(Object(r.a)(t.clicked),[e])}},function(){this.checkScore(),console.log(this.state.clicked)}),a.setState({cards:a.shuffleCards(v)})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({cards:this.shuffleCards(v)})}},{key:"checkScore",value:function(){this.state.score>this.state.topScore&&this.setState({topScore:this.state.score}),16===this.state.score&&(alert("You win! Keep playing to set the top score!"),this.setState({clicked:[]})),16!==this.state.score&&16===this.state.clicked.length&&(alert("Wow, nothing can stop you! Keep going!"),this.setState({clicked:[]}))}},{key:"removeWobble",value:function(){this.setState({incorrect:""})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(f,null,n.a.createElement("h1",null,"Click a picture to get started..."),n.a.createElement("h3",null,"But don't click the same picture more than once!")),n.a.createElement(p,null,this.state.cards.map(function(t){return n.a.createElement(w,{incorrect:e.state.incorrect,handleClick:e.handleClick,id:t.id,key:t.id,name:t.name,image:t.image})})),n.a.createElement(u,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.15b1231c.chunk.js.map