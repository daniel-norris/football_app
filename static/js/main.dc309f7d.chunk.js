(this.webpackJsonpfootball_app=this.webpackJsonpfootball_app||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/star-solid.f94558c2.svg"},23:function(e,a,t){e.exports=t.p+"static/media/trophy-solid.c493da06.svg"},41:function(e,a,t){e.exports=t(75)},46:function(e,a,t){},47:function(e,a,t){e.exports=t.p+"static/media/check-double-solid.71fbc47c.svg"},48:function(e,a,t){e.exports=t.p+"static/media/random-solid.60236532.svg"},71:function(e,a,t){e.exports=t.p+"static/media/plus-square-solid.30b07bf3.svg"},72:function(e,a,t){e.exports=t.p+"static/media/globe.50b0a548.svg"},73:function(e,a,t){e.exports=t.p+"static/media/twitter.15abbb01.svg"},74:function(e,a,t){e.exports=t.p+"static/media/github.a6c899e8.svg"},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),s=t.n(r),c=(t(46),t(2)),m=t(6),i=Object(m.b)(),o=t(24),d=function(){return l.a.createElement("main",{className:"landing"},l.a.createElement("section",{className:"landing__feature"},l.a.createElement("div",{className:"flex"},l.a.createElement("img",{className:"landing__img",alt:"",src:t(47)}),l.a.createElement("div",null,l.a.createElement("h2",{className:"display-5"},"Draft"),l.a.createElement("p",{className:"text-3"},"Draft your team names. Choose the max number of players per side."))),l.a.createElement("div",{className:"flex"},l.a.createElement("img",{className:"landing__img",alt:"",src:t(48)}),l.a.createElement("div",null,l.a.createElement("h2",{className:"display-5"},"Select"),l.a.createElement("p",{className:"text-3"},"Create your team's player roster and attribute each player with a position, age and skill rating."))),l.a.createElement("div",{className:"flex"},l.a.createElement("img",{className:"landing__img",alt:"",src:t(23)}),l.a.createElement("div",null,l.a.createElement("h2",{className:"display-5"},"Predict"),l.a.createElement("p",{className:"text-3"},"Allow our algorithms to randomly assign your two team's player rosters and predict a winner.")))),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(o.a,{to:"/draft"},l.a.createElement("button",{className:"btn"},"Start"))))},u=t(10),p=t(21),h=function(e){return{type:"UPDATE_GAME",game:e}},E=t(39),f=t.n(E).a.create({baseURL:"http://ec2-35-178-16-80.eu-west-2.compute.amazonaws.com/api/",headers:{Accept:"application/json"}}),_=t(11),g=t(12),y=t(4),N=t(14),b=t(13),v=function(e){Object(N.a)(n,e);var a=Object(b.a)(n);function n(e){var t;return Object(_.a)(this,n),(t=a.call(this,e)).state={first:"",last:"",age:"",skill:0,position:""},t.handleCreatePlayer=t.handleCreatePlayer.bind(Object(y.a)(t)),t.handleFirstNameChange=t.handleFirstNameChange.bind(Object(y.a)(t)),t.handleLastNameChange=t.handleLastNameChange.bind(Object(y.a)(t)),t.handleAgeChange=t.handleAgeChange.bind(Object(y.a)(t)),t.handleSkillChange=t.handleSkillChange.bind(Object(y.a)(t)),t.handlePositionChange=t.handlePositionChange.bind(Object(y.a)(t)),t.handleRandomise=t.handleRandomise.bind(Object(y.a)(t)),t}return Object(g.a)(n,[{key:"handleFirstNameChange",value:function(e){this.setState({first:e.currentTarget.value})}},{key:"handleLastNameChange",value:function(e){this.setState({last:e.currentTarget.value})}},{key:"handleAgeChange",value:function(e){this.setState({age:e.currentTarget.value})}},{key:"handleSkillChange",value:function(e){this.setState({skill:e.currentTarget.value})}},{key:"handlePositionChange",value:function(e){this.setState({position:e.currentTarget.value})}},{key:"handleCreatePlayer",value:function(e){e.preventDefault();var a=this.props,t=a.players,n=a.game;t.length<2*n.players_per_side&&this.state.first&&this.state.last&&this.state.age&&this.state.position&&this.state.skill&&this.props.handleCreatePlayer(this.state)}},{key:"handleRandomise",value:function(e){e.preventDefault();var a=this.props,t=a.players,n=a.game,l=a.uploaded;t.length===2*n.players_per_side&&(this.props.handlePlayerUpload(n.id),this.props.handleRandomise(n,l))}},{key:"render",value:function(){var e=this,a=this.props,n=a.players,r=a.game,s=this.state,c=s.first,m=s.last,i=s.age,o=s.skill,d=s.position;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"players__wrapper"},l.a.createElement("h1",{className:"display-5 players__title"},"Create your players"),l.a.createElement("label",{className:"b-text-3"},"Player first name"),l.a.createElement("input",{onChange:function(a){return e.handleFirstNameChange(a)},type:"text",placeholder:"Player first name...",value:this.state.first}),c?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{className:"error-3"},"Enter a player name."),l.a.createElement("label",{className:"b-text-3"},"Player last name"),l.a.createElement("input",{onChange:function(a){return e.handleLastNameChange(a)},type:"text",placeholder:"Player last name...",value:this.state.last}),m?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{className:"error-3"},"Enter a player surname."),l.a.createElement("label",{className:"b-text-3"},"Age"),l.a.createElement("input",{onChange:function(a){return e.handleAgeChange(a)},type:"number",placeholder:"Player age...",value:this.state.age}),i?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{className:"error-3"},"Enter player age."),l.a.createElement("p",{className:"b-text-3"},"Skill"),l.a.createElement("div",{className:"players__skill"},l.a.createElement("div",{className:"flex column"},l.a.createElement("label",{className:"b-text-3 flex align-center",htmlFor:"skill1"},"1",l.a.createElement("img",{className:"icon",alt:"",src:t(17)})),l.a.createElement("input",{type:"radio",id:"skill1",name:"skill",value:"1",onChange:function(a){return e.handleSkillChange(a)}})),l.a.createElement("div",{className:"flex column"},l.a.createElement("label",{className:"b-text-3 flex align-center",htmlFor:"skill2"},"2",l.a.createElement("img",{className:"icon",alt:"",src:t(17)})),l.a.createElement("input",{type:"radio",id:"skill2",name:"skill",value:"2",onChange:function(a){return e.handleSkillChange(a)}})),l.a.createElement("div",{className:"flex column"},l.a.createElement("label",{className:"b-text-3 flex align-center",htmlFor:"skill3"},"3",l.a.createElement("img",{className:"icon",alt:"",src:t(17)})),l.a.createElement("input",{type:"radio",id:"skill3",name:"skill",value:"3",onChange:function(a){return e.handleSkillChange(a)}})),l.a.createElement("div",{className:"flex column"},l.a.createElement("label",{className:"b-text-3 flex align-center",htmlFor:"skill4"},"4",l.a.createElement("img",{className:"icon",alt:"",src:t(17)})),l.a.createElement("input",{type:"radio",id:"skill4",name:"skill",value:"4",onChange:function(a){return e.handleSkillChange(a)}})),l.a.createElement("div",{className:"flex column"},l.a.createElement("label",{className:"b-text-3 flex align-center",htmlFor:"skill5"},"5",l.a.createElement("img",{className:"icon",alt:"",src:t(17)})),l.a.createElement("input",{type:"radio",id:"skill5",name:"skill",value:"5",onChange:function(a){return e.handleSkillChange(a)}}))),o?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{className:"error-3"},"Enter a player skill rating."),l.a.createElement("div",{className:"players__position"},l.a.createElement("label",{className:"b-text-3",htmlFor:"position"},"Position"),l.a.createElement("select",{name:"position",id:"position",onChange:function(a){return e.handlePositionChange(a)}},l.a.createElement("option",{value:""},"Player position..."),l.a.createElement("option",{value:"Goalkeeper"},"Goalkeeper"),l.a.createElement("option",{value:"Midfielder"},"Midfielder"),l.a.createElement("option",{value:"Forward"},"Forward"))),d?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{style:{marginTop:".2rem"},className:"error-3"},"Enter player position."),l.a.createElement("div",{className:"flex align-center"},l.a.createElement("button",{onClick:function(a){return e.handleCreatePlayer(a)},className:"players__create"},l.a.createElement("img",{className:"icon",alt:"",src:t(71)}),l.a.createElement("p",{className:"b-text-3"},"Create")),l.a.createElement("p",{className:"players__tally display-5"},n.length," / ",2*r.players_per_side)),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(a){return e.handleRandomise(a)},className:"btn"},"Randomise"))),l.a.createElement("div",{className:"field__teams"},r.players_per_side<=9?Array.from({length:r.players_per_side},(function(e,a){return l.a.createElement("div",{key:a,className:"player__marker".concat(a+1)},"P",a+1)})):null,r.players_per_side<=9?Array.from({length:r.players_per_side},(function(e,a){return l.a.createElement("div",{key:a,className:"player2__marker".concat(a+1)},"P",a+1)})):null))}}]),n}(n.Component),k=Object(u.b)((function(e){return{players:e.players,game:e.game,uploaded:e.uploaded}}),(function(e){return{handleCreatePlayer:function(a){return e({type:"CREATE_PLAYER",first:(t=a).first,last:t.last,age:t.age,skill:t.skill,position:t.position});var t},handlePlayerUpload:function(a){return e(function(e){return function(a,t){f.post("/players",{players:t().players}).then((function(){return f.get("/games/".concat(e))})).then((function(e){var t=e.data;a(h(t.data))}))}}(a))},handleRandomise:function(a,t){e((function(e,a){for(var t=Object(p.a)(a().players),n=a().game.team_1.id,l=a().game.team_2.id,r=t.length/2,s=t.length-1;s>0;s--){var c=Math.floor(Math.random()*(s+1)),m=t[s];t[s]=t[c],t[c]=m}var i=t.slice(0,r);i.map((function(e,a){return e.team_id=n}));var o=t.slice(r,t.length);o.map((function(e,a){return e.team_id=l})),e({type:"RANDOMISE_TEAMS",team1:i,team2:o})})),i.push("/draft/players/".concat(a.id,"/view"))}}}))(v),C=function(e){Object(N.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(_.a)(this,t),(n=a.call(this,e)).state={team_1:"",team_2:"",players_side:0},n.handleSquadSubmit=n.handleSquadSubmit.bind(Object(y.a)(n)),n.handleSquad1NameChange=n.handleSquad1NameChange.bind(Object(y.a)(n)),n.handleSquad2NameChange=n.handleSquad2NameChange.bind(Object(y.a)(n)),n.handlePlayersPerSideChange=n.handlePlayersPerSideChange.bind(Object(y.a)(n)),n}return Object(g.a)(t,[{key:"handleSquadSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.team_1,n=a.team_2,l=a.players_side;t&&n&&l<=9&&l>0&&this.props.handleCreateTeams(this.state)}},{key:"handleSquad1NameChange",value:function(e){this.setState({team_1:e.currentTarget.value})}},{key:"handleSquad2NameChange",value:function(e){this.setState({team_2:e.currentTarget.value})}},{key:"handlePlayersPerSideChange",value:function(e){this.setState({players_side:e.currentTarget.value})}},{key:"render",value:function(){var e=this,a=this.state,t=a.players_side,n=a.team_1,r=a.team_2;return l.a.createElement("div",{className:"teams__container"},l.a.createElement("form",null,l.a.createElement("h1",{className:"teams__title display-5"},"Create your teams"),l.a.createElement("label",{className:"b-text-3",htmlFor:"squad1"},"Squad 1"),l.a.createElement("input",{onChange:function(a){return e.handleSquad1NameChange(a)},type:"text",id:"squad1",name:"squad1",placeholder:"Enter squad name..."}),n?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{className:"error-3"},"Enter a team name for Squad 1."),l.a.createElement("label",{className:"b-text-3",htmlFor:"squad2"},"Squad 2"),l.a.createElement("input",{onChange:function(a){return e.handleSquad2NameChange(a)},type:"text",id:"squad2",name:"squad2",placeholder:"Enter squad name..."}),r?l.a.createElement("p",{className:"hidden"},"error"):l.a.createElement("p",{className:"error-3"},"Enter a team name for Squad 2."),l.a.createElement("section",{className:"flex column"},l.a.createElement("label",{className:"b-text-3"},"Players per side"),l.a.createElement("input",{onChange:function(a){return e.handlePlayersPerSideChange(a)},type:"number",placeholder:"Choose team size..."}),t>9||0===t?l.a.createElement("p",{className:"error-3"},"Enter a team size of between 1 - 9 players."):l.a.createElement("p",{className:"hidden"},"error"),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(a){return e.handleSquadSubmit(a)},className:"btn teams__btn"},"Confirm")))),l.a.createElement("div",{className:"field__teams"},t<=9?Array.from({length:t},(function(e,a){return l.a.createElement("div",{key:a,className:"player__marker".concat(a+1)},"P",a+1)})):null))}}]),t}(n.Component),x=Object(u.b)((function(e){return{teams:e.teams}}),(function(e){return{handleCreateTeams:function(a){e(function(e){var a=e.team_1,t=e.team_2,n=e.players_side;return function(e){f.post("/games",{team_1:a,team_2:t,players_side:n}).then((function(a){var t=a.data;e(function(e){return{type:"CREATE_TEAMS",teams:e}}(t.data))}))}}(a)),i.push("/draft/players")}}}))(C),O=function(e){Object(N.a)(n,e);var a=Object(b.a)(n);function n(){return Object(_.a)(this,n),a.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.loaded||this.props.uploaded||this.props.handleGameUpdate(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.game;return e.loaded?l.a.createElement("main",null,l.a.createElement("section",{className:"randomise__section"},l.a.createElement("div",{className:"flex"},l.a.createElement("h1",{className:"display-5 randomise__title"},a.team_1.name," - "),l.a.createElement("p",{className:"display-5"},100*a.team_1.winChance,"%"),3===a.winner||1===a.winner?l.a.createElement("img",{className:"icon-med",alt:"",src:t(23)}):null),l.a.createElement("table",{className:"randomise__table"},l.a.createElement("thead",{className:"randomise__table-header"},l.a.createElement("tr",{className:"b-text-3"},l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Skill"),l.a.createElement("th",null,"Position"))),l.a.createElement("tbody",{className:"randomise__table-body"},0===a.team_1.players.length?l.a.createElement("tr",null,l.a.createElement("td",{colspan:"5"},"No players to display")):a.team_1.players.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.skill),l.a.createElement("td",null,e.position))}))))),l.a.createElement("section",{className:"randomise__section"},l.a.createElement("div",{className:"flex"},l.a.createElement("h1",{className:"display-5 randomise__title"},a.team_2.name," - "),l.a.createElement("p",{className:"display-5"},100*a.team_2.winChance,"%"),3===a.winner||2===a.winner?l.a.createElement("img",{className:"icon-med",alt:"",src:t(23)}):null),l.a.createElement("table",{className:"randomise__table"},l.a.createElement("thead",{className:"randomise__table-header"},l.a.createElement("tr",{className:"b-text-3"},l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Skill"),l.a.createElement("th",null,"Position"))),l.a.createElement("tbody",{className:"randomise__table-body"},0===a.team_2.players.length?l.a.createElement("tr",null,l.a.createElement("td",{colspan:"5"},"No players to display")):a.team_2.players.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.skill),l.a.createElement("td",null,e.position))})))))):l.a.createElement("p",{className:"display-5"},"Loading...")}}]),n}(n.Component),S=Object(u.b)((function(e){return{game:e.game,loaded:e.loaded,uploaded:e.uploaded}}),(function(e){return{handleGameUpdate:function(a){return e(function(e){return function(a){f.get("/games/".concat(e)).then((function(e){var t=e.data;a(h(t.data))}))}}(a))}}}))(O),j=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer__wrapper"},l.a.createElement("div",{className:"flex"},l.a.createElement("a",{className:"footer__social",href:"/"},l.a.createElement("img",{className:"footer__icon",alt:"",src:t(72)}),l.a.createElement("p",{className:"text-3"},"norrisdan.com")),l.a.createElement("a",{className:"footer__social",href:"/"},l.a.createElement("img",{className:"footer__icon",alt:"",src:t(73)}),l.a.createElement("p",{className:"text-3"},"@danielpnorris")),l.a.createElement("a",{className:"footer__social",href:"/"},l.a.createElement("img",{className:"footer__icon",alt:"",src:t(74)}),l.a.createElement("p",{className:"text-3"},"@daniel-norris"))),l.a.createElement("p",{className:"text-3"},"Copyright, 2020. Dan Norris")))},P=function(e){Object(N.a)(t,e);var a=Object(b.a)(t);function t(){return Object(_.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props,a=e.game;return e.loaded?l.a.createElement("div",{className:"field__teams"},l.a.createElement("a",{id:"attribution",href:"https://www.vecteezy.com/free-vector/football-field"},"Football Field Vectors by Vecteezy"),a.team_1.players.map((function(e,a){return l.a.createElement("div",{key:a,className:"player__marker".concat(a+1)},e.first_name[0],". ",e.last_name[0],".")})),a.team_2.players.map((function(e,a){return l.a.createElement("div",{key:a,className:"player2__marker".concat(a+1)},e.first_name[0],". ",e.last_name[0],".")}))):null}}]),t}(n.Component),w=Object(u.b)((function(e){return{game:e.game,loaded:e.loaded}}))(P),A=function(){return l.a.createElement("div",{className:"field__landing"},l.a.createElement("div",{className:"demo__marker1"},"P1"),l.a.createElement("div",{className:"demo__marker2"},"P2"),l.a.createElement("div",{className:"demo__marker3"},"P3"),l.a.createElement("div",{className:"demo__marker4"},"P4"),l.a.createElement("div",{className:"demo__marker5"},"P5"),l.a.createElement("div",{className:"demo__marker6"},"P6"))},q=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("a",{href:"https://daniel-norris.github.io/football_app/#/"},l.a.createElement("h1",{className:"logo"},"Foo",l.a.createElement("span",{className:"logo__highlight"},"Draft"))))},T=function(){return l.a.createElement(c.b,{history:i},l.a.createElement(q,null),l.a.createElement("div",{className:"container"},l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(A,null),l.a.createElement(d,null))),l.a.createElement(c.a,{exact:!0,path:"/draft"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(x,null))),l.a.createElement(c.a,{exact:!0,path:"/draft/players"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement("div",{className:"teams__container"},l.a.createElement(k,null)))),l.a.createElement(c.a,{exact:!0,path:"/draft/players/:id/view",render:function(e){var a=e.match;return l.a.createElement("div",{className:"content-wrap"},l.a.createElement("div",{className:"randomise__container"},l.a.createElement(w,null),l.a.createElement(S,{id:a.params.id})))}}),l.a.createElement("p",null,"404. No page found.")),l.a.createElement(j,null)))},F=t(16),R=t(3),M=function(e){return e.game.team_1.players.map((function(e,a){return e.skill})).reduce((function(e,a){return+e+ +a}),0)},D=function(e){return e.game.team_2.players.map((function(e,a){return e.skill})).reduce((function(e,a){return+e+ +a}),0)},L=function(e){return M(e)+D(e)},U=function(e){return+e.toFixed(2)},G=function(e){return M(e)===D(e)},z=function(e){return M(e)>D(e)?1:2},I=function(e,a){switch(a.type){case"CREATE_PLAYER":return function(e,a){var t=a.first,n=a.last,l=a.age,r=a.skill,s=a.position;return Object(R.a)(Object(R.a)({},e),{},{players:[].concat(Object(p.a)(e.players),[{first:t,last:n,skill:r,age:l,position:s}])})}(e,a);case"CREATE_TEAMS":return function(e,a){var t=a.teams;return Object(R.a)(Object(R.a)({},e),{},{game:t})}(e,a);case"UPDATE_GAME":return function(e){return Object(R.a)(Object(R.a)({},e),{},{game:Object(R.a)(Object(R.a)({},e.game),{},{winner:G(e)?3:z(e),team_1:Object(R.a)(Object(R.a)({},e.game.team_1),{},{winChance:U(M(e)/L(e))}),team_2:Object(R.a)(Object(R.a)({},e.game.team_2),{},{winChance:U(D(e)/L(e))})})})}(function(e,a){var t=a.game;return Object(R.a)(Object(R.a)({},e),{},{game:t,loaded:!0})}(e,a));case"RANDOMISE_TEAMS":return function(e,a){var t=a.team1,n=a.team2;return Object(R.a)(Object(R.a)({},e),{},{team1:t,team2:n,uploaded:!0})}(e,a);default:return e}},V={players:[],game:[],team1:[],team2:[],loaded:!1,uploaded:!1},J=t(40),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,Y=Object(F.d)(I,V,X(Object(F.a)(J.a)));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.a,{store:Y},l.a.createElement(T,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.dc309f7d.chunk.js.map