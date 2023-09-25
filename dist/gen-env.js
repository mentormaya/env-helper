"use strict";var $=Object.create;var l=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var w=(t,n)=>{for(var e in n)l(t,e,{get:n[e],enumerable:!0})},f=(t,n,e,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of R(n))!C.call(t,r)&&r!==e&&l(t,r,{get:()=>n[r],enumerable:!(o=_(n,r))||o.enumerable});return t};var c=(t,n,e)=>(e=t!=null?$(A(t)):{},f(n||!t||!t.__esModule?l(e,"default",{value:t,enumerable:!0}):e,t)),L=t=>f(l({},"__esModule",{value:!0}),t);var S={};w(S,{genEnv:()=>I});module.exports=L(S);var g=c(require("fs")),u=c(require("path")),v=c(require("inquirer"));var a="\r",i=`
`,p=["YOUR_FIELD_VALUE"];var m=(t,n)=>{let[e,o]=t.split("=");return n===p[0]?`${e}="YOUR_${e.toUpperCase()}_VALUE"`:""},P=(t,n)=>{var e=[""];return t.includes(`${a}${i}`)?e=t.split(`${a}${i}`):e=t.split(`${i}`),e.map(o=>{if(o.trim()===""||o.startsWith("#"))return o;if(o.includes("#")){let[r,s]=o.split(/#+/);return`${m(r,n)}   #${s}`}return`${m(o,n)}`}).join(`${a}${i}`)},U=(t,n,e)=>{try{let o=u.default.join(process.cwd(),t!=null?t:".env");console.log(`reading sample env(${t})`);let r=g.default.readFileSync(o,{encoding:"utf8",flag:"r"});return P(r,e)}catch(o){return console.log("No .env file Found!"),!1}},N=(t,n)=>{let e=u.default.join(process.cwd(),n!=null?n:".env");try{g.default.writeFileSync(e,t,{encoding:"utf8",flag:"w"})}catch(o){console.log(`Couldnot write ${n} file.`)}},E=({name:t,sample:n,values:e,dryRun:o})=>{let r=U(t,n,e);r&&(o?console.log(r):N(r,n),!o&&console.log("Sample ENV file written successfully!"))},I=({name:t,sample:n,values:e,silent:o,dryRun:r})=>{o?E({name:t,sample:n,values:e,dryRun:r}):v.default.prompt([{type:"input",name:"name",message:"What is the name of your env file?",default:".env"},{type:"input",name:"sample",message:"What do you want your sample env file name to be?",default:".sample.env"},{type:"list",name:"values",message:"Placeholder format for your values?",choices:p},{type:"confirm",name:"dryRun",message:"Want the output in the console instead of generating a file?",default:!1}]).then(({name:s,sample:d,values:y,dryRun:h})=>{E({name:s,sample:d,values:y,dryRun:h})}).catch(s=>{s.isTtyError?(console.log("Couldnot render prompt under this environment!"),console.log(s)):console.log(`Something went Wrong: ${s}`)})};0&&(module.exports={genEnv});
