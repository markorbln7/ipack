/* embla-carousel.com/plugins/class-names - v8.2.0 */
/* https://www.jsdelivr.com/package/npm/embla-carousel-class-names  */
const n={active:!0,breakpoints:{},snapped:"is-snapped",inView:"is-in-view",draggable:"is-draggable",dragging:"is-dragging"};function o(n,o){if(!n||!o)return;const{classList:i}=n;i.contains(o)&&i.remove(o)}function i(n,o){if(!n||!o)return;const{classList:i}=n;i.contains(o)||i.add(o)}function e(a={}){let t,s,r,c;const g=["select"],d=["pointerDown","pointerUp"],f=["slidesInView"];function l(n,e){"pointerDown"===e?i(r,t.dragging):o(r,t.dragging)}function p(n,e){const a=s.containerNode().querySelectorAll(`.${e}`);var t;(t=a,Array.from(t)).forEach((n=>o(n,e))),n.forEach((n=>i(c[n],e)))}function u(){const{slideRegistry:n}=s.internalEngine();p(n[s.selectedScrollSnap()],t.snapped)}function E(){p(s.slidesInView(),t.inView)}return{name:"classNames",options:a,init:function(o,p){s=o;const{mergeOptions:h,optionsAtMedia:w}=p,b=h(n,e.globalOptions),m=h(b,a);t=w(m),r=s.rootNode(),c=s.slideNodes(),!!s.internalEngine().options.watchDrag&&i(r,t.draggable),t.dragging&&d.forEach((n=>s.on(n,l))),t.snapped&&(g.forEach((n=>s.on(n,u))),u()),t.inView&&(f.forEach((n=>s.on(n,E))),E())},destroy:function(){o(r,t.draggable),d.forEach((n=>s.off(n,l))),g.forEach((n=>s.off(n,u))),f.forEach((n=>s.off(n,E))),c.forEach((n=>o(n,t.snapped)))}}}e.globalOptions=void 0;export{e as default};