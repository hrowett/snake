(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(52)},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),s=n.n(o),c=(n(26),n(3)),i=n(4),l=n(8),d=n(5),h=n(7),p=(n(28),n(11)),u=n(6),m=n(1),v=100,f=20,E="DOWN";n(34);function k(e){for(var t=[],n=0;n<e.size;n++){t[n]=[];for(var a=0;a<e.size;a++)t[n][a]=""}var o={width:f,height:f};return r.a.createElement("div",{className:"snakeBoard",align:"centre"},t.map(function(e,t){return r.a.createElement("div",{className:"snakeBoardRow",key:t},e.map(function(e,t){return r.a.createElement("div",{className:"snakeBoardCell",style:o,key:t})}))}))}n(36);var b=function(e){return r.a.createElement("div",null,e.coords.map(function(t,n){var a={left:t[0]*f+"px",top:t[1]*f+"px",background:e.lost?"darkred":"",width:f,height:f};return r.a.createElement("div",{className:"snakeBody",style:a,key:n})}))},O=(n(38),function(e){var t={left:e.coords[0]*f+"px",top:e.coords[1]*f+"px",width:f,height:f};return r.a.createElement("div",{className:"snakeFood",style:t})}),g=n(19),S=n.n(g),N=(n(44),n(46),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e,t){n.props.onChange(e),t.preventDefault()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sliderComponent"},r.a.createElement("div",{className:"sliderLabel"},this.props.label),r.a.createElement(S.a,{className:"rangeSlider",value:this.props.value,orientation:"vertical",min:this.props.minValue,max:this.props.maxValue,tooltip:!1,onChange:this.handleChange}),r.a.createElement("div",{className:"sliderValue"},this.props.value))}}]),t}(a.Component));function j(e){var t=e.direction,n=e.coords.slice(),a=n[n.length-1],r={DOWN:[a[0],a[1]+1],UP:[a[0],a[1]-1],LEFT:[a[0]-1,a[1]],RIGHT:[a[0]+1,a[1]]};return n.push(r[t]),n.shift(),{type:"MOVE_SNAKE",coords:n}}function C(e){return{type:"SET_FOOD",food:e}}function y(e){return{type:"SET_DIRECTION",direction:e}}function G(e){return{type:"PREPEND_SNAKE",coords:e}}function w(){return{type:"NEW_GAME"}}function _(){return{type:"LOSE_GAME"}}function z(){return{type:"INCREMENT_SCORE"}}function M(e){return{type:"CHANGE_BOARD_SIZE",boardSize:e}}function T(e){return{type:"CHANGE_GAME_SPEED",slider:e}}n(48);var D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).handleBoardSizeChange=function(t){e.props.changeBoardSize(t),e.resetGame()},e.handleGameSpeedChange=function(t){var n=v-t;e.props.changeGameSpeed(n)},e.directionOnNextTick=E,e.resetGame=e.resetGame.bind(Object(m.a)(Object(m.a)(e))),e.checkGameLoss=e.checkGameLoss.bind(Object(m.a)(Object(m.a)(e))),e.handleBoardSizeChange=e.handleBoardSizeChange.bind(Object(m.a)(Object(m.a)(e))),e.handleGameSpeedChange=e.handleGameSpeedChange.bind(Object(m.a)(Object(m.a)(e))),e.checkCollision=e.checkCollision.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setControls(),this.generateNewFood()}},{key:"componentDidUpdate",value:function(){this.checkFoodCollision(),this.checkGameLoss()}},{key:"checkGameLoss",value:function(){var e=this.props.snake.coords,t=e[e.length-1];this.props.game.lost||-1!==t[0]&&t[0]!==this.props.slider.boardSize&&-1!==t[1]&&t[1]!==this.props.slider.boardSize&&!this.checkCollision(t,e.slice(0,-1))||(clearInterval(this.snakeInterval),this.props.loseGame())}},{key:"checkCollision",value:function(e,t){return t.some(function(t){return t[0]===e[0]&&t[1]===e[1]})}},{key:"checkFoodCollision",value:function(){var e=this.props.snake.coords,t=e[e.length-1],n=this.props.food;t[0]===n[0]&&t[1]===n[1]&&(this.generateNewFood(),this.props.incrementScore(),this.props.prependSnake(e[e.length-1].slice()))}},{key:"resetGame",value:function(){this.props.newGame(),this.generateNewFood(),clearInterval(this.snakeInterval),this.directionOnNextTick="DOWN"}},{key:"generateNewFood",value:function(){var e=Math.floor(Math.random()*this.props.slider.boardSize),t=Math.floor(Math.random()*this.props.slider.boardSize);this.checkCollision([e,t],this.props.snake.coords)?this.generateNewFood():this.props.setFood([e,t])}},{key:"setControls",value:function(){var e=this;document.addEventListener("keydown",function(t){t.preventDefault();var n=e.props.snake.coords,a=n[n.length-1][0],r=n[n.length-1][1];switch(t.keyCode){case 65:case 37:"RIGHT"!==e.props.snake.direction&&0!==a&&(e.directionOnNextTick="LEFT");break;case 68:case 39:"LEFT"!==e.props.snake.direction&&a!==e.props.slider.boardSize-1&&(e.directionOnNextTick="RIGHT");break;case 83:case 40:"UP"!==e.props.snake.direction&&r!==e.props.slider.boardSize-1&&(e.directionOnNextTick="DOWN");break;case 87:case 38:"DOWN"!==e.props.snake.direction&&0!==r&&(e.directionOnNextTick="UP");break;case 32:e.props.game.lost&&e.resetGame(),clearInterval(e.snakeInterval),e.snakeInterval=setInterval(function(){e.props.setDirection(e.directionOnNextTick),e.props.moveSnake(e.props.snake)},e.props.slider.value)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"snakeTitle"},"Snake"),r.a.createElement("h1",{className:"snakeCurrentScore"},"Score: ",this.props.game.score),r.a.createElement("h3",{className:"snakeHighScore"},"High Score: ",this.props.game.highScore),r.a.createElement("div",{className:"snakeGame"},r.a.createElement(N,{className:"sliderComponent",onChange:this.handleGameSpeedChange,minValue:20,maxValue:v,label:"Speed",value:v-this.props.slider.value}),r.a.createElement("div",{className:"snakeBoardWrapper"},r.a.createElement(k,{size:this.props.slider.boardSize}),r.a.createElement(b,{coords:this.props.snake.coords,lost:this.props.game.lost,size:this.props.slider.boardSize}),r.a.createElement(O,{coords:this.props.food,size:this.props.slider.boardSize}))),r.a.createElement("p",{className:"snakeHelp"},"Press spacebar to begin!"))}}]),t}(a.Component);var I=Object(p.b)(function(e){return e},function(e){return Object(u.a)({moveSnake:j,setFood:C,setDirection:y,prependSnake:G,newGame:w,loseGame:_,incrementScore:z,changeBoardSize:M,changeGameSpeed:T},e)})(D),A=n(20),x=n(2),F={direction:E,coords:[[Math.floor(9),0],[Math.floor(9),1],[Math.floor(9),2]]},B=[],R={lost:!1,score:0,highScore:0};function W(e){var t=e.score,n=e.highScore;return t>n?t:n}var L={value:50,boardSize:18},H=Object(u.b)({snake:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_SNAKE":return Object(x.a)({},e,{coords:t.coords});case"SET_DIRECTION":return Object(x.a)({},e,{direction:t.direction});case"PREPEND_SNAKE":return Object(x.a)({},e,{coords:[[t.coords]].concat(Object(A.a)(e.coords))});case"NEW_GAME":return{direction:E,coords:[[Math.floor(9),0],[Math.floor(9),1],[Math.floor(9),2]]}}return e},food:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FOOD":return t.food;case"NEW_GAME":return B}return e},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;switch((arguments.length>1?arguments[1]:void 0).type){case"LOSE_GAME":return Object(x.a)({},e,{lost:!0,highScore:W(e)});case"NEW_GAME":return Object(x.a)({},e,{score:0,lost:!1});case"INCREMENT_SCORE":return Object(x.a)({},e,{score:e.score+1})}return e},slider:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_GAME_SPEED":return Object(x.a)({},e,{value:t.slider});case"CHANGE_BOARD_SIZE":return Object(x.a)({},e,{boardSize:t.boardSize})}return e}}),P=(n(50),Object(u.c)(H)),V=function(){return r.a.createElement("div",{className:"appSnake"},r.a.createElement(I,null))},K=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{store:P,className:"snakeGame"},r.a.createElement(V,{className:"snake"})))}}]),t}(a.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"activeSnakeContainer"},r.a.createElement(K,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.c3af7ee9.chunk.js.map