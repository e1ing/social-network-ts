(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{13:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__30JT8",dialogItems:"Dialogs_dialogItems__10n3I",active:"Dialogs_active__RX1PQ",messages:"Dialogs_messages__3i4-W",message:"Dialogs_message__uQ6yh"}},15:function(e,t,s){e.exports={nav:"Navbar_nav__3BiCR",item:"Navbar_item__2q8AI",activeLink:"Navbar_activeLink__3kze7"}},34:function(e,t,s){e.exports={userPhoto:"users_userPhoto__2MEGo",selectedPage:"users_selectedPage__349lx"}},35:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__1UyEY",posts:"MyPosts_posts__3qYkg"}},36:function(e,t,s){e.exports={item:"Post_item__Xcglc"}},37:function(e,t,s){e.exports={header:"Header_header__80499",loginBlock:"Header_loginBlock__1uwoe"}},38:function(e,t,s){},60:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(26),c=s.n(i),r=(s(38),s(60),s(15)),o=s.n(r),u=s(6),l=s(1),d=function(){return Object(l.jsxs)("nav",{className:o.a.nav,children:[Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(u.b,{to:"/profile",activeClassName:o.a.activeLink,children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(u.b,{to:"/dialogs",activeClassName:o.a.activeLink,children:" Messages"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(u.b,{to:"/users",activeClassName:o.a.activeLink,children:" Users"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(u.b,{to:"/news",children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(u.b,{to:"/music",children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(u.b,{to:"/settings",children:"Settings"})})]})},j=s(4),b=s(24),p=s(2),g=s(85),h="UPDATE-NEW-MESSAGE-BODY",O="SEND-MESSAGE",f={dialogs:[{id:Object(g.a)(),name:"Dimych"},{id:Object(g.a)(),name:"Andrew"},{id:Object(g.a)(),name:"Sveta"},{id:Object(g.a)(),name:"Sasha"},{id:Object(g.a)(),name:"Viktor"}],messages:[{id:Object(g.a)(),message:"Hi"},{id:Object(g.a)(),message:"What's up"},{id:Object(g.a)(),message:"Yo"},{id:Object(g.a)(),message:"Crap!"},{id:Object(g.a)(),message:"Hi, Bro!"}],newMessageBody:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},{newMessageBody:t.newText});case O:var s=e.newMessageBody;return Object(p.a)(Object(p.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(b.a)(e.messages),[{id:Object(g.a)(),message:s}])});default:return e}},m=s(13),v=s.n(m),P=function(e){return Object(l.jsx)("div",{className:v.a.dialog,children:e.message})},w=function(e){var t=e.id,s=e.name;return Object(l.jsx)("div",{className:v.a.dialog+" "+v.a.active,children:Object(l.jsx)(u.b,{to:"/dialogs/"+t,children:s})})},S=w,_=function(e){var t=e.updateNewMessageBody,s=e.sendMessage,n=e.dialogsPage,i=e.isAuth,c=n.dialogs.map((function(e){return Object(l.jsx)(S,{name:e.name,id:e.id},e.id)})),r=n.messages.map((function(e){return Object(l.jsx)(P,{message:e.message,id:e.id},e.id)})),o=a.a.createRef(),u=n.newMessageBody;return i?Object(l.jsxs)("div",{className:v.a.dialogs,children:[Object(l.jsx)("div",{className:v.a.dialogItems,children:c}),Object(l.jsxs)("div",{className:v.a.messages,children:[Object(l.jsx)("div",{children:r}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{value:u,onChange:function(e){var s=e.target.value;t(s)},placeholder:"Enter message"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){s()},children:" Send"})})]})]}),Object(l.jsx)("button",{children:"Send"}),Object(l.jsx)("textarea",{ref:o})]}):Object(l.jsx)(j.a,{to:"/login"})},C=s(7),y=s(16),k=s(54),N=function(e){return{isAuth:e.auth.isAuth}};function T(e){return Object(C.b)(N)((function(t){var s=t.isAuth,n=Object(k.a)(t,["isAuth"]);return s?Object(l.jsx)(e,Object(p.a)({},n)):Object(l.jsx)(j.a,{to:"/login"})}))}var E=Object(y.c)(Object(C.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:h,newText:e}}(t))},sendMessage:function(){e({type:O})}}})),T)(_),M=s(19),U=s(20),A=s(22),I=s(21),F=s(48),D=s.n(F).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b00b044a-fabf-40f0-8522-d4dd85a812f0"}}),L=function(e,t){return D.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},B=function(e){return D.post("follow/".concat(e))},R=function(e){return D.delete("follow/".concat(e))},G={getProfile:function(e){return D.get("profile/"+e)},getStatus:function(e){return D.get("profile/status/"+e)},updateStatus:function(e){return D.put("profile/status/",{status:e})}},z=function(){return D.get("auth/me")},W={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},H=function(e){return{type:Z,isFetching:e}},q=function(e,t){return{type:$,isFetching:e,id:t}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!0}):e}))});case X:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!1}):e}))});case Q:return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case V:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case K:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.totalUsersCount});case Z:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case $:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(b.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!=t.id}))});default:return e}},J="FOLLOW",X="UNFOLLOW",Q="SET_USERS",V="SET_CURRENT_PAGE",K="SET_TOTAL_USERS_COUNT",Z="TOGGLE_IS_FETCHING",$="TOGGLE_IS_FOLLOWING_PROGRESS",ee=s(34),te=s.n(ee),se=s.p+"static/media/user.32c67670.jpg",ne=function(e){var t=e.users,s=e.unfollow,n=e.follow,a=e.totalUsersCount,i=e.pageSize,c=e.onPageChanged,r=e.currentPage,o=e.followingInProgress,d=Math.ceil(a/i);console.log("pages",d),console.log("totalUsersCount",a),console.log("pageSize",i);for(var j=[],b=1;b<=d;b++)j.push(b);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:j.map((function(e){return Object(l.jsx)("span",{className:r===e?te.a.selectedPage:"",onClick:function(t){c(e)},children:e})}))}),t.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(u.b,{to:"/profile/",children:Object(l.jsx)("img",{src:null!==e.photos.small?e.photos.small:se,className:te.a.userPhoto})})}),Object(l.jsx)("div",{children:e.followed?Object(l.jsx)("button",{disabled:o.some((function(t){return t===e.id})),onClick:function(){s(e.id)},children:" Unfollow "}):Object(l.jsx)("button",{disabled:o.some((function(t){return t===e.id})),onClick:function(){n(e.id)},children:"Follow"})})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:e.name}),Object(l.jsx)("div",{children:e.status})]})]},e.id)}))]})},ae=s.p+"static/media/loader.af80ae8f.gif",ie=function(){return Object(l.jsx)("div",{style:{backgroundColor:"white"},children:Object(l.jsx)("img",{src:ae})})},ce=function(e){Object(A.a)(s,e);var t=Object(I.a)(s);function s(){var e;Object(M.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(U.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[this.props.isFetching?Object(l.jsx)(ie,{}):null,Object(l.jsx)(ne,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(n.Component),re=Object(y.c)(T,Object(C.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e,t){return function(t){t(q(!0,e)),B(e).then((function(s){0===s.data.resultCode&&t({type:J,userId:e}),t(q(!1,e))}))}},unfollow:function(e,t){return function(t){t(q(!0,e)),R(e).then((function(s){0===s.data.resultCode&&t({type:X,userId:e}),t(q(!1,e))}))}},setCurrentPage:function(e){return{type:V,currentPage:e}},toggleFollowingProgress:q,getUsers:function(e,t){return function(s){s(H(!0)),L(e,t).then((function(e){var t,n;s(H(!1)),s((t=e.items,{type:Q,users:t})),s((n=e.totalCount,{type:K,totalUsersCount:n}))}))}}}))(ce),oe=function(e){Object(A.a)(s,e);var t=Object(I.a)(s);function s(){var e;Object(M.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(U.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[!this.state.editMode&&Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"----"})}),this.state.editMode&&Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})})]})}}]),s}(n.Component),ue=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return t?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"})}),Object(l.jsxs)("div",{className:"classes.descriptionBlock",children:[Object(l.jsx)("img",{src:t.photos.large}),Object(l.jsx)(oe,{status:s,updateStatus:n})]})]}):Object(l.jsx)(ie,{})},le={newPostText:"",posts:[{id:Object(g.a)(),message:"Hi, how are you?",likesCount:12},{id:Object(g.a)(),message:"It's my first post",likesCount:7},{id:Object(g.a)(),message:"It's my second post",likesCount:5}],profile:null,status:""},de=function(e){return{type:he,status:e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;Object(p.a)(Object(p.a)({},e),{},{posts:Object(b.a)(e.posts)});switch(t.type){case be:var s={id:Object(g.a)(),message:e.newPostText,likesCount:0};return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(b.a)(e.posts),[s])});case pe:return Object(p.a)(Object(p.a)({},e),{},{newPostText:t.newText});case ge:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case he:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});default:return e}},be="ADD-POST",pe="UPDATE-NEW-POST-TEXT",ge="SET_USER_PROFILE",he="SET_STATUS",Oe=s(35),fe=s.n(Oe),xe=s(36),me=s.n(xe),ve=function(e){e.id;var t=e.message,s=e.likesCount;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:me.a.item,children:[Object(l.jsx)("img",{src:"https://tlum.ru/uploads/c2c776f1f20dd128d27ab941c26168c2e866ef6551da751aea7e83ae862a032a.jpeg"}),Object(l.jsxs)("div",{className:me.a.item,children:[t,Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"like"}),s]})]})]})})},Pe=function(e){var t=e.profilePage.posts.map((function(e){return Object(l.jsx)(ve,{id:e.id,message:e.message,likesCount:e.likesCount})}));return Object(l.jsxs)("div",{className:fe.a.postsBlock,children:[Object(l.jsx)("h3",{children:" My posts "}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewPostText(s)},value:e.profilePage.newPostText})}),Object(l.jsx)("button",{onClick:function(){e.addPost()},children:" Add post"})]}),Object(l.jsx)("div",{className:fe.a.posts,children:t})]})},we=Object(C.b)((function(e){return{profilePage:e.profilePage,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:be})},updateNewPostText:function(t){var s=function(e){return{type:pe,newText:e}}(t);e(s)}}}))(Pe),Se=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return Object(l.jsxs)("div",{children:[Object(l.jsx)(ue,{profile:t,status:s,updateStatus:n}),Object(l.jsx)(we,{})]})},_e=function(e){Object(A.a)(s,e);var t=Object(I.a)(s);function s(){return Object(M.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;e||(e="17186"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(Se,Object(p.a)(Object(p.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),s}(n.Component),Ce=Object(y.c)(Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){G.getProfile(e).then((function(e){var s;t((s=e.data,{type:ge,profile:s}))}))}},getStatus:function(e){return function(t){G.getStatus(e).then((function(e){t(de(e.data))}))}},updateStatus:function(e){return function(t){G.updateStatus(e).then((function(s){0===s.data.resultCode&&t(de(e))}))}}}),j.f,T)(_e),ye={id:null,email:null,login:null,isAuth:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.data),{},{isAuth:!0});default:return e}},Ne="SET_USER_DATA",Te=s(37),Ee=s.n(Te),Me=function(e){var t=e.isAuth,s=e.login;return Object(l.jsxs)("header",{className:Ee.a.header,children:[Object(l.jsx)("img",{alt:"Some beach here",src:"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}),Object(l.jsx)("div",{className:Ee.a.loginBlock,children:t?s:Object(l.jsx)(u.b,{to:"/login",children:"Login"})})]})},Ue=function(e){Object(A.a)(s,e);var t=Object(I.a)(s);function s(){return Object(M.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(l.jsx)(Me,Object(p.a)({},this.props))}}]),s}(n.Component),Ae=Object(C.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{getAuthUserData:function(){return function(e){z().then((function(t){var s;0===t.data.resultCode&&e((s=t.data.data,{type:Ne,data:s}))}))}}})(Ue),Ie=s(49),Fe=s(53),De=function(e){return Object(Ie.a)(e),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" Log in "}),Object(l.jsx)(Le,{})]})},Le=function(){var e=Object(Fe.a)({initialValues:{login:"",password:"",rememberMe:!1},validate:function(e){return e.login?e.password?void 0:{password:"Password is required"}:{login:"Email is required"}},onSubmit:function(e){alert(JSON.stringify(e))}});return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",Object(p.a)({placeholder:"Login"},e.getFieldProps("login")))}),e.errors.login&&e.touched.login?Object(l.jsx)("div",{children:e.errors.login}):null,Object(l.jsx)("div",{children:Object(l.jsx)("input",Object(p.a)({placeholder:"Password"},e.getFieldProps("password")))}),e.errors.password&&e.touched.password?Object(l.jsx)("div",{children:e.errors.password}):null,Object(l.jsxs)("div",{children:[Object(l.jsx)("input",Object(p.a)({type:"checkbox",checked:e.values.rememberMe},e.getFieldProps("rememberMe")))," remember me"]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"Submit"})})]})},Be=function(){return Object(l.jsx)(u.a,{children:Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(Ae,{}),Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"app-wrapper-content",children:[Object(l.jsx)(j.b,{path:"/dialogs",render:function(){return Object(l.jsx)(E,{})}}),Object(l.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(Ce,{})}}),Object(l.jsx)(j.b,{path:"/users",render:function(){return Object(l.jsx)(re,{})}}),Object(l.jsx)(j.b,{path:"/login",render:function(){return Object(l.jsx)(De,{})}})]})]})})},Re=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,86)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))},Ge=s(52),ze=Object(y.b)({profilePage:je,dialogsPage:x,usersPage:Y,auth:ke}),We=Object(y.d)(ze,Object(y.a)(Ge.a));window.store=We;var He=We;He.getState(),c.a.render(Object(l.jsx)(u.a,{children:Object(l.jsx)(C.a,{store:He,children:Object(l.jsx)(Be,{})})}),document.getElementById("root")),Re()}},[[84,1,2]]]);
//# sourceMappingURL=main.8aced4ed.chunk.js.map