import{a as o,b as i}from"./chunk-GVU63CGI.mjs";import g from"fs";import a from"path";var l=(n,r)=>{let[s,t]=n.split("=");return r==="YOUR_FIELD_VALUE"?`${s}=YOUR_${s}_VALUE`:""},f=(n,r)=>n.split(`${o}${i}`).map(t=>{if(t.trim()===""||t.startsWith("#"))return t;if(t.includes("#")){let[e,c]=t.split(/#+/);return`${l(e,r)}   #${c}${o}${i}`}return`${l(t,r)}${o}${i}`}),p=(n,r,s)=>{try{let t=a.join(process.cwd(),n!=null?n:".env");console.log(`reading sample env(${n})`);let e=g.readFileSync(t,{encoding:"utf8",flag:"r"});return f(e,s)}catch(t){return console.log("No .env file Found!"),!1}},u=n=>{console.log(n)},$=({name:n,sample:r,values:s,silent:t})=>{t||console.log("prompting here:");let e=p(n,r,s);e&&(u(e),console.log("Sample ENV file written successfully!"))};export{$ as a};
