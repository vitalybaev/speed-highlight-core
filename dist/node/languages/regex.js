var a=Object.defineProperty;var m=t=>a(t,"__esModule",{value:!0});var d=(t,e)=>{m(t);for(var p in e)a(t,p,{get:e[p],enumerable:!0})};d(exports,{default:()=>o,type:()=>r});var o=[{match:/^(?!\/).*/gm,sub:"todo"},{match:/\[((?!\])[^\\]|\\.)*\]/g,type:"num"},{match:/\||\^|\$|\\.|\w+($|\r|\n)/g,type:"kwd"},{match:/\*|\+|\{\d+,\d+\}/g,type:"var"}],r="oper";0&&(module.exports={type});