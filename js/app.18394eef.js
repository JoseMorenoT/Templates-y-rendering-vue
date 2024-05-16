(function(){"use strict";var e={3230:function(e,o,a){var t=a(6848),r=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"container-cambios col-6 container py-5 text-white",attrs:{id:"colorfondo"}},[o("form",{staticClass:"d-flex flex-column text-start"},[o("div",[o("label",{attrs:{for:""}},[e._v("Color de fondo: ")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.colorFondo,expression:"colorFondo"}],attrs:{type:"texto",id:"colorFondo"},domProps:{value:e.colorFondo},on:{input:function(o){o.target.composing||(e.colorFondo=o.target.value)}}})]),o("div",[o("label",{attrs:{for:""}},[e._v("Color de texto: ")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.colorTexto,expression:"colorTexto"}],attrs:{type:"texto",id:"colorTexto"},domProps:{value:e.colorTexto},on:{input:function(o){o.target.composing||(e.colorTexto=o.target.value)}}})]),o("div",[o("label",{attrs:{for:""}},[e._v("Mostrar texto:")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.mostrarTexto,expression:"mostrarTexto"}],attrs:{type:"checkbox",id:"mostrarTexto"},domProps:{checked:Array.isArray(e.mostrarTexto)?e._i(e.mostrarTexto,null)>-1:e.mostrarTexto},on:{change:function(o){var a=e.mostrarTexto,t=o.target,r=!!t.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);t.checked?i<0&&(e.mostrarTexto=a.concat([n])):i>-1&&(e.mostrarTexto=a.slice(0,i).concat(a.slice(i+1)))}else e.mostrarTexto=r}}})]),o("div",[o("label",{attrs:{for:""}},[e._v("borde")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.borde,expression:"borde"}],attrs:{type:"range",id:"rangeborde",name:"rangeborde",min:"30",max:"100",step:"1"},domProps:{value:e.borde},on:{__r:function(o){e.borde=o.target.value}}})]),o("div",[o("label",{attrs:{for:"rangeHeight"}},[e._v("Contenido texto: ")]),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contenidoTextual,expression:"contenidoTextual"}],attrs:{name:"text",id:"contenidoTextual",cols:"60",rows:"3"},domProps:{value:e.contenidoTextual},on:{input:function(o){o.target.composing||(e.contenidoTextual=o.target.value)}}})]),o("div",[o("label",{attrs:{for:"tipografias"}},[e._v("Tipografías")]),o("br"),o("select",{directives:[{name:"model",rawName:"v-model",value:e.tipografias,expression:"tipografias"}],attrs:{name:"tipografias",id:"tipografias"},on:{change:function(o){var a=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var o="_value"in e?e._value:e.value;return o}));e.tipografias=o.target.multiple?a:a[0]}}},e._l(e.tipografiaArray,(function(a,t){return o("option",{key:t,domProps:{value:a}},[e._v(e._s(a))])})),0)]),o("div",{staticClass:"py-3"},[o("label",{attrs:{for:""}},[e._v("Opaco:")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.opaco,expression:"opaco"}],attrs:{type:"checkbox",id:"opaco"},domProps:{checked:Array.isArray(e.opaco)?e._i(e.opaco,null)>-1:e.opaco},on:{change:function(o){var a=e.opaco,t=o.target,r=!!t.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);t.checked?i<0&&(e.opaco=a.concat([n])):i>-1&&(e.opaco=a.slice(0,i).concat(a.slice(i+1)))}else e.opaco=r}}})]),o("div",{attrs:{id:"tamanoLetra"}},[o("label",{attrs:{for:""}},[e._v("Tamaño Letra")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.tamanoLetra,expression:"tamanoLetra"}],attrs:{type:"radio",id:"pequeño",name:"fav_language",value:"pequeño"},domProps:{checked:e._q(e.tamanoLetra,"pequeño")},on:{change:function(o){e.tamanoLetra="pequeño"}}}),o("label",{attrs:{for:"pequeño"}},[e._v("Pequeño")]),o("br")]),o("div",{staticClass:"col-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.tamanoLetra,expression:"tamanoLetra"}],attrs:{type:"radio",id:"mediano",name:"fav_language",value:"mediano"},domProps:{checked:e._q(e.tamanoLetra,"mediano")},on:{change:function(o){e.tamanoLetra="mediano"}}}),o("label",{attrs:{for:"mediano"}},[e._v("Mediano")]),o("br")]),o("div",{staticClass:"col-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.tamanoLetra,expression:"tamanoLetra"}],attrs:{type:"radio",id:"grande",name:"fav_language",value:"grande"},domProps:{checked:e._q(e.tamanoLetra,"grande")},on:{change:function(o){e.tamanoLetra="grande"}}}),o("label",{attrs:{for:"grande"}},[e._v("Grande")])])])])])]),o("div",{staticClass:"container-resultado col-6 container py-5 d-flex align-items-center justify-content-center"},[o("div",{staticClass:"h-75 w-75 d-flex align-items-center justify-content-center",style:{borderRadius:e.borde+"%",backgroundColor:e.colorFondo},attrs:{id:""}},[o("p",{directives:[{name:"show",rawName:"v-show",value:e.mostrarTexto,expression:"mostrarTexto"}],class:["grande"==e.tamanoLetra?e.largeClass:"pequeño"==e.tamanoLetra?e.smallClass:e.mediumClass,e.opaco?e.opacoClass:""],style:{color:e.colorTexto,fontStyle:e.tipografias}},[e._v(e._s(e.contenidoTextual))])])])])])])},n=[],i={name:"App",data(){return{colorFondo:"",colorTexto:"",mostrarTexto:!0,borde:0,contenidoTextual:"",tipografias:"normal",opaco:!1,opacoClass:"opaco",tamanoLetra:"",tipografiaArray:["italic","normal","oblique"],smallClass:"smalltext",mediumClass:"mediumtext",largeClass:"largetext"}}},s=i,l=a(1656),c=(0,l.A)(s,r,n,!1,null,null,null),d=c.exports;t.Ay.config.productionTip=!1,new t.Ay({render:e=>e(d)}).$mount("#app")}},o={};function a(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(o,t,r,n){if(!t){var i=1/0;for(d=0;d<e.length;d++){t=e[d][0],r=e[d][1],n=e[d][2];for(var s=!0,l=0;l<t.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](t[l])}))?t.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,r,n]}}(),function(){a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,{a:o}),o}}(),function(){a.d=function(e,o){for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={524:0};a.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,n,i=t[0],s=t[1],l=t[2],c=0;if(i.some((function(o){return 0!==e[o]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(o&&o(t);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},t=self["webpackChunkdesafio3_m6"]=self["webpackChunkdesafio3_m6"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=a.O(void 0,[504],(function(){return a(3230)}));t=a.O(t)})();
//# sourceMappingURL=app.18394eef.js.map