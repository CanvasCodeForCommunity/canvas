(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(154),l=n.n(s),c=n(147),u=n(170),d=n(167),f=n(153),p=n(4),m=n.n(p),g=n(168),v=n(151),x=n.n(v),b=n(164),y=n.n(b),h=n(169),j=n.n(h),E=n(197),C=n.n(E),P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.title,a=e.location,r=e.description,i=e.cover_img,s=this.props.classes;return o.a.createElement(l.a,{item:!0,xs:12,sm:4},o.a.createElement(y.a,{className:s.card},o.a.createElement(j.a,{component:f.Link,to:t},o.a.createElement(g.a,{filename:i}),o.a.createElement(C.a,null,o.a.createElement(x.a,{variant:"h6",component:"h2"},n),o.a.createElement(x.a,{variant:"body2"},a),o.a.createElement(x.a,{gutterBottom:!0,component:"p",noWrap:!0},r)))))},t}(i.Component);P.propTypes={title:m.a.string.isRequired,location:m.a.string.isRequired,description:m.a.string.isRequired,cover_img:m.a.string.isRequired};var N=Object(c.withStyles)(function(e){return{card:{maxWidth:400}}})(P),_=n(156),M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.siteTitle,n=e.siteSecondaryTitle,a=this.props.classes;return o.a.createElement("div",{className:a.header},o.a.createElement("div",{className:a.container},o.a.createElement(x.a,{variant:"h3",className:a.whiteText},t),o.a.createElement(x.a,{variant:"body1",className:a.whiteText},n)))},t}(i.Component);M.propTypes={siteTitle:m.a.string.isRequired,siteSecondaryTitle:m.a.string.isRequired};var S=Object(c.withStyles)(function(e){return{header:{background:_.b,marginBottom:"1.45rem",height:"30vh"},container:{margin:"0 auto",padding:"1.45rem 1.0875rem",maxWidth:960,display:"flex",flexDirection:"column",justifyContent:"center",height:"30vh"},whiteText:{color:"white"}}})(M),w=n(181);n.d(t,"pageQuery",function(){return W});var O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).eventsGrid=function(e,t){var n=t.events.edges;return o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{container:!0,spacing:24},n.map(function(e,t){return o.a.createElement(N,{key:t,to:e.node.fields.slug,title:e.node.frontmatter.title,location:e.node.frontmatter.location,description:e.node.frontmatter.description,cover_img:e.node.frontmatter.cover_img.relativePath})})))},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.props.data;return o.a.createElement(u.a,null,o.a.createElement(d.a,{title:"Events"}),o.a.createElement(S,{siteTitle:"Events",siteSecondaryTitle:"Past and present events"}),this.eventsGrid(e,t))},t}(i.Component),W=(t.default=Object(w.a)(Object(c.withStyles)(function(e){return{root:{flexGrow:1,margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(O)),"1608719605")},154:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(172))},164:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(174))},169:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(175))},172:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(51)),i=a(n(148)),o=a(n(146)),s=a(n(0)),l=(a(n(4)),a(n(149))),c=(n(152),a(n(150))),u=n(190),d=(a(n(173)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};f.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function m(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,d=e.component,f=e.container,p=e.direction,g=e.item,v=e.justify,x=e.lg,b=e.md,y=e.sm,h=e.spacing,j=e.wrap,E=e.xl,C=e.xs,P=e.zeroMinWidth,N=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),_=(0,l.default)((t={},(0,r.default)(t,c.container,f),(0,r.default)(t,c.item,g),(0,r.default)(t,c.zeroMinWidth,P),(0,r.default)(t,c["spacing-xs-".concat(String(h))],f&&0!==h),(0,r.default)(t,c["direction-xs-".concat(String(p))],p!==m.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(j))],j!==m.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==m.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==m.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(v))],v!==m.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(C))],!1!==C),(0,r.default)(t,c["grid-sm-".concat(String(y))],!1!==y),(0,r.default)(t,c["grid-md-".concat(String(b))],!1!==b),(0,r.default)(t,c["grid-lg-".concat(String(x))],!1!==x),(0,r.default)(t,c["grid-xl-".concat(String(E))],!1!==E),t),u);return s.default.createElement(d,(0,o.default)({className:_},N))}t.styles=p,m.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,c.default)(p,{name:"MuiGrid"})(m);t.default=g},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},174:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(146)),i=a(n(148)),o=a(n(0)),s=(a(n(4)),a(n(149))),l=a(n(166)),c=a(n(150)),u={root:{overflow:"hidden"}};function d(e){var t=e.classes,n=e.className,a=e.raised,c=(0,i.default)(e,["classes","className","raised"]);return o.default.createElement(l.default,(0,r.default)({className:(0,s.default)(t.root,n),elevation:a?8:1},c))}t.styles=u,d.defaultProps={raised:!1};var f=(0,c.default)(u,{name:"MuiCard"})(d);t.default=f},175:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(146)),i=a(n(148)),o=a(n(0)),s=(a(n(4)),a(n(149))),l=a(n(150)),c=a(n(163)),u=function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{pointerEvents:"none",position:"absolute",backgroundColor:"currentcolor",top:0,right:0,bottom:0,left:0,opacity:0,transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}};t.styles=u;var d=(0,l.default)(u,{name:"MuiCardActionArea"})(function(e){var t=e.children,n=e.classes,a=e.className,l=e.focusVisibleClassName,u=(0,i.default)(e,["children","classes","className","focusVisibleClassName"]);return o.default.createElement(c.default,(0,r.default)({className:(0,s.default)(n.root,a),focusVisibleClassName:(0,s.default)(l,n.focusVisible)},u),t,o.default.createElement("span",{className:n.focusHighlight}))});t.default=d},197:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(228))},228:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(146)),i=a(n(148)),o=a(n(0)),s=(a(n(4)),a(n(149))),l=(n(152),a(n(150))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function u(e){var t=e.classes,n=e.className,a=e.component,l=(0,i.default)(e,["classes","className","component"]);return o.default.createElement(a,(0,r.default)({className:(0,s.default)(t.root,n)},l))}t.styles=c,u.defaultProps={component:"div"};var d=(0,l.default)(c,{name:"MuiCardContent"})(u);t.default=d}}]);
//# sourceMappingURL=component---src-pages-events-js-f4cf932f6aa137a7da78.js.map