import{d as h,a3 as l,o as d,f as g,p as u,x as m,L as f,A as b,N as p,Q as v,s as _,b as r,a4 as x}from"./index-8d4a493e.js";const y=["innerHTML"],B=h({__name:"PrismCell",props:{code:null,lang:{type:String,default:"typescript"}},setup(e){const n=e,t={sass:[l.languages.sass,"sass"],scss:[l.languages.scss,"scss"],typescript:[l.languages.typescript,"ts"]};function i(s){const a=typeof s=="object"?JSON.stringify(s):s,[o,c]=t[n.lang];return l.highlight(a,o,c)}return(s,a)=>(d(),g("pre",{innerHTML:i(e.code)},null,8,y))}});const C=u({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...m(),...f(),...b()},setup(e,n){let{slots:t}=n;const{themeClasses:i}=p(e),{densityClasses:s}=v(e);return _(()=>{var a,o;return r(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},i.value,s.value]},{default:()=>[(a=t.top)==null?void 0:a.call(t),t.default&&r("div",{class:"v-table__wrapper",style:{height:x(e.height)}},[r("table",null,[t.default()])]),(o=t.bottom)==null?void 0:o.call(t)]})}),{}}});export{C as V,B as _};
