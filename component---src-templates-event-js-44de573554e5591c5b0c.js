(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),s=n.n(i),o=n(160),c=n(159),u=n(169),l=n.n(u),m=n(150),p=n(4),h=n.n(p),d=n(176),g=n(207),f=n.n(g),v=n(208),y=n.n(v),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.cover_img,t=this.props.classes;return s.a.createElement(l.a,{item:!0,xs:12,sm:4},s.a.createElement(f.a,{className:t.card},s.a.createElement(y.a,null,s.a.createElement(d.a,{filename:e}))))},t}(i.Component);E.propTypes={cover_img:h.a.string.isRequired};var _=Object(m.withStyles)(function(e){return{card:{maxWidth:400}}})(E),w=n(182),x=n(183),N=n.n(x),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.siteTitle,n=e.location,a=e.siteDescription,r=e.date,i=this.props.classes;return s.a.createElement("div",{className:i.header},s.a.createElement("div",{className:i.container},s.a.createElement(N.a,{variant:"h3",className:i.whiteText},t),s.a.createElement(N.a,{variant:"h6",className:i.whiteText},n," ∙ ",r),s.a.createElement(N.a,{variant:"body1",className:i.whiteText},a)))},t}(i.Component);T.propTypes={siteTitle:h.a.string.isRequired,location:h.a.string.isRequired,date:h.a.string.isRequired,siteDescription:h.a.string.isRequired};var C=Object(m.withStyles)(function(e){return{header:{background:w.a,marginBottom:"1.45rem",height:"30vh"},container:{margin:"0 auto",padding:"1.45rem 1.0875rem",maxWidth:960,display:"flex",flexDirection:"column",justifyContent:"center",height:"30vh"},whiteText:{color:"white"}}})(T),I=n(184);n.d(t,"pageQuery",function(){return M});var b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).createImageGrid=function(e,t){return s.a.createElement("div",{className:e.root},s.a.createElement(l.a,{container:!0,spacing:16},t.map(function(e,t){return s.a.createElement(_,{cover_img:e.node.relativePath})})))},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.props.data,n=t.event.frontmatter,a=t.images.edges;return s.a.createElement(o.a,null,s.a.createElement(c.a,{title:n.title}),s.a.createElement(C,{siteTitle:n.title,location:n.location,siteDescription:n.description,date:n.date}),this.createImageGrid(e,a))},t}(i.Component),M=(t.default=Object(I.a)(Object(m.withStyles)(function(e){return{root:{flexGrow:1,margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(b)),"2830845331")},182:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="#7955B4"},184:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),s=n.n(i),o=n(150),c=n(220),u=n.n(c),l=n(211),m=n.n(l),p=n(185);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(p.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return s.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},s.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},s.a.createElement(u.a,null),s.a.createElement(e,this.props)))},n}(s.a.Component)}},185:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return p});n(77),n(54),n(78),n(215);var r=n(166),i=n(150),s=n(218),o=n.n(s),c=n(219),u=n.n(c),l=Object(i.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:l,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function p(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=m()),a.__INIT_MATERIAL_UI__):m()}}).call(this,n(214),n(73))}}]);
//# sourceMappingURL=component---src-templates-event-js-44de573554e5591c5b0c.js.map