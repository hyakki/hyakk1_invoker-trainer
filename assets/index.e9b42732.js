var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&n(e,o,r[o]);if(a)for(var o of a(r))s.call(r,o)&&n(e,o,r[o]);return e};import{r as o,a as l}from"./vendor.de62f314.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const o=new URL(e,s);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[o]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/invoker-trainer/assets/");const i="./../assets",c={"./../assets/alacrity.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/alacrity.8e0143ea.png"}),"./../assets/chaos-meteor.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/chaos-meteor.25af8763.png"}),"./../assets/cold-snap.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/cold-snap.22e95f20.png"}),"./../assets/deafening-blast.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/deafening-blast.6920918f.png"}),"./../assets/emp.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/emp.c7d84596.png"}),"./../assets/exort.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/exort.ac60ee6e.png"}),"./../assets/forge-spirit.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/forge-spirit.13f386c6.png"}),"./../assets/ghost-walk.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/ghost-walk.ee444cd5.png"}),"./../assets/ice-wall.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/ice-wall.847f517c.png"}),"./../assets/invoke.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/invoke.51f435f9.png"}),"./../assets/placeholder.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/placeholder.7bedd961.png"}),"./../assets/quas.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/quas.3f322c15.png"}),"./../assets/sun-strike.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/sun-strike.fdee957f.png"}),"./../assets/tornado.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/tornado.568c0db1.png"}),"./../assets/wex.png":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/invoker-trainer/assets/wex.fc5751b4.png"})},m=[{id:0,key:"q",name:"Quas",picture:c[`${i}/quas.png`].default,category:"quas"},{id:1,key:"w",name:"Wex",picture:c[`${i}/wex.png`].default,category:"wex"},{id:2,key:"e",name:"Exort",picture:c[`${i}/exort.png`].default,category:"exort"}],d=[{id:0,name:"Cold Snap",combination:[0,0,0],picture:c[`${i}/cold-snap.png`].default,category:"quas"},{id:1,name:"Ghost Walk",combination:[0,0,1],picture:c[`${i}/ghost-walk.png`].default,category:"quas"},{id:2,name:"Ice Wall",combination:[0,0,2],picture:c[`${i}/ice-wall.png`].default,category:"quas"},{id:3,name:"EMP",combination:[1,1,1],picture:c[`${i}/emp.png`].default,category:"wex"},{id:4,name:"Tornado",combination:[0,1,1],picture:c[`${i}/tornado.png`].default,category:"wex"},{id:5,name:"Alacrity",combination:[1,1,2],picture:c[`${i}/alacrity.png`].default,category:"wex"},{id:6,name:"Sun Strike",combination:[2,2,2],picture:c[`${i}/sun-strike.png`].default,category:"exort"},{id:7,name:"Forge Spirit",combination:[0,2,2],picture:c[`${i}/forge-spirit.png`].default,category:"exort"},{id:8,name:"Chaos Meteor",combination:[1,2,2],picture:c[`${i}/chaos-meteor.png`].default,category:"exort"},{id:9,name:"Deafening Blast",combination:[0,1,2],picture:c[`${i}/deafening-blast.png`].default,category:"neutral"}],u={placeholder:c[`${i}/placeholder.png`].default,invoke:c[`${i}/invoke.png`].default},p=[[0,4,2,3,6,8,9],[0,4,3,2,8,9],[0,4,3,2],[0,4,3],[0,4,5,6],[0,4,5],[0,4,6],[0,4,8,2],[0,4,8,5],[0,4,8,9],[0,4,8],[0,8],[1,0,5],[2,7,5],[2,9],[4,0,3,2],[4,0,8],[4,1],[4,2,0,5],[4,2,1],[4,2,8],[4,2],[4,3,0],[4,3,6,8,9,0,2,5,7],[4,3,8,9],[4,3,8],[4,6,8,9],[4,6,9],[4,8,9],[5,0],[7,0,6],[7,5,0],[8,0,9]];class g extends o.Component{constructor(e){super(e),this.state={orbs:[],slots:[{key:"d",spell:null,ready:!1},{key:"f",spell:null,ready:!1}],combo:[]}}componentDidMount(){this.onKeyUp=this.onKeyUp.bind(this),document.addEventListener("keydown",this.onKeyUp),this.next=this.next.bind(this),this.start()}componentWillUnmount(){document.removeEventListener("keydown",this.onKeyUp)}isAllowed(e){return["q","w","e","r","d","f"].indexOf(e)>=0}handleOrbs(e){const t=m.filter((t=>t.key===e));if(t.length<=0)return;const[a]=t,s=[...this.state.orbs,a.id];this.setState({orbs:s.slice(-3)})}handleSlots(e){if("r"!==e)return;const t=d.filter((e=>((e,t)=>e.length===t.length&&e.every(((e,a)=>e===t[a])))(e.combination.sort(),[...this.state.orbs].sort())));if(t.length<=0)return;const[a]=t;void 0===this.state.slots.find((e=>e.spell===a.id))&&this.setState({slots:[r(r({},this.state.slots[0]),{spell:a.id,ready:!0}),r(r({},this.state.slots[1]),{spell:this.state.slots[0].spell,ready:this.state.slots[0].ready})]})}handleSpells(e){const t=["d","f"].indexOf(e);if(t<0)return;const a=this.state.slots[t];a.ready&&null!==a.spell&&this.castSpell(a.spell)}castSpell(e){const t=[...this.state.slots];t.find((t=>t.spell===e)).ready=!1,this.setState({slots:t})}onKeyUp(e){this.isAllowed(e.key)&&(this.handleOrbs(e.key),this.handleSlots(e.key),this.handleSpells(e.key))}start(){this.next()}next(){const e=p.length-1,t=Math.round(Math.random()*e);this.setState({combo:p[t]})}render(){return o.createElement(o.Fragment,null,o.createElement("h1",{className:"title"},"Invoker Trainer"),o.createElement("button",{className:"btn-change",onClick:this.next},"next"),o.createElement("div",{className:"todos"},this.state.combo.map(((e,t)=>o.createElement("div",{key:t,className:`todo--${d[e].category}`},o.createElement("img",{src:d[e].picture,alt:"",className:"todo__picture"}),o.createElement("div",{className:"todo__keys keys"},d[e].combination.map(((e,t)=>o.createElement("div",{className:`keys__key--${m[e].category}`,key:t},m[e].key)))),o.createElement("div",{className:"todo__name"},d[e].name))))),o.createElement("div",{className:"ui"},o.createElement("div",{className:"ui-orbs"},this.state.orbs.map(((e,t)=>o.createElement("div",{className:"ui-orb",key:t},o.createElement("img",{className:"ui-orb__picture",src:m[e].picture,alt:m[e].name}))))),o.createElement("div",{className:"ui-items"},m.map(((e,t)=>o.createElement("div",{className:"ui-item",key:t},o.createElement("div",{className:"ui-item__letter"},e.key),o.createElement("div",{className:"ui-item__picture-outer"},o.createElement("img",{src:e.picture,alt:"",className:"ui-item__picture"}))))),this.state.slots.map(((e,t)=>{const a=null!==e.spell?d[e.spell].picture:u.placeholder,s=null===e.spell||e.ready?"":"is-in-cooldown";return o.createElement("div",{className:`ui-item ${s}`,key:t},o.createElement("div",{className:"ui-item__letter"},e.key),o.createElement("div",{className:"ui-item__picture-outer"},o.createElement("img",{src:a,alt:"",className:"ui-item__picture"})))})),o.createElement("div",{className:"ui-item"},o.createElement("div",{className:"ui-item__letter"},"r"),o.createElement("div",{className:"ui-item__picture-outer"},o.createElement("img",{src:u.invoke,alt:"",className:"ui-item__picture"}))))))}}function f(){return o.createElement("div",{className:"app"},o.createElement("div",{className:"app-inner"},o.createElement(g,null)))}l.render(o.createElement(o.StrictMode,null,o.createElement(f,null)),document.getElementById("root"));