(this["webpackJsonpreddit-search"]=this["webpackJsonpreddit-search"]||[]).push([[0],{18:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(16),s=n.n(l),o=n(2),c=n(3),u=n(5),i=n(4),h=n(6),m=function(e){return e.children},p=function(e){return a.a.createElement(m,null,"Toolbar",a.a.createElement("main",null,e.children))},d=n(17),f=n.n(d),g=function(e){return a.a.createElement("li",null,e.title)},E=function(e){return a.a.createElement(m,null,e.title?a.a.createElement("h1",null,"/r/".concat(e.title)):null,a.a.createElement("ul",null,e.posts.map((function(e){return a.a.createElement(g,{key:e.id,title:e.title})}))))},b=function(e){return a.a.createElement("form",{action:"/"},e.children)},w=function(e){return a.a.createElement("input",{type:"text",onChange:e.changed})},y=function(e){return a.a.createElement("input",{type:"submit",value:"Submit",onClick:e.submit})},j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={inputValue:"",posts:[],title:"",error:!1},n.inputChangeHandler=function(e){n.setState({inputValue:e.target.value})},n.submitHandler=function(e){e.preventDefault();var t=n.state.inputValue;f.a.get("http://www.reddit.com/r/".concat(t,".json")).then((function(e){console.log(e);var r=e.data.data.children.map((function(e){return e.data}));n.setState({error:!1,title:t,posts:r})}),(function(e){n.setState({error:!0}),e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers),n.setState({errorMessage:"There was an error with the response: ".concat(e.response.data.error," ").concat(e.response.data.message)})):e.request?(console.log(e.request),n.setState({errorMessage:"There was an error with your request. Please try a different subreddit name."})):(console.log("Error",e.message),n.setState({errorMessage:"Something went wrong, please try again."})),console.log(e)}))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(m,null,a.a.createElement(b,null,a.a.createElement(w,{changed:this.inputChangeHandler}),a.a.createElement(y,{submit:this.submitHandler})),this.state.error?a.a.createElement("h2",null,this.state.errorMessage):a.a.createElement(E,{title:this.state.title,posts:this.state.posts}))}}]),t}(r.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(j,null))}}]),t}(a.a.Component);s.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ef5bb094.chunk.js.map