import{w as t}from"./index-6a827e17.js";const s=(window==null?void 0:window.localStorage.getItem("story_id"))??"1",e=t(s);e.subscribe(o=>{window==null||window.localStorage.setItem("story_id",o),console.log(o)});const c=(window==null?void 0:window.localStorage.getItem("chat"))??"1",r=t(c);r.subscribe(o=>{window==null||window.localStorage.setItem("chat",o),console.log("new:",o)});export{r as c,e as s};
