(this["webpackJsonpreddit-search"]=this["webpackJsonpreddit-search"]||[]).push([[0],{19:function(e,t,a){},2:function(e,t,a){e.exports={Post:"Post_Post__21D5z",Header:"Post_Header__A9BT8",Footer:"Post_Footer__mDFkA",Title:"Post_Title__3It5J",Author:"Post_Author__1986s",Created:"Post_Created__1keFI",FauxLink:"Post_FauxLink__x5epS"}},21:function(e,t,a){e.exports={RedditSearch:"RedditSearch_RedditSearch__1qdkQ"}},22:function(e,t,a){e.exports={Form:"SearchForm_Form__3Zpb1"}},23:function(e,t,a){e.exports={TextInput:"TextInput_TextInput__pp8P5"}},24:function(e,t,a){e.exports={Submit:"SubmitButton_Submit__3jU96"}},25:function(e,t,a){e.exports=a(48)},3:function(e,t,a){e.exports={Title:"Posts_Title__19oYp",Items:"Posts_Items__nPDCj",Item:"Posts_Item__1DWOy",Footer:"Posts_Footer__1Rlja",Link:"Posts_Link__3uaSZ"}},30:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(18),s=a.n(o),c=(a(30),a(4)),l=a(5),i=a(7),u=a(6),m=a(8),d=a(19),p=a.n(d),h=function(e){return e.children},_=function(e){return n.a.createElement(h,null,n.a.createElement("main",{className:p.a.Content},e.children))},f=a(20),E=a.n(f),g=a(21),b=a.n(g),S=a(3),w=a.n(S),N=a(2),k=a.n(N),P=function(e){return n.a.createElement("div",{className:k.a.Post},n.a.createElement("div",{className:k.a.Header},n.a.createElement("h2",{className:k.a.Title},e.title),n.a.createElement("h3",{className:k.a.Author},"By: ",e.author)),n.a.createElement("div",{className:k.a.Footer},n.a.createElement("p",{className:k.a.Created},"Created: "),n.a.createElement("p",{className:k.a.Score},"Score: ",e.score)),n.a.createElement("a",{className:k.a.FauxLink,href:"https://www.reddit.com".concat(e.url),target:"_blank",rel:"noreferrer noopener",title:e.title}))},x=function(e){return n.a.createElement(h,null,e.title?n.a.createElement("h1",{className:w.a.Title},"Now showing posts from: ","/r/".concat(e.title)):null,n.a.createElement("ul",{className:w.a.Items},e.posts.map((function(e){return n.a.createElement("li",{className:w.a.Item,key:e.id},n.a.createElement(P,{title:e.title,author:e.author,created:e.created_utc,url:e.permalink,score:e.score}))}))),e.title?n.a.createElement("div",{className:w.a.Footer},n.a.createElement("a",{className:w.a.Link,href:"https://www.reddit.com/r/".concat(e.title),target:"_blank",rel:"noopener noreferrer"},"See More on Reddit.com")):null)},v=a(22),F=a.n(v),j=function(e){return n.a.createElement("form",{action:"/",className:F.a.Form},e.children)},y=a(23),I=a.n(y),T=function(e){return n.a.createElement("input",{className:I.a.TextInput,type:"text",onChange:e.changed,placeholder:e.placeholder})},C=a(24),O=a.n(C),H=function(e){return n.a.createElement("input",{className:O.a.Submit,type:"submit",value:"Submit",onClick:e.submit})},A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={inputValue:"",posts:[],title:"",error:!1},a.inputChangeHandler=function(e){a.setState({inputValue:e.target.value})},a.submitHandler=function(e){e.preventDefault();var t=a.state.inputValue;E.a.get("https://www.reddit.com/r/".concat(t,".json")).then((function(e){console.log(e);var r=e.data.data.children.map((function(e){return e.data}));a.setState({error:!1,title:t,posts:r})}),(function(e){a.setState({error:!0}),e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers),a.setState({errorMessage:"There was an error with the response: ".concat(e.response.data.error," ").concat(e.response.data.message)})):e.request?(console.log(e.request),a.setState({errorMessage:"There was an error with your request. Please try a different subreddit name."})):(console.log("Error",e.message),a.setState({errorMessage:"Something went wrong, please try again."})),console.log(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:b.a.RedditSearch},n.a.createElement(j,null,n.a.createElement(T,{changed:this.inputChangeHandler,placeholder:"Search a subreddit"}),n.a.createElement(H,{submit:this.submitHandler})),this.state.error?n.a.createElement("h2",null,this.state.errorMessage):n.a.createElement(x,{title:this.state.title,posts:this.state.posts}))}}]),t}(r.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(_,null,n.a.createElement(A,null))}}]),t}(n.a.Component);s.a.render(n.a.createElement(L,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b839a8ad.chunk.js.map