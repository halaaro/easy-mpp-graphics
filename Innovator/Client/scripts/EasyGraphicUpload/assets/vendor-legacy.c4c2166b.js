System.register([],(function(_){"use strict";return{execute:function(){_({N:function(_,n,t){var o,u,i;e.__&&e.__(_,n),u=(o="function"==typeof t)?null:t&&t.__k||n.__k,i=[],H(n,_=(!o&&t||n).__k=f(a,null,[_]),u||r,r,void 0!==n.ownerSVGElement,!o&&t?[t]:u?null:n.firstChild?l.slice.call(n.childNodes):null,i,!o&&t?t:u?u.__e:n.firstChild,o),P(i,_)},a:f,d:O,l:function(_){return U=1,function(_,e,n){var t=B(D++,2);return t.t=_,t.__c||(t.__=[n?n(e):z(void 0,e),function(_){var e=t.t(t.__[0],_);t.__[0]!==e&&(t.__=[e,t.__[1]],t.__c.setState({}))}],t.__c=F),t.__}(z,_)},s:function(_){return U=5,O((function(){return{current:_}}),[])},y:a});var e,n,t,o,r={},l=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function i(_,e){for(var n in e)_[n]=e[n];return _}function c(_){var e=_.parentNode;e&&e.removeChild(_)}function f(_,e,n){var t,o,r,l=arguments,u={};for(r in e)"key"==r?t=e[r]:"ref"==r?o=e[r]:u[r]=e[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);if(null!=n&&(u.children=n),"function"==typeof _&&null!=_.defaultProps)for(r in _.defaultProps)void 0===u[r]&&(u[r]=_.defaultProps[r]);return s(_,u,t,o,null)}function s(_,n,t,o,r){var l={type:_,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++e.__v:r};return null!=e.vnode&&e.vnode(l),l}function a(_){return _.children}function p(_,e){this.props=_,this.context=e}function h(_,e){if(null==e)return _.__?h(_.__,_.__.__k.indexOf(_)+1):null;for(var n;e<_.__k.length;e++)if(null!=(n=_.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof _.type?h(_):null}function d(_){var e,n;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if(null!=(n=_.__k[e])&&null!=n.__e){_.__e=_.__c.base=n.__e;break}return d(_)}}function v(_){(!_.__d&&(_.__d=!0)&&n.push(_)&&!y.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||t)(y)}function y(){for(var _;y.__r=n.length;)_=n.sort((function(_,e){return _.__v.__b-e.__v.__b})),n=[],_.some((function(_){var e,n,t,o,r,l;_.__d&&(r=(o=(e=_).__v).__e,(l=e.__P)&&(n=[],(t=i({},o)).__v=o.__v+1,H(l,o,t,e.__n,void 0!==l.ownerSVGElement,null!=o.__h?[r]:null,n,null==r?h(o):r,o.__h),P(n,o),o.__e!=r&&d(o)))}))}function m(_,e,n,t,o,u,i,c,f,p){var d,v,y,m,b,S,x,E=t&&t.__k||l,P=E.length;for(n.__k=[],d=0;d<e.length;d++)if(null!=(m=n.__k[d]=null==(m=e[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?s(null,m,null,null,m):Array.isArray(m)?s(a,{children:m},null,null,null):m.__b>0?s(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=E[d])||y&&m.key==y.key&&m.type===y.type)E[d]=void 0;else for(v=0;v<P;v++){if((y=E[v])&&m.key==y.key&&m.type===y.type){E[v]=void 0;break}y=null}H(_,m,y=y||r,o,u,i,c,f,p),b=m.__e,(v=m.ref)&&y.ref!=v&&(x||(x=[]),y.ref&&x.push(y.ref,null,m),x.push(v,m.__c||b,m)),null!=b?(null==S&&(S=b),"function"==typeof m.type&&null!=m.__k&&m.__k===y.__k?m.__d=f=g(m,f,_):f=k(_,m,y,E,b,f),p||"option"!==n.type?"function"==typeof n.type&&(n.__d=f):_.value=""):f&&y.__e==f&&f.parentNode!=_&&(f=h(y))}for(n.__e=S,d=P;d--;)null!=E[d]&&("function"==typeof n.type&&null!=E[d].__e&&E[d].__e==n.__d&&(n.__d=h(t,d+1)),T(E[d],E[d]));if(x)for(d=0;d<x.length;d++)w(x[d],x[++d],x[++d])}function g(_,e,n){var t,o;for(t=0;t<_.__k.length;t++)(o=_.__k[t])&&(o.__=_,e="function"==typeof o.type?g(o,e,n):k(n,o,o,_.__k,o.__e,e));return e}function k(_,e,n,t,o,r){var l,u,i;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(null==n||o!=r||null==o.parentNode)_:if(null==r||r.parentNode!==_)_.appendChild(o),l=null;else{for(u=r,i=0;(u=u.nextSibling)&&i<t.length;i+=2)if(u==o)break _;_.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function b(_,e,n){"-"===e[0]?_.setProperty(e,n):_[e]=null==n?"":"number"!=typeof n||u.test(e)?n:n+"px"}function S(_,e,n,t,o){var r;_:if("style"===e)if("string"==typeof n)_.style.cssText=n;else{if("string"==typeof t&&(_.style.cssText=t=""),t)for(e in t)n&&e in n||b(_.style,e,"");if(n)for(e in n)t&&n[e]===t[e]||b(_.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=n,n?t||_.addEventListener(e,r?E:x,r):_.removeEventListener(e,r?E:x,r);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in _)try{_[e]=null==n?"":n;break _}catch(_){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?_.setAttribute(e,n):_.removeAttribute(e))}}function x(_){this.l[_.type+!1](e.event?e.event(_):_)}function E(_){this.l[_.type+!0](e.event?e.event(_):_)}function H(_,n,t,o,r,l,u,c,f){var s,h,d,v,y,g,k,b,S,x,E,H=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(f=t.__h,c=n.__e=t.__e,n.__h=null,l=[c]),(s=e.__b)&&s(n);try{_:if("function"==typeof H){if(b=n.props,S=(s=H.contextType)&&o[s.__c],x=s?S?S.props.value:s.__:o,t.__c?k=(h=n.__c=t.__c).__=h.__E:("prototype"in H&&H.prototype.render?n.__c=h=new H(b,x):(n.__c=h=new p(b,x),h.constructor=H,h.render=A),S&&S.sub(h),h.props=b,h.state||(h.state={}),h.context=x,h.__n=o,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=i({},h.__s)),i(h.__s,H.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,d)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==H.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,x)||n.__v===t.__v){h.props=b,h.state=h.__s,n.__v!==t.__v&&(h.__d=!1),h.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(_){_&&(_.__=n)})),h.__h.length&&u.push(h);break _}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,x),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,y,g)}))}h.context=x,h.props=b,h.state=h.__s,(s=e.__r)&&s(n),h.__d=!1,h.__v=n,h.__P=_,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(o=i(i({},o),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(v,y)),E=null!=s&&s.type===a&&null==s.key?s.props.children:s,m(_,Array.isArray(E)?E:[E],n,t,o,r,l,u,c,f),h.base=n.__e,n.__h=null,h.__h.length&&u.push(h),k&&(h.__E=h.__=null),h.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=C(t.__e,n,t,o,r,l,u,f);(s=e.diffed)&&s(n)}catch(_){n.__v=null,(f||null!=l)&&(n.__e=c,n.__h=!!f,l[l.indexOf(c)]=null),e.__e(_,n,t)}}function P(_,n){e.__c&&e.__c(n,_),_.some((function(n){try{_=n.__h,n.__h=[],_.some((function(_){_.call(n)}))}catch(_){e.__e(_,n.__v)}}))}function C(_,e,n,t,o,u,i,f){var s,a,p,h,d=n.props,v=e.props,y=e.type,g=0;if("svg"===y&&(o=!0),null!=u)for(;g<u.length;g++)if((s=u[g])&&(s===_||(y?s.localName==y:3==s.nodeType))){_=s,u[g]=null;break}if(null==_){if(null===y)return document.createTextNode(v);_=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),u=null,f=!1}if(null===y)d===v||f&&_.data===v||(_.data=v);else{if(u=u&&l.slice.call(_.childNodes),a=(d=n.props||r).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!f){if(null!=u)for(d={},h=0;h<_.attributes.length;h++)d[_.attributes[h].name]=_.attributes[h].value;(p||a)&&(p&&(a&&p.__html==a.__html||p.__html===_.innerHTML)||(_.innerHTML=p&&p.__html||""))}if(function(_,e,n,t,o){var r;for(r in n)"children"===r||"key"===r||r in e||S(_,r,null,n[r],t);for(r in e)o&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===e[r]||S(_,r,e[r],n[r],t)}(_,v,d,o,f),p)e.__k=[];else if(g=e.props.children,m(_,Array.isArray(g)?g:[g],e,n,t,o&&"foreignObject"!==y,u,i,_.firstChild,f),null!=u)for(g=u.length;g--;)null!=u[g]&&c(u[g]);f||("value"in v&&void 0!==(g=v.value)&&(g!==_.value||"progress"===y&&!g)&&S(_,"value",g,d.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==_.checked&&S(_,"checked",g,d.checked,!1))}return _}function w(_,n,t){try{"function"==typeof _?_(n):_.current=n}catch(_){e.__e(_,t)}}function T(_,n,t){var o,r,l;if(e.unmount&&e.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||w(o,null,n)),t||"function"==typeof _.type||(t=null!=(r=_.__e)),_.__e=_.__d=void 0,null!=(o=_.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){e.__e(_,n)}o.base=o.__P=null}if(o=_.__k)for(l=0;l<o.length;l++)o[l]&&T(o[l],n,t);null!=r&&c(r)}function A(_,e,n){return this.constructor(_,n)}e={__e:function(_,e){for(var n,t,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((t=n.constructor)&&null!=t.getDerivedStateFromError&&(n.setState(t.getDerivedStateFromError(_)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(_),o=n.__d),o)return n.__E=n}catch(e){_=e}throw _},__v:0},p.prototype.setState=function(_,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof _&&(_=_(i({},n),this.props)),_&&i(n,_),null!=_&&this.__v&&(e&&this.__h.push(e),v(this))},p.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),v(this))},p.prototype.render=a,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0;var D,F,N,U=0,L=[],M=e.__b,W=e.__r,q=e.diffed,I=e.__c,R=e.unmount;function B(_,n){e.__h&&e.__h(F,_,U||n),U=0;var t=F.__H||(F.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function O(_,e){var n=B(D++,7);return function(_,e){return!_||_.length!==e.length||e.some((function(e,n){return e!==_[n]}))}(n.__H,e)&&(n.__=_(),n.__H=e,n.__h=_),n.__}function $(){L.forEach((function(_){if(_.__P)try{_.__H.__h.forEach(V),_.__H.__h.forEach(j),_.__H.__h=[]}catch(F){_.__H.__h=[],e.__e(F,_.__v)}})),L=[]}e.__b=function(_){F=null,M&&M(_)},e.__r=function(_){W&&W(_),D=0;var e=(F=_.__c).__H;e&&(e.__h.forEach(V),e.__h.forEach(j),e.__h=[])},e.diffed=function(_){q&&q(_);var n=_.__c;n&&n.__H&&n.__H.__h.length&&(1!==L.push(n)&&N===e.requestAnimationFrame||((N=e.requestAnimationFrame)||function(_){var e,n=function(){clearTimeout(t),G&&cancelAnimationFrame(e),setTimeout(_)},t=setTimeout(n,100);G&&(e=requestAnimationFrame(n))})($)),F=void 0},e.__c=function(_,n){n.some((function(_){try{_.__h.forEach(V),_.__h=_.__h.filter((function(_){return!_.__||j(_)}))}catch(N){n.some((function(_){_.__h&&(_.__h=[])})),n=[],e.__e(N,_.__v)}})),I&&I(_,n)},e.unmount=function(_){R&&R(_);var n=_.__c;if(n&&n.__H)try{n.__H.__.forEach(V)}catch(_){e.__e(_,n.__v)}};var G="function"==typeof requestAnimationFrame;function V(_){var e=F;"function"==typeof _.__c&&_.__c(),F=e}function j(_){var e=F;_.__c=_.__(),F=e}function z(_,e){return"function"==typeof e?e(_):e}}}}));
