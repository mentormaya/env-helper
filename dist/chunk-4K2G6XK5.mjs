import{a as i,b as c}from"./chunk-GVU63CGI.mjs";import l from"fs";import f from"path";var g=(r,t)=>{let[o,n]=r.split("=");return t==="YOUR_FIELD_VALUE"?`${o}=YOUR_${o}_VALUE`:""},u=(r,t)=>r.split(`${i}${c}`).map(n=>{if(n.trim()===""||n.startsWith("#"))return n;if(n.includes("#")){let[e,s]=n.split(/#+/);return`${g(e,t)}   #${s}`}return`${g(n,t)}`}).join(`${i}${c}`),a=(r,t,o)=>{try{let n=f.join(process.cwd(),r!=null?r:".env");console.log(`reading sample env(${r})`);let e=l.readFileSync(n,{encoding:"utf8",flag:"r"});return u(e,o)}catch(n){return console.log("No .env file Found!"),!1}},v=(r,t)=>{let o=f.join(process.cwd(),t!=null?t:".env");try{l.writeFileSync(o,r,{encoding:"utf8",flag:"w"})}catch(n){console.log(`Couldnot write ${t} file.`)}},d=({name:r,sample:t,values:o,silent:n,dryRun:e})=>{n||console.log("prompting here:");let s=a(r,t,o);s&&(e?console.log(s):v(s,t),console.log("Sample ENV file written successfully!"))};export{d as a};
