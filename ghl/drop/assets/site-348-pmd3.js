(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="180",Lu=0,ka=1,Pu=2,Jl=1,Iu=2,_n=3,On=0,It=1,nn=2,yn=0,Mi=1,oo=2,za=3,Ha=4,Du=5,Jn=100,Uu=101,Nu=102,Fu=103,Ou=104,Bu=200,ku=201,zu=202,Hu=203,ao=204,lo=205,Vu=206,Gu=207,Wu=208,$u=209,Xu=210,qu=211,Yu=212,ju=213,Ku=214,co=0,uo=1,ho=2,wi=3,fo=4,po=5,mo=6,go=7,Zl=0,Ju=1,Zu=2,Nn=0,Ql=1,ec=2,tc=3,ca=4,nc=5,ic=6,sc=7,rc=300,Ai=301,Ci=302,vo=303,_o=304,cr=306,xo=1e3,Qn=1001,Js=1002,Zt=1003,Qu=1004,_s=1005,sn=1006,Mr=1007,ei=1008,an=1009,oc=1010,ac=1011,is=1012,ua=1013,ti=1014,xn=1015,on=1016,da=1017,ha=1018,ss=1020,lc=35902,cc=35899,uc=1021,dc=1022,Jt=1023,rs=1026,os=1027,hc=1028,fa=1029,fc=1030,pa=1031,ma=1033,$s=33776,Xs=33777,qs=33778,Ys=33779,yo=35840,So=35841,Mo=35842,bo=35843,Eo=36196,To=37492,wo=37496,Ao=37808,Co=37809,Ro=37810,Lo=37811,Po=37812,Io=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,ko=37820,zo=37821,Ho=36492,Vo=36494,Go=36495,Wo=36283,$o=36284,Xo=36285,qo=36286,ed=3200,td=3201,pc=0,nd=1,In="",Tt="srgb",Ri="srgb-linear",Zs="linear",tt="srgb",ri=7680,Va=519,id=512,sd=513,rd=514,mc=515,od=516,ad=517,ld=518,cd=519,Ga=35044,Wa="300 es",rn=2e3,Qs=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,Yo=180/Math.PI;function Bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function Er(n,e,t){return(1-t)*n+t*e}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const p=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==p||l!==m||u!==g){let f=1-a;const d=c*p+l*m+u*g+h*v,A=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),L=Math.atan2(I,d*A);f=Math.sin(f*L)/I,a=Math.sin(a*L)/I}const x=a*A;if(c=c*f+p*x,l=l*f+m*x,u=u*f+g*x,h=h*f+v*x,f===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*m-l*p,e[t+1]=c*g+u*p+l*h-a*m,e[t+2]=l*g+u*m+a*p-c*h,e[t+3]=u*g-a*h-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),p=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*u*h+l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h+p*m*g;break;case"YZX":this._x=p*u*h+l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h-p*m*g;break;case"XZY":this._x=p*u*h-l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=i+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($a.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($a.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new z,$a=new hs;class $e{constructor(e,t,i,s,r,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],p=i[2],m=i[5],g=i[8],v=s[0],f=s[3],d=s[6],A=s[1],y=s[4],x=s[7],I=s[2],L=s[5],D=s[8];return r[0]=o*v+a*A+c*I,r[3]=o*f+a*y+c*L,r[6]=o*d+a*x+c*D,r[1]=l*v+u*A+h*I,r[4]=l*f+u*y+h*L,r[7]=l*d+u*x+h*D,r[2]=p*v+m*A+g*I,r[5]=p*f+m*y+g*L,r[8]=p*d+m*x+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,p=a*c-u*r,m=l*r-o*c,g=t*h+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new $e;function gc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dd(){const n=er("canvas");return n.style.display="block",n}const Xa={};function as(n){n in Xa||(Xa[n]=!0,console.warn(n))}function hd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const qa=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){const n={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?Zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ri]:{primaries:e,whitePoint:i,transfer:Zs,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}const Ze=fd();function Sn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oi;class pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{oi===void 0&&(oi=er("canvas")),oi.width=e.width,oi.height=e.height;const s=oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=oi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sn(t[i]/255)*255):t[i]=Sn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ar(s[o].image)):r.push(Ar(s[o]))}else r=Ar(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ar(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;const Cr=new z;class Ct extends Oi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=Qn,s=Qn,r=sn,o=ei,a=Jt,c=an,l=Ct.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Bi(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=rc;Ct.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],m=c[5],g=c[9],v=c[2],f=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(m+1)/2,I=(d+1)/2,L=(u+p)/4,D=(h+v)/4,U=(g+f)/4;return y>x&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=L/i,r=D/i):x>I?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=L/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=D/r,s=U/r),this.set(i,s,r,t),this}let A=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(f-g)/A,this.y=(h-v)/A,this.z=(p-u)/A,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ct(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ga(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends vd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vc extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(r,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),ys.subVectors(this.max,Gi),ai.subVectors(e.a,Gi),li.subVectors(e.b,Gi),ci.subVectors(e.c,Gi),En.subVectors(li,ai),Tn.subVectors(ci,li),Vn.subVectors(ai,ci);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Vn.y,Vn.x,0];return!Rr(t,ai,li,ci,ys)||(t=[1,0,0,0,1,0,0,0,1],!Rr(t,ai,li,ci,ys))?!1:(Ss.crossVectors(En,Tn),t=[Ss.x,Ss.y,Ss.z],Rr(t,ai,li,ci,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new z,new z,new z,new z,new z,new z,new z,new z],qt=new z,xs=new fs,ai=new z,li=new z,ci=new z,En=new z,Tn=new z,Vn=new z,Gi=new z,ys=new z,Ss=new z,Gn=new z;function Rr(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gn.fromArray(n,r);const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const xd=new fs,Wi=new z,Lr=new z;class va{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Lr)),this.expandByPoint(Wi.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new z,Pr=new z,Ms=new z,wn=new z,Ir=new z,bs=new z,Dr=new z;class yd{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pr.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Pr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),a=wn.dot(this.direction),c=-wn.dot(Ms),l=wn.lengthSq(),u=Math.abs(1-o*o);let h,p,m,g;if(u>0)if(h=o*c-a,p=o*a-c,g=r*u,h>=0)if(p>=-g)if(p<=g){const v=1/u;h*=v,p*=v,m=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=r,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p=-r,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;else p<=-g?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+l):p<=g?(h=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+l);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pr).addScaledVector(Ms,p),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),s=fn.dot(fn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,s,r){Ir.subVectors(t,e),bs.subVectors(i,e),Dr.crossVectors(Ir,bs);let o=this.direction.dot(Dr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const c=a*this.direction.dot(bs.crossVectors(wn,bs));if(c<0)return null;const l=a*this.direction.dot(Ir.cross(wn));if(l<0||c+l>o)return null;const u=-a*wn.dot(Dr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,o,a,c,l,u,h,p,m,g,v,f){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,p,m,g,v,f)}set(e,t,i,s,r,o,a,c,l,u,h,p,m,g,v,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=g,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=o*u,m=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,m=c*h,g=l*u,v=l*h;t[0]=p+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,m=c*h,g=l*u,v=l*h;t[0]=p-v*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,m=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+v,t[1]=c*h,t[5]=v*l+p,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-p*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=p-v*h}else if(e.order==="XZY"){const p=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+v,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,Md)}lookAt(e,t,i){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),An.crossVectors(i,Ft),An.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),An.crossVectors(i,Ft)),An.normalize(),Es.crossVectors(Ft,An),s[0]=An.x,s[4]=Es.x,s[8]=Ft.x,s[1]=An.y,s[5]=Es.y,s[9]=Ft.y,s[2]=An.z,s[6]=Es.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],p=i[9],m=i[13],g=i[2],v=i[6],f=i[10],d=i[14],A=i[3],y=i[7],x=i[11],I=i[15],L=s[0],D=s[4],U=s[8],M=s[12],E=s[1],F=s[5],k=s[9],Z=s[13],Q=s[2],ne=s[6],ee=s[10],ie=s[14],P=s[3],re=s[7],ue=s[11],ge=s[15];return r[0]=o*L+a*E+c*Q+l*P,r[4]=o*D+a*F+c*ne+l*re,r[8]=o*U+a*k+c*ee+l*ue,r[12]=o*M+a*Z+c*ie+l*ge,r[1]=u*L+h*E+p*Q+m*P,r[5]=u*D+h*F+p*ne+m*re,r[9]=u*U+h*k+p*ee+m*ue,r[13]=u*M+h*Z+p*ie+m*ge,r[2]=g*L+v*E+f*Q+d*P,r[6]=g*D+v*F+f*ne+d*re,r[10]=g*U+v*k+f*ee+d*ue,r[14]=g*M+v*Z+f*ie+d*ge,r[3]=A*L+y*E+x*Q+I*P,r[7]=A*D+y*F+x*ne+I*re,r[11]=A*U+y*k+x*ee+I*ue,r[15]=A*M+y*Z+x*ie+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*a*p+i*l*p+s*a*m-i*c*m)+v*(+t*c*m-t*l*p+r*o*p-s*o*m+s*l*u-r*c*u)+f*(+t*l*h-t*a*m-r*o*h+i*o*m+r*a*u-i*l*u)+d*(-s*a*u-t*c*h+t*a*p+s*o*h-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],d=e[15],A=h*f*l-v*p*l+v*c*m-a*f*m-h*c*d+a*p*d,y=g*p*l-u*f*l-g*c*m+o*f*m+u*c*d-o*p*d,x=u*v*l-g*h*l+g*a*m-o*v*m-u*a*d+o*h*d,I=g*h*c-u*v*c-g*a*p+o*v*p+u*a*f-o*h*f,L=t*A+i*y+s*x+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=A*D,e[1]=(v*p*r-h*f*r-v*s*m+i*f*m+h*s*d-i*p*d)*D,e[2]=(a*f*r-v*c*r+v*s*l-i*f*l-a*s*d+i*c*d)*D,e[3]=(h*c*r-a*p*r-h*s*l+i*p*l+a*s*m-i*c*m)*D,e[4]=y*D,e[5]=(u*f*r-g*p*r+g*s*m-t*f*m-u*s*d+t*p*d)*D,e[6]=(g*c*r-o*f*r-g*s*l+t*f*l+o*s*d-t*c*d)*D,e[7]=(o*p*r-u*c*r+u*s*l-t*p*l-o*s*m+t*c*m)*D,e[8]=x*D,e[9]=(g*h*r-u*v*r-g*i*m+t*v*m+u*i*d-t*h*d)*D,e[10]=(o*v*r-g*a*r+g*i*l-t*v*l-o*i*d+t*a*d)*D,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*m-t*a*m)*D,e[12]=I*D,e[13]=(u*v*s-g*h*s+g*i*p-t*v*p-u*i*f+t*h*f)*D,e[14]=(g*a*s-o*v*s-g*i*c+t*v*c+o*i*f-t*a*f)*D,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*p+t*a*p)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,p=r*l,m=r*u,g=r*h,v=o*u,f=o*h,d=a*h,A=c*l,y=c*u,x=c*h,I=i.x,L=i.y,D=i.z;return s[0]=(1-(v+d))*I,s[1]=(m+x)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(m-x)*L,s[5]=(1-(p+d))*L,s[6]=(f+A)*L,s[7]=0,s[8]=(g+y)*D,s[9]=(f-A)*D,s[10]=(1-(p+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),a=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const l=1/r,u=1/o,h=1/a;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=rn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===rn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Qs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=rn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===rn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Qs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new z,Yt=new at,Sd=new z(0,0,0),Md=new z(1,1,1),An=new z,Es=new z,Ft=new z,ja=new at,Ka=new hs;class ln{constructor(e=0,t=0,i=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ja,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bd=0;const Ja=new z,di=new hs,pn=new at,Ts=new z,$i=new z,Ed=new z,Td=new hs,Za=new z(1,0,0),Qa=new z(0,1,0),el=new z(0,0,1),tl={type:"added"},wd={type:"removed"},hi={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Mt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new z,t=new ln,i=new hs,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new $e}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(el,e)}translateOnAxis(e,t){return Ja.copy(e).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(el,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ts.copy(e):Ts.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt($i,Ts,this.up):pn.lookAt(Ts,$i,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(pn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tl),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tl),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new z(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new z,mn=new z,Nr=new z,gn=new z,fi=new z,pi=new z,nl=new z,Fr=new z,Or=new z,Br=new z,kr=new ot,zr=new ot,Hr=new ot;class Kt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jt.subVectors(s,t),mn.subVectors(i,t),Nr.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(mn),c=jt.dot(Nr),l=mn.dot(mn),u=mn.dot(Nr),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(l*c-a*u)*p,g=(o*u-a*c)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return kr.setScalar(0),zr.setScalar(0),Hr.setScalar(0),kr.fromBufferAttribute(e,t),zr.fromBufferAttribute(e,i),Hr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kr,r.x),o.addScaledVector(zr,r.y),o.addScaledVector(Hr,r.z),o}static isFrontFacing(e,t,i,s){return jt.subVectors(i,t),mn.subVectors(e,t),jt.cross(mn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,i),pi.subVectors(r,i),Fr.subVectors(e,i);const c=fi.dot(Fr),l=pi.dot(Fr);if(c<=0&&l<=0)return t.copy(i);Or.subVectors(e,s);const u=fi.dot(Or),h=pi.dot(Or);if(u>=0&&h<=u)return t.copy(s);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(fi,o);Br.subVectors(e,r);const m=fi.dot(Br),g=pi.dot(Br);if(g>=0&&m<=g)return t.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(pi,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return nl.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(nl,a);const d=1/(f+v+p);return o=v*d,a=p*d,t.copy(i).addScaledVector(fi,o).addScaledVector(pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Vr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=ud(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vr(o,r,e+1/3),this.g=Vr(o,r,e),this.b=Vr(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=xc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ze.workingToColorSpace(St.copy(this),e),Math.round(Ke(St.r*255,0,255))*65536+Math.round(Ke(St.g*255,0,255))*256+Math.round(Ke(St.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(St.copy(this),t);const i=St.r,s=St.g,r=St.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Tt){Ze.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,s=St.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ws);const i=Er(Cn.h,ws.h,t),s=Er(Cn.s,ws.s,t),r=Er(Cn.l,ws.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Xe;Xe.NAMES=xc;let Ad=0;class ps extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Mi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=lo,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ao&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==Jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ur extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new z,As=new de;let Cd=0;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ga,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class yc extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sc extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rd=0;const Wt=new at,Gr=new Mt,mi=new z,Ot=new fs,Xi=new fs,_t=new z;class cn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?Sc:yc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ot.min,Xi.min),Ot.expandByPoint(_t),_t.addVectors(Ot.max,Xi.max),Ot.expandByPoint(_t)):(Ot.expandByPoint(Xi.min),Ot.expandByPoint(Xi.max))}Ot.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)_t.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(e,l),_t.add(mi)),s=Math.max(s,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new z,c[U]=new z;const l=new z,u=new z,h=new z,p=new de,m=new de,g=new de,v=new z,f=new z;function d(U,M,E){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),m.sub(p),g.sub(p);const F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(F),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(F),a[U].add(v),a[M].add(v),a[E].add(v),c[U].add(f),c[M].add(f),c[E].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){const E=A[U],F=E.start,k=E.count;for(let Z=F,Q=F+k;Z<Q;Z+=3)d(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const y=new z,x=new z,I=new z,L=new z;function D(U){I.fromBufferAttribute(s,U),L.copy(I);const M=a[U];y.copy(M),y.sub(I.multiplyScalar(I.dot(M))).normalize(),x.crossVectors(L,M);const F=x.dot(c[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,F)}for(let U=0,M=A.length;U<M;++U){const E=A[U],F=E.start,k=E.count;for(let Z=F,Q=F+k;Z<Q;Z+=3)D(e.getX(Z+0)),D(e.getX(Z+1)),D(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,f),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,p=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let d=0;d<u;d++)p[g++]=l[m++]}return new Qt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const p=l[u],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new at,Wn=new yd,Cs=new va,sl=new z,Rs=new z,Ls=new z,Ps=new z,Wr=new z,Is=new z,rl=new z,Ds=new z;class Pt extends Mt{constructor(e=new cn,t=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Is.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Wr.fromBufferAttribute(h,e),o?Is.addScaledVector(Wr,u):Is.addScaledVector(Wr.sub(t),u))}t.add(Is)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Cs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Cs,sl)===null||Wn.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(il.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(il),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const f=p[g],d=o[f.materialIndex],A=Math.max(f.start,m.start),y=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let x=A,I=y;x<I;x+=3){const L=a.getX(x),D=a.getX(x+1),U=a.getX(x+2);s=Us(this,d,e,i,l,u,h,L,D,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){const A=a.getX(f),y=a.getX(f+1),x=a.getX(f+2);s=Us(this,o,e,i,l,u,h,A,y,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const f=p[g],d=o[f.materialIndex],A=Math.max(f.start,m.start),y=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let x=A,I=y;x<I;x+=3){const L=x,D=x+1,U=x+2;s=Us(this,d,e,i,l,u,h,L,D,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){const A=f,y=f+1,x=f+2;s=Us(this,o,e,i,l,u,h,A,y,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Ld(n,e,t,i,s,r,o,a){let c;if(e.side===It?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===On,a),c===null)return null;Ds.copy(a),Ds.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ds);return l<t.near||l>t.far?null:{distance:l,point:Ds.clone(),object:n}}function Us(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Rs),n.getVertexPosition(c,Ls),n.getVertexPosition(l,Ps);const u=Ld(n,e,t,i,Rs,Ls,Ps,rl);if(u){const h=new z;Kt.getBarycoord(rl,Rs,Ls,Ps,h),s&&(u.uv=Kt.getInterpolatedAttribute(s,a,c,l,h,new de)),r&&(u.uv1=Kt.getInterpolatedAttribute(r,a,c,l,h,new de)),o&&(u.normal=Kt.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new z,materialIndex:0};Kt.getNormal(Rs,Ls,Ps,p.normal),u.face=p,u.barycoord=h}return u}class ms extends cn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function g(v,f,d,A,y,x,I,L,D,U,M){const E=x/D,F=I/U,k=x/2,Z=I/2,Q=L/2,ne=D+1,ee=U+1;let ie=0,P=0;const re=new z;for(let ue=0;ue<ee;ue++){const ge=ue*F-Z;for(let Re=0;Re<ne;Re++){const ke=Re*E-k;re[v]=ke*A,re[f]=ge*y,re[d]=Q,l.push(re.x,re.y,re.z),re[v]=0,re[f]=0,re[d]=L>0?1:-1,u.push(re.x,re.y,re.z),h.push(Re/D),h.push(1-ue/U),ie+=1}}for(let ue=0;ue<U;ue++)for(let ge=0;ge<D;ge++){const Re=p+ge+ne*ue,ke=p+ge+ne*(ue+1),W=p+(ge+1)+ne*(ue+1),O=p+(ge+1)+ne*ue;c.push(Re,ke,O),c.push(ke,W,O),P+=6}a.addGroup(m,P,M),m+=P,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Li(n[t]);for(const s in i)e[s]=i[s]}return e}function Pd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Pi={clone:Li,merge:Et};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new z,ol=new de,al=new de;class Bt extends bc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,ol,al),t.subVectors(al,ol)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,vi=1;class Ud extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(gi,vi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(gi,vi,e,t);r.layers=this.layers,this.add(r);const o=new Bt(gi,vi,e,t);o.layers=this.layers,this.add(o);const a=new Bt(gi,vi,e,t);a.layers=this.layers,this.add(a);const c=new Bt(gi,vi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(gi,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ec extends Ct{constructor(e=[],t=Ai,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nd extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ec(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ms(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Li(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:yn});r.uniforms.tEquirect.value=t;const o=new Pt(s,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=sn),new Ud(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Yi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),d=this._getHandJoint(l,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Tc extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xr=new z,Od=new z,Bd=new $e;class Pn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Xr.subVectors(i,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bd.getNormalMatrix(e),s=this.coplanarPoint(Xr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new va,kd=new de(.5,.5),Ns=new z;class _a{constructor(e=new Pn,t=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=rn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],p=r[6],m=r[7],g=r[8],v=r[9],f=r[10],d=r[11],A=r[12],y=r[13],x=r[14],I=r[15];if(s[0].setComponents(l-o,m-u,d-g,I-A).normalize(),s[1].setComponents(l+o,m+u,d+g,I+A).normalize(),s[2].setComponents(l+a,m+h,d+v,I+y).normalize(),s[3].setComponents(l-a,m-h,d-v,I-y).normalize(),i)s[4].setComponents(c,p,f,x).normalize(),s[5].setComponents(l-c,m-p,d-f,I-x).normalize();else if(s[4].setComponents(l-c,m-p,d-f,I-x).normalize(),t===rn)s[5].setComponents(l+c,m+p,d+f,I+x).normalize();else if(t===Qs)s[5].setComponents(c,p,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=kd.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ns.x=s.normal.x>0?e.max.x:e.min.x,Ns.y=s.normal.y>0?e.max.y:e.min.y,Ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zd extends Ct{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wc extends Ct{constructor(e,t,i=ti,s,r,o,a=Zt,c=Zt,l,u=rs,h=1){if(u!==rs&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ac extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],p=i[s+1]-u,m=(o-u)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,s=[],r=[],o=[],a=new z,c=new at;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ke(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ke(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xa extends un{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*u-m*h+this.aX,l=p*h+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hd extends xa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ya(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let p=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;p*=u,m*=u,s(o,a,p,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Fs=new z,qr=new ya,Yr=new ya,jr=new ya;class Vd extends un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Fs.subVectors(s[0],s[1]).add(s[0]),l=Fs);const h=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),qr.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,g,v,f),Yr.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,g,v,f),jr.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,g,v,f)}else this.curveType==="catmullrom"&&(qr.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),Yr.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),jr.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return i.set(qr.calc(c),Yr.calc(c),jr.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ll(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Gd(n,e){const t=1-n;return t*t*e}function Wd(n,e){return 2*(1-n)*n*e}function $d(n,e){return n*n*e}function Zi(n,e,t,i){return Gd(n,e)+Wd(n,t)+$d(n,i)}function Xd(n,e){const t=1-n;return t*t*t*e}function qd(n,e){const t=1-n;return 3*t*t*n*e}function Yd(n,e){return 3*(1-n)*n*n*e}function jd(n,e){return n*n*n*e}function Qi(n,e,t,i,s){return Xd(n,e)+qd(n,t)+Yd(n,i)+jd(n,s)}class Cc extends un{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qi(e,s.x,r.x,o.x,a.x),Qi(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kd extends un{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qi(e,s.x,r.x,o.x,a.x),Qi(e,s.y,r.y,o.y,a.y),Qi(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rc extends un{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jd extends un{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lc extends un{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Zi(e,s.x,r.x,o.x),Zi(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends un{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Zi(e,s.x,r.x,o.x),Zi(e,s.y,r.y,o.y),Zi(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pc extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(ll(a,c.x,l.x,u.x,h.x),ll(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var jo=Object.freeze({__proto__:null,ArcCurve:Hd,CatmullRomCurve3:Vd,CubicBezierCurve:Cc,CubicBezierCurve3:Kd,EllipseCurve:xa,LineCurve:Rc,LineCurve3:Jd,QuadraticBezierCurve:Lc,QuadraticBezierCurve3:Zd,SplineCurve:Pc});class Qd extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new jo[s.type]().fromJSON(s))}return this}}class Ei extends Qd{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Rc(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Lc(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Cc(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Pc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new xa(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ti extends Ei{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ei().fromJSON(s))}return this}}function eh(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ic(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=rh(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let p=t;p<s;p+=t){const m=n[p],g=n[p+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return ls(r,o,t,a,c,l,0),o}function Ic(n,e,t,i,s){let r;if(s===gh(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=cl(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=cl(o/i|0,n[o],n[o+1],r);return r&&Ii(r,r.next)&&(us(r),r=r.next),r}function ni(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ii(t,t.next)||ut(t.prev,t,t.next)===0)){if(us(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ls(n,e,t,i,s,r,o){if(!n)return;!o&&r&&uh(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?nh(n,i,s,r):th(n)){e.push(c.i,n.i,l.i),us(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ih(ni(n),e),ls(n,e,t,i,s,r,2)):o===2&&sh(n,e,t,i,s,r):ls(ni(n),e,t,i,s,r,1);break}}}function th(n){const e=n.prev,t=n,i=n.next;if(ut(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),p=Math.max(s,r,o),m=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=m&&ji(s,a,r,c,o,l,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nh(n,e,t,i){const s=n.prev,r=n,o=n.next;if(ut(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,p=o.y,m=Math.min(a,c,l),g=Math.min(u,h,p),v=Math.max(a,c,l),f=Math.max(u,h,p),d=Ko(m,g,e,t,i),A=Ko(v,f,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=d&&x&&x.z<=A;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==s&&y!==o&&ji(a,u,c,h,l,p,y.x,y.y)&&ut(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=m&&x.x<=v&&x.y>=g&&x.y<=f&&x!==s&&x!==o&&ji(a,u,c,h,l,p,x.x,x.y)&&ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=f&&y!==s&&y!==o&&ji(a,u,c,h,l,p,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=A;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=f&&x!==s&&x!==o&&ji(a,u,c,h,l,p,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ih(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ii(i,s)&&Uc(i,t,t.next,s)&&cs(i,s)&&cs(s,i)&&(e.push(i.i,t.i,s.i),us(t),us(t.next),t=n=s),t=t.next}while(t!==n);return ni(t)}function sh(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fh(o,a)){let c=Nc(o,a);o=ni(o,o.next),c=ni(c,c.next),ls(o,e,t,i,s,r,0),ls(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function rh(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Ic(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(hh(l))}s.sort(oh);for(let r=0;r<s.length;r++)t=ah(s[r],t);return t}function oh(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ah(n,e){const t=lh(n,e);if(!t)return e;const i=Nc(t,n);return ni(i,i.next),ni(t,t.next)}function lh(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ii(n,t))return t;do{if(Ii(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Dc(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);cs(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&ch(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function ch(n,e){return ut(n.prev,n,e.prev)<0&&ut(e.next,n,n.next)<0}function uh(n,e,t,i){let s=n;do s.z===0&&(s.z=Ko(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dh(s)}function dh(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ko(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function hh(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Dc(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ji(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Dc(n,e,t,i,s,r,o,a)}function fh(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ph(n,e)&&(cs(n,e)&&cs(e,n)&&mh(n,e)&&(ut(n.prev,n,e.prev)||ut(n,e.prev,e))||Ii(n,e)&&ut(n.prev,n,n.next)>0&&ut(e.prev,e,e.next)>0)}function ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ii(n,e){return n.x===e.x&&n.y===e.y}function Uc(n,e,t,i){const s=Bs(ut(n,e,t)),r=Bs(ut(n,e,i)),o=Bs(ut(t,i,n)),a=Bs(ut(t,i,e));return!!(s!==r&&o!==a||s===0&&Os(n,t,e)||r===0&&Os(n,i,e)||o===0&&Os(t,n,i)||a===0&&Os(t,e,i))}function Os(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bs(n){return n>0?1:n<0?-1:0}function ph(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function cs(n,e){return ut(n.prev,n,n.next)<0?ut(n,e,n.next)>=0&&ut(n,n.prev,e)>=0:ut(n,e,n.prev)<0||ut(n,n.next,e)<0}function mh(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nc(n,e){const t=Jo(n.i,n.x,n.y),i=Jo(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function cl(n,e,t,i){const s=Jo(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function us(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gh(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class vh{static triangulate(e,t,i=2){return eh(e,t,i)}}class Dn{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Dn.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];ul(e),dl(i,e);let o=e.length;t.forEach(ul);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,dl(i,t[c]);const a=vh.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ul(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function dl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Sa extends cn{constructor(e=new Ti([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Dt(s,3)),this.setAttribute("uv",new Dt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:_h;let y,x=!1,I,L,D,U;d&&(y=d.getSpacedPoints(u),x=!0,p=!1,I=d.computeFrenetFrames(u,!1),L=new z,D=new z,U=new z),p||(f=0,m=0,g=0,v=0);const M=a.extractPoints(l);let E=M.shape;const F=M.holes;if(!Dn.isClockWise(E)){E=E.reverse();for(let B=0,H=F.length;B<H;B++){const $=F[B];Dn.isClockWise($)&&(F[B]=$.reverse())}}function Z(B){const $=10000000000000001e-36;let Y=B[0];for(let N=1;N<=B.length;N++){const w=N%B.length,oe=B[w],Ee=oe.x-Y.x,Oe=oe.y-Y.y,R=Ee*Ee+Oe*Oe,_=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(Y.x),Math.abs(Y.y)),q=$*_*_;if(R<=q){B.splice(w,1),N--;continue}Y=oe}}Z(E),F.forEach(Z);const Q=F.length,ne=E;for(let B=0;B<Q;B++){const H=F[B];E=E.concat(H)}function ee(B,H,$){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(H,$)}const ie=E.length;function P(B,H,$){let Y,N,w;const oe=B.x-H.x,Ee=B.y-H.y,Oe=$.x-B.x,R=$.y-B.y,_=oe*oe+Ee*Ee,q=oe*R-Ee*Oe;if(Math.abs(q)>Number.EPSILON){const ae=Math.sqrt(_),pe=Math.sqrt(Oe*Oe+R*R),ce=H.x-Ee/ae,Pe=H.y+oe/ae,Se=$.x-R/pe,Ie=$.y+Oe/pe,De=((Se-ce)*R-(Ie-Pe)*Oe)/(oe*R-Ee*Oe);Y=ce+oe*De-B.x,N=Pe+Ee*De-B.y;const ve=Y*Y+N*N;if(ve<=2)return new de(Y,N);w=Math.sqrt(ve/2)}else{let ae=!1;oe>Number.EPSILON?Oe>Number.EPSILON&&(ae=!0):oe<-Number.EPSILON?Oe<-Number.EPSILON&&(ae=!0):Math.sign(Ee)===Math.sign(R)&&(ae=!0),ae?(Y=-Ee,N=oe,w=Math.sqrt(_)):(Y=oe,N=Ee,w=Math.sqrt(_/2))}return new de(Y/w,N/w)}const re=[];for(let B=0,H=ne.length,$=H-1,Y=B+1;B<H;B++,$++,Y++)$===H&&($=0),Y===H&&(Y=0),re[B]=P(ne[B],ne[$],ne[Y]);const ue=[];let ge,Re=re.concat();for(let B=0,H=Q;B<H;B++){const $=F[B];ge=[];for(let Y=0,N=$.length,w=N-1,oe=Y+1;Y<N;Y++,w++,oe++)w===N&&(w=0),oe===N&&(oe=0),ge[Y]=P($[Y],$[w],$[oe]);ue.push(ge),Re=Re.concat(ge)}let ke;if(f===0)ke=Dn.triangulateShape(ne,F);else{const B=[],H=[];for(let $=0;$<f;$++){const Y=$/f,N=m*Math.cos(Y*Math.PI/2),w=g*Math.sin(Y*Math.PI/2)+v;for(let oe=0,Ee=ne.length;oe<Ee;oe++){const Oe=ee(ne[oe],re[oe],w);le(Oe.x,Oe.y,-N),Y===0&&B.push(Oe)}for(let oe=0,Ee=Q;oe<Ee;oe++){const Oe=F[oe];ge=ue[oe];const R=[];for(let _=0,q=Oe.length;_<q;_++){const ae=ee(Oe[_],ge[_],w);le(ae.x,ae.y,-N),Y===0&&R.push(ae)}Y===0&&H.push(R)}}ke=Dn.triangulateShape(B,H)}const W=ke.length,O=g+v;for(let B=0;B<ie;B++){const H=p?ee(E[B],Re[B],O):E[B];x?(D.copy(I.normals[0]).multiplyScalar(H.x),L.copy(I.binormals[0]).multiplyScalar(H.y),U.copy(y[0]).add(D).add(L),le(U.x,U.y,U.z)):le(H.x,H.y,0)}for(let B=1;B<=u;B++)for(let H=0;H<ie;H++){const $=p?ee(E[H],Re[H],O):E[H];x?(D.copy(I.normals[B]).multiplyScalar($.x),L.copy(I.binormals[B]).multiplyScalar($.y),U.copy(y[B]).add(D).add(L),le(U.x,U.y,U.z)):le($.x,$.y,h/u*B)}for(let B=f-1;B>=0;B--){const H=B/f,$=m*Math.cos(H*Math.PI/2),Y=g*Math.sin(H*Math.PI/2)+v;for(let N=0,w=ne.length;N<w;N++){const oe=ee(ne[N],re[N],Y);le(oe.x,oe.y,h+$)}for(let N=0,w=F.length;N<w;N++){const oe=F[N];ge=ue[N];for(let Ee=0,Oe=oe.length;Ee<Oe;Ee++){const R=ee(oe[Ee],ge[Ee],Y);x?le(R.x,R.y+y[u-1].y,y[u-1].x+$):le(R.x,R.y,h+$)}}}b(),S();function b(){const B=s.length/3;if(p){let H=0,$=ie*H;for(let Y=0;Y<W;Y++){const N=ke[Y];G(N[2]+$,N[1]+$,N[0]+$)}H=u+f*2,$=ie*H;for(let Y=0;Y<W;Y++){const N=ke[Y];G(N[0]+$,N[1]+$,N[2]+$)}}else{for(let H=0;H<W;H++){const $=ke[H];G($[2],$[1],$[0])}for(let H=0;H<W;H++){const $=ke[H];G($[0]+ie*u,$[1]+ie*u,$[2]+ie*u)}}i.addGroup(B,s.length/3-B,0)}function S(){const B=s.length/3;let H=0;j(ne,H),H+=ne.length;for(let $=0,Y=F.length;$<Y;$++){const N=F[$];j(N,H),H+=N.length}i.addGroup(B,s.length/3-B,1)}function j(B,H){let $=B.length;for(;--$>=0;){const Y=$;let N=$-1;N<0&&(N=B.length-1);for(let w=0,oe=u+f*2;w<oe;w++){const Ee=ie*w,Oe=ie*(w+1),R=H+Y+Ee,_=H+N+Ee,q=H+N+Oe,ae=H+Y+Oe;he(R,_,q,ae)}}}function le(B,H,$){c.push(B),c.push(H),c.push($)}function G(B,H,$){_e(B),_e(H),_e($);const Y=s.length/3,N=A.generateTopUV(i,s,Y-3,Y-2,Y-1);C(N[0]),C(N[1]),C(N[2])}function he(B,H,$,Y){_e(B),_e(H),_e(Y),_e(H),_e($),_e(Y);const N=s.length/3,w=A.generateSideWallUV(i,s,N-6,N-3,N-2,N-1);C(w[0]),C(w[1]),C(w[3]),C(w[1]),C(w[2]),C(w[3])}function _e(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function C(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return xh(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jo[s.type]().fromJSON(s)),new Sa(i,e.options)}}const _h={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new de(r,o),new de(a,c),new de(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],p=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[r*3],f=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new de(o,1-c),new de(l,1-h),new de(p,1-g),new de(v,1-d)]:[new de(a,1-c),new de(u,1-h),new de(m,1-g),new de(f,1-d)]}};function xh(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ii extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,p=t/c,m=[],g=[],v=[],f=[];for(let d=0;d<u;d++){const A=d*p-o;for(let y=0;y<l;y++){const x=y*h-r;g.push(x,-A,0),v.push(0,0,1),f.push(y/a),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){const y=A+l*d,x=A+l*(d+1),I=A+1+l*(d+1),L=A+1+l*d;m.push(y,x,L),m.push(x,I,L)}this.setIndex(m),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class yh extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sh extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fc extends Sh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mh extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bh extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Eh{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Th=new Eh;class Ma{constructor(e){this.manager=e!==void 0?e:Th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";const vn={};class wh extends Error{constructor(e,t){super(e),this.response=t}}class Ah extends Ma{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hl.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vn[e]!==void 0){vn[e].push({onLoad:t,onProgress:i,onError:s});return}vn[e]=[],vn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vn[e],h=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let v=0;const f=new ReadableStream({start(d){A();function A(){h.read().then(({done:y,value:x})=>{if(y)d.close();else{v+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let L=0,D=u.length;L<D;L++){const U=u[L];U.onProgress&&U.onProgress(I)}d.enqueue(x),A()}},y=>{d.error(y)})}}});return new Response(f)}else throw new wh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{hl.add(`file:${e}`,l);const u=vn[e];delete vn[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=vn[e];if(u===void 0)throw this.manager.itemError(e),l;delete vn[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ch extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Kr=new at,fl=new z,pl=new z;class Rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ba extends bc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lh extends Rh{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ph extends Ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ih extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ml=new de;class Uh{constructor(e=new de(1/0,1/0),t=new de(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ml.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ml).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Xn{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ei,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const A=[];for(let y=0,x=d.length;y<x;y++){const I=d[y],L=new Ti;L.curves=I.curves,A.push(L)}return A}function i(d,A){const y=A.length;let x=!1;for(let I=y-1,L=0;L<y;I=L++){let D=A[I],U=A[L],M=U.x-D.x,E=U.y-D.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(D=A[L],M=-M,U=A[I],E=-E),d.y<D.y||d.y>U.y)continue;if(d.y===D.y){if(d.x===D.x)return!0}else{const F=E*(d.x-D.x)-M*(d.y-D.y);if(F===0)return!0;if(F<0)continue;x=!x}}else{if(d.y!==D.y)continue;if(U.x<=d.x&&d.x<=D.x||D.x<=d.x&&d.x<=U.x)return!0}}return x}const s=Dn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ti,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],p=[];let m=[],g=0,v;p[g]=void 0,m[g]=[];for(let d=0,A=r.length;d<A;d++)a=r[d],v=a.getPoints(),o=s(v),o=e?!o:o,o?(!u&&p[g]&&g++,p[g]={s:new Ti,p:v},p[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:v[0]});if(!p[0])return t(r);if(p.length>1){let d=!1,A=0;for(let y=0,x=p.length;y<x;y++)h[y]=[];for(let y=0,x=p.length;y<x;y++){const I=m[y];for(let L=0;L<I.length;L++){const D=I[L];let U=!0;for(let M=0;M<p.length;M++)i(D.p,p[M].p)&&(y!==M&&A++,U?(U=!1,h[M].push(D)):d=!0);U&&h[y].push(D)}}A>0&&d===!1&&(m=h)}let f;for(let d=0,A=p.length;d<A;d++){c=p[d].s,l.push(c),f=m[d];for(let y=0,x=f.length;y<x;y++)c.holes.push(f[y].h)}return l}}function gl(n,e,t,i){const s=Nh(i);switch(t){case uc:return n*e;case hc:return n*e/s.components*s.byteLength;case fa:return n*e/s.components*s.byteLength;case fc:return n*e*2/s.components*s.byteLength;case pa:return n*e*2/s.components*s.byteLength;case dc:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case ma:return n*e*4/s.components*s.byteLength;case $s:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:case bo:return Math.max(n,16)*Math.max(e,8)/4;case yo:case Mo:return Math.max(n,8)*Math.max(e,8)/2;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Vo:case Go:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wo:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xo:case qo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nh(n){switch(n){case an:case oc:return{byteLength:1,components:1};case is:case ac:case on:return{byteLength:2,components:1};case da:case ha:return{byteLength:2,components:4};case ti:case ua:case xn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oc(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Fh(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<h.length;m++){const g=h[p],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,h[p]=v)}h.length=p+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Of=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:kh,alphamap_pars_fragment:zh,alphatest_fragment:Hh,alphatest_pars_fragment:Vh,aomap_fragment:Gh,aomap_pars_fragment:Wh,batching_pars_vertex:$h,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:jh,iridescence_fragment:Kh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:of,common:af,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:hf,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:vf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Lf,envmap_vertex:yf,fog_vertex:Sf,fog_pars_vertex:Mf,fog_fragment:bf,fog_pars_fragment:Ef,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:wf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:If,lights_phong_fragment:Df,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:Bf,lights_fragment_end:kf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Gf,map_fragment:Wf,map_pars_fragment:$f,map_particle_fragment:Xf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:jf,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Qf,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:hp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:Sp,shadowmask_pars_fragment:Mp,skinbase_vertex:bp,skinning_pars_vertex:Ep,skinning_vertex:Tp,skinnormal_vertex:wp,specularmap_fragment:Ap,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Lp,transmission_fragment:Pp,transmission_pars_fragment:Ip,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:kp,backgroundCube_frag:zp,cube_vert:Hp,cube_frag:Vp,depth_vert:Gp,depth_frag:Wp,distanceRGBA_vert:$p,distanceRGBA_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:jp,linedashed_frag:Kp,meshbasic_vert:Jp,meshbasic_frag:Zp,meshlambert_vert:Qp,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:om,meshphysical_vert:am,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:um,points_vert:dm,points_frag:hm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},Te={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},tn={basic:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Et([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Et([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Et([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Et([Te.points,Te.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Et([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Et([Te.common,Te.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Et([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Et([Te.sprite,Te.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Et([Te.common,Te.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Et([Te.lights,Te.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};tn.physical={uniforms:Et([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ks={r:0,b:0,g:0},qn=new ln,vm=new at;function _m(n,e,t,i,s,r,o){const a=new Xe(0);let c=r===!0?0:1,l,u,h=null,p=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const I=g(y);I===null?d(a,c):I&&I.isColor&&(d(I,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(y,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===cr)?(u===void 0&&(u=new Pt(new ms(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Li(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(qn)),u.material.toneMapped=Ze.getTransfer(I.colorSpace)!==tt,(h!==I||p!==I.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,p=I.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Pt(new ii(2,2),new xt({name:"BackgroundMaterial",uniforms:Li(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(I.colorSpace)!==tt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||p!==I.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=I,p=I.version,m=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,x){y.getRGB(ks,Mc(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,x,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(a,c)},render:v,addToRenderList:f,dispose:A}}function xm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(E,F,k,Z,Q){let ne=!1;const ee=h(Z,k,F);r!==ee&&(r=ee,l(r.object)),ne=m(E,Z,k,Q),ne&&g(E,Z,k,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,x(E,F,k,Z),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,F,k){const Z=k.wireframe===!0;let Q=i[E.id];Q===void 0&&(Q={},i[E.id]=Q);let ne=Q[F.id];ne===void 0&&(ne={},Q[F.id]=ne);let ee=ne[Z];return ee===void 0&&(ee=p(c()),ne[Z]=ee),ee}function p(E){const F=[],k=[],Z=[];for(let Q=0;Q<t;Q++)F[Q]=0,k[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:Z,object:E,attributes:{},index:null}}function m(E,F,k,Z){const Q=r.attributes,ne=F.attributes;let ee=0;const ie=k.getAttributes();for(const P in ie)if(ie[P].location>=0){const ue=Q[P];let ge=ne[P];if(ge===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;ee++}return r.attributesNum!==ee||r.index!==Z}function g(E,F,k,Z){const Q={},ne=F.attributes;let ee=0;const ie=k.getAttributes();for(const P in ie)if(ie[P].location>=0){let ue=ne[P];ue===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),Q[P]=ge,ee++}r.attributes=Q,r.attributesNum=ee,r.index=Z}function v(){const E=r.newAttributes;for(let F=0,k=E.length;F<k;F++)E[F]=0}function f(E){d(E,0)}function d(E,F){const k=r.newAttributes,Z=r.enabledAttributes,Q=r.attributeDivisors;k[E]=1,Z[E]===0&&(n.enableVertexAttribArray(E),Z[E]=1),Q[E]!==F&&(n.vertexAttribDivisor(E,F),Q[E]=F)}function A(){const E=r.newAttributes,F=r.enabledAttributes;for(let k=0,Z=F.length;k<Z;k++)F[k]!==E[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function y(E,F,k,Z,Q,ne,ee){ee===!0?n.vertexAttribIPointer(E,F,k,Q,ne):n.vertexAttribPointer(E,F,k,Z,Q,ne)}function x(E,F,k,Z){v();const Q=Z.attributes,ne=k.getAttributes(),ee=F.defaultAttributeValues;for(const ie in ne){const P=ne[ie];if(P.location>=0){let re=Q[ie];if(re===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){const ue=re.normalized,ge=re.itemSize,Re=e.get(re);if(Re===void 0)continue;const ke=Re.buffer,W=Re.type,O=Re.bytesPerElement,b=W===n.INT||W===n.UNSIGNED_INT||re.gpuType===ua;if(re.isInterleavedBufferAttribute){const S=re.data,j=S.stride,le=re.offset;if(S.isInstancedInterleavedBuffer){for(let G=0;G<P.locationSize;G++)d(P.location+G,S.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=S.meshPerAttribute*S.count)}else for(let G=0;G<P.locationSize;G++)f(P.location+G);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let G=0;G<P.locationSize;G++)y(P.location+G,ge/P.locationSize,W,ue,j*O,(le+ge/P.locationSize*G)*O,b)}else{if(re.isInstancedBufferAttribute){for(let S=0;S<P.locationSize;S++)d(P.location+S,re.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let S=0;S<P.locationSize;S++)f(P.location+S);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let S=0;S<P.locationSize;S++)y(P.location+S,ge/P.locationSize,W,ue,ge*O,ge/P.locationSize*S*O,b)}}else if(ee!==void 0){const ue=ee[ie];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(P.location,ue);break;case 3:n.vertexAttrib3fv(P.location,ue);break;case 4:n.vertexAttrib4fv(P.location,ue);break;default:n.vertexAttrib1fv(P.location,ue)}}}}A()}function I(){U();for(const E in i){const F=i[E];for(const k in F){const Z=F[k];for(const Q in Z)u(Z[Q].object),delete Z[Q];delete F[k]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const F=i[E.id];for(const k in F){const Z=F[k];for(const Q in Z)u(Z[Q].object),delete Z[Q];delete F[k]}delete i[E.id]}function D(E){for(const F in i){const k=i[F];if(k[E.id]===void 0)continue;const Z=k[E.id];for(const Q in Z)u(Z[Q].object),delete Z[Q];delete k[E.id]}}function U(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:f,disableUnusedAttributes:A}}function ym(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,i,1)}function c(l,u,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Jt&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const U=D===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==an&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==xn&&!U)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:L}}function Mm(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Pn,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||s;return s=p,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const A=r?0:i,y=A*4;let x=d.clippingState||null;c.value=x,x=u(g,p,y,m);for(let I=0;I!==y;++I)x[I]=t[I];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,m,g){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const d=m+v*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(f===null||f.length<d)&&(f=new Float32Array(d));for(let y=0,x=m;y!==v;++y,x+=4)o.copy(h[y]).applyMatrix4(A,a),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function bm(n){let e=new WeakMap;function t(o,a){return a===vo?o.mapping=Ai:a===_o&&(o.mapping=Ci),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vo||a===_o)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Si=4,vl=[.125,.215,.35,.446,.526,.582],Zn=20,Jr=new ba,_l=new Xe;let Zr=null,Qr=0,eo=0,to=!1;const Kn=(1+Math.sqrt(5))/2,_i=1/Kn,xl=[new z(-Kn,_i,0),new z(Kn,_i,0),new z(-_i,0,Kn),new z(_i,0,Kn),new z(0,Kn,-_i),new z(0,Kn,_i),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Em=new z;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Em}=r;Zr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr,Qr,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:on,format:Jt,colorSpace:Ri,depthBuffer:!1},s=yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(r)),this._blurMaterial=wm(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,i,s,r){const c=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(_l),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new ur({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),f=new Pt(new ms,v);let d=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,d=!0):(v.color.copy(_l),d=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const I=this._cubeSize;zs(s,x*I,y>2?I:0,I,I),h.setRenderTarget(s),d&&h.render(f,c),h.render(e,c)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ai||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xl[(s-r-1)%xl.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):Zn;f>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zn}`);const d=[];let A=0;for(let D=0;D<Zn;++D){const U=D/v,M=Math.exp(-U*U/2);d.push(M),D===0?A+=M:D<f&&(A+=2*M)}for(let D=0;D<d.length;D++)d[D]=d[D]/A;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const x=this._sizeLods[s],I=3*x*(s>y-Si?s-y+Si:0),L=4*(this._cubeSize-x);zs(t,I,L,3*x,2*x),c.setRenderTarget(t),c.render(h,Jr)}}function Tm(n){const e=[],t=[],i=[];let s=n;const r=n-Si+1+vl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Si?c=vl[o-n+Si-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,f=2,d=1,A=new Float32Array(v*g*m),y=new Float32Array(f*g*m),x=new Float32Array(d*g*m);for(let L=0;L<m;L++){const D=L%3*2/3-1,U=L>2?0:-1,M=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];A.set(M,v*g*L),y.set(p,f*g*L);const E=[L,L,L,L,L,L];x.set(E,d*g*L)}const I=new cn;I.setAttribute("position",new Qt(A,v)),I.setAttribute("uv",new Qt(y,f)),I.setAttribute("faceIndex",new Qt(x,d)),e.push(I),s>Si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yl(n,e,t){const i=new Xt(n,e,t);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function wm(n,e,t){const i=new Float32Array(Zn),s=new z(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Sl(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ml(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Am(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===vo||c===_o,u=c===Ai||c===Ci;if(l||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Zo(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Zo(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Cm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Rm(n,e,t,i){const s={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(h){const p=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let y=0,x=A.length;y<x;y+=3){const I=A[y+0],L=A[y+1],D=A[y+2];p.push(I,L,L,D,D,I)}}else if(g!==void 0){const A=g.array;v=g.version;for(let y=0,x=A.length/3-1;y<x;y+=3){const I=y+0,L=y+1,D=y+2;p.push(I,L,L,D,D,I)}}else return;const f=new(gc(p)?Sc:yc)(p,1);f.version=v;const d=r.get(h);d&&e.remove(d),r.set(h,f)}function u(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Lm(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,m){n.drawElements(i,m,r,p*o),t.update(m,i,1)}function l(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,p*o,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let f=0;for(let d=0;d<g;d++)f+=m[d];t.update(f,i,1)}function h(p,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)l(p[d]/o,m[d],v[d]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=m[A]*v[A];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Pm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Im(n,e,t){const i=new WeakMap,s=new ot;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const L=new Float32Array(x*I*4*h),D=new vc(L,x,I,h);D.type=xn,D.needsUpdate=!0;const U=y*4;for(let E=0;E<h;E++){const F=f[E],k=d[E],Z=A[E],Q=x*I*4*E;for(let ne=0;ne<F.count;ne++){const ee=ne*U;m===!0&&(s.fromBufferAttribute(F,ne),L[Q+ee+0]=s.x,L[Q+ee+1]=s.y,L[Q+ee+2]=s.z,L[Q+ee+3]=0),g===!0&&(s.fromBufferAttribute(k,ne),L[Q+ee+4]=s.x,L[Q+ee+5]=s.y,L[Q+ee+6]=s.z,L[Q+ee+7]=0),v===!0&&(s.fromBufferAttribute(Z,ne),L[Q+ee+8]=s.x,L[Q+ee+9]=s.y,L[Q+ee+10]=s.z,L[Q+ee+11]=Z.itemSize===4?s.w:1)}}p={count:h,texture:D,size:new de(x,I)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Dm(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Bc=new Ct,bl=new wc(1,1),kc=new vc,zc=new _d,Hc=new Ec,El=[],Tl=[],wl=new Float32Array(16),Al=new Float32Array(9),Cl=new Float32Array(4);function ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dr(n,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Um(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function Fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Bm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Cl.set(i),n.uniformMatrix2fv(this.addr,!1,Cl),vt(t,i)}}function km(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Al.set(i),n.uniformMatrix3fv(this.addr,!1,Al),vt(t,i)}}function zm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;wl.set(i),n.uniformMatrix4fv(this.addr,!1,wl),vt(t,i)}}function Hm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function $m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function jm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bl.compareFunction=mc,r=bl):r=Bc,t.setTexture2D(e||r,s)}function Km(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zc,s)}function Jm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hc,s)}function Zm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kc,s)}function Qm(n){switch(n){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return km;case 35676:return zm;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return $m;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Zm}}function eg(n,e){n.uniform1fv(this.addr,e)}function tg(n,e){const t=ki(e,this.size,2);n.uniform2fv(this.addr,t)}function ng(n,e){const t=ki(e,this.size,3);n.uniform3fv(this.addr,t)}function ig(n,e){const t=ki(e,this.size,4);n.uniform4fv(this.addr,t)}function sg(n,e){const t=ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rg(n,e){const t=ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function og(n,e){const t=ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ag(n,e){n.uniform1iv(this.addr,e)}function lg(n,e){n.uniform2iv(this.addr,e)}function cg(n,e){n.uniform3iv(this.addr,e)}function ug(n,e){n.uniform4iv(this.addr,e)}function dg(n,e){n.uniform1uiv(this.addr,e)}function hg(n,e){n.uniform2uiv(this.addr,e)}function fg(n,e){n.uniform3uiv(this.addr,e)}function pg(n,e){n.uniform4uiv(this.addr,e)}function mg(n,e,t){const i=this.cache,s=e.length,r=dr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bc,r[o])}function gg(n,e,t){const i=this.cache,s=e.length,r=dr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zc,r[o])}function vg(n,e,t){const i=this.cache,s=e.length,r=dr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hc,r[o])}function _g(n,e,t){const i=this.cache,s=e.length,r=dr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kc,r[o])}function xg(n){switch(n){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return hg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return _g}}class yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}}class Sg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xg(t.type)}}class Mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Rl(n,e){n.seq.push(e),n.map[e.id]=e}function bg(n,e,t){const i=n.name,s=i.length;for(no.lastIndex=0;;){const r=no.exec(i),o=no.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rl(t,l===void 0?new yg(a,n,e):new Sg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Mg(a),Rl(t,h)),t=h}}}class js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);bg(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ll(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Eg=37297;let Tg=0;function wg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Pl=new $e;function Ag(n){Ze._getMatrix(Pl,Ze.workingColorSpace,n);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Zs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+wg(n.getShaderSource(e),a)}else return r}function Cg(n,e){const t=Ag(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rg(n,e){let t;switch(e){case Ql:t="Linear";break;case ec:t="Reinhard";break;case tc:t="Cineon";break;case ca:t="ACESFilmic";break;case ic:t="AgX";break;case sc:t="Neutral";break;case nc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new z;function Lg(){Ze.getLuminanceCoefficients(Hs);const n=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Ig(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ki(n){return n!==""}function Dl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(n){return n.replace(Ug,Fg)}const Ng=new Map;function Fg(n,e){let t=je[e];if(t===void 0){const i=Ng.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(n){return n.replace(Og,Bg)}function Bg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function zg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ai:case Ci:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Vg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Zu:e="ENVMAP_BLENDING_ADD";break}return e}function Gg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Wg(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kg(t),l=zg(t),u=Hg(t),h=Vg(t),p=Gg(t),m=Pg(t),g=Ig(r),v=s.createProgram();let f,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),d.length>0&&(d+=`
`)):(f=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),d=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?je.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),o=Qo(o),o=Dl(o,t),o=Ul(o,t),a=Qo(a),a=Dl(a,t),a=Ul(a,t),o=Nl(o),a=Nl(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=A+f+o,x=A+d+a,I=Ll(s,s.VERTEX_SHADER,y),L=Ll(s,s.FRAGMENT_SHADER,x);s.attachShader(v,I),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(F){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",Z=s.getShaderInfoLog(I)||"",Q=s.getShaderInfoLog(L)||"",ne=k.trim(),ee=Z.trim(),ie=Q.trim();let P=!0,re=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,L);else{const ue=Il(s,I,"vertex"),ge=Il(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ne+`
`+ue+`
`+ge)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||ie==="")&&(re=!1);re&&(F.diagnostics={runnable:P,programLog:ne,vertexShader:{log:ee,prefix:f},fragmentShader:{log:ie,prefix:d}})}s.deleteShader(I),s.deleteShader(L),U=new js(s,v),M=Dg(s,v)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,Eg)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let $g=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qg(e),t.set(e,i)),i}}class qg{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}}function Yg(n,e,t,i,s,r,o){const a=new _c,c=new Xg,l=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function f(M,E,F,k,Z){const Q=k.fog,ne=Z.geometry,ee=M.isMeshStandardMaterial?k.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||ee),P=ie&&ie.mapping===cr?ie.image.height:null,re=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ue=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ge=ue!==void 0?ue.length:0;let Re=0;ne.morphAttributes.position!==void 0&&(Re=1),ne.morphAttributes.normal!==void 0&&(Re=2),ne.morphAttributes.color!==void 0&&(Re=3);let ke,W,O,b;if(re){const et=tn[re];ke=et.vertexShader,W=et.fragmentShader}else ke=M.vertexShader,W=M.fragmentShader,c.update(M),O=c.getVertexShaderID(M),b=c.getFragmentShaderID(M);const S=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),le=Z.isInstancedMesh===!0,G=Z.isBatchedMesh===!0,he=!!M.map,_e=!!M.matcap,C=!!ie,B=!!M.aoMap,H=!!M.lightMap,$=!!M.bumpMap,Y=!!M.normalMap,N=!!M.displacementMap,w=!!M.emissiveMap,oe=!!M.metalnessMap,Ee=!!M.roughnessMap,Oe=M.anisotropy>0,R=M.clearcoat>0,_=M.dispersion>0,q=M.iridescence>0,ae=M.sheen>0,pe=M.transmission>0,ce=Oe&&!!M.anisotropyMap,Pe=R&&!!M.clearcoatMap,Se=R&&!!M.clearcoatNormalMap,Ie=R&&!!M.clearcoatRoughnessMap,De=q&&!!M.iridescenceMap,ve=q&&!!M.iridescenceThicknessMap,we=ae&&!!M.sheenColorMap,Ge=ae&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ae=!!M.specularColorMap,Ye=!!M.specularIntensityMap,V=pe&&!!M.transmissionMap,Me=pe&&!!M.thicknessMap,be=!!M.gradientMap,Ue=!!M.alphaMap,xe=M.alphaTest>0,fe=!!M.alphaHash,Fe=!!M.extensions;let qe=Nn;M.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(qe=n.toneMapping);const st={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:ke,fragmentShader:W,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:b,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:G,batchingColor:G&&Z._colorsTexture!==null,instancing:le,instancingColor:le&&Z.instanceColor!==null,instancingMorph:le&&Z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:S===null?n.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ri,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:_e,envMap:C,envMapMode:C&&ie.mapping,envMapCubeUVHeight:P,aoMap:B,lightMap:H,bumpMap:$,normalMap:Y,displacementMap:p&&N,emissiveMap:w,normalMapObjectSpace:Y&&M.normalMapType===nd,normalMapTangentSpace:Y&&M.normalMapType===pc,metalnessMap:oe,roughnessMap:Ee,anisotropy:Oe,anisotropyMap:ce,clearcoat:R,clearcoatMap:Pe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:ve,sheen:ae,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Ae,specularIntensityMap:Ye,transmission:pe,transmissionMap:V,thicknessMap:Me,gradientMap:be,opaque:M.transparent===!1&&M.blending===Mi&&M.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:fe,combine:M.combine,mapUv:he&&v(M.map.channel),aoMapUv:B&&v(M.aoMap.channel),lightMapUv:H&&v(M.lightMap.channel),bumpMapUv:$&&v(M.bumpMap.channel),normalMapUv:Y&&v(M.normalMap.channel),displacementMapUv:N&&v(M.displacementMap.channel),emissiveMapUv:w&&v(M.emissiveMap.channel),metalnessMapUv:oe&&v(M.metalnessMap.channel),roughnessMapUv:Ee&&v(M.roughnessMap.channel),anisotropyMapUv:ce&&v(M.anisotropyMap.channel),clearcoatMapUv:Pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(M.sheenRoughnessMap.channel),specularMapUv:Be&&v(M.specularMap.channel),specularColorMapUv:Ae&&v(M.specularColorMap.channel),specularIntensityMapUv:Ye&&v(M.specularIntensityMap.channel),transmissionMapUv:V&&v(M.transmissionMap.channel),thicknessMapUv:Me&&v(M.thicknessMap.channel),alphaMapUv:Ue&&v(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Y||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ne.attributes.uv&&(he||Ue),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:Z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:w&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||G)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)E.push(F),E.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(A(E,M),y(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function A(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const E=g[M.type];let F;if(E){const k=tn[E];F=Pi.clone(k.uniforms)}else F=M.uniforms;return F}function I(M,E){let F;for(let k=0,Z=u.length;k<Z;k++){const Q=u[k];if(Q.cacheKey===E){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new Wg(n,E,M,r),u.push(F)),F}function L(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function D(M){c.remove(M)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:x,acquireProgram:I,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:U}}function jg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ol(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,p,m,g,v,f){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:f},n[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=f),e++,d}function a(h,p,m,g,v,f){const d=o(h,p,m,g,v,f);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(h,p,m,g,v,f){const d=o(h,p,m,g,v,f);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,p){t.length>1&&t.sort(h||Kg),i.length>1&&i.sort(p||Ol),s.length>1&&s.sort(p||Ol)}function u(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Jg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Bl,n.set(i,[o])):s>=r.length?(o=new Bl,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Xe};break;case"SpotLight":t={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Qg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ev=0;function tv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nv(n){const e=new Zg,t=Qg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const s=new z,r=new at,o=new at;function a(l){let u=0,h=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,v=0,f=0,d=0,A=0,y=0,x=0,I=0,L=0,D=0;l.sort(tv);for(let M=0,E=l.length;M<E;M++){const F=l[M],k=F.color,Z=F.intensity,Q=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=k.r*Z,h+=k.g*Z,p+=k.b*Z;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],Z);D++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ie=F.shadow,P=t.get(F);P.shadowIntensity=ie.intensity,P.shadowBias=ie.bias,P.shadowNormalBias=ie.normalBias,P.shadowRadius=ie.radius,P.shadowMapSize=ie.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=F.shadow.matrix,A++}i.directional[m]=ee,m++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(k).multiplyScalar(Z),ee.distance=Q,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[v]=ee;const ie=F.shadow;if(F.map&&(i.spotLightMap[I]=F.map,I++,ie.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[v]=ie.matrix,F.castShadow){const P=t.get(F);P.shadowIntensity=ie.intensity,P.shadowBias=ie.bias,P.shadowNormalBias=ie.normalBias,P.shadowRadius=ie.radius,P.shadowMapSize=ie.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=ne,x++}v++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy(k).multiplyScalar(Z),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[f]=ee,f++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const ie=F.shadow,P=t.get(F);P.shadowIntensity=ie.intensity,P.shadowBias=ie.bias,P.shadowNormalBias=ie.normalBias,P.shadowRadius=ie.radius,P.shadowMapSize=ie.mapSize,P.shadowCameraNear=ie.camera.near,P.shadowCameraFar=ie.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=F.shadow.matrix,y++}i.point[g]=ee,g++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(Z),ee.groundColor.copy(F.groundColor).multiplyScalar(Z),i.hemi[d]=ee,d++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==d||U.numDirectionalShadows!==A||U.numPointShadows!==y||U.numSpotShadows!==x||U.numSpotMaps!==I||U.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=d,U.numDirectionalShadows=A,U.numPointShadows=y,U.numSpotShadows=x,U.numSpotMaps=I,U.numLightProbes=D,i.version=ev++)}function c(l,u){let h=0,p=0,m=0,g=0,v=0;const f=u.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){const y=l[d];if(y.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),h++}else if(y.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:i}}function kl(n){const e=new nv(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function iv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new kl(n),e.set(s,[a])):r>=o.length?(a=new kl(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ov(n,e,t){let i=new _a;const s=new de,r=new de,o=new ot,a=new Mh({depthPacking:td}),c=new bh,l={},u=t.maxTextureSize,h={[On]:It,[It]:On,[nn]:nn},p=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let d=this.type;this.render=function(L,D,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||L.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(yn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Z=d!==_n&&this.type===_n,Q=d===_n&&this.type!==_n;for(let ne=0,ee=L.length;ne<ee;ne++){const ie=L[ne],P=ie.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const re=P.getFrameExtents();if(s.multiply(re),r.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,P.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,P.mapSize.y=r.y)),P.map===null||Z===!0||Q===!0){const ge=this.type!==_n?{minFilter:Zt,magFilter:Zt}:{};P.map!==null&&P.map.dispose(),P.map=new Xt(s.x,s.y,ge),P.map.texture.name=ie.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const ue=P.getViewportCount();for(let ge=0;ge<ue;ge++){const Re=P.getViewport(ge);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),k.viewport(o),P.updateMatrices(ie,ge),i=P.getFrustum(),x(D,U,P.camera,ie,this.type)}P.isPointLightShadow!==!0&&this.type===_n&&A(P,U),P.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(M,E,F)};function A(L,D){const U=e.update(v);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xt(s.x,s.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,U,p,v,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,U,m,v,null)}function y(L,D,U,M){let E=null;const F=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)E=F;else if(E=U.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=E.uuid,Z=D.uuid;let Q=l[k];Q===void 0&&(Q={},l[k]=Q);let ne=Q[Z];ne===void 0&&(ne=E.clone(),Q[Z]=ne,D.addEventListener("dispose",I)),E=ne}if(E.visible=D.visible,E.wireframe=D.wireframe,M===_n?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:h[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=n.properties.get(E);k.light=U}return E}function x(L,D,U,M,E){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===_n)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const Z=e.update(L),Q=L.material;if(Array.isArray(Q)){const ne=Z.groups;for(let ee=0,ie=ne.length;ee<ie;ee++){const P=ne[ee],re=Q[P.materialIndex];if(re&&re.visible){const ue=y(L,re,M,E);L.onBeforeShadow(n,L,D,U,Z,ue,P),n.renderBufferDirect(U,null,Z,ue,L,P),L.onAfterShadow(n,L,D,U,Z,ue,P)}}}else if(Q.visible){const ne=y(L,Q,M,E);L.onBeforeShadow(n,L,D,U,Z,ne,null),n.renderBufferDirect(U,null,Z,ne,L,null),L.onAfterShadow(n,L,D,U,Z,ne,null)}}const k=L.children;for(let Z=0,Q=k.length;Z<Q;Z++)x(k[Z],D,U,M,E)}function I(L){L.target.removeEventListener("dispose",I);for(const U in l){const M=l[U],E=L.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const av={[co]:uo,[ho]:mo,[fo]:go,[wi]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:wi};function lv(n,e){function t(){let V=!1;const Me=new ot;let be=null;const Ue=new ot(0,0,0,0);return{setMask:function(xe){be!==xe&&!V&&(n.colorMask(xe,xe,xe,xe),be=xe)},setLocked:function(xe){V=xe},setClear:function(xe,fe,Fe,qe,st){st===!0&&(xe*=qe,fe*=qe,Fe*=qe),Me.set(xe,fe,Fe,qe),Ue.equals(Me)===!1&&(n.clearColor(xe,fe,Fe,qe),Ue.copy(Me))},reset:function(){V=!1,be=null,Ue.set(-1,0,0,0)}}}function i(){let V=!1,Me=!1,be=null,Ue=null,xe=null;return{setReversed:function(fe){if(Me!==fe){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Me=fe;const qe=xe;xe=null,this.setClear(qe)}},getReversed:function(){return Me},setTest:function(fe){fe?S(n.DEPTH_TEST):j(n.DEPTH_TEST)},setMask:function(fe){be!==fe&&!V&&(n.depthMask(fe),be=fe)},setFunc:function(fe){if(Me&&(fe=av[fe]),Ue!==fe){switch(fe){case co:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case fo:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case mo:n.depthFunc(n.GREATER);break;case go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=fe}},setLocked:function(fe){V=fe},setClear:function(fe){xe!==fe&&(Me&&(fe=1-fe),n.clearDepth(fe),xe=fe)},reset:function(){V=!1,be=null,Ue=null,xe=null,Me=!1}}}function s(){let V=!1,Me=null,be=null,Ue=null,xe=null,fe=null,Fe=null,qe=null,st=null;return{setTest:function(et){V||(et?S(n.STENCIL_TEST):j(n.STENCIL_TEST))},setMask:function(et){Me!==et&&!V&&(n.stencilMask(et),Me=et)},setFunc:function(et,dn,en){(be!==et||Ue!==dn||xe!==en)&&(n.stencilFunc(et,dn,en),be=et,Ue=dn,xe=en)},setOp:function(et,dn,en){(fe!==et||Fe!==dn||qe!==en)&&(n.stencilOp(et,dn,en),fe=et,Fe=dn,qe=en)},setLocked:function(et){V=et},setClear:function(et){st!==et&&(n.clearStencil(et),st=et)},reset:function(){V=!1,Me=null,be=null,Ue=null,xe=null,fe=null,Fe=null,qe=null,st=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,m=[],g=null,v=!1,f=null,d=null,A=null,y=null,x=null,I=null,L=null,D=new Xe(0,0,0),U=0,M=!1,E=null,F=null,k=null,Z=null,Q=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ie=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(P)[1]),ee=ie>=1):P.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),ee=ie>=2);let re=null,ue={};const ge=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ke=new ot().fromArray(ge),W=new ot().fromArray(Re);function O(V,Me,be,Ue){const xe=new Uint8Array(4),fe=n.createTexture();n.bindTexture(V,fe),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<be;Fe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Me+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return fe}const b={};b[n.TEXTURE_2D]=O(n.TEXTURE_2D,n.TEXTURE_2D,1),b[n.TEXTURE_CUBE_MAP]=O(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),b[n.TEXTURE_2D_ARRAY]=O(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),b[n.TEXTURE_3D]=O(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),S(n.DEPTH_TEST),o.setFunc(wi),$(!1),Y(ka),S(n.CULL_FACE),B(yn);function S(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function j(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function le(V,Me){return h[V]!==Me?(n.bindFramebuffer(V,Me),h[V]=Me,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Me),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function G(V,Me){let be=m,Ue=!1;if(V){be=p.get(Me),be===void 0&&(be=[],p.set(Me,be));const xe=V.textures;if(be.length!==xe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Fe=xe.length;fe<Fe;fe++)be[fe]=n.COLOR_ATTACHMENT0+fe;be.length=xe.length,Ue=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(be)}function he(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const _e={[Jn]:n.FUNC_ADD,[Uu]:n.FUNC_SUBTRACT,[Nu]:n.FUNC_REVERSE_SUBTRACT};_e[Fu]=n.MIN,_e[Ou]=n.MAX;const C={[Bu]:n.ZERO,[ku]:n.ONE,[zu]:n.SRC_COLOR,[ao]:n.SRC_ALPHA,[Xu]:n.SRC_ALPHA_SATURATE,[Wu]:n.DST_COLOR,[Vu]:n.DST_ALPHA,[Hu]:n.ONE_MINUS_SRC_COLOR,[lo]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[Gu]:n.ONE_MINUS_DST_ALPHA,[qu]:n.CONSTANT_COLOR,[Yu]:n.ONE_MINUS_CONSTANT_COLOR,[ju]:n.CONSTANT_ALPHA,[Ku]:n.ONE_MINUS_CONSTANT_ALPHA};function B(V,Me,be,Ue,xe,fe,Fe,qe,st,et){if(V===yn){v===!0&&(j(n.BLEND),v=!1);return}if(v===!1&&(S(n.BLEND),v=!0),V!==Du){if(V!==f||et!==M){if((d!==Jn||x!==Jn)&&(n.blendEquation(n.FUNC_ADD),d=Jn,x=Jn),et)switch(V){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oo:n.blendFunc(n.ONE,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ha:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case za:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ha:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}A=null,y=null,I=null,L=null,D.set(0,0,0),U=0,f=V,M=et}return}xe=xe||Me,fe=fe||be,Fe=Fe||Ue,(Me!==d||xe!==x)&&(n.blendEquationSeparate(_e[Me],_e[xe]),d=Me,x=xe),(be!==A||Ue!==y||fe!==I||Fe!==L)&&(n.blendFuncSeparate(C[be],C[Ue],C[fe],C[Fe]),A=be,y=Ue,I=fe,L=Fe),(qe.equals(D)===!1||st!==U)&&(n.blendColor(qe.r,qe.g,qe.b,st),D.copy(qe),U=st),f=V,M=!1}function H(V,Me){V.side===nn?j(n.CULL_FACE):S(n.CULL_FACE);let be=V.side===It;Me&&(be=!be),$(be),V.blending===Mi&&V.transparent===!1?B(yn):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Ue=V.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),w(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?S(n.SAMPLE_ALPHA_TO_COVERAGE):j(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(V){E!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),E=V)}function Y(V){V!==Lu?(S(n.CULL_FACE),V!==F&&(V===ka?n.cullFace(n.BACK):V===Pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):j(n.CULL_FACE),F=V}function N(V){V!==k&&(ee&&n.lineWidth(V),k=V)}function w(V,Me,be){V?(S(n.POLYGON_OFFSET_FILL),(Z!==Me||Q!==be)&&(n.polygonOffset(Me,be),Z=Me,Q=be)):j(n.POLYGON_OFFSET_FILL)}function oe(V){V?S(n.SCISSOR_TEST):j(n.SCISSOR_TEST)}function Ee(V){V===void 0&&(V=n.TEXTURE0+ne-1),re!==V&&(n.activeTexture(V),re=V)}function Oe(V,Me,be){be===void 0&&(re===null?be=n.TEXTURE0+ne-1:be=re);let Ue=ue[be];Ue===void 0&&(Ue={type:void 0,texture:void 0},ue[be]=Ue),(Ue.type!==V||Ue.texture!==Me)&&(re!==be&&(n.activeTexture(be),re=be),n.bindTexture(V,Me||b[V]),Ue.type=V,Ue.texture=Me)}function R(){const V=ue[re];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(V){ke.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ke.copy(V))}function Ge(V){W.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),W.copy(V))}function Be(V,Me){let be=l.get(Me);be===void 0&&(be=new WeakMap,l.set(Me,be));let Ue=be.get(V);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,V.name),be.set(V,Ue))}function Ae(V,Me){const Ue=l.get(Me).get(V);c.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,V.__bindingPointIndex),c.set(Me,Ue))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ue={},h={},p=new WeakMap,m=[],g=null,v=!1,f=null,d=null,A=null,y=null,x=null,I=null,L=null,D=new Xe(0,0,0),U=0,M=!1,E=null,F=null,k=null,Z=null,Q=null,ke.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:S,disable:j,bindFramebuffer:le,drawBuffers:G,useProgram:he,setBlending:B,setMaterial:H,setFlipSided:$,setCullFace:Y,setLineWidth:N,setPolygonOffset:w,setScissorTest:oe,activeTexture:Ee,bindTexture:Oe,unbindTexture:R,compressedTexImage2D:_,compressedTexImage3D:q,texImage2D:De,texImage3D:ve,updateUBOMapping:Be,uniformBlockBinding:Ae,texStorage2D:Se,texStorage3D:Ie,texSubImage2D:ae,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Pe,scissor:we,viewport:Ge,reset:Ye}}function cv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return m?new OffscreenCanvas(R,_):er("canvas")}function v(R,_,q){let ae=1;const pe=Oe(R);if((pe.width>q||pe.height>q)&&(ae=q/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(ae*pe.width),Pe=Math.floor(ae*pe.height);h===void 0&&(h=g(ce,Pe));const Se=_?g(ce,Pe):h;return Se.width=ce,Se.height=Pe,Se.getContext("2d").drawImage(R,0,0,ce,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Pe+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function f(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,_,q,ae,pe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=_;if(_===n.RED&&(q===n.FLOAT&&(ce=n.R32F),q===n.HALF_FLOAT&&(ce=n.R16F),q===n.UNSIGNED_BYTE&&(ce=n.R8)),_===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.R8UI),q===n.UNSIGNED_SHORT&&(ce=n.R16UI),q===n.UNSIGNED_INT&&(ce=n.R32UI),q===n.BYTE&&(ce=n.R8I),q===n.SHORT&&(ce=n.R16I),q===n.INT&&(ce=n.R32I)),_===n.RG&&(q===n.FLOAT&&(ce=n.RG32F),q===n.HALF_FLOAT&&(ce=n.RG16F),q===n.UNSIGNED_BYTE&&(ce=n.RG8)),_===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.RG8UI),q===n.UNSIGNED_SHORT&&(ce=n.RG16UI),q===n.UNSIGNED_INT&&(ce=n.RG32UI),q===n.BYTE&&(ce=n.RG8I),q===n.SHORT&&(ce=n.RG16I),q===n.INT&&(ce=n.RG32I)),_===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),q===n.UNSIGNED_INT&&(ce=n.RGB32UI),q===n.BYTE&&(ce=n.RGB8I),q===n.SHORT&&(ce=n.RGB16I),q===n.INT&&(ce=n.RGB32I)),_===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),q===n.UNSIGNED_INT&&(ce=n.RGBA32UI),q===n.BYTE&&(ce=n.RGBA8I),q===n.SHORT&&(ce=n.RGBA16I),q===n.INT&&(ce=n.RGBA32I)),_===n.RGB&&(q===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),_===n.RGBA){const Pe=pe?Zs:Ze.getTransfer(ae);q===n.FLOAT&&(ce=n.RGBA32F),q===n.HALF_FLOAT&&(ce=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ce=Pe===tt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(R,_){let q;return R?_===null||_===ti||_===ss?q=n.DEPTH24_STENCIL8:_===xn?q=n.DEPTH32F_STENCIL8:_===is&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===ss?q=n.DEPTH_COMPONENT24:_===xn?q=n.DEPTH_COMPONENT32F:_===is&&(q=n.DEPTH_COMPONENT16),q}function I(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function L(R){const _=R.target;_.removeEventListener("dispose",L),U(_),_.isVideoTexture&&u.delete(_)}function D(R){const _=R.target;_.removeEventListener("dispose",D),E(_)}function U(R){const _=i.get(R);if(_.__webglInit===void 0)return;const q=R.source,ae=p.get(q);if(ae){const pe=ae[_.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&M(R),Object.keys(ae).length===0&&p.delete(q)}i.remove(R)}function M(R){const _=i.get(R);n.deleteTexture(_.__webglTexture);const q=R.source,ae=p.get(q);delete ae[_.__cacheKey],o.memory.textures--}function E(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(_.__webglFramebuffer[ae]))for(let pe=0;pe<_.__webglFramebuffer[ae].length;pe++)n.deleteFramebuffer(_.__webglFramebuffer[ae][pe]);else n.deleteFramebuffer(_.__webglFramebuffer[ae]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[ae])}else{if(Array.isArray(_.__webglFramebuffer))for(let ae=0;ae<_.__webglFramebuffer.length;ae++)n.deleteFramebuffer(_.__webglFramebuffer[ae]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ae=0;ae<_.__webglColorRenderbuffer.length;ae++)_.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[ae]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const q=R.textures;for(let ae=0,pe=q.length;ae<pe;ae++){const ce=i.get(q[ae]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(q[ae])}i.remove(R)}let F=0;function k(){F=0}function Z(){const R=F;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function Q(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function ne(R,_){const q=i.get(R);if(R.isVideoTexture&&oe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{b(q,R,_);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+_)}function ee(R,_){const q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){b(q,R,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+_)}function ie(R,_){const q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){b(q,R,_);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+_)}function P(R,_){const q=i.get(R);if(R.version>0&&q.__version!==R.version){S(q,R,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+_)}const re={[xo]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Js]:n.MIRRORED_REPEAT},ue={[Zt]:n.NEAREST,[Qu]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Mr]:n.LINEAR_MIPMAP_NEAREST,[ei]:n.LINEAR_MIPMAP_LINEAR},ge={[id]:n.NEVER,[cd]:n.ALWAYS,[sd]:n.LESS,[mc]:n.LEQUAL,[rd]:n.EQUAL,[ld]:n.GEQUAL,[od]:n.GREATER,[ad]:n.NOTEQUAL};function Re(R,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===Mr||_.magFilter===_s||_.magFilter===ei||_.minFilter===sn||_.minFilter===Mr||_.minFilter===_s||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,re[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,re[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,re[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ue[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==_s&&_.minFilter!==ei||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ke(R,_){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",L));const ae=_.source;let pe=p.get(ae);pe===void 0&&(pe={},p.set(ae,pe));const ce=Q(_);if(ce!==R.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),pe[ce].usedTimes++;const Pe=pe[R.__cacheKey];Pe!==void 0&&(pe[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(_)),R.__cacheKey=ce,R.__webglTexture=pe[ce].texture}return q}function W(R,_,q){return Math.floor(Math.floor(R/q)/_)}function O(R,_,q,ae){const ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,q,ae,_.data);else{ce.sort((ve,we)=>ve.start-we.start);let Pe=0;for(let ve=1;ve<ce.length;ve++){const we=ce[Pe],Ge=ce[ve],Be=we.start+we.count,Ae=W(Ge.start,_.width,4),Ye=W(we.start,_.width,4);Ge.start<=Be+1&&Ae===Ye&&W(Ge.start+Ge.count-1,_.width,4)===Ae?we.count=Math.max(we.count,Ge.start+Ge.count-we.start):(++Pe,ce[Pe]=Ge)}ce.length=Pe+1;const Se=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ve=0,we=ce.length;ve<we;ve++){const Ge=ce[ve],Be=Math.floor(Ge.start/4),Ae=Math.ceil(Ge.count/4),Ye=Be%_.width,V=Math.floor(Be/_.width),Me=Ae,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ye,V,Me,be,q,ae,_.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function b(R,_,q){let ae=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ae=n.TEXTURE_3D);const pe=ke(R,_),ce=_.source;t.bindTexture(ae,R.__webglTexture,n.TEXTURE0+q);const Pe=i.get(ce);if(ce.version!==Pe.__version||pe===!0){t.activeTexture(n.TEXTURE0+q);const Se=Ze.getPrimaries(Ze.workingColorSpace),Ie=_.colorSpace===In?null:Ze.getPrimaries(_.colorSpace),De=_.colorSpace===In||Se===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ve=v(_.image,!1,s.maxTextureSize);ve=Ee(_,ve);const we=r.convert(_.format,_.colorSpace),Ge=r.convert(_.type);let Be=y(_.internalFormat,we,Ge,_.colorSpace,_.isVideoTexture);Re(ae,_);let Ae;const Ye=_.mipmaps,V=_.isVideoTexture!==!0,Me=Pe.__version===void 0||pe===!0,be=ce.dataReady,Ue=I(_,ve);if(_.isDepthTexture)Be=x(_.format===os,_.type),Me&&(V?t.texStorage2D(n.TEXTURE_2D,1,Be,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Be,ve.width,ve.height,0,we,Ge,null));else if(_.isDataTexture)if(Ye.length>0){V&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,Ye[0].width,Ye[0].height);for(let xe=0,fe=Ye.length;xe<fe;xe++)Ae=Ye[xe],V?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,we,Ge,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Be,Ae.width,Ae.height,0,we,Ge,Ae.data);_.generateMipmaps=!1}else V?(Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,ve.width,ve.height),be&&O(_,ve,we,Ge)):t.texImage2D(n.TEXTURE_2D,0,Be,ve.width,ve.height,0,we,Ge,ve.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){V&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Be,Ye[0].width,Ye[0].height,ve.depth);for(let xe=0,fe=Ye.length;xe<fe;xe++)if(Ae=Ye[xe],_.format!==Jt)if(we!==null)if(V){if(be)if(_.layerUpdates.size>0){const Fe=gl(Ae.width,Ae.height,_.format,_.type);for(const qe of _.layerUpdates){const st=Ae.data.subarray(qe*Fe/Ae.data.BYTES_PER_ELEMENT,(qe+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,qe,Ae.width,Ae.height,1,we,st)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ve.depth,we,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Be,Ae.width,Ae.height,ve.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ve.depth,we,Ge,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Be,Ae.width,Ae.height,ve.depth,0,we,Ge,Ae.data)}else{V&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,Ye[0].width,Ye[0].height);for(let xe=0,fe=Ye.length;xe<fe;xe++)Ae=Ye[xe],_.format!==Jt?we!==null?V?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,we,Ge,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Be,Ae.width,Ae.height,0,we,Ge,Ae.data)}else if(_.isDataArrayTexture)if(V){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Be,ve.width,ve.height,ve.depth),be)if(_.layerUpdates.size>0){const xe=gl(ve.width,ve.height,_.format,_.type);for(const fe of _.layerUpdates){const Fe=ve.data.subarray(fe*xe/ve.data.BYTES_PER_ELEMENT,(fe+1)*xe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ve.width,ve.height,1,we,Ge,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,we,Ge,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,we,Ge,ve.data);else if(_.isData3DTexture)V?(Me&&t.texStorage3D(n.TEXTURE_3D,Ue,Be,ve.width,ve.height,ve.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,we,Ge,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,we,Ge,ve.data);else if(_.isFramebufferTexture){if(Me)if(V)t.texStorage2D(n.TEXTURE_2D,Ue,Be,ve.width,ve.height);else{let xe=ve.width,fe=ve.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Be,xe,fe,0,we,Ge,null),xe>>=1,fe>>=1}}else if(Ye.length>0){if(V&&Me){const xe=Oe(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Be,xe.width,xe.height)}for(let xe=0,fe=Ye.length;xe<fe;xe++)Ae=Ye[xe],V?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,we,Ge,Ae):t.texImage2D(n.TEXTURE_2D,xe,Be,we,Ge,Ae);_.generateMipmaps=!1}else if(V){if(Me){const xe=Oe(ve);t.texStorage2D(n.TEXTURE_2D,Ue,Be,xe.width,xe.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ge,ve)}else t.texImage2D(n.TEXTURE_2D,0,Be,we,Ge,ve);f(_)&&d(ae),Pe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function S(R,_,q){if(_.image.length!==6)return;const ae=ke(R,_),pe=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);const ce=i.get(pe);if(pe.version!==ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+q);const Pe=Ze.getPrimaries(Ze.workingColorSpace),Se=_.colorSpace===In?null:Ze.getPrimaries(_.colorSpace),Ie=_.colorSpace===In||Pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const De=_.isCompressedTexture||_.image[0].isCompressedTexture,ve=_.image[0]&&_.image[0].isDataTexture,we=[];for(let fe=0;fe<6;fe++)!De&&!ve?we[fe]=v(_.image[fe],!0,s.maxCubemapSize):we[fe]=ve?_.image[fe].image:_.image[fe],we[fe]=Ee(_,we[fe]);const Ge=we[0],Be=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type),Ye=y(_.internalFormat,Be,Ae,_.colorSpace),V=_.isVideoTexture!==!0,Me=ce.__version===void 0||ae===!0,be=pe.dataReady;let Ue=I(_,Ge);Re(n.TEXTURE_CUBE_MAP,_);let xe;if(De){V&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Ye,Ge.width,Ge.height);for(let fe=0;fe<6;fe++){xe=we[fe].mipmaps;for(let Fe=0;Fe<xe.length;Fe++){const qe=xe[Fe];_.format!==Jt?Be!==null?V?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,Ye,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,qe.width,qe.height,Be,Ae,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,Ye,qe.width,qe.height,0,Be,Ae,qe.data)}}}else{if(xe=_.mipmaps,V&&Me){xe.length>0&&Ue++;const fe=Oe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Ye,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ve){V?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we[fe].width,we[fe].height,Be,Ae,we[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,we[fe].width,we[fe].height,0,Be,Ae,we[fe].data);for(let Fe=0;Fe<xe.length;Fe++){const st=xe[Fe].image[fe].image;V?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,st.width,st.height,Be,Ae,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,Ye,st.width,st.height,0,Be,Ae,st.data)}}else{V?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,Ae,we[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ye,Be,Ae,we[fe]);for(let Fe=0;Fe<xe.length;Fe++){const qe=xe[Fe];V?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,Be,Ae,qe.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,Ye,Be,Ae,qe.image[fe])}}}f(_)&&d(n.TEXTURE_CUBE_MAP),ce.__version=pe.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function j(R,_,q,ae,pe,ce){const Pe=r.convert(q.format,q.colorSpace),Se=r.convert(q.type),Ie=y(q.internalFormat,Pe,Se,q.colorSpace),De=i.get(_),ve=i.get(q);if(ve.__renderTarget=_,!De.__hasExternalTextures){const we=Math.max(1,_.width>>ce),Ge=Math.max(1,_.height>>ce);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ce,Ie,we,Ge,_.depth,0,Pe,Se,null):t.texImage2D(pe,ce,Ie,we,Ge,0,Pe,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),w(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,pe,ve.__webglTexture,0,N(_)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,pe,ve.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,_,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){const ae=_.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,ce=x(_.stencilBuffer,pe),Pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=N(_);w(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ce,_.width,_.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ce,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,R)}else{const ae=_.textures;for(let pe=0;pe<ae.length;pe++){const ce=ae[pe],Pe=r.convert(ce.format,ce.colorSpace),Se=r.convert(ce.type),Ie=y(ce.internalFormat,Pe,Se,ce.colorSpace),De=N(_);q&&w(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ie,_.width,_.height):w(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(_.depthTexture);ae.__renderTarget=_,(!ae.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const pe=ae.__webglTexture,ce=N(_);if(_.depthTexture.format===rs)w(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(_.depthTexture.format===os)w(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function he(R){const _=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const ae=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ae){const pe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),_.__depthDisposeCallback=pe}_.__boundDepthTexture=ae}if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ae=R.texture.mipmaps;ae&&ae.length>0?G(_.__webglFramebuffer[0],R):G(_.__webglFramebuffer,R)}else if(q){_.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ae]),_.__webglDepthbuffer[ae]===void 0)_.__webglDepthbuffer[ae]=n.createRenderbuffer(),le(_.__webglDepthbuffer[ae],R,!1);else{const pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ce)}}else{const ae=R.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),le(_.__webglDepthbuffer,R,!1);else{const pe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(R,_,q){const ae=i.get(R);_!==void 0&&j(ae.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&he(R)}function C(R){const _=R.texture,q=i.get(R),ae=i.get(_);R.addEventListener("dispose",D);const pe=R.textures,ce=R.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=_.version,o.memory.textures++),ce){q.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer[Se]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)q.__webglFramebuffer[Se][Ie]=n.createFramebuffer()}else q.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer=[];for(let Se=0;Se<_.mipmaps.length;Se++)q.__webglFramebuffer[Se]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let Se=0,Ie=pe.length;Se<Ie;Se++){const De=i.get(pe[Se]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&w(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const Ie=pe[Se];q.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Se]);const De=r.convert(Ie.format,Ie.colorSpace),ve=r.convert(Ie.type),we=y(Ie.internalFormat,De,ve,Ie.colorSpace,R.isXRRenderTarget===!0),Ge=N(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,we,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,q.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),le(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Re(n.TEXTURE_CUBE_MAP,_);for(let Se=0;Se<6;Se++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)j(q.__webglFramebuffer[Se][Ie],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie);else j(q.__webglFramebuffer[Se],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);f(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let Se=0,Ie=pe.length;Se<Ie;Se++){const De=pe[Se],ve=i.get(De);let we=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ve.__webglTexture),Re(we,De),j(q.__webglFramebuffer,R,De,n.COLOR_ATTACHMENT0+Se,we,0),f(De)&&d(we)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),Re(Se,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)j(q.__webglFramebuffer[Ie],R,_,n.COLOR_ATTACHMENT0,Se,Ie);else j(q.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,Se,0);f(_)&&d(Se),t.unbindTexture()}R.depthBuffer&&he(R)}function B(R){const _=R.textures;for(let q=0,ae=_.length;q<ae;q++){const pe=_[q];if(f(pe)){const ce=A(R),Pe=i.get(pe).__webglTexture;t.bindTexture(ce,Pe),d(ce),t.unbindTexture()}}}const H=[],$=[];function Y(R){if(R.samples>0){if(w(R)===!1){const _=R.textures,q=R.width,ae=R.height;let pe=n.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(R),Se=_.length>1;if(Se)for(let De=0;De<_.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ie=R.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<_.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const ve=i.get(_[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,q,ae,0,0,q,ae,pe,n.NEAREST),c===!0&&(H.length=0,$.length=0,H.push(n.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(H.push(ce),$.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let De=0;De<_.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const ve=i.get(_[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function N(R){return Math.min(s.maxSamples,R.samples)}function w(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function oe(R){const _=o.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Ee(R,_){const q=R.colorSpace,ae=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Ri&&q!==In&&(Ze.getTransfer(q)===tt?(ae!==Jt||pe!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),_}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=P,this.rebindTextures=_e,this.setupRenderTarget=C,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=j,this.useMultisampledRTT=w}function uv(n,e){function t(i,s=In){let r;const o=Ze.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===da)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oc)return n.BYTE;if(i===ac)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===ua)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===on)return n.HALF_FLOAT;if(i===uc)return n.ALPHA;if(i===dc)return n.RGB;if(i===Jt)return n.RGBA;if(i===rs)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===hc)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===fc)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===$s||i===Xs||i===qs||i===Ys)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yo||i===So||i===Mo||i===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===To||i===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Eo||i===To)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ao||i===Co||i===Ro||i===Lo||i===Po||i===Io||i===Do||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===ko||i===zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ao)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Io)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Do)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===Vo||i===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ho)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===$o||i===Xo||i===qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xt({vertexShader:dv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends Oi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,p=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",f=new fv,d={},A=t.getContextAttributes();let y=null,x=null;const I=[],L=[],D=new de;let U=null;const M=new Bt;M.viewport=new ot;const E=new Bt;E.viewport=new ot;const F=[M,E],k=new Ih;let Z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let S=I[b];return S===void 0&&(S=new $r,I[b]=S),S.getTargetRaySpace()},this.getControllerGrip=function(b){let S=I[b];return S===void 0&&(S=new $r,I[b]=S),S.getGripSpace()},this.getHand=function(b){let S=I[b];return S===void 0&&(S=new $r,I[b]=S),S.getHandSpace()};function ne(b){const S=L.indexOf(b.inputSource);if(S===-1)return;const j=I[S];j!==void 0&&(j.update(b.inputSource,b.frame,l||o),j.dispatchEvent({type:b.type,data:b.inputSource}))}function ee(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ie);for(let b=0;b<I.length;b++){const S=L[b];S!==null&&(L[b]=null,I[b].disconnect(S))}Z=null,Q=null,f.reset();for(const b in d)delete d[b];e.setRenderTarget(y),m=null,p=null,h=null,s=null,x=null,O.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){a=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(b){l=b},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(b){if(s=b,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,le=null,G=null;A.depth&&(G=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=A.stencil?os:rs,le=A.stencil?ss:ti);const he={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(he),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Xt(p.textureWidth,p.textureHeight,{format:Jt,type:an,depthTexture:new wc(p.textureWidth,p.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const j={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Xt(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),O.setContext(s),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ie(b){for(let S=0;S<b.removed.length;S++){const j=b.removed[S],le=L.indexOf(j);le>=0&&(L[le]=null,I[le].disconnect(j))}for(let S=0;S<b.added.length;S++){const j=b.added[S];let le=L.indexOf(j);if(le===-1){for(let he=0;he<I.length;he++)if(he>=L.length){L.push(j),le=he;break}else if(L[he]===null){L[he]=j,le=he;break}if(le===-1)break}const G=I[le];G&&G.connect(j)}}const P=new z,re=new z;function ue(b,S,j){P.setFromMatrixPosition(S.matrixWorld),re.setFromMatrixPosition(j.matrixWorld);const le=P.distanceTo(re),G=S.projectionMatrix.elements,he=j.projectionMatrix.elements,_e=G[14]/(G[10]-1),C=G[14]/(G[10]+1),B=(G[9]+1)/G[5],H=(G[9]-1)/G[5],$=(G[8]-1)/G[0],Y=(he[8]+1)/he[0],N=_e*$,w=_e*Y,oe=le/(-$+Y),Ee=oe*-$;if(S.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(Ee),b.translateZ(oe),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),G[10]===-1)b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{const Oe=_e+oe,R=C+oe,_=N-Ee,q=w+(le-Ee),ae=B*C/R*Oe,pe=H*C/R*Oe;b.projectionMatrix.makePerspective(_,q,ae,pe,Oe,R),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}function ge(b,S){S===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(S.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(s===null)return;let S=b.near,j=b.far;f.texture!==null&&(f.depthNear>0&&(S=f.depthNear),f.depthFar>0&&(j=f.depthFar)),k.near=E.near=M.near=S,k.far=E.far=M.far=j,(Z!==k.near||Q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),Z=k.near,Q=k.far),k.layers.mask=b.layers.mask|6,M.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const le=b.parent,G=k.cameras;ge(k,le);for(let he=0;he<G.length;he++)ge(G[he],le);G.length===2?ue(k,M,E):k.projectionMatrix.copy(M.projectionMatrix),Re(b,k,le)};function Re(b,S,j){j===null?b.matrix.copy(S.matrixWorld):(b.matrix.copy(j.matrixWorld),b.matrix.invert(),b.matrix.multiply(S.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Yo*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(b){c=b,p!==null&&(p.fixedFoveation=b),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=b)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(k)},this.getCameraTexture=function(b){return d[b]};let ke=null;function W(b,S){if(u=S.getViewerPose(l||o),g=S,u!==null){const j=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let le=!1;j.length!==k.cameras.length&&(k.cameras.length=0,le=!0);for(let C=0;C<j.length;C++){const B=j[C];let H=null;if(m!==null)H=m.getViewport(B);else{const Y=h.getViewSubImage(p,B);H=Y.viewport,C===0&&(e.setRenderTargetTextures(x,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(x))}let $=F[C];$===void 0&&($=new Bt,$.layers.enable(C),$.viewport=new ot,F[C]=$),$.matrix.fromArray(B.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(B.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(H.x,H.y,H.width,H.height),C===0&&(k.matrix.copy($.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),le===!0&&k.cameras.push($)}const G=s.enabledFeatures;if(G&&G.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const C=h.getDepthInformation(j[0]);C&&C.isValid&&C.texture&&f.init(C,s.renderState)}if(G&&G.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let C=0;C<j.length;C++){const B=j[C].camera;if(B){let H=d[B];H||(H=new Ac,d[B]=H);const $=h.getCameraImage(B);H.sourceTexture=$}}}}for(let j=0;j<I.length;j++){const le=L[j],G=I[j];le!==null&&G!==void 0&&G.update(le,S,l||o)}ke&&ke(b,S),S.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:S}),g=null}const O=new Oc;O.setAnimationLoop(W),this.setAnimationLoop=function(b){ke=b},this.dispose=function(){}}}const Yn=new ln,mv=new at;function gv(n,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Mc(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,A,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),h(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,x)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),v(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?c(f,d,A,y):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===It&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===It&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const A=e.get(d),y=A.envMap,x=A.envMapRotation;y&&(f.envMap.value=y,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),f.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Yn)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,A,y){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*A,f.scale.value=y*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,A){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){const A=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,y){const x=y.program;i.uniformBlockBinding(A,x)}function l(A,y){let x=s[A.id];x===void 0&&(g(A),x=u(A),s[A.id]=x,A.addEventListener("dispose",f));const I=y.program;i.updateUBOMapping(A,I);const L=e.render.frame;r[A.id]!==L&&(p(A),r[A.id]=L)}function u(A){const y=h();A.__bindingPointIndex=y;const x=n.createBuffer(),I=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const y=s[A.id],x=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,D=x.length;L<D;L++){const U=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,E=U.length;M<E;M++){const F=U[M];if(m(F,L,M,I)===!0){const k=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let Q=0;for(let ne=0;ne<Z.length;ne++){const ee=Z[ne],ie=v(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,k+Q,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,Q),Q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,y,x,I){const L=A.value,D=y+"_"+x;if(I[D]===void 0)return typeof L=="number"||typeof L=="boolean"?I[D]=L:I[D]=L.clone(),!0;{const U=I[D];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return I[D]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(A){const y=A.uniforms;let x=0;const I=16;for(let D=0,U=y.length;D<U;D++){const M=Array.isArray(y[D])?y[D]:[y[D]];for(let E=0,F=M.length;E<F;E++){const k=M[E],Z=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,ne=Z.length;Q<ne;Q++){const ee=Z[Q],ie=v(ee),P=x%I,re=P%ie.boundary,ue=P+re;x+=re,ue!==0&&I-ue<ie.storage&&(x+=I-ue),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ie.storage}}}const L=x%I;return L>0&&(x+=I-L),A.__size=x,A.__cache={},this}function v(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function f(A){const y=A.target;y.removeEventListener("dispose",f);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class _v{constructor(e={}){const{canvas:t=dd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let f=null,d=null;const A=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=Tt;let L=0,D=0,U=null,M=-1,E=null;const F=new ot,k=new ot;let Z=null;const Q=new Xe(0);let ne=0,ee=t.width,ie=t.height,P=1,re=null,ue=null;const ge=new ot(0,0,ee,ie),Re=new ot(0,0,ee,ie);let ke=!1;const W=new _a;let O=!1,b=!1;const S=new at,j=new z,le=new ot,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function _e(){return U===null?P:1}let C=i;function B(T,X){return t.getContext(T,X)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",xe,!1),C===null){const X="webgl2";if(C=B(X,T),C===null)throw B(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let H,$,Y,N,w,oe,Ee,Oe,R,_,q,ae,pe,ce,Pe,Se,Ie,De,ve,we,Ge,Be,Ae,Ye;function V(){H=new Cm(C),H.init(),Be=new uv(C,H),$=new Sm(C,H,e,Be),Y=new lv(C,H),$.reversedDepthBuffer&&p&&Y.buffers.depth.setReversed(!0),N=new Pm(C),w=new jg,oe=new cv(C,H,Y,w,$,Be,N),Ee=new bm(x),Oe=new Am(x),R=new Fh(C),Ae=new xm(C,R),_=new Rm(C,R,N,Ae),q=new Dm(C,_,R,N),ve=new Im(C,$,oe),Se=new Mm(w),ae=new Yg(x,Ee,Oe,H,$,Ae,Se),pe=new gv(x,w),ce=new Jg,Pe=new iv(H),De=new _m(x,Ee,Oe,Y,q,m,c),Ie=new ov(x,q,$),Ye=new vv(C,N,$,Y),we=new ym(C,H,N),Ge=new Lm(C,H,N),N.programs=ae.programs,x.capabilities=$,x.extensions=H,x.properties=w,x.renderLists=ce,x.shadowMap=Ie,x.state=Y,x.info=N}V();const Me=new pv(x,C);this.xr=Me,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=H.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=H.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(ee,ie,!1))},this.getSize=function(T){return T.set(ee,ie)},this.setSize=function(T,X,te=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,ie=X,t.width=Math.floor(T*P),t.height=Math.floor(X*P),te===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(ee*P,ie*P).floor()},this.setDrawingBufferSize=function(T,X,te){ee=T,ie=X,P=te,t.width=Math.floor(T*te),t.height=Math.floor(X*te),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,X,te,se){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,X,te,se),Y.viewport(F.copy(ge).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,X,te,se){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,X,te,se),Y.scissor(k.copy(Re).multiplyScalar(P).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){Y.setScissorTest(ke=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,te=!0){let se=0;if(T){let K=!1;if(U!==null){const ye=U.texture.format;K=ye===ma||ye===pa||ye===fa}if(K){const ye=U.texture.type,Ce=ye===an||ye===ti||ye===is||ye===ss||ye===da||ye===ha,Ne=De.getClearColor(),Le=De.getClearAlpha(),Ve=Ne.r,We=Ne.g,ze=Ne.b;Ce?(g[0]=Ve,g[1]=We,g[2]=ze,g[3]=Le,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ve,v[1]=We,v[2]=ze,v[3]=Le,C.clearBufferiv(C.COLOR,0,v))}else se|=C.COLOR_BUFFER_BIT}X&&(se|=C.DEPTH_BUFFER_BIT),te&&(se|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),De.dispose(),ce.dispose(),Pe.dispose(),w.dispose(),Ee.dispose(),Oe.dispose(),q.dispose(),Ae.dispose(),Ye.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",en),Me.removeEventListener("sessionend",Da),zn.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=N.autoReset,X=Ie.enabled,te=Ie.autoUpdate,se=Ie.needsUpdate,K=Ie.type;V(),N.autoReset=T,Ie.enabled=X,Ie.autoUpdate=te,Ie.needsUpdate=se,Ie.type=K}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fe(T){const X=T.target;X.removeEventListener("dispose",fe),Fe(X)}function Fe(T){qe(T),w.remove(T)}function qe(T){const X=w.get(T).programs;X!==void 0&&(X.forEach(function(te){ae.releaseProgram(te)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,te,se,K,ye){X===null&&(X=G);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ne=Eu(T,X,te,se,K);Y.setMaterial(se,Ce);let Le=te.index,Ve=1;if(se.wireframe===!0){if(Le=_.getWireframeAttribute(te),Le===void 0)return;Ve=2}const We=te.drawRange,ze=te.attributes.position;let Je=We.start*Ve,nt=(We.start+We.count)*Ve;ye!==null&&(Je=Math.max(Je,ye.start*Ve),nt=Math.min(nt,(ye.start+ye.count)*Ve)),Le!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Le.count)):ze!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,ze.count));const dt=nt-Je;if(dt<0||dt===1/0)return;Ae.setup(K,se,Ne,te,Le);let rt,it=we;if(Le!==null&&(rt=R.get(Le),it=Ge,it.setIndex(rt)),K.isMesh)se.wireframe===!0?(Y.setLineWidth(se.wireframeLinewidth*_e()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(K.isLine){let He=se.linewidth;He===void 0&&(He=1),Y.setLineWidth(He*_e()),K.isLineSegments?it.setMode(C.LINES):K.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else K.isPoints?it.setMode(C.POINTS):K.isSprite&&it.setMode(C.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))it.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const He=K._multiDrawStarts,lt=K._multiDrawCounts,Qe=K._multiDrawCount,Ut=Le?R.get(Le).bytesPerElement:1,si=w.get(se).currentProgram.getUniforms();for(let Nt=0;Nt<Qe;Nt++)si.setValue(C,"_gl_DrawID",Nt),it.render(He[Nt]/Ut,lt[Nt])}else if(K.isInstancedMesh)it.renderInstances(Je,dt,K.count);else if(te.isInstancedBufferGeometry){const He=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,lt=Math.min(te.instanceCount,He);it.renderInstances(Je,dt,lt)}else it.render(Je,dt)};function st(T,X,te){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=It,T.needsUpdate=!0,vs(T,X,te),T.side=On,T.needsUpdate=!0,vs(T,X,te),T.side=nn):vs(T,X,te)}this.compile=function(T,X,te=null){te===null&&(te=T),d=Pe.get(te),d.init(X),y.push(d),te.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),T!==te&&T.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights();const se=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const ye=K.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Ne=ye[Ce];st(Ne,te,K),se.add(Ne)}else st(ye,te,K),se.add(ye)}),d=y.pop(),se},this.compileAsync=function(T,X,te=null){const se=this.compile(T,X,te);return new Promise(K=>{function ye(){if(se.forEach(function(Ce){w.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){K(T);return}setTimeout(ye,10)}H.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let et=null;function dn(T){et&&et(T)}function en(){zn.stop()}function Da(){zn.start()}const zn=new Oc;zn.setAnimationLoop(dn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){et=T,Me.setAnimationLoop(T),T===null?zn.stop():zn.start()},Me.addEventListener("sessionstart",en),Me.addEventListener("sessionend",Da),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(X),X=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,X,U),d=Pe.get(T,y.length),d.init(X),y.push(d),S.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),W.setFromProjectionMatrix(S,rn,X.reversedDepth),b=this.localClippingEnabled,O=Se.init(this.clippingPlanes,b),f=ce.get(T,A.length),f.init(),A.push(f),Me.enabled===!0&&Me.isPresenting===!0){const ye=x.xr.getDepthSensingMesh();ye!==null&&yr(ye,X,-1/0,x.sortObjects)}yr(T,X,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(re,ue),he=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,he&&De.addToRenderList(f,T),this.info.render.frame++,O===!0&&Se.beginShadows();const te=d.state.shadowsArray;Ie.render(te,T,X),O===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=f.opaque,K=f.transmissive;if(d.setupLights(),X.isArrayCamera){const ye=X.cameras;if(K.length>0)for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++){const Le=ye[Ce];Na(se,K,T,Le)}he&&De.render(T);for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++){const Le=ye[Ce];Ua(f,T,Le,Le.viewport)}}else K.length>0&&Na(se,K,T,X),he&&De.render(T),Ua(f,T,X);U!==null&&D===0&&(oe.updateMultisampleRenderTarget(U),oe.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(x,T,X),Ae.resetDefaultState(),M=-1,E=null,y.pop(),y.length>0?(d=y[y.length-1],O===!0&&Se.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?f=A[A.length-1]:f=null};function yr(T,X,te,se){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){se&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(S);const Ce=q.update(T),Ne=T.material;Ne.visible&&f.push(T,Ce,Ne,te,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const Ce=q.update(T),Ne=T.material;if(se&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),le.copy(Ce.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(S)),Array.isArray(Ne)){const Le=Ce.groups;for(let Ve=0,We=Le.length;Ve<We;Ve++){const ze=Le[Ve],Je=Ne[ze.materialIndex];Je&&Je.visible&&f.push(T,Ce,Je,te,le.z,ze)}}else Ne.visible&&f.push(T,Ce,Ne,te,le.z,null)}}const ye=T.children;for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++)yr(ye[Ce],X,te,se)}function Ua(T,X,te,se){const K=T.opaque,ye=T.transmissive,Ce=T.transparent;d.setupLightsView(te),O===!0&&Se.setGlobalState(x.clippingPlanes,te),se&&Y.viewport(F.copy(se)),K.length>0&&gs(K,X,te),ye.length>0&&gs(ye,X,te),Ce.length>0&&gs(Ce,X,te),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Na(T,X,te,se){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new Xt(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?on:an,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ye=d.state.transmissionRenderTarget[se.id],Ce=se.viewport||F;ye.setSize(Ce.z*x.transmissionResolutionScale,Ce.w*x.transmissionResolutionScale);const Ne=x.getRenderTarget(),Le=x.getActiveCubeFace(),Ve=x.getActiveMipmapLevel();x.setRenderTarget(ye),x.getClearColor(Q),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),he&&De.render(te);const We=x.toneMapping;x.toneMapping=Nn;const ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),O===!0&&Se.setGlobalState(x.clippingPlanes,se),gs(T,te,se),oe.updateMultisampleRenderTarget(ye),oe.updateRenderTargetMipmap(ye),H.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let nt=0,dt=X.length;nt<dt;nt++){const rt=X[nt],it=rt.object,He=rt.geometry,lt=rt.material,Qe=rt.group;if(lt.side===nn&&it.layers.test(se.layers)){const Ut=lt.side;lt.side=It,lt.needsUpdate=!0,Fa(it,te,se,He,lt,Qe),lt.side=Ut,lt.needsUpdate=!0,Je=!0}}Je===!0&&(oe.updateMultisampleRenderTarget(ye),oe.updateRenderTargetMipmap(ye))}x.setRenderTarget(Ne,Le,Ve),x.setClearColor(Q,ne),ze!==void 0&&(se.viewport=ze),x.toneMapping=We}function gs(T,X,te){const se=X.isScene===!0?X.overrideMaterial:null;for(let K=0,ye=T.length;K<ye;K++){const Ce=T[K],Ne=Ce.object,Le=Ce.geometry,Ve=Ce.group;let We=Ce.material;We.allowOverride===!0&&se!==null&&(We=se),Ne.layers.test(te.layers)&&Fa(Ne,X,te,Le,We,Ve)}}function Fa(T,X,te,se,K,ye){T.onBeforeRender(x,X,te,se,K,ye),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(x,X,te,se,T,ye),K.transparent===!0&&K.side===nn&&K.forceSinglePass===!1?(K.side=It,K.needsUpdate=!0,x.renderBufferDirect(te,X,se,K,T,ye),K.side=On,K.needsUpdate=!0,x.renderBufferDirect(te,X,se,K,T,ye),K.side=nn):x.renderBufferDirect(te,X,se,K,T,ye),T.onAfterRender(x,X,te,se,K,ye)}function vs(T,X,te){X.isScene!==!0&&(X=G);const se=w.get(T),K=d.state.lights,ye=d.state.shadowsArray,Ce=K.state.version,Ne=ae.getParameters(T,K.state,ye,X,te),Le=ae.getProgramCacheKey(Ne);let Ve=se.programs;se.environment=T.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(T.isMeshStandardMaterial?Oe:Ee).get(T.envMap||se.environment),se.envMapRotation=se.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",fe),Ve=new Map,se.programs=Ve);let We=Ve.get(Le);if(We!==void 0){if(se.currentProgram===We&&se.lightsStateVersion===Ce)return Ba(T,Ne),We}else Ne.uniforms=ae.getUniforms(T),T.onBeforeCompile(Ne,x),We=ae.acquireProgram(Ne,Le),Ve.set(Le,We),se.uniforms=Ne.uniforms;const ze=se.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=Se.uniform),Ba(T,Ne),se.needsLights=wu(T),se.lightsStateVersion=Ce,se.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=We,se.uniformsList=null,We}function Oa(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=js.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Ba(T,X){const te=w.get(T);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Eu(T,X,te,se,K){X.isScene!==!0&&(X=G),oe.resetTextureUnits();const ye=X.fog,Ce=se.isMeshStandardMaterial?X.environment:null,Ne=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ri,Le=(se.isMeshStandardMaterial?Oe:Ee).get(se.envMap||Ce),Ve=se.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,We=!!te.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!te.morphAttributes.position,Je=!!te.morphAttributes.normal,nt=!!te.morphAttributes.color;let dt=Nn;se.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dt=x.toneMapping);const rt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,it=rt!==void 0?rt.length:0,He=w.get(se),lt=d.state.lights;if(O===!0&&(b===!0||T!==E)){const bt=T===E&&se.id===M;Se.setState(se,T,bt)}let Qe=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==lt.state.version||He.outputColorSpace!==Ne||K.isBatchedMesh&&He.batching===!1||!K.isBatchedMesh&&He.batching===!0||K.isBatchedMesh&&He.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&He.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&He.instancing===!1||!K.isInstancedMesh&&He.instancing===!0||K.isSkinnedMesh&&He.skinning===!1||!K.isSkinnedMesh&&He.skinning===!0||K.isInstancedMesh&&He.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&He.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&He.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&He.instancingMorph===!1&&K.morphTexture!==null||He.envMap!==Le||se.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Se.numPlanes||He.numIntersection!==Se.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==We||He.morphTargets!==ze||He.morphNormals!==Je||He.morphColors!==nt||He.toneMapping!==dt||He.morphTargetsCount!==it)&&(Qe=!0):(Qe=!0,He.__version=se.version);let Ut=He.currentProgram;Qe===!0&&(Ut=vs(se,X,K));let si=!1,Nt=!1,Hi=!1;const ct=Ut.getUniforms(),Vt=He.uniforms;if(Y.useProgram(Ut.program)&&(si=!0,Nt=!0,Hi=!0),se.id!==M&&(M=se.id,Nt=!0),si||E!==T){Y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(C,"projectionMatrix",T.projectionMatrix),ct.setValue(C,"viewMatrix",T.matrixWorldInverse);const Rt=ct.map.cameraPosition;Rt!==void 0&&Rt.setValue(C,j.setFromMatrixPosition(T.matrixWorld)),$.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&ct.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Nt=!0,Hi=!0)}if(K.isSkinnedMesh){ct.setOptional(C,K,"bindMatrix"),ct.setOptional(C,K,"bindMatrixInverse");const bt=K.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ct.setValue(C,"boneTexture",bt.boneTexture,oe))}K.isBatchedMesh&&(ct.setOptional(C,K,"batchingTexture"),ct.setValue(C,"batchingTexture",K._matricesTexture,oe),ct.setOptional(C,K,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",K._indirectTexture,oe),ct.setOptional(C,K,"batchingColorTexture"),K._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",K._colorsTexture,oe));const Gt=te.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&ve.update(K,te,Ut),(Nt||He.receiveShadow!==K.receiveShadow)&&(He.receiveShadow=K.receiveShadow,ct.setValue(C,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Vt.envMap.value=Le,Vt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(Vt.envMapIntensity.value=X.environmentIntensity),Nt&&(ct.setValue(C,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Tu(Vt,Hi),ye&&se.fog===!0&&pe.refreshFogUniforms(Vt,ye),pe.refreshMaterialUniforms(Vt,se,P,ie,d.state.transmissionRenderTarget[T.id]),js.upload(C,Oa(He),Vt,oe)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(js.upload(C,Oa(He),Vt,oe),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&ct.setValue(C,"center",K.center),ct.setValue(C,"modelViewMatrix",K.modelViewMatrix),ct.setValue(C,"normalMatrix",K.normalMatrix),ct.setValue(C,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const bt=se.uniformsGroups;for(let Rt=0,Sr=bt.length;Rt<Sr;Rt++){const Hn=bt[Rt];Ye.update(Hn,Ut),Ye.bind(Hn,Ut)}}return Ut}function Tu(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function wu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,X,te){const se=w.get(T);se.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(T.texture).__webglTexture=X,w.get(T.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:te,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const te=w.get(T);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Au=C.createFramebuffer();this.setRenderTarget=function(T,X=0,te=0){U=T,L=X,D=te;let se=!0,K=null,ye=!1,Ce=!1;if(T){const Le=w.get(T);if(Le.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(C.FRAMEBUFFER,null),se=!1;else if(Le.__webglFramebuffer===void 0)oe.setupRenderTarget(T);else if(Le.__hasExternalTextures)oe.rebindTextures(T,w.get(T.texture).__webglTexture,w.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(Le.__boundDepthTexture!==ze){if(ze!==null&&w.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const We=w.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[X])?K=We[X][te]:K=We[X],ye=!0):T.samples>0&&oe.useMultisampledRTT(T)===!1?K=w.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?K=We[te]:K=We,F.copy(T.viewport),k.copy(T.scissor),Z=T.scissorTest}else F.copy(ge).multiplyScalar(P).floor(),k.copy(Re).multiplyScalar(P).floor(),Z=ke;if(te!==0&&(K=Au),Y.bindFramebuffer(C.FRAMEBUFFER,K)&&se&&Y.drawBuffers(T,K),Y.viewport(F),Y.scissor(k),Y.setScissorTest(Z),ye){const Le=w.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,te)}else if(Ce){const Le=X;for(let Ve=0;Ve<T.textures.length;Ve++){const We=w.get(T.textures[Ve]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ve,We.__webglTexture,te,Le)}}else if(T!==null&&te!==0){const Le=w.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Le.__webglTexture,te)}M=-1},this.readRenderTargetPixels=function(T,X,te,se,K,ye,Ce,Ne=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=w.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){Y.bindFramebuffer(C.FRAMEBUFFER,Le);try{const Ve=T.textures[Ne],We=Ve.format,ze=Ve.type;if(!$.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-se&&te>=0&&te<=T.height-K&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),C.readPixels(X,te,se,K,Be.convert(We),Be.convert(ze),ye))}finally{const Ve=U!==null?w.get(U).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,X,te,se,K,ye,Ce,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=w.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(X>=0&&X<=T.width-se&&te>=0&&te<=T.height-K){Y.bindFramebuffer(C.FRAMEBUFFER,Le);const Ve=T.textures[Ne],We=Ve.format,ze=Ve.type;if(!$.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,ye.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),C.readPixels(X,te,se,K,Be.convert(We),Be.convert(ze),0);const nt=U!==null?w.get(U).__webglFramebuffer:null;Y.bindFramebuffer(C.FRAMEBUFFER,nt);const dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hd(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ye),C.deleteBuffer(Je),C.deleteSync(dt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,te=0){const se=Math.pow(2,-te),K=Math.floor(T.image.width*se),ye=Math.floor(T.image.height*se),Ce=X!==null?X.x:0,Ne=X!==null?X.y:0;oe.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,te,0,0,Ce,Ne,K,ye),Y.unbindTexture()};const Cu=C.createFramebuffer(),Ru=C.createFramebuffer();this.copyTextureToTexture=function(T,X,te=null,se=null,K=0,ye=null){ye===null&&(K!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=K,K=0):ye=0);let Ce,Ne,Le,Ve,We,ze,Je,nt,dt;const rt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(te!==null)Ce=te.max.x-te.min.x,Ne=te.max.y-te.min.y,Le=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,We=te.min.y,ze=te.isBox3?te.min.z:0;else{const Gt=Math.pow(2,-K);Ce=Math.floor(rt.width*Gt),Ne=Math.floor(rt.height*Gt),T.isDataArrayTexture?Le=rt.depth:T.isData3DTexture?Le=Math.floor(rt.depth*Gt):Le=1,Ve=0,We=0,ze=0}se!==null?(Je=se.x,nt=se.y,dt=se.z):(Je=0,nt=0,dt=0);const it=Be.convert(X.format),He=Be.convert(X.type);let lt;X.isData3DTexture?(oe.setTexture3D(X,0),lt=C.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(oe.setTexture2DArray(X,0),lt=C.TEXTURE_2D_ARRAY):(oe.setTexture2D(X,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,X.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,X.unpackAlignment);const Qe=C.getParameter(C.UNPACK_ROW_LENGTH),Ut=C.getParameter(C.UNPACK_IMAGE_HEIGHT),si=C.getParameter(C.UNPACK_SKIP_PIXELS),Nt=C.getParameter(C.UNPACK_SKIP_ROWS),Hi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,We),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze);const ct=T.isDataArrayTexture||T.isData3DTexture,Vt=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Gt=w.get(T),bt=w.get(X),Rt=w.get(Gt.__renderTarget),Sr=w.get(bt.__renderTarget);Y.bindFramebuffer(C.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Hn=0;Hn<Le;Hn++)ct&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,w.get(T).__webglTexture,K,ze+Hn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,w.get(X).__webglTexture,ye,dt+Hn)),C.blitFramebuffer(Ve,We,Ce,Ne,Je,nt,Ce,Ne,C.DEPTH_BUFFER_BIT,C.NEAREST);Y.bindFramebuffer(C.READ_FRAMEBUFFER,null),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||w.has(T)){const Gt=w.get(T),bt=w.get(X);Y.bindFramebuffer(C.READ_FRAMEBUFFER,Cu),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ru);for(let Rt=0;Rt<Le;Rt++)ct?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gt.__webglTexture,K,ze+Rt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Gt.__webglTexture,K),Vt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,bt.__webglTexture,ye,dt+Rt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,bt.__webglTexture,ye),K!==0?C.blitFramebuffer(Ve,We,Ce,Ne,Je,nt,Ce,Ne,C.COLOR_BUFFER_BIT,C.NEAREST):Vt?C.copyTexSubImage3D(lt,ye,Je,nt,dt+Rt,Ve,We,Ce,Ne):C.copyTexSubImage2D(lt,ye,Je,nt,Ve,We,Ce,Ne);Y.bindFramebuffer(C.READ_FRAMEBUFFER,null),Y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Vt?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(lt,ye,Je,nt,dt,Ce,Ne,Le,it,He,rt.data):X.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,ye,Je,nt,dt,Ce,Ne,Le,it,rt.data):C.texSubImage3D(lt,ye,Je,nt,dt,Ce,Ne,Le,it,He,rt):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ye,Je,nt,Ce,Ne,it,He,rt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ye,Je,nt,rt.width,rt.height,it,rt.data):C.texSubImage2D(C.TEXTURE_2D,ye,Je,nt,Ce,Ne,it,He,rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut),C.pixelStorei(C.UNPACK_SKIP_PIXELS,si),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Hi),ye===0&&X.generateMipmaps&&C.generateMipmap(lt),Y.unbindTexture()},this.initRenderTarget=function(T){w.get(T).__webglFramebuffer===void 0&&oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){L=0,D=0,U=null,Y.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class hr extends Pt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Bt;const i=this,s=t.color!==void 0?new Xe(t.color):new Xe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||hr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Pn,h=new z,p=new z,m=new z,g=new at,v=new z(0,0,-1),f=new ot,d=new z,A=new z,y=new ot,x=new at,I=this.camera,L=new Xt(r,o,{samples:l,type:on}),D=new xt({name:c.name!==void 0?c.name:"unspecified",uniforms:Pi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});D.uniforms.tDiffuse.value=L.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=x,this.material=D,this.onBeforeRender=function(U,M,E){if(p.setFromMatrixPosition(i.matrixWorld),m.setFromMatrixPosition(E.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(p,m),d.dot(h)>0===!0&&this.forceUpdate===!1)return;d.reflect(h).negate(),d.add(p),g.extractRotation(E.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(m),A.subVectors(p,v),A.reflect(h).negate(),A.add(p),I.position.copy(d),I.up.set(0,1,0),I.up.applyMatrix4(g),I.up.reflect(h),I.lookAt(A),I.far=E.far,I.updateMatrixWorld(),I.projectionMatrix.copy(E.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(I.projectionMatrix),x.multiply(I.matrixWorldInverse),x.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,p),u.applyMatrix4(I.matrixWorldInverse),f.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const k=I.projectionMatrix;y.x=(Math.sign(f.x)+k.elements[8])/k.elements[0],y.y=(Math.sign(f.y)+k.elements[9])/k.elements[5],y.z=-1,y.w=(1+k.elements[10])/k.elements[14],f.multiplyScalar(2/f.dot(y)),k.elements[2]=f.x,k.elements[6]=f.y,k.elements[10]=f.z+1-a,k.elements[14]=f.w,i.visible=!1;const Z=U.getRenderTarget(),Q=U.xr.enabled,ne=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(L),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(M,I),U.xr.enabled=Q,U.shadowMap.autoUpdate=ne,U.setRenderTarget(Z);const ee=E.viewport;ee!==void 0&&U.state.viewport(ee),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return L},this.dispose=function(){L.dispose(),i.material.dispose()}}}hr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const xv=Tt;class tr extends Ma{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const r=this,o=new Ah(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(W,O){if(W.nodeType!==1)return;const b=x(W);let S=!1,j=null;switch(W.nodeName){case"svg":O=g(W,O);break;case"style":r(W);break;case"g":O=g(W,O);break;case"path":O=g(W,O),W.hasAttribute("d")&&(j=s(W));break;case"rect":O=g(W,O),j=c(W);break;case"polygon":O=g(W,O),j=l(W);break;case"polyline":O=g(W,O),j=u(W);break;case"circle":O=g(W,O),j=h(W);break;case"ellipse":O=g(W,O),j=p(W);break;case"line":O=g(W,O),j=m(W);break;case"defs":S=!0;break;case"use":O=g(W,O);const he=(W.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),_e=W.viewportElement.getElementById(he);_e?i(_e,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break}j&&(O.fill!==void 0&&O.fill!=="none"&&j.color.setStyle(O.fill,xv),L(j,ge),k.push(j),j.userData={node:W,style:O});const le=W.childNodes;for(let G=0;G<le.length;G++){const he=le[G];S&&he.nodeName!=="style"&&he.nodeName!=="defs"||i(he,O)}b&&(Q.pop(),Q.length>0?ge.copy(Q[Q.length-1]):ge.identity())}function s(W){const O=new Xn,b=new de,S=new de,j=new de;let le=!0,G=!1;const he=W.getAttribute("d");if(he===""||he==="none")return null;const _e=he.match(/[a-df-z][^a-df-z]*/ig);for(let C=0,B=_e.length;C<B;C++){const H=_e[C],$=H.charAt(0),Y=H.slice(1).trim();le===!0&&(G=!0,le=!1);let N;switch($){case"M":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=2)b.x=N[w+0],b.y=N[w+1],S.x=b.x,S.y=b.y,w===0?O.moveTo(b.x,b.y):O.lineTo(b.x,b.y),w===0&&j.copy(b);break;case"H":N=f(Y);for(let w=0,oe=N.length;w<oe;w++)b.x=N[w],S.x=b.x,S.y=b.y,O.lineTo(b.x,b.y),w===0&&G===!0&&j.copy(b);break;case"V":N=f(Y);for(let w=0,oe=N.length;w<oe;w++)b.y=N[w],S.x=b.x,S.y=b.y,O.lineTo(b.x,b.y),w===0&&G===!0&&j.copy(b);break;case"L":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=2)b.x=N[w+0],b.y=N[w+1],S.x=b.x,S.y=b.y,O.lineTo(b.x,b.y),w===0&&G===!0&&j.copy(b);break;case"C":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=6)O.bezierCurveTo(N[w+0],N[w+1],N[w+2],N[w+3],N[w+4],N[w+5]),S.x=N[w+2],S.y=N[w+3],b.x=N[w+4],b.y=N[w+5],w===0&&G===!0&&j.copy(b);break;case"S":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=4)O.bezierCurveTo(v(b.x,S.x),v(b.y,S.y),N[w+0],N[w+1],N[w+2],N[w+3]),S.x=N[w+0],S.y=N[w+1],b.x=N[w+2],b.y=N[w+3],w===0&&G===!0&&j.copy(b);break;case"Q":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=4)O.quadraticCurveTo(N[w+0],N[w+1],N[w+2],N[w+3]),S.x=N[w+0],S.y=N[w+1],b.x=N[w+2],b.y=N[w+3],w===0&&G===!0&&j.copy(b);break;case"T":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=2){const Ee=v(b.x,S.x),Oe=v(b.y,S.y);O.quadraticCurveTo(Ee,Oe,N[w+0],N[w+1]),S.x=Ee,S.y=Oe,b.x=N[w+0],b.y=N[w+1],w===0&&G===!0&&j.copy(b)}break;case"A":N=f(Y,[3,4],7);for(let w=0,oe=N.length;w<oe;w+=7){if(N[w+5]==b.x&&N[w+6]==b.y)continue;const Ee=b.clone();b.x=N[w+5],b.y=N[w+6],S.x=b.x,S.y=b.y,o(O,N[w],N[w+1],N[w+2],N[w+3],N[w+4],Ee,b),w===0&&G===!0&&j.copy(b)}break;case"m":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=2)b.x+=N[w+0],b.y+=N[w+1],S.x=b.x,S.y=b.y,w===0?O.moveTo(b.x,b.y):O.lineTo(b.x,b.y),w===0&&j.copy(b);break;case"h":N=f(Y);for(let w=0,oe=N.length;w<oe;w++)b.x+=N[w],S.x=b.x,S.y=b.y,O.lineTo(b.x,b.y),w===0&&G===!0&&j.copy(b);break;case"v":N=f(Y);for(let w=0,oe=N.length;w<oe;w++)b.y+=N[w],S.x=b.x,S.y=b.y,O.lineTo(b.x,b.y),w===0&&G===!0&&j.copy(b);break;case"l":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=2)b.x+=N[w+0],b.y+=N[w+1],S.x=b.x,S.y=b.y,O.lineTo(b.x,b.y),w===0&&G===!0&&j.copy(b);break;case"c":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=6)O.bezierCurveTo(b.x+N[w+0],b.y+N[w+1],b.x+N[w+2],b.y+N[w+3],b.x+N[w+4],b.y+N[w+5]),S.x=b.x+N[w+2],S.y=b.y+N[w+3],b.x+=N[w+4],b.y+=N[w+5],w===0&&G===!0&&j.copy(b);break;case"s":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=4)O.bezierCurveTo(v(b.x,S.x),v(b.y,S.y),b.x+N[w+0],b.y+N[w+1],b.x+N[w+2],b.y+N[w+3]),S.x=b.x+N[w+0],S.y=b.y+N[w+1],b.x+=N[w+2],b.y+=N[w+3],w===0&&G===!0&&j.copy(b);break;case"q":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=4)O.quadraticCurveTo(b.x+N[w+0],b.y+N[w+1],b.x+N[w+2],b.y+N[w+3]),S.x=b.x+N[w+0],S.y=b.y+N[w+1],b.x+=N[w+2],b.y+=N[w+3],w===0&&G===!0&&j.copy(b);break;case"t":N=f(Y);for(let w=0,oe=N.length;w<oe;w+=2){const Ee=v(b.x,S.x),Oe=v(b.y,S.y);O.quadraticCurveTo(Ee,Oe,b.x+N[w+0],b.y+N[w+1]),S.x=Ee,S.y=Oe,b.x=b.x+N[w+0],b.y=b.y+N[w+1],w===0&&G===!0&&j.copy(b)}break;case"a":N=f(Y,[3,4],7);for(let w=0,oe=N.length;w<oe;w+=7){if(N[w+5]==0&&N[w+6]==0)continue;const Ee=b.clone();b.x+=N[w+5],b.y+=N[w+6],S.x=b.x,S.y=b.y,o(O,N[w],N[w+1],N[w+2],N[w+3],N[w+4],Ee,b),w===0&&G===!0&&j.copy(b)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(b.copy(j),O.currentPath.currentPoint.copy(b),le=!0);break;default:console.warn(H)}G=!1}return O}function r(W){if(!(!W.sheet||!W.sheet.cssRules||!W.sheet.cssRules.length))for(let O=0;O<W.sheet.cssRules.length;O++){const b=W.sheet.cssRules[O];if(b.type!==1)continue;const S=b.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<S.length;j++){const le=Object.fromEntries(Object.entries(b.style).filter(([,G])=>G!==""));Z[S[j]]=Object.assign(Z[S[j]]||{},le)}}}function o(W,O,b,S,j,le,G,he){if(O==0||b==0){W.lineTo(he.x,he.y);return}S=S*Math.PI/180,O=Math.abs(O),b=Math.abs(b);const _e=(G.x-he.x)/2,C=(G.y-he.y)/2,B=Math.cos(S)*_e+Math.sin(S)*C,H=-Math.sin(S)*_e+Math.cos(S)*C;let $=O*O,Y=b*b;const N=B*B,w=H*H,oe=N/$+w/Y;if(oe>1){const Se=Math.sqrt(oe);O=Se*O,b=Se*b,$=O*O,Y=b*b}const Ee=$*w+Y*N,Oe=($*Y-Ee)/Ee;let R=Math.sqrt(Math.max(0,Oe));j===le&&(R=-R);const _=R*O*H/b,q=-R*b*B/O,ae=Math.cos(S)*_-Math.sin(S)*q+(G.x+he.x)/2,pe=Math.sin(S)*_+Math.cos(S)*q+(G.y+he.y)/2,ce=a(1,0,(B-_)/O,(H-q)/b),Pe=a((B-_)/O,(H-q)/b,(-B-_)/O,(-H-q)/b)%(Math.PI*2);W.currentPath.absellipse(ae,pe,O,b,ce,ce+Pe,le===0,S)}function a(W,O,b,S){const j=W*b+O*S,le=Math.sqrt(W*W+O*O)*Math.sqrt(b*b+S*S);let G=Math.acos(Math.max(-1,Math.min(1,j/le)));return W*S-O*b<0&&(G=-G),G}function c(W){const O=y(W.getAttribute("x")||0),b=y(W.getAttribute("y")||0),S=y(W.getAttribute("rx")||W.getAttribute("ry")||0),j=y(W.getAttribute("ry")||W.getAttribute("rx")||0),le=y(W.getAttribute("width")),G=y(W.getAttribute("height")),he=1-.551915024494,_e=new Xn;return _e.moveTo(O+S,b),_e.lineTo(O+le-S,b),(S!==0||j!==0)&&_e.bezierCurveTo(O+le-S*he,b,O+le,b+j*he,O+le,b+j),_e.lineTo(O+le,b+G-j),(S!==0||j!==0)&&_e.bezierCurveTo(O+le,b+G-j*he,O+le-S*he,b+G,O+le-S,b+G),_e.lineTo(O+S,b+G),(S!==0||j!==0)&&_e.bezierCurveTo(O+S*he,b+G,O,b+G-j*he,O,b+G-j),_e.lineTo(O,b+j),(S!==0||j!==0)&&_e.bezierCurveTo(O,b+j*he,O+S*he,b,O+S,b),_e}function l(W){function O(le,G,he){const _e=y(G),C=y(he);j===0?S.moveTo(_e,C):S.lineTo(_e,C),j++}const b=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Xn;let j=0;return W.getAttribute("points").replace(b,O),S.currentPath.autoClose=!0,S}function u(W){function O(le,G,he){const _e=y(G),C=y(he);j===0?S.moveTo(_e,C):S.lineTo(_e,C),j++}const b=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Xn;let j=0;return W.getAttribute("points").replace(b,O),S.currentPath.autoClose=!1,S}function h(W){const O=y(W.getAttribute("cx")||0),b=y(W.getAttribute("cy")||0),S=y(W.getAttribute("r")||0),j=new Ei;j.absarc(O,b,S,0,Math.PI*2);const le=new Xn;return le.subPaths.push(j),le}function p(W){const O=y(W.getAttribute("cx")||0),b=y(W.getAttribute("cy")||0),S=y(W.getAttribute("rx")||0),j=y(W.getAttribute("ry")||0),le=new Ei;le.absellipse(O,b,S,j,0,Math.PI*2);const G=new Xn;return G.subPaths.push(le),G}function m(W){const O=y(W.getAttribute("x1")||0),b=y(W.getAttribute("y1")||0),S=y(W.getAttribute("x2")||0),j=y(W.getAttribute("y2")||0),le=new Xn;return le.moveTo(O,b),le.lineTo(S,j),le.currentPath.autoClose=!1,le}function g(W,O){O=Object.assign({},O);let b={};if(W.hasAttribute("class")){const G=W.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<G.length;he++)b=Object.assign(b,Z["."+G[he]])}W.hasAttribute("id")&&(b=Object.assign(b,Z["#"+W.getAttribute("id")]));function S(G,he,_e){_e===void 0&&(_e=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),W.hasAttribute(G)&&(O[he]=_e(W.getAttribute(G))),b[G]&&(O[he]=_e(b[G])),W.style&&W.style[G]!==""&&(O[he]=_e(W.style[G]))}function j(G){return Math.max(0,Math.min(1,y(G)))}function le(G){return Math.max(0,y(G))}return S("fill","fill"),S("fill-opacity","fillOpacity",j),S("fill-rule","fillRule"),S("opacity","opacity",j),S("stroke","stroke"),S("stroke-opacity","strokeOpacity",j),S("stroke-width","strokeWidth",le),S("stroke-linejoin","strokeLineJoin"),S("stroke-linecap","strokeLineCap"),S("stroke-miterlimit","strokeMiterLimit",le),S("visibility","visibility"),O}function v(W,O){return W-(O-W)}function f(W,O,b){if(typeof W!="string")throw new TypeError("Invalid input: "+typeof W);const S={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,le=1,G=2,he=3;let _e=j,C=!0,B="",H="";const $=[];function Y(Ee,Oe,R){const _=new SyntaxError('Unexpected character "'+Ee+'" at index '+Oe+".");throw _.partial=R,_}function N(){B!==""&&(H===""?$.push(Number(B)):$.push(Number(B)*Math.pow(10,Number(H)))),B="",H=""}let w;const oe=W.length;for(let Ee=0;Ee<oe;Ee++){if(w=W[Ee],Array.isArray(O)&&O.includes($.length%b)&&S.FLAGS.test(w)){_e=le,B=w,N();continue}if(_e===j){if(S.WHITESPACE.test(w))continue;if(S.DIGIT.test(w)||S.SIGN.test(w)){_e=le,B=w;continue}if(S.POINT.test(w)){_e=G,B=w;continue}S.COMMA.test(w)&&(C&&Y(w,Ee,$),C=!0)}if(_e===le){if(S.DIGIT.test(w)){B+=w;continue}if(S.POINT.test(w)){B+=w,_e=G;continue}if(S.EXP.test(w)){_e=he;continue}S.SIGN.test(w)&&B.length===1&&S.SIGN.test(B[0])&&Y(w,Ee,$)}if(_e===G){if(S.DIGIT.test(w)){B+=w;continue}if(S.EXP.test(w)){_e=he;continue}S.POINT.test(w)&&B[B.length-1]==="."&&Y(w,Ee,$)}if(_e===he){if(S.DIGIT.test(w)){H+=w;continue}if(S.SIGN.test(w)){if(H===""){H+=w;continue}H.length===1&&S.SIGN.test(H)&&Y(w,Ee,$)}}S.WHITESPACE.test(w)?(N(),_e=j,C=!1):S.COMMA.test(w)?(N(),_e=j,C=!0):S.SIGN.test(w)?(N(),_e=le,B=w):S.POINT.test(w)?(N(),_e=G,B=w):Y(w,Ee,$)}return N(),$}const d=["mm","cm","in","pt","pc","px"],A={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(W){let O="px";if(typeof W=="string"||W instanceof String)for(let S=0,j=d.length;S<j;S++){const le=d[S];if(W.endsWith(le)){O=le,W=W.substring(0,W.length-le.length);break}}let b;return O==="px"&&t.defaultUnit!=="px"?b=A.in[t.defaultUnit]/t.defaultDPI:(b=A[O][t.defaultUnit],b<0&&(b=A[O].in*t.defaultDPI)),b*parseFloat(W)}function x(W){if(!(W.hasAttribute("transform")||W.nodeName==="use"&&(W.hasAttribute("x")||W.hasAttribute("y"))))return null;const O=I(W);return Q.length>0&&O.premultiply(Q[Q.length-1]),ge.copy(O),Q.push(O),O}function I(W){const O=new $e,b=ne;if(W.nodeName==="use"&&(W.hasAttribute("x")||W.hasAttribute("y"))){const S=y(W.getAttribute("x")),j=y(W.getAttribute("y"));O.translate(S,j)}if(W.hasAttribute("transform")){const S=W.getAttribute("transform").split(")");for(let j=S.length-1;j>=0;j--){const le=S[j].trim();if(le==="")continue;const G=le.indexOf("("),he=le.length;if(G>0&&G<he){const _e=le.slice(0,G),C=f(le.slice(G+1));switch(b.identity(),_e){case"translate":if(C.length>=1){const B=C[0];let H=0;C.length>=2&&(H=C[1]),b.translate(B,H)}break;case"rotate":if(C.length>=1){let B=0,H=0,$=0;B=C[0]*Math.PI/180,C.length>=3&&(H=C[1],$=C[2]),ee.makeTranslation(-H,-$),ie.makeRotation(B),P.multiplyMatrices(ie,ee),ee.makeTranslation(H,$),b.multiplyMatrices(ee,P)}break;case"scale":if(C.length>=1){const B=C[0];let H=B;C.length>=2&&(H=C[1]),b.scale(B,H)}break;case"skewX":C.length===1&&b.set(1,Math.tan(C[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":C.length===1&&b.set(1,0,0,Math.tan(C[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":C.length===6&&b.set(C[0],C[2],C[4],C[1],C[3],C[5],0,0,1);break}}O.premultiply(b)}}return O}function L(W,O){function b(G){ue.set(G.x,G.y,1).applyMatrix3(O),G.set(ue.x,ue.y)}function S(G){const he=G.xRadius,_e=G.yRadius,C=Math.cos(G.aRotation),B=Math.sin(G.aRotation),H=new z(he*C,he*B,0),$=new z(-_e*B,_e*C,0),Y=H.applyMatrix3(O),N=$.applyMatrix3(O),w=ne.set(Y.x,N.x,0,Y.y,N.y,0,0,0,1),oe=ee.copy(w).invert(),R=ie.copy(oe).transpose().multiply(oe).elements,_=F(R[0],R[1],R[4]),q=Math.sqrt(_.rt1),ae=Math.sqrt(_.rt2);if(G.xRadius=1/q,G.yRadius=1/ae,G.aRotation=Math.atan2(_.sn,_.cs),!((G.aEndAngle-G.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ce=ee.set(q,0,0,0,ae,0,0,0,1),Pe=ie.set(_.cs,_.sn,0,-_.sn,_.cs,0,0,0,1),Se=ce.multiply(Pe).multiply(w),Ie=De=>{const{x:ve,y:we}=new z(Math.cos(De),Math.sin(De),0).applyMatrix3(Se);return Math.atan2(we,ve)};G.aStartAngle=Ie(G.aStartAngle),G.aEndAngle=Ie(G.aEndAngle),D(O)&&(G.aClockwise=!G.aClockwise)}}function j(G){const he=M(O),_e=E(O);G.xRadius*=he,G.yRadius*=_e;const C=he>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);G.aRotation+=C,D(O)&&(G.aStartAngle*=-1,G.aEndAngle*=-1,G.aClockwise=!G.aClockwise)}const le=W.subPaths;for(let G=0,he=le.length;G<he;G++){const C=le[G].curves;for(let B=0;B<C.length;B++){const H=C[B];H.isLineCurve?(b(H.v1),b(H.v2)):H.isCubicBezierCurve?(b(H.v0),b(H.v1),b(H.v2),b(H.v3)):H.isQuadraticBezierCurve?(b(H.v0),b(H.v1),b(H.v2)):H.isEllipseCurve&&(re.set(H.aX,H.aY),b(re),H.aX=re.x,H.aY=re.y,U(O)?S(H):j(H))}}}function D(W){const O=W.elements;return O[0]*O[4]-O[1]*O[3]<0}function U(W){const O=W.elements,b=O[0]*O[3]+O[1]*O[4];if(b===0)return!1;const S=M(W),j=E(W);return Math.abs(b/(S*j))>Number.EPSILON}function M(W){const O=W.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function E(W){const O=W.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function F(W,O,b){let S,j,le,G,he;const _e=W+b,C=W-b,B=Math.sqrt(C*C+4*O*O);return _e>0?(S=.5*(_e+B),he=1/S,j=W*he*b-O*he*O):_e<0?j=.5*(_e-B):(S=.5*B,j=-.5*B),C>0?le=C+B:le=C-B,Math.abs(le)>2*Math.abs(O)?(he=-2*O/le,G=1/Math.sqrt(1+he*he),le=he*G):Math.abs(O)===0?(le=1,G=0):(he=-.5*le/O,le=1/Math.sqrt(1+he*he),G=he*le),C>0&&(he=le,le=-G,G=he),{rt1:S,rt2:j,cs:le,sn:G}}const k=[],Z={},Q=[],ne=new $e,ee=new $e,ie=new $e,P=new $e,re=new de,ue=new z,ge=new $e,Re=new DOMParser().parseFromString(e,"image/svg+xml");return i(Re.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:Re.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(v,f,d,A){const y=v.x,x=f.x,I=d.x,L=A.x,D=v.y,U=f.y,M=d.y,E=A.y,F=(L-I)*(D-M)-(E-M)*(y-I),k=(x-y)*(D-M)-(U-D)*(y-I),Z=(E-M)*(x-y)-(L-I)*(U-D),Q=F/Z,ne=k/Z;if(Z===0&&F!==0||Q<=0||Q>=1||ne<0||ne>1)return null;if(F===0&&Z===0){for(let ee=0;ee<2;ee++)if(o(ee===0?d:A,v,f),s.loc==i.ORIGIN){const ie=ee===0?d:A;return{x:ie.x,y:ie.y,t:s.t}}else if(s.loc==i.BETWEEN){const ie=+(y+s.t*(x-y)).toPrecision(10),P=+(D+s.t*(U-D)).toPrecision(10);return{x:ie,y:P,t:s.t}}return null}else{for(let P=0;P<2;P++)if(o(P===0?d:A,v,f),s.loc==i.ORIGIN){const re=P===0?d:A;return{x:re.x,y:re.y,t:s.t}}const ee=+(y+Q*(x-y)).toPrecision(10),ie=+(D+Q*(U-D)).toPrecision(10);return{x:ee,y:ie,t:Q}}}function o(v,f,d){const A=d.x-f.x,y=d.y-f.y,x=v.x-f.x,I=v.y-f.y,L=A*I-x*y;if(v.x===f.x&&v.y===f.y){s.loc=i.ORIGIN,s.t=0;return}if(v.x===d.x&&v.y===d.y){s.loc=i.DESTINATION,s.t=1;return}if(L<-Number.EPSILON){s.loc=i.LEFT;return}if(L>Number.EPSILON){s.loc=i.RIGHT;return}if(A*x<0||y*I<0){s.loc=i.BEHIND;return}if(Math.sqrt(A*A+y*y)<Math.sqrt(x*x+I*I)){s.loc=i.BEYOND;return}let D;A!==0?D=x/A:D=I/y,s.loc=i.BETWEEN,s.t=D}function a(v,f){const d=[],A=[];for(let y=1;y<v.length;y++){const x=v[y-1],I=v[y];for(let L=1;L<f.length;L++){const D=f[L-1],U=f[L],M=r(x,I,D,U);M!==null&&d.find(E=>E.t<=M.t+Number.EPSILON&&E.t>=M.t-Number.EPSILON)===void 0&&(d.push(M),A.push(new de(M.x,M.y)))}}return A}function c(v,f,d){const A=new de;f.getCenter(A);const y=[];return d.forEach(x=>{x.boundingBox.containsPoint(A)&&a(v,x.points).forEach(L=>{y.push({identifier:x.identifier,isCW:x.isCW,point:L})})}),y.sort((x,I)=>x.point.x-I.point.x),y}function l(v,f,d,A,y){(y==null||y==="")&&(y="nonzero");const x=new de;v.boundingBox.getCenter(x);const I=[new de(d,x.y),new de(A,x.y)],L=c(I,v.boundingBox,f);L.sort((k,Z)=>k.point.x-Z.point.x);const D=[],U=[];L.forEach(k=>{k.identifier===v.identifier?D.push(k):U.push(k)});const M=D[0].point.x,E=[];let F=0;for(;F<U.length&&U[F].point.x<M;)E.length>0&&E[E.length-1]===U[F].identifier?E.pop():E.push(U[F].identifier),F++;if(E.push(v.identifier),y==="evenodd"){const k=E.length%2===0,Z=E[E.length-2];return{identifier:v.identifier,isHole:k,for:Z}}else if(y==="nonzero"){let k=!0,Z=null,Q=null;for(let ne=0;ne<E.length;ne++){const ee=E[ne];k?(Q=f[ee].isCW,k=!1,Z=ee):Q!==f[ee].isCW&&(Q=f[ee].isCW,k=!0)}return{identifier:v.identifier,isHole:k,for:Z}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=999999999,h=-999999999,p=e.subPaths.map(v=>{const f=v.getPoints();let d=-999999999,A=999999999,y=-999999999,x=999999999;for(let I=0;I<f.length;I++){const L=f[I];L.y>d&&(d=L.y),L.y<A&&(A=L.y),L.x>y&&(y=L.x),L.x<x&&(x=L.x)}return h<=y&&(h=y+1),u>=x&&(u=x-1),{curves:v.curves,points:f,isCW:Dn.isClockWise(f),identifier:-1,boundingBox:new Uh(new de(x,A),new de(y,d))}});p=p.filter(v=>v.points.length>1);for(let v=0;v<p.length;v++)p[v].identifier=v;const m=p.map(v=>l(v,p,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return p.forEach(v=>{if(!m[v.identifier].isHole){const d=new Ti;d.curves=v.curves,m.filter(y=>y.isHole&&y.for===v.identifier).forEach(y=>{const x=p[y.identifier],I=new Ei;I.curves=x.curves,d.holes.push(I)}),g.push(d)}}),g}static getStrokeStyle(e,t,i,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,i,s){const r=[],o=[],a=[];if(tr.pointsToStrokeWithBuffers(e,t,i,s,r,o,a)===0)return null;const c=new cn;return c.setAttribute("position",new Dt(r,3)),c.setAttribute("normal",new Dt(o,3)),c.setAttribute("uv",new Dt(a,2)),c}static pointsToStrokeWithBuffers(e,t,i,s,r,o,a,c){const l=new de,u=new de,h=new de,p=new de,m=new de,g=new de,v=new de,f=new de,d=new de,A=new de,y=new de,x=new de,I=new de,L=new de,D=new de,U=new de,M=new de;i=i!==void 0?i:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=C(e);const E=e.length;if(E<2)return 0;const F=e[0].equals(e[E-1]);let k,Z=e[0],Q;const ne=t.strokeWidth/2,ee=1/(E-1);let ie=0,P,re,ue,ge,Re=!1,ke=0,W=c*3,O=c*2;b(e[0],e[1],l).multiplyScalar(ne),f.copy(e[0]).sub(l),d.copy(e[0]).add(l),A.copy(f),y.copy(d);for(let B=1;B<E;B++){k=e[B],B===E-1?F?Q=e[1]:Q=void 0:Q=e[B+1];const H=l;if(b(Z,k,H),h.copy(H).multiplyScalar(ne),x.copy(k).sub(h),I.copy(k).add(h),P=ie+ee,re=!1,Q!==void 0){b(k,Q,u),h.copy(u).multiplyScalar(ne),L.copy(k).sub(h),D.copy(k).add(h),ue=!0,h.subVectors(Q,Z),H.dot(h)<0&&(ue=!1),B===1&&(Re=ue),h.subVectors(Q,k),h.normalize();const $=Math.abs(H.dot(h));if($>Number.EPSILON){const Y=ne/$;h.multiplyScalar(-Y),p.subVectors(k,Z),m.copy(p).setLength(Y).add(h),U.copy(m).negate();const N=m.length(),w=p.length();p.divideScalar(w),g.subVectors(Q,k);const oe=g.length();switch(g.divideScalar(oe),p.dot(U)<w&&g.dot(U)<oe&&(re=!0),M.copy(m).add(k),U.add(k),ge=!1,re?ue?(D.copy(U),I.copy(U)):(L.copy(U),x.copy(U)):le(),t.strokeLineJoin){case"bevel":G(ue,re,P);break;case"round":he(ue,re),ue?j(k,x,L,P,0):j(k,D,I,P,1);break;case"miter":case"miter-clip":default:const Ee=ne*t.strokeMiterLimit/N;if(Ee<1)if(t.strokeLineJoin!=="miter-clip"){G(ue,re,P);break}else he(ue,re),ue?(g.subVectors(M,x).multiplyScalar(Ee).add(x),v.subVectors(M,L).multiplyScalar(Ee).add(L),S(x,P,0),S(g,P,0),S(k,P,.5),S(k,P,.5),S(g,P,0),S(v,P,0),S(k,P,.5),S(v,P,0),S(L,P,0)):(g.subVectors(M,I).multiplyScalar(Ee).add(I),v.subVectors(M,D).multiplyScalar(Ee).add(D),S(I,P,1),S(g,P,1),S(k,P,.5),S(k,P,.5),S(g,P,1),S(v,P,1),S(k,P,.5),S(v,P,1),S(D,P,1));else re?(ue?(S(d,ie,1),S(f,ie,0),S(M,P,0),S(d,ie,1),S(M,P,0),S(U,P,1)):(S(d,ie,1),S(f,ie,0),S(M,P,1),S(f,ie,0),S(U,P,0),S(M,P,1)),ue?L.copy(M):D.copy(M)):ue?(S(x,P,0),S(M,P,0),S(k,P,.5),S(k,P,.5),S(M,P,0),S(L,P,0)):(S(I,P,1),S(M,P,1),S(k,P,.5),S(k,P,.5),S(M,P,1),S(D,P,1)),ge=!0;break}}else le()}else le();!F&&B===E-1&&_e(e[0],A,y,ue,!0,ie),ie=P,Z=k,f.copy(L),d.copy(D)}if(!F)_e(k,x,I,ue,!1,P);else if(re&&r){let B=M,H=U;Re!==ue&&(B=U,H=M),ue?(ge||Re)&&(H.toArray(r,0),H.toArray(r,9),ge&&B.toArray(r,3)):(ge||!Re)&&(H.toArray(r,3),H.toArray(r,9),ge&&B.toArray(r,0))}return ke;function b(B,H,$){return $.subVectors(H,B),$.set(-$.y,$.x).normalize()}function S(B,H,$){r&&(r[W]=B.x,r[W+1]=B.y,r[W+2]=0,o&&(o[W]=0,o[W+1]=0,o[W+2]=1),W+=3,a&&(a[O]=H,a[O+1]=$,O+=2)),ke+=3}function j(B,H,$,Y,N){l.copy(H).sub(B).normalize(),u.copy($).sub(B).normalize();let w=Math.PI;const oe=l.dot(u);Math.abs(oe)<1&&(w=Math.abs(Math.acos(oe))),w/=i,h.copy(H);for(let Ee=0,Oe=i-1;Ee<Oe;Ee++)p.copy(h).rotateAround(B,w),S(h,Y,N),S(p,Y,N),S(B,Y,.5),h.copy(p);S(p,Y,N),S($,Y,N),S(B,Y,.5)}function le(){S(d,ie,1),S(f,ie,0),S(x,P,0),S(d,ie,1),S(x,P,0),S(I,P,1)}function G(B,H,$){H?B?(S(d,ie,1),S(f,ie,0),S(x,P,0),S(d,ie,1),S(x,P,0),S(U,P,1),S(x,$,0),S(L,$,0),S(U,$,.5)):(S(d,ie,1),S(f,ie,0),S(I,P,1),S(f,ie,0),S(U,P,0),S(I,P,1),S(I,$,1),S(U,$,0),S(D,$,1)):B?(S(x,$,0),S(L,$,0),S(k,$,.5)):(S(I,$,1),S(D,$,0),S(k,$,.5))}function he(B,H){H&&(B?(S(d,ie,1),S(f,ie,0),S(x,P,0),S(d,ie,1),S(x,P,0),S(U,P,1),S(x,ie,0),S(k,P,.5),S(U,P,1),S(k,P,.5),S(L,ie,0),S(U,P,1)):(S(d,ie,1),S(f,ie,0),S(I,P,1),S(f,ie,0),S(U,P,0),S(I,P,1),S(I,ie,1),S(U,P,0),S(k,P,.5),S(k,P,.5),S(U,P,0),S(D,ie,1)))}function _e(B,H,$,Y,N,w){switch(t.strokeLineCap){case"round":N?j(B,$,H,w,.5):j(B,H,$,w,.5);break;case"square":if(N)l.subVectors(H,B),u.set(l.y,-l.x),h.addVectors(l,u).add(B),p.subVectors(u,l).add(B),Y?(h.toArray(r,3),p.toArray(r,0),p.toArray(r,9)):(h.toArray(r,3),a[7]===1?p.toArray(r,9):h.toArray(r,9),p.toArray(r,0));else{l.subVectors($,B),u.set(l.y,-l.x),h.addVectors(l,u).add(B),p.subVectors(u,l).add(B);const oe=r.length;Y?(h.toArray(r,oe-3),p.toArray(r,oe-6),p.toArray(r,oe-12)):(p.toArray(r,oe-6),h.toArray(r,oe-3),p.toArray(r,oe-12))}break}}function C(B){let H=!1;for(let Y=1,N=B.length-1;Y<N;Y++)if(B[Y].distanceTo(B[Y+1])<s){H=!0;break}if(!H)return B;const $=[];$.push(B[0]);for(let Y=1,N=B.length-1;Y<N;Y++)B[Y].distanceTo(B[Y+1])>=s&&$.push(B[Y]);return $.push(B[B.length-1]),$}}}function yv(n,e=Math.PI/3){const t=Math.cos(e),i=(1+1e-10)*100,s=[new z,new z,new z],r=new z,o=new z,a=new z,c=new z;function l(v){const f=~~(v.x*i),d=~~(v.y*i),A=~~(v.z*i);return`${f},${d},${A}`}const u=n.index?n.toNonIndexed():n,h=u.attributes.position,p={};for(let v=0,f=h.count/3;v<f;v++){const d=3*v,A=s[0].fromBufferAttribute(h,d+0),y=s[1].fromBufferAttribute(h,d+1),x=s[2].fromBufferAttribute(h,d+2);r.subVectors(x,y),o.subVectors(A,y);const I=new z().crossVectors(r,o).normalize();for(let L=0;L<3;L++){const D=s[L],U=l(D);U in p||(p[U]=[]),p[U].push(I)}}const m=new Float32Array(h.count*3),g=new Qt(m,3,!1);for(let v=0,f=h.count/3;v<f;v++){const d=3*v,A=s[0].fromBufferAttribute(h,d+0),y=s[1].fromBufferAttribute(h,d+1),x=s[2].fromBufferAttribute(h,d+2);r.subVectors(x,y),o.subVectors(A,y),a.crossVectors(r,o).normalize();for(let I=0;I<3;I++){const L=s[I],D=l(L),U=p[D];c.set(0,0,0);for(let M=0,E=U.length;M<E;M++){const F=U[M];a.dot(F)>t&&c.add(F)}c.normalize(),g.setXYZ(d+I,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}const Ta='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1657 1000"><path fill="#fff" fill-rule="evenodd" d="M1001.2 604.4 L975.4 552.8 L970.5 549.8 L957.0 527.6 L920.1 490.8 L896.8 473.0 L856.3 451.5 L851.4 446.6 L796.1 428.7 L767.8 425.1 L762.9 422.0 L738.9 420.8 L696.6 465.0 L695.3 469.3 L679.4 484.6 L657.2 512.3 L634.5 533.8 L632.7 539.3 L608.7 562.0 L606.9 567.0 L593.4 580.5 L592.8 586.0 L598.3 589.7 L737.7 592.1 L773.3 604.4 L799.1 624.1 L817.0 646.8 L828.6 675.1 L830.5 721.7 L828.6 735.3 L816.3 765.4 L790.5 794.8 L777.6 804.7 L762.3 812.0 L722.4 823.1 L140.7 821.3 L133.3 824.3 L95.2 874.7 L89.7 878.4 L68.8 908.5 L45.5 934.3 L25.2 963.1 L1.2 989.6 L0.6 997.5 L16.6 999.4 L724.8 996.9 L783.8 988.9 L860.6 963.1 L863.6 958.8 L874.1 955.2 L902.9 936.1 L949.0 892.5 L968.1 867.3 L969.9 861.2 L975.4 856.9 L989.6 826.2 L993.9 821.9 L996.3 809.0 L1001.2 804.1 L1012.9 759.8 L1016.0 708.8 L1012.9 649.9 Z M1162.8 7.4 L1129.6 41.8 L1106.9 70.6 L1091.5 85.4 L1090.3 89.7 L1084.8 92.8 L1037.5 151.1 L1021.5 167.1 L1018.4 176.3 L1176.9 180.6 L1344.6 180.0 L1358.7 181.2 L1396.2 192.9 L1409.7 199.6 L1431.2 217.4 L1443.5 233.4 L1445.3 240.2 L1450.9 244.5 L1461.9 288.7 L1460.1 317.0 L1451.5 345.8 L1433.7 372.2 L1415.8 388.8 L1382.1 407.2 L1356.9 412.8 L1066.3 412.2 L1038.7 416.5 L962.5 417.1 L963.1 422.6 L983.4 439.2 L1019.7 482.8 L1040.5 522.1 L1045.5 526.4 L1068.2 588.5 L1123.5 590.9 L1361.2 590.3 L1396.2 598.3 L1423.8 613.0 L1451.5 640.7 L1462.5 662.8 L1469.3 683.7 L1469.3 726.7 L1457.0 759.2 L1444.1 778.9 L1412.2 805.3 L1388.2 815.7 L1361.2 822.5 L1145.0 823.1 L1123.5 826.2 L1108.1 856.3 L1089.7 882.1 L1067.0 907.9 L1046.1 938.6 L1041.2 941.6 L1019.7 968.7 L995.7 990.8 L996.3 996.9 L1048.5 997.5 L1360.6 996.9 L1417.1 988.9 L1450.2 981.0 L1495.1 963.1 L1498.8 958.8 L1538.7 937.3 L1582.9 899.3 L1602.0 875.3 L1603.8 869.2 L1608.7 866.7 L1627.1 834.2 L1629.0 824.9 L1635.1 815.7 L1646.2 786.2 L1648.6 768.4 L1652.9 761.7 L1655.4 675.7 L1653.6 650.5 L1648.0 638.2 L1645.6 621.6 L1633.9 590.9 L1629.0 584.8 L1628.4 578.6 L1617.3 561.4 L1590.9 528.3 L1559.6 497.5 L1560.2 492.0 L1584.2 469.3 L1602.0 443.5 L1603.8 436.7 L1608.1 433.7 L1627.1 392.5 L1629.6 377.8 L1633.9 371.0 L1640.7 336.6 L1642.5 281.3 L1639.4 250.0 L1627.8 199.0 L1608.7 156.6 L1603.8 153.6 L1601.4 145.6 L1582.9 117.9 L1538.1 73.7 L1522.7 64.5 L1519.7 59.6 L1488.3 40.5 L1449.6 24.0 L1428.7 19.7 L1422.0 15.4 L1379.0 8.6 Z M45.5 393.7 L70.6 444.1 L87.2 465.6 L88.5 470.5 L108.7 493.9 L153.6 531.3 L202.7 558.4 L242.6 570.0 L301.0 578.6 L517.2 578.6 L595.2 494.5 L608.7 476.7 L633.3 451.5 L634.5 447.2 L658.5 424.4 L662.2 415.2 L658.5 412.2 L323.7 411.5 L301.0 407.9 L282.6 400.5 L255.5 382.7 L229.7 354.4 L221.7 337.8 L217.4 321.9 L215.6 288.7 L219.3 261.7 L229.7 235.3 L240.8 219.3 L263.5 199.6 L271.5 197.2 L275.2 192.9 L317.6 180.0 L930.0 179.4 L1063.3 30.7 L1066.3 24.6 L1081.7 9.2 L1082.9 2.5 L1081.1 0.6 L316.3 0.6 L281.3 3.7 L230.3 16.0 L226.7 20.3 L213.1 22.7 L177.5 40.5 L173.8 45.5 L159.7 52.8 L134.5 72.5 L89.7 119.8 L87.2 126.5 L70.6 147.4 L69.4 153.6 L65.1 157.2 L52.8 181.8 L38.1 225.4 L30.7 277.0 L30.1 306.5 L33.2 343.4 Z"/></svg>',Vc="#0a0a0b",Sv=Ta.match(/ d="([^"]+)"/)[1],es=Ta.match(/viewBox="([^"]+)"/)[1];let zl=0;const Bn=n=>`<svg viewBox="${es}" width="${n*es.split(" ")[2]/es.split(" ")[3]}" height="${n}" style="display:block;flex:none" aria-hidden="true"><defs><linearGradient id="sbg${++zl}" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#f4f5f7"/><stop offset=".5" stop-color="#a9aeb5"/><stop offset="1" stop-color="#e9ebee"/></linearGradient></defs><path fill="url(#sbg${zl})" fill-rule="evenodd" d="${Sv}"/></svg>`;function Gc(n,e=[]){const t=new Tc;t.background=new Xe(0);const i=(o,a,c,l)=>{const u=new Pt(new ii(o,a),new ur({color:new Xe(1,1,1).multiplyScalar(l),side:nn}));u.position.set(...c),u.lookAt(0,0,0),t.add(u)};i(12,2,[0,7,1],2.2),i(1,9,[-7,1,3.5],6),i(.6,9,[7,1,1],3),i(10,.6,[0,1.5,-7],2.5),i(16,2.2,[0,-.6,9],.38),i(9,3,[2,-1,9],.06),e.forEach(([o,a,c,l])=>i(o,a,c,l));const s=new Zo(n),r=s.fromScene(t,.03).texture;return s.dispose(),r}function Mv(n,e,t,i,s=new z,r=.78){const o=new hr(new ii(60,60),{textureWidth:Math.round(e*.6),textureHeight:Math.round(t*.6),color:2763311,clipBias:.003});o.rotation.x=-Math.PI/2,o.position.set(s.x,i,s.z),n.add(o);const a=new Pt(new ii(60,60),new xt({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Xe(Vc)},uDim:{value:r}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        varying vec2 vUv; uniform vec3 uColor; uniform float uDim;
        void main(){
          float d = length(vUv - 0.5) * 2.0;
          float a = mix(uDim, 1.0, smoothstep(0.02, 0.16, d));
          gl_FragColor = vec4(uColor, a);
        }`}));a.rotation.x=-Math.PI/2,a.position.set(s.x,i+.001,s.z),n.add(a)}const bv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.55},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 p = vUv - 0.5;
      float v = smoothstep(0.95, 0.25, length(p * vec2(1.0, 1.2)));
      c.rgb *= mix(1.0 - uVignette, 1.0, v);
      c.rgb += (rand(vUv * 1024.0 + fract(uTime)) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};new Fc({color:13817306,metalness:1,roughness:.15,anisotropy:.45,clearcoat:.5,clearcoatRoughness:.18});const Ev=2.12,nr=new Fc({color:15790837,metalness:1,roughness:.3,anisotropy:.8,anisotropyRotation:Math.PI/4,clearcoat:.6,clearcoatRoughness:.12,envMapIntensity:1});function Tv(){const e=document.createElement("canvas");e.width=e.height=1024;const t=e.getContext("2d");t.fillStyle="#e6e6e6",t.fillRect(0,0,1024,1024);let i=7;const s=()=>(i=i*16807%2147483647)/2147483647;for(let o=2;o<1024;o+=1.5){const a=222+s()*33;t.strokeStyle=`rgb(${a},${a},${a})`,t.lineWidth=1+s()*1.5,t.beginPath(),t.arc(1024*.42,1024*.5,o,0,Math.PI*2),t.stroke()}const r=new zd(e);return r.colorSpace=Tt,r.wrapS=r.wrapT=Js,r.repeat.set(1/1700,1/1700),r.offset.set(.5,.5),r.anisotropy=8,r}let Vs=null;function wv(){if(Vs)return Vs;const n=new tr().parse(Ta),[,,e,t]=es.split(" ").map(Number);return Vs=n.paths.flatMap(i=>tr.createShapes(i)).map(i=>{const s=i.getPoints().map(a=>new de(a.x-e/2,t/2-a.y)),r=new Ti(s),o=s.reduce((a,c)=>a.add(c),new de).divideScalar(s.length);return{shape:r,c:o}}).sort((i,s)=>i.c.x+i.c.y*.01-(s.c.x+s.c.y*.01)),Vs}function Av(n){const e=n.attributes.position,t=n.attributes.normal,i=new z,s=new z,r=new z;for(let o=0;o<e.count;o+=3){i.fromBufferAttribute(e,o),s.fromBufferAttribute(e,o+1),r.fromBufferAttribute(e,o+2);const a=s.sub(i).cross(r.sub(i)).normalize();if(Math.abs(a.z)>.999)for(let c=0;c<3;c++)t.setXYZ(o+c,0,0,Math.sign(a.z))}t.needsUpdate=!0}function Cv(){const n=new Yi,[,,,e]=es.split(" ").map(Number),t=Ev/e,i=1/t,s=wv().map(({shape:r,c:o})=>{let a=new Sa(r,{depth:.3*i,bevelEnabled:!0,bevelThickness:.035*i,bevelSize:.024*i,bevelSegments:5,curveSegments:1});a.translate(0,0,-.15*i),a=yv(a,Math.PI/6),Av(a),a.scale(t,t,t),o.multiplyScalar(t);const c=new Pt(a,nr);return c.userData.c=o,n.add(c),c});return n.userData.pieces=s,n}const ir=n=>Math.min(1,Math.max(0,n)),ea=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Rv=n=>1+2.2*Math.pow(n-1,3)+1.2*Math.pow(n-1,2),Lv=[[-2.6,1.8,-2.2,.5],[-1.2,-2.4,1.6,-.6],[3.2,.6,-1.4,.8]];function Pv(n,e,t){if(n.userData.pieces.forEach((i,s)=>{const r=ir((e-.2-s*.22)/1.7),o=Rv(r),[a,c,l,u]=Lv[s];i.position.set(a*(1-o),c*(1-o),l*(1-o)),i.rotation.set(u*.6*(1-o),-u*(1-o),u*.3*(1-o))}),t){const s=-.9+ea(ir((e-2.4)/1.5))*1.5+Math.sin(Math.max(0,e-3.9)*.3)*.12;t.environmentRotation.y=s,nr.envMapRotation.y=s}}function Iv(n){nr.envMap=Gc(n,[[6,4,[-3.5,3,8],.85],[4,3,[4,-2,8],.2]]),nr.map=Tv()}const Dv=typeof window<"u"&&window.SB_CONFIG||{},Ln=(n,e,t)=>Dv[n]??(e||t),wt={BOOKING_URL:Ln("BOOKING_URL",void 0,""),BOOKING_EMBED:Ln("BOOKING_EMBED",null,!0),FORM_ENDPOINT:Ln("FORM_ENDPOINT",void 0,""),FORM_MODE:Ln("FORM_MODE",null,"auto"),CONTACT_EMAIL:Ln("CONTACT_EMAIL",null,""),COMMUNITY_URL:Ln("COMMUNITY_URL",void 0,""),SHOW_PROPOSED:Ln("SHOW_PROPOSED",null,!1),MOCKUP_TOOL_URL:Ln("MOCKUP_TOOL_URL",void 0,"../index.html")},Wc="1.0.0",pt=(n,e=!1)=>({value:n,approved:e}),kn=[{code:"CR",n:"01",id:"response",name:"Client Response",scope:"Lead capture, communication, CRM, booking and follow-up",job:"Answer, follow up and book every lead",problem:"Calls go to voicemail, texts sit unanswered and leads go cold before anyone follows up. Every missed inquiry is a job someone else books.",outcome:"Every call, text and form is answered in seconds and followed up until it books or closes. All of it is visible in one pipeline.",process:["Lead reaches out","Instant reply","Qualified","Booked","Followed up"],upgrades:"Extra phone lines or locations, bilingual receptionist, custom qualification flows"},{code:"GR",n:"02",id:"growth",name:"Growth",scope:"Advertising, lead generation, conversion and retention",job:"Create a steady flow of new demand",problem:"Work comes in waves. Referrals slow down, posting is inconsistent, and ad money disappears without a clear picture of what it brought back.",outcome:"Campaigns, landing pages and content that feed straight into Client Response, with reporting from ad to booked job to revenue.",process:["Campaign","Landing page","Inquiry","CRM","Report"],upgrades:"More ad platforms, more content volume, video production"},{code:"BB",n:"03",id:"build",name:"Brand & Build",scope:"Websites, branding, product design and digital experiences",job:"Look like the obvious choice",problem:"An outdated brand or a slow, confusing website makes good businesses look small. Visitors leave before they ever call.",outcome:"A clear brand and a fast, modern site that looks established and points every visitor to one next step, wired into Client Response from day one.",process:["Positioning","Structure","Design","Launch","Measure"],upgrades:"Extra pages, copywriting, photo and video shoots"},{code:"AO",n:"04",id:"ops",name:"AI & Operations",scope:"AI agents, workflows, dashboards and custom software",job:"Connect the tools and remove the busywork",problem:"Information lives in five apps, the team repeats the same manual steps every day, and the owner can’t see what is happening without asking.",outcome:"AI agents and automations that connect your tools and remove repeat work, plus a dashboard that shows the business at a glance.",process:["Map the process","Connect tools","Build the agent","Dashboard","SOPs"],upgrades:"More agents, more data sources, extra user seats"}],$c=[{code:"CR-01",system:"CR",name:"AI receptionist",soldAs:"setup+managed",deliverables:"Answers calls and texts 24/7, qualifies, hands off hot leads",client:"Services, pricing rules, service area, FAQs",ongoing:"We tune scripts and review calls monthly"},{code:"CR-02",system:"CR",name:"Missed-call text back",soldAs:"setup+managed",deliverables:"Tracking number, instant text on every missed call",client:"Carrier or number access",ongoing:"We monitor delivery"},{code:"CR-03",system:"CR",name:"Follow-up sequences",soldAs:"setup+managed",deliverables:"Text and email follow-up until booked or closed, reminders, no-show recovery",client:"Approve tone and offers",ongoing:"We maintain and improve sequences"},{code:"CR-04",system:"CR",name:"Online booking",soldAs:"setup+managed",deliverables:"Calendar, booking rules, confirmations",client:"Calendar access, keeps availability current",ongoing:"We maintain the rules"},{code:"CR-05",system:"CR",name:"CRM and pipeline",soldAs:"setup+managed",deliverables:"Pipeline stages, lead records, owner alerts",client:"Marks jobs won, lost or completed",ongoing:"We maintain the pipeline and automations"},{code:"GR-01",system:"GR",name:"Meta ads management",soldAs:"managed",deliverables:"Campaign build, creative testing, weekly optimisation",client:"Ad account, ad budget, job photos",ongoing:"We run campaigns. Ad spend is billed to your own account"},{code:"GR-02",system:"GR",name:"Landing pages",soldAs:"setup+managed",deliverables:"Campaign pages wired into your CRM",client:"Offer, proof, approval",ongoing:"We host and test pages"},{code:"GR-03",system:"GR",name:"Social content",soldAs:"managed",deliverables:"A set number of posts a month",client:"Photos and video from jobs",ongoing:"We produce, you approve"},{code:"GR-04",system:"GR",name:"Reporting and attribution",soldAs:"managed",deliverables:"Tracking and a monthly report from lead to booked job to revenue",client:"Job outcomes in the CRM",ongoing:"We report and review monthly"},{code:"GR-05",system:"GR",name:"Retention",soldAs:"managed",deliverables:"Review requests, past-customer reactivation campaigns",client:"Customer list",ongoing:"We run campaigns"},{code:"BB-01",system:"BB",name:"Website",soldAs:"project",deliverables:"Strategy, design, build, launch, wired into Client Response",client:"Content, photos, one decision-maker",ongoing:"Optional care plan (BB-05)"},{code:"BB-02",system:"BB",name:"Brand kit",soldAs:"project",deliverables:"Logo, colour, type, templates, usage guide",client:"Story, references, feedback rounds",ongoing:"None"},{code:"BB-03",system:"BB",name:"Graphics and templates",soldAs:"project|add-on",deliverables:"Social, print and sales templates",client:"Brand assets",ongoing:"None"},{code:"BB-04",system:"BB",name:"3D mockups and motion",soldAs:"project",deliverables:"Device mockups, product shots, logo animation",client:"Screens, products, logo files",ongoing:"None"},{code:"BB-05",system:"BB",name:"Website care plan",soldAs:"managed",deliverables:"Hosting, updates, small edits, uptime checks",client:"Edit requests",ongoing:"We maintain the site"},{code:"AO-01",system:"AO",name:"Custom AI agent",soldAs:"setup+managed",deliverables:"One agent for one defined workflow",client:"A process walkthrough, tool access",ongoing:"We monitor and improve it"},{code:"AO-02",system:"AO",name:"Owner dashboard",soldAs:"setup+managed",deliverables:"KPIs from the CRM, ads and calls in one view",client:"Data access",ongoing:"We maintain data connections"},{code:"AO-03",system:"AO",name:"Integrations and automation",soldAs:"project",deliverables:"Connected tools, automated handoffs",client:"Tool access, admin contact",ongoing:"Optional monitoring"},{code:"AO-04",system:"AO",name:"SOPs and training",soldAs:"project",deliverables:"Documented processes, team walkthrough",client:"Time with the person who does the job",ongoing:"Optional updates"},{code:"AO-05",system:"AO",name:"Custom software",soldAs:"project",deliverables:"Portals, internal tools, client apps, scoped per build",client:"Requirements sign-off",ongoing:"Optional support retainer"}],$t=[{id:"capture",name:"Capture",was:"Basic",outcome:"Every lead answered, followed up and booked",services:["CR-01","CR-02","CR-03","CR-04","CR-05"],addOns:["GR-05","AO-01","AO-02","BB-05"],implementation:pt(1500),management:pt(1200),term:pt("3-month minimum"),limits:pt(null),performance:!1},{id:"pipeline",name:"Pipeline",was:"Growth",outcome:"A steady flow of new leads, booked automatically",services:["CR-01","CR-02","CR-03","CR-04","CR-05","GR-01","GR-02","GR-03","GR-04"],addOns:["GR-05","AO-01","AO-02","BB-05"],implementation:pt(2500),management:pt(2e3),term:pt("3-month minimum"),limits:pt(null),performance:!0,featured:!0},{id:"command",name:"Command",was:"Full",outcome:"The whole business connected and visible in one dashboard",services:["CR-01","CR-02","CR-03","CR-04","CR-05","GR-01","GR-02","GR-03","GR-04","GR-05","AO-01","AO-02"],addOns:["BB-05","AO-03"],implementation:pt(4500),management:pt(3e3),term:pt("Month-to-month"),limits:pt(null),performance:!0}],Uv=[{code:"BB-01",name:"Website",note:"Pages, copy, integrations",from:pt(null)},{code:"BB-02",name:"Brand kit",note:"Logo, colour, type, templates",from:pt(null)},{code:"BB-03",name:"Graphics and templates",note:"Social, print, sales",from:pt(null)},{code:"BB-04",name:"3D mockups and motion",note:"Scenes, product shots, logo reveals",from:pt(null)},{code:"AO-01",name:"Custom AI agent",note:"One workflow, tools connected",from:pt(null)},{code:"AO-03",name:"Integrations and automation",note:"Tools and flows connected",from:pt(null)},{code:"AO-05",name:"Custom software",note:"Portals, internal tools, apps",from:pt(null)}],Nv=[{step:"Fit call",note:"Problem, budget range, decision-maker"},{step:"Scoping",note:"Larger builds get a paid session, credited to the project"},{step:"Fixed quote",note:"Codes, deliverables, revision rounds, timeline"},{step:"Deposit",note:"50% to start, 50% at launch"},{step:"Build",note:"Review checkpoints agreed up front"},{step:"Launch and handoff",note:"Walkthrough, then the option to keep it running on Capture"}],Hl={summary:"On Pipeline and Command, swap the monthly fee for 10% of each new job we bring in, or a fee that matches your ad spend. You must be running marketing with us, and only completed, paid jobs count.",rules:[["Who it’s for","Pipeline or Command, with System-Based running your campaigns above a minimum monthly ad spend"],["Tracking","Leads come in through our tracking numbers, forms or booking. Other channels don’t count"],["Implementation","Charged in full"],["Monthly floor","A reduced fee that covers tools and phone costs, plus the performance fee"],["Choice","10% per qualifying job, or a fee matching monthly ad spend. Switchable at the end of the minimum term"],["What counts","A new customer who first contacted you through our channels, booked, and whose job was completed and invoiced"],["Attribution window","First contact within 30 days before the booking"],["Excluded","Existing customers, referrals, repeat work, channels we don’t run"],["Commission basis","10% of collected revenue on the first invoice, not quoted or booked value"],["Cancellations","Cancelled and no-show jobs aren’t billable. Refunds within 30 days are credited back"],["Reporting","You mark each job’s outcome and invoice in the CRM within 14 days"]]},zt=n=>$c.find(e=>e.code===n),wa=n=>kn.find(e=>e.code===n),Xc=n=>$c.filter(e=>e.system===n);function qc(n){const e=new Set(n);if(!e.size)return null;const t=[...e].filter(l=>zt(l).soldAs!=="project"),i=[...e].filter(l=>zt(l).soldAs==="project");let s=null;for(const l of $t){const u=t.filter(m=>l.services.includes(m)).length,h=l.services.filter(m=>!e.has(m)).length,p=u*10-h;u&&(!s||p>s.score)&&(s={pkg:l,score:p,covered:u})}const r=s?.pkg??null,o=r?t.filter(l=>!r.services.includes(l)):t,a=r?r.services.filter(l=>!e.has(l)):[],c=!r||o.length>2;return{pkg:r,addOns:o,projects:i,unused:a,custom:c}}const fr={line:"System-Based builds the systems behind how a business attracts customers, responds to them, books work and operates.",body:"We set up the tools and processes that answer every inquiry, bring in new customers, make your business look the part and keep your team in sync. Then we run them for you, or hand them over.",facts:[{k:"4",v:"systems"},{k:"20",v:"services"},{k:"3",v:"ways to build"}],who:"For owner-led service businesses: painting, roofing and trades, auto and detailing, hospitality and other local operations."},Yc={CR:"Respond to customers, qualify inquiries, track conversations and keep follow-up moving.",GR:"Create new demand and see which campaigns bring in real opportunities.",BB:"Build the identity, website and digital experience customers trust.",AO:"Connect tools, reduce busywork and give your team a clearer view of the business."},jc={capture:"For when inquiries and follow-ups are falling through the cracks.",pipeline:"For when you need more demand, and a way to convert and track it.",command:"For when you want connected visibility, agents and coordination across the operation."},Fv=[{q:"What’s the difference between a system and a package?",a:"The four systems are what we do: Client Response, Growth, Brand & Build, and AI & Operations. Packages (Capture, Pipeline, Command) are ready-made bundles of services from those systems. If none fits, we scope a custom proposal from the same services."},{q:"What am I paying for?",a:"Usually two parts. Implementation is a one-time fee to build and set up your system. Management is a monthly fee to run, monitor and improve it. Anything outside the agreed scope is quoted before it starts, and ad spend is paid from your own ad account. Exact figures are confirmed after a short scoping call."},{q:"Do I need all four systems?",a:"No. Most businesses start where work is slipping, often answering and following up on inquiries, and add more only when it makes sense. A website or brand project can also stand on its own."},{q:"Is the walkthrough on this page real?",a:"It’s an illustrative example with fictional businesses and numbers, built to show how the pieces connect. Real projects are in the Work section, and we only publish client results with their approval."},{q:"Can you work with the tools I already use?",a:"Often, yes. On the first call we look at your phone, calendar, CRM and website, then tell you what connects, what we’d replace and why. We confirm integrations during scoping rather than promising them up front."},{q:"What happens after I send my scope?",a:"We read what you shared and reply personally with a recommendation and the next step, usually a short fit call. Nothing is built or billed until you agree to a written scope."},{q:"What is the System-Based Business Community?",a:"A place to watch real systems being built, learn what works and connect with other owners and operators. It’s free to follow. Templates and done-for-you help are there if you want them, never required."}],Kc=""+new URL("hero-Dm8ubQaK.jpg",import.meta.url).href,Jc=""+new URL("avatar-DCwWO_Wx.jpg",import.meta.url).href,Ov=""+new URL("community-4ahijgiB.jpg",import.meta.url).href,Bv=""+new URL("banner-Czc4Ndv6.jpg",import.meta.url).href,kv=""+new URL("story-DyAi8OBV.jpg",import.meta.url).href,zv=""+new URL("sections-L3fdrJTW.jpg",import.meta.url).href,Hv=""+new URL("pricing-BubkckJu.jpg",import.meta.url).href,Vv=""+new URL("mockup-tool-DejxXZm0.jpg",import.meta.url).href,Gv=""+new URL("logo-reveal-DJRQPl5i.mp4",import.meta.url).href,Wv=[{published:!0,title:"System-Based 3D identity",client:"System-Based",type:"brand",status:"live",summary:"A chrome SB monogram, a cinematic logo reveal and a full asset kit.",about:"We traced the SB monogram to vector, extruded it into spun silver and built a studio that renders every brand asset from the same 3D scene: website hero, social posts, stories, banners and the logo reveal.",built:["3D SB logo in three interlocking pieces","Cinematic logo reveal for reels and the website hero","Website, community and social asset kit","A brand system covering colour, type and motion rules"],systems:["BB"],problem:"A new company with a strong name and a 2D logo, but no visual system to carry it across a website, social and sales material.",solution:["BB-02","BB-04"],technology:["Three.js","Vector tracing","Vite","Playwright + FFmpeg rendering"],process:["Traced the master SB artwork to a vector","Extruded it into three interlocking 3D pieces","Built a studio that renders every asset from one scene","Exported stills, the logo reveal and the website hero"],results:[],observed:"One brand system now drives the website hero, social assets and the logo reveal, all from the same 3D scene.",approved:!0,clientCase:!1,links:[],media:[{video:Gv,poster:Jc},{img:Kc},{img:Ov},{img:kv},{img:Bv}]},{published:!0,title:"3D device mockup studio",client:"In-house tool",type:"ai",status:"demo",summary:"Drop in a screen recording and get a cinematic 3D phone video.",about:"A browser tool that puts any screen recording onto a 3D phone, with studio lighting, camera moves and video export. We use it to turn client websites, booking flows and AI receptionist demos into marketing videos.",built:["Real-time 3D phone with your video on screen","Lighting, camera and background controls","One-click System-Based black and silver look","Video recording in the browser"],systems:["BB","AO"],problem:"Turning screen recordings of websites and booking flows into marketing video took hours in editing tools.",solution:["BB-04","AO-05"],technology:["Vue","Three.js","MediaRecorder"],process:["Load a 3D phone model","Map the recording onto its screen","Add lighting, camera and export controls"],results:[],observed:"A screen recording becomes a lit, moving 3D phone video in minutes instead of hours.",approved:!0,clientCase:!1,links:[{label:"Open the tool",url:wt.MOCKUP_TOOL_URL}],media:[{img:Vv}]},{published:!1,title:"Services & pricing graphics",client:"System-Based",type:"brand",status:"live",summary:"The four systems and three packages as chrome 3D graphics.",about:"The system diagram and package stack used across the site and in sales decks. Each block is a system, and packages are stacks of them, so you can see what each one adds.",built:["Four-system diagram","Pricing stack graphic","Matching social versions"],systems:["BB"],solution:["BB-03","BB-04"],approved:!0,links:[],media:[{img:zv},{img:Hv}]},{published:!0,title:"AI receptionist demo line",client:"Live demo",type:"demo",status:"soon",summary:"Call or text a real number and see how it answers, qualifies and books.",about:"A public demo of the Client Response System. Call or text the number and the AI receptionist answers like it would for your business, then books a test appointment.",built:["AI receptionist on a live phone number","Missed-call text back","Booking into a demo calendar"],systems:["CR"],solution:["CR-01","CR-02","CR-04"],approved:!0,links:[],media:[]},{published:!1,title:"Veterans Funeral Care",client:"Veterans Funeral Care",type:"site",status:"live",summary:"",about:"",built:[],systems:[],problem:"",solution:[],technology:[],process:[],results:[],approved:!1,links:[{label:"Visit site",url:""}],media:[]},{published:!1,title:"Wreck & Refine",client:"Wreck & Refine",type:"site",status:"live",summary:"",about:"",built:[],systems:[],problem:"",solution:[],technology:[],process:[],results:[],approved:!1,links:[{label:"Visit site",url:""}],media:[]},{published:!1,title:"Salvatore’s",client:"Salvatore’s",type:"site",status:"live",summary:"",about:"",built:[],systems:[],problem:"",solution:[],technology:[],process:[],results:[],approved:!1,links:[{label:"Visit site",url:""}],media:[]}],$v=[{id:"all",label:"All work"},{id:"case",label:"Client case studies"},{id:"site",label:"Live sites"},{id:"demo",label:"Demos"},{id:"brand",label:"Brand"},{id:"ai",label:"AI & software"}],Ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xv=new ba(-1,1,1,-1,0,1);class qv extends cn{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}}const Yv=new qv;class Aa{constructor(e){this._mesh=new Pt(Yv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Zc extends zi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pi.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Aa(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vl extends zi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class jv extends zi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Kv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new de);this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zc(Ks),this.copyPass.material.blending=yn,this.clock=new Dh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vl!==void 0&&(o instanceof Vl?i=!0:o instanceof jv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jv extends zi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Zv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Di extends zi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Xt(r,o,{type:on});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Xt(r,o,{type:on});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Zv;this.highPassUniforms=Pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pi.clone(Ks.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader,blending:oo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new ur,this._fsQuad=new Aa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Di.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Di.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Di.BlurDirectionX=new de(1,0);Di.BlurDirectionY=new de(0,1);const Gs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Qv extends zi{constructor(){super(),this.uniforms=Pi.clone(Gs.uniforms),this.material=new yh({name:Gs.name,uniforms:this.uniforms,vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader}),this._fsQuad=new Aa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Gl=matchMedia("(prefers-reduced-motion: reduce)").matches,sr=matchMedia("(max-width: 760px)").matches||(navigator.hardwareConcurrency||8)<=4;function e_(){try{const n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}function t_(n,{alpha:e=!1}={}){const t=new _v({canvas:n,antialias:!sr,alpha:e,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(devicePixelRatio,sr?1.5:1.75)),t.toneMapping=ca,t.outputColorSpace=Tt,t}function n_(n,e,t,i=.3){if(sr)return null;const s=new Kv(n);return s.addPass(new Jv(e,t)),s.addPass(new Di(new de(256,256),i,.3,1.2)),s.addPass(new Qv),s.addPass(new Zc(bv)),s}function i_(n,e){let t=0,i=!1;const s=o=>{e(o/1e3),t=requestAnimationFrame(s)},r=()=>{const o=i&&!document.hidden;o&&!t&&(t=requestAnimationFrame(s)),!o&&t&&(cancelAnimationFrame(t),t=0)};new IntersectionObserver(([o])=>{i=o.isIntersecting,r()}).observe(n),document.addEventListener("visibilitychange",r)}function s_(n,e,t,i){const s=i.clientWidth,r=i.clientHeight;return!s||!r?!1:(n.setSize(s,r,!1),e?.setSize(s,r),t.aspect=s/r,t.updateProjectionMatrix(),!0)}function r_(n,{intro:e=!0,onIntroEnd:t,onLocked:i}={}){const s=t_(n),r=new Tc;r.background=new Xe(Vc),r.environment=Gc(s),Iv(s);const o=new Ph(16777215,2.2);o.position.set(-4,6,5),r.add(o);const a=new Bt(30,1,.1,100),c=Cv();r.add(c),sr||Mv(r,1200,700,-1.06);const l=n_(s,r,a),u={pos:new z,look:new z,rotY:-.12,s:.8},h={pos:new z,look:new z,rotY:-.4,s:.72};let p=8.6;const m=()=>{if(!s_(s,l,a,n))return;const M=a.aspect<1;p=M?10.5:8.6;const E=p*Math.tan(Math.PI/12);u.s=M?.56:.8,u.pos.set(0,-1.06+1.06*u.s,0),u.look.set(0,-.05,0),h.s=M?.5:a.aspect<1.4?.62:.72,h.pos.set(M?0:a.aspect<1.4?1.35:2.05,-1.06+1.06*h.s,0),h.rotY=M?-.25:-.4,h.look.set(0,M?-.7*E-.05:-.05,0)};m();const g={x:0,y:0},v={x:0,y:0};addEventListener("pointermove",M=>{g.x=M.clientX/innerWidth-.5,g.y=M.clientY/innerHeight-.5});const f=3.4,d=1.3;let A=e?0:f+d,y=!1,x=!1;const I=new z,L=M=>{Pv(c,Math.min(M,8),r);const E=ea(ir((M-f)/d)),F=u.s+(h.s-u.s)*E;c.scale.setScalar(F),c.position.lerpVectors(u.pos,h.pos,E),v.x+=(g.x-v.x)*.05,v.y+=(g.y-v.y)*.05,c.rotation.y=u.rotY+(h.rotY-u.rotY)*E+(v.x*.35+Math.sin(M*.3)*.04)*E,c.rotation.x=v.y*.15*E;const k=ea(ir(M/f));a.position.set(.6*(1-k),.5,p+1.6*(1-k)),I.lerpVectors(u.look,h.look,E),a.lookAt(I),!y&&M>f+d*.35&&(y=!0,i?.()),!x&&M>=f+d&&(x=!0,t?.()),l?(l.passes[3].uniforms.uTime.value=M,l.render()):s.render(r,a)};if(addEventListener("resize",()=>{m(),Gl&&L(10)}),Gl)return L(10),i?.(),t?.(),{skip(){}};let D=null,U=0;return i_(n,M=>{D===null&&(D=M),U=M-D+A,L(U)}),{skip(){U<f&&(A+=f-U)}}}const me=(n,e=document)=>e.querySelector(n),mt=(n,e=document)=>[...e.querySelectorAll(n)],J=(n="")=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ca(n){if(!n||!String(n).trim())return"";try{const e=new URL(String(n||""),location.href);return e.protocol==="https:"||e.protocol==="http:"?e.href:""}catch{return""}}const Ht=matchMedia("(prefers-reduced-motion: reduce)").matches,o_=matchMedia("(hover: hover) and (pointer: fine)").matches,Qc=n=>({get(e){try{return window[n].getItem(e)}catch{return null}},set(e,t){try{window[n].setItem(e,t)}catch{}}}),Ui=Qc("sessionStorage"),Wl=Qc("localStorage"),Ni=(n,e="start")=>document.getElementById(n)?.scrollIntoView({behavior:Ht?"auto":"smooth",block:e}),ta=()=>(crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2)).slice(0,36),eu="sb-scope-v2",a_=()=>({selectedProblemId:null,scenarioId:"response",recommendedSystem:null,recommendedPackageId:null,acceptedPackageId:null,selectedServiceIds:[],selectedProjectIds:[],customScope:!1,currentStoryBeat:0,communityInterest:!1,communityEntryPoint:null,journeySource:null});let Un=a_();try{const n=JSON.parse(Ui.get(eu)||"null");n&&typeof n=="object"&&(Un={...Un,...n})}catch{}const na=new Set,At=()=>Un;function Mn(n){Un={...Un,...n};const e={...Un};delete e.currentStoryBeat,Ui.set(eu,JSON.stringify(e)),na.forEach(t=>t(Un))}const pr=n=>(na.add(n),()=>na.delete(n));function tu(n){const e=new Set(Un.selectedServiceIds);return e.has(n)?e.delete(n):e.add(n),Mn({selectedServiceIds:[...e]}),e.has(n)}const rr=new Set;function ht(n,e={},{once:t=!1}={}){const i=n+JSON.stringify(e);if(!(t&&rr.has(i))){rr.add(i);try{window.dataLayer?.push({event:n,...e}),window.gtag?.("event",n,e),window.fbq?.("trackCustom",n,e)}catch{}}}function l_(n){if(!rr.has("lead:"+n)){rr.add("lead:"+n);try{window.fbq?.("track","Lead"),window.gtag?.("event","generate_lead")}catch{}}}const io=["The friction","The opportunity","The response","The next step","The handoff","The owner view","Connected","Your move"],$l={GR:"Brings the right people in, and shows which campaigns turn into real work.",BB:"Makes the first impression worth trusting, and gives every visitor a clear next step.",CR:"Answers, qualifies, books and follows up, so no inquiry goes quiet.",AO:"Connects tools and people, assigns the work and keeps the owner informed."},so=["New","Responded","Qualified","Booked","Follow-up"],c_=["New","Matched","Assigned","Scheduled","Tracked"],bn=[{id:"response",problem:"Leads come in, but we don’t respond fast enough.",problemSub:"Missed calls, DMs, forms, follow-up gaps.",outcome:"We’d begin by making sure every inquiry is answered, qualified and tracked.",business:"Northside Roofing",customer:"Homeowner, storm leak",systems:["CR"],services:["CR-01","CR-02","CR-03","CR-04","CR-05"],recommend:{system:"CR",packageId:"capture",label:"Capture"},stages:so,beats:[{title:"This is where businesses lose opportunities.",body:"A homeowner calls after hours about a leak. The phone is face down on the counter. Most people won’t leave a voicemail. They call the next roofer.",screen:{type:"lock",time:"7:42",notes:[{app:"Phone",title:"Missed call",text:"(555) 014-2290"}]},buzz:!0},{title:"A customer reaches out.",body:"Even though nobody answered, the call is captured the moment it comes in, with the number, time and source.",screen:{type:"call",name:"(555) 014-2290",state:"Missed call · 7:42 PM",sub:"No voicemail left"},lead:{stage:0,fields:{Source:"Phone call",Received:"7:42 PM",Status:"Unanswered"}}},{title:"They get a response, even when you’re busy.",body:"A text goes out automatically, in your business’s voice, following rules you set: hours, service area, what to say.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"sys",text:"Missed call · 7:42 PM"},{from:"out",text:"Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?"}]},lead:{stage:1,fields:{Source:"Phone call",Received:"7:42 PM",Reply:"Automatic text sent"}}},{title:"The conversation moves forward.",body:"The AI receptionist asks the questions you would ask. Every answer lands on the customer’s record, so nobody has to ask twice.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"out",text:"Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?"},{from:"in",text:"Got a leak over the kitchen after the storm."},{from:"out",text:"We can help. What’s the address, and is it leaking right now?"},{from:"in",text:"418 Elm St. Yes, dripping slowly."}],chips:["Leak repair","Active leak","418 Elm St"]},lead:{stage:2,fields:{Service:"Leak repair",Urgency:"Active leak",Address:"418 Elm St"}}},{title:"The right next step gets booked.",body:"This job fits, so the customer picks an inspection time. If it didn’t, it would be flagged for you to call back instead. Nothing is forced.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"out",text:"I can get an inspector out tomorrow at 9:00 AM or 1:30 PM. Which works?"},{from:"in",text:"9 works."}],card:{title:"Inspection booked",text:"Tomorrow · 9:00 AM · 418 Elm St"}},lead:{stage:3,fields:{Service:"Leak repair",Address:"418 Elm St",Appointment:"Tomorrow 9:00 AM"}}},{title:"Your team knows what happened and what comes next.",body:"You get a short summary. The whole conversation sits on the customer’s record, and the job is on the calendar.",screen:{type:"lock",time:"7:46",notes:[{app:"Owner alert",title:"New booking",text:"Leak repair · 418 Elm St · Tomorrow 9:00 AM"}]},lead:{stage:3,fields:{Service:"Leak repair",Appointment:"Tomorrow 9:00 AM",Owner:"Notified"}},owner:{note:"Booked: leak inspection, tomorrow 9:00 AM",kpis:[["New inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]}},{title:"One connected process. No loose ends.",body:"Reminders, follow-up and a review request after the job all run on their own. Here’s the part of System-Based doing the work.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"out",text:"Reminder: your inspector arrives at 9:00 AM. Reply C to confirm."},{from:"in",text:"C"},{from:"sys",text:"After the job · review request sent"}]},lead:{stage:4,fields:{Appointment:"Confirmed","After the job":"Review requested"}},owner:{note:"Reminder confirmed. Review request scheduled.",kpis:[["New inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},connected:!0},{title:"Want this running in your business?",body:"We’d start by making sure every call, text and form gets answered and tracked. That’s the Capture package. You can add more later.",screen:{type:"summary",title:"One inquiry, handled",rows:[["Missed call","Captured"],["First reply","Automatic"],["Questions","Answered"],["Inspection","Booked"],["Owner","Informed"]]},lead:{stage:4,fields:{Appointment:"Confirmed","After the job":"Review requested"}},owner:{note:"Every step recorded on one timeline.",kpis:[["New inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},choose:!0}]},{id:"growth",problem:"We need a more consistent flow of new customers.",problemSub:"Advertising, lead generation, conversion.",outcome:"We’d build demand you can measure, and make sure every new lead is answered and tracked.",business:"Brightline Painting",customer:"Homeowner, 3 rooms",systems:["GR","CR"],services:["GR-01","GR-02","GR-04","CR-01","CR-04","CR-05"],recommend:{system:"GR",packageId:"pipeline",label:"Pipeline"},stages:so,beats:[{title:"This is where businesses lose opportunities.",body:"Referrals slow down and the calendar gets gaps. Money goes into ads, but nobody can say which ones turned into paying work.",screen:{type:"lock",time:"9:15",notes:[{app:"Calendar",title:"Next week",text:"3 open days, no estimates booked"}]},buzz:!1},{title:"A customer finds you.",body:"A homeowner planning a refresh sees a campaign built for one clear offer, and taps “Get a quote”.",screen:{type:"ad",brand:"Brightline Painting",headline:"Interior painting, booked this month",text:"Clean lines, on schedule, no mess left behind.",cta:"Get a quote"},lead:{stage:0,fields:{Source:"Facebook ad",Campaign:"Spring interior",Status:"Clicked"}}},{title:"They land somewhere built to convert.",body:"The ad leads to a page made for that offer. The short form goes straight into your CRM, and a reply goes out right away.",screen:{type:"landing",brand:"Brightline Painting",headline:"Get your interior quote",fields:[["Name","Dana R."],["Rooms","3"],["When","Next month"]],button:"Request my quote",toast:"Request sent · we’ll text you shortly"},lead:{stage:1,fields:{Source:"Facebook ad",Campaign:"Spring interior",Reply:"Automatic text sent"}}},{title:"The conversation moves forward.",body:"A quick text exchange confirms the details. The answers are saved, so the estimator walks in prepared.",screen:{type:"thread",contact:"Dana R.",msgs:[{from:"out",text:"Thanks Dana! Got your request for 3 rooms. Walls only, or trim and ceilings too?"},{from:"in",text:"Walls and trim. Living room, hall and one bedroom."}],chips:["Interior","3 rooms","Walls + trim"]},lead:{stage:2,fields:{Job:"Interior, 3 rooms",Scope:"Walls + trim",Campaign:"Spring interior"}}},{title:"The right next step gets booked.",body:"Dana picks an estimate slot that fits your calendar. Nobody spent the evening chasing a form fill.",screen:{type:"thread",contact:"Dana R.",msgs:[{from:"out",text:"We can do a free estimate Thursday at 4:30 PM or Saturday at 10 AM."},{from:"in",text:"Thursday works."}],card:{title:"Estimate booked",text:"Thursday · 4:30 PM"}},lead:{stage:3,fields:{Job:"Interior, 3 rooms",Estimate:"Thursday 4:30 PM",Campaign:"Spring interior"}}},{title:"You can see where the work came from.",body:"The booking is tied to the campaign that produced it, so you know what to spend more on and what to switch off.",screen:{type:"lock",time:"6:12",notes:[{app:"Owner alert",title:"Estimate booked",text:"Dana R. · Thursday 4:30 PM · from Spring interior ad"}]},lead:{stage:3,fields:{Estimate:"Thursday 4:30 PM",Source:"Facebook ad",Campaign:"Spring interior"}},owner:{note:"Source of this booking: Spring interior campaign",kpis:[["New leads","1"],["Answered","1"],["Booked","1"],["From ads","1"]]}},{title:"One connected process. No loose ends.",body:"Growth brings the inquiry in. Client Response makes sure it’s answered and booked. Reporting connects the two.",screen:{type:"summary",title:"Spring interior campaign",rows:[["Ad","Clicked"],["Landing page","Form sent"],["First reply","Automatic"],["Estimate","Booked"],["Source","Tracked"]]},lead:{stage:4,fields:{Estimate:"Reminder sent",Source:"Facebook ad",Campaign:"Spring interior"}},owner:{note:"Campaign report updates as leads book.",kpis:[["New leads","1"],["Answered","1"],["Booked","1"],["From ads","1"]]},connected:!0},{title:"Want this running in your business?",body:"We’d build campaigns and pages for your best offer, and make sure every new lead is answered and booked. That’s the Pipeline package.",screen:{type:"summary",title:"One new customer, traced",rows:[["Campaign","Spring interior"],["Lead","Captured"],["Reply","Automatic"],["Estimate","Booked"],["Source","Known"]]},lead:{stage:4,fields:{Estimate:"Reminder sent",Source:"Facebook ad",Campaign:"Spring interior"}},owner:{note:"Spend and bookings on one view.",kpis:[["New leads","1"],["Answered","1"],["Booked","1"],["From ads","1"]]},choose:!0}]},{id:"brand",problem:"Our website or brand isn’t doing us justice.",problemSub:"Trust, presentation, conversion, digital presence.",outcome:"We’d rebuild the first impression, then connect it so every visitor has a clear next step.",business:"Ridgeway Auto Detail",customer:"SUV owner",systems:["BB","CR"],services:["BB-01","BB-02","CR-01","CR-04","CR-05"],recommend:{system:"BB",packageId:null,label:"A Brand & Build project"},stages:so,beats:[{title:"This is where businesses lose opportunities.",body:"People do find you. But an outdated site makes great work look small, and visitors leave without calling.",screen:{type:"site",variant:"old",brand:"Ridgeway Auto Detail",headline:"Welcome to our website!",sub:"We do car detailing. Call for prices. Open Mon to Sat.",note:"Concept: “before”"}},{title:"A customer is comparing options.",body:"They have three tabs open. Whoever looks most credible and easiest to book usually gets the call.",screen:{type:"site",variant:"old",brand:"Ridgeway Auto Detail",headline:"Welcome to our website!",sub:"We do car detailing. Call for prices. Open Mon to Sat.",note:"Concept: “before”"},lead:{stage:0,fields:{Visitor:"Comparing 3 detailers",Status:"Not yet in touch"}}},{title:"Your brand earns the trust.",body:"A sharp identity and a fast page show the quality of the work, what it costs to start, and one clear way to book.",screen:{type:"site",variant:"new",brand:"Ridgeway",headline:"Showroom finish, in your driveway.",sub:"Full details from a fixed starting price. Book in under a minute.",cta:"Book a detail",note:"Concept: “after”"},lead:{stage:0,fields:{Visitor:"Viewing services",Status:"Not yet in touch"}}},{title:"The customer reaches out.",body:"A short form asks only what matters. The request goes straight into the same response system as calls and texts.",screen:{type:"landing",brand:"Ridgeway",headline:"Book a detail",fields:[["Package","Full detail"],["Vehicle","SUV"],["Day","Saturday"]],button:"Request booking",toast:"Request sent · confirming your time"},lead:{stage:1,fields:{Source:"Website form",Package:"Full detail",Vehicle:"SUV"}}},{title:"The right next step gets booked.",body:"The customer gets a confirmation with the time and what to expect, without anyone stopping work to reply.",screen:{type:"thread",contact:"Ridgeway",msgs:[{from:"out",text:"Thanks for booking with Ridgeway! Saturday 10:00 AM works for a full SUV detail."},{from:"in",text:"Perfect, see you then."}],card:{title:"Detail booked",text:"Saturday · 10:00 AM · Full detail"}},lead:{stage:3,fields:{Source:"Website form",Booking:"Saturday 10:00 AM",Package:"Full detail"}}},{title:"Your team knows what happened and what comes next.",body:"The booking, the vehicle and the package are on one record. You can see which pages bring in bookings.",screen:{type:"lock",time:"11:03",notes:[{app:"Owner alert",title:"New booking",text:"Full detail · SUV · Saturday 10:00 AM · from website"}]},lead:{stage:3,fields:{Booking:"Saturday 10:00 AM",Source:"Website form",Owner:"Notified"}},owner:{note:"Booked from the new services page",kpis:[["Site inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]}},{title:"One connected process. No loose ends.",body:"Brand & Build makes the first impression. Client Response turns the visit into a booked job. Each one does its part.",screen:{type:"summary",title:"From visit to booking",rows:[["First impression","Credible"],["Next step","Obvious"],["Request","Captured"],["Booking","Confirmed"],["Owner","Informed"]]},lead:{stage:4,fields:{Booking:"Reminder sent",Source:"Website form","After the job":"Review requested"}},owner:{note:"Website and bookings on one view.",kpis:[["Site inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},connected:!0},{title:"Want this running in your business?",body:"We’d start with a one-time Brand & Build project, quoted after a short call. If you want it to keep booking jobs, it can connect to Client Response.",screen:{type:"summary",title:"A brand that books",rows:[["Identity","Rebuilt"],["Website","Fast, clear"],["Form","Connected"],["Replies","Automatic"],["Results","Visible"]]},lead:{stage:4,fields:{Booking:"Reminder sent",Source:"Website form","After the job":"Review requested"}},owner:{note:"Website and bookings on one view.",kpis:[["Site inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},choose:!0}]},{id:"ops",problem:"Our team and tools aren’t connected.",problemSub:"Manual tasks, scattered information, no visibility.",outcome:"We’d map how work moves today, then connect the tools so every inquiry has an owner and a next step.",business:"Harbor Kitchen & Bath",customer:"Returning customer, remodel quote",systems:["AO","CR"],services:["AO-01","AO-02","AO-03","CR-05"],recommend:{system:"AO",packageId:"command",label:"Command, or a custom scope"},stages:c_,beats:[{title:"This is where businesses lose opportunities.",body:"Inquiries arrive in email, texts and a web form. Notes live in three apps. Nobody is sure who is following up.",screen:{type:"lock",time:"8:58",notes:[{app:"Email",title:"Quote request",text:"Bathroom remodel, can someone call?"},{app:"Messages",title:"Team",text:"Did anyone get back to the remodel lady?"}]},buzz:!0},{title:"An inquiry arrives.",body:"A request for a bathroom remodel quote comes in through the website, at the same time as five other things.",screen:{type:"record",title:"New web inquiry",badge:"New",rows:[["From","Maria G."],["Request","Bathroom remodel quote"],["Received","8:58 AM"]]},lead:{stage:0,fields:{Source:"Website form",Request:"Bathroom remodel",Owner:"Unassigned"}}},{title:"Everything lands on one record.",body:"The system recognises Maria as a past customer and attaches her history, so nobody starts from zero.",screen:{type:"record",title:"Maria G.",badge:"Matched",rows:[["History","2 past jobs"],["Last job","Kitchen backsplash"],["Request","Bathroom remodel quote"]]},lead:{stage:1,fields:{Customer:"Returning",History:"2 past jobs",Owner:"Unassigned"}}},{title:"The right person gets the work.",body:"An agent assigns it using your rules, creates the task with a due time and gives the estimator a short summary.",screen:{type:"task",title:"Call Maria about remodel quote",badge:"Assigned",rows:[["Assigned to","Chris (estimator)"],["Due","Today, 3:00 PM"],["Summary","Returning customer, bath remodel"]]},lead:{stage:2,fields:{Owner:"Chris",Due:"Today 3:00 PM",Request:"Bathroom remodel"}}},{title:"The handoff is clean.",body:"Chris calls, books a site visit and updates the record once. Everyone who needs to know, knows.",screen:{type:"thread",contact:"Team · Jobs",msgs:[{from:"in",text:"Chris: Called Maria. Site visit Monday 10 AM."},{from:"sys",text:"Record updated · visit added to calendar"}],card:{title:"Site visit scheduled",text:"Monday · 10:00 AM · Chris"}},lead:{stage:3,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Request:"Bathroom remodel"}}},{title:"You see the whole business at a glance.",body:"The owner view shows what came in, who has it and what is stuck, with an alert only when something needs you.",screen:{type:"lock",time:"4:10",notes:[{app:"Owner alert",title:"Needs attention",text:"1 kitchen quote waiting over 2 days"}]},lead:{stage:3,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Status:"On track"}},owner:{note:"Alert: 1 quote waiting over 2 days",kpis:[["New today","1"],["Assigned","1"],["Scheduled","1"],["Overdue","1"]]}},{title:"One connected process. No loose ends.",body:"AI & Operations connects the tools and people. Client Response keeps every inquiry on the record. We confirm which of your tools can connect during scoping.",screen:{type:"summary",title:"One request, one owner",rows:[["Inquiry","Captured"],["History","Attached"],["Owner","Assigned"],["Visit","Scheduled"],["Exceptions","Flagged"]]},lead:{stage:4,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Status:"Tracked"}},owner:{note:"Every handoff recorded.",kpis:[["New today","1"],["Assigned","1"],["Scheduled","1"],["Overdue","1"]]},connected:!0},{title:"Want this running in your business?",body:"We’d map how work moves today, then connect the pieces. Many businesses start with Command. Bigger builds are scoped as a custom project.",screen:{type:"summary",title:"A team in sync",rows:[["Inquiries","One place"],["Assignment","Automatic"],["Tasks","Due times"],["Owner view","Live"],["Busywork","Reduced"]]},lead:{stage:4,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Status:"Tracked"}},owner:{note:"Every handoff recorded.",kpis:[["New today","1"],["Assigned","1"],["Scheduled","1"],["Overdue","1"]]},choose:!0}]}],Xl=n=>bn.find(e=>e.id===n)||bn[0];function u_({onSeeIncluded:n}={}){const e=me("#need-list"),t=me("#need-out");e.innerHTML=bn.map((s,r)=>`<button type="button" class="need-card" data-problem="${s.id}" aria-pressed="false">
      <span class="nc-num">0${r+1}</span><strong>${J(s.problem)}</strong><span class="nc-sub">${J(s.problemSub)}</span><i class="trace" aria-hidden="true"></i></button>`).join("");function i(){const{selectedProblemId:s}=At();mt(".need-card",e).forEach(o=>o.setAttribute("aria-pressed",o.dataset.problem===s));const r=bn.find(o=>o.id===s);t.classList.toggle("picked",!!r),t.innerHTML=r?`<p class="need-outcome">${J(r.outcome)}</p>
         <div class="need-actions">
           <button type="button" class="btn primary" data-watch>Watch how it works <span aria-hidden="true">&darr;</span></button>
           <button type="button" class="link" data-see-included>See what’s included</button>
           <button type="button" class="link" data-book data-from="diagnostic">Talk about my business</button>
         </div>`:`<p class="need-outcome muted">Pick the one that sounds most like you. The walkthrough below changes to match.</p>
         <div class="need-actions"><button type="button" class="btn" data-watch>Or watch an example <span aria-hidden="true">&darr;</span></button></div>`}e.addEventListener("click",s=>{const r=s.target.closest("[data-problem]");if(!r)return;const o=bn.find(a=>a.id===r.dataset.problem);Mn({selectedProblemId:o.id,scenarioId:o.id,recommendedSystem:o.recommend.system,recommendedPackageId:o.recommend.packageId,journeySource:"diagnostic"}),r.classList.toggle("locked",!1),r.offsetWidth,r.classList.toggle("locked",!0),ht("sb_problem_selected",{problem:o.id})}),t.addEventListener("click",s=>{s.target.closest("[data-watch]")&&Ni("how"),s.target.closest("[data-see-included]")&&n?.()}),pr(i),i()}const ro={response:"Slow responses",growth:"Not enough customers",brand:"Website & brand",ops:"Disconnected tools"},d_={desktop:[{ry:166,rx:10,rz:-4,s:.92,x:0,y:2},{ry:-14,rx:4,rz:0,s:1,x:-20,y:0},{ry:-9,rx:3,rz:0,s:1,x:-22,y:0},{ry:-6,rx:2,rz:0,s:1,x:-22,y:0},{ry:-12,rx:3,rz:0,s:1,x:-22,y:0},{ry:-18,rx:6,rz:0,s:.9,x:-26,y:2},{ry:-10,rx:5,rz:0,s:.8,x:0,y:3},{ry:-12,rx:4,rz:0,s:.92,x:-22,y:0}],mobile:[{ry:166,rx:10,rz:-4,s:.9,x:0,y:0},{ry:-10,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-8,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-8,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-10,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-12,rx:4,rz:0,s:.92,x:-44,y:0},{ry:-10,rx:4,rz:0,s:.92,x:-44,y:0},{ry:-10,rx:4,rz:0,s:.92,x:-44,y:0}]},h_=n=>n*n*(3-2*n),ql=n=>Math.min(1,Math.max(0,n)),xi=(n,e,t)=>n+(e-n)*t,jn={phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',msg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2z"/></svg>',cal:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v9h14v-9z"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>'};let ia=new Set;function f_(n){const e=`<div class="scr-bar"><span>${J(n.time||"9:41")}</span><span class="scr-sig"><i></i><i></i><i></i></span></div>`;switch(n.type){case"lock":return`<div class="scr scr-lock">${e}<div class="lock-time">${J(n.time)}</div><div class="lock-date">Tuesday</div>
        <div class="lock-notes">${n.notes.map((t,i)=>`<div class="note" style="animation-delay:${.15+i*.25}s"><b>${J(t.app)}</b><strong>${J(t.title)}</strong><span>${J(t.text)}</span></div>`).join("")}</div></div>`;case"call":return`<div class="scr scr-call">${e}<div class="call-avatar">${jn.phone}</div><strong>${J(n.name)}</strong>
        <span class="call-state">${J(n.state)}</span><span class="call-sub">${J(n.sub||"")}</span>
        <div class="call-actions"><span>${jn.phone}<em>Call back</em></span><span>${jn.msg}<em>Message</em></span></div></div>`;case"thread":{const t=ia;ia=new Set(n.msgs.map(r=>r.text));let i=0;const s=n.msgs.map(r=>{const o=!t.has(r.text),a=o?`style="animation-delay:${.1+i++*.45}s"`:"";return`<div class="msg m-${r.from}${o?" fresh":""}" ${a}>${J(r.text)}</div>`}).join("");return`<div class="scr scr-thread">${e}<div class="thread-head"><span class="av">${/[A-Za-z]/.test(n.contact[0])?J(n.contact[0]):jn.phone}</span>${J(n.contact)}</div>
        <div class="thread-body">${s}
        ${n.chips?`<div class="saved" style="animation-delay:${.2+i*.45}s"><em>Saved to record</em>${n.chips.map(r=>`<span>${J(r)}</span>`).join("")}</div>`:""}
        ${n.card?`<div class="book-card" style="animation-delay:${.25+i*.45}s">${jn.cal}<span><strong>${J(n.card.title)}</strong><em>${J(n.card.text)}</em></span></div>`:""}
        </div></div>`}case"ad":return`<div class="scr scr-ad">${e}<div class="feed-head"><span class="av">${J(n.brand.slice(0,1))}</span><span><strong>${J(n.brand)}</strong><em>Sponsored</em></span></div>
        <div class="ad-img"><i></i><i></i><i></i></div><div class="ad-copy"><strong>${J(n.headline)}</strong><span>${J(n.text)}</span></div>
        <div class="ad-cta tap">${J(n.cta)}</div></div>`;case"landing":return`<div class="scr scr-landing">${e}<div class="url">${J(n.brand.toLowerCase().replace(/[^a-z]+/g,""))}.example</div>
        <div class="lp-brand">${J(n.brand)}</div><strong class="lp-h">${J(n.headline)}</strong>
        ${n.fields.map(([t,i],s)=>`<label style="animation-delay:${.1+s*.2}s"><em>${J(t)}</em><span>${J(i)}</span></label>`).join("")}
        <div class="lp-btn tap">${J(n.button)}</div>${n.toast?`<div class="toast">${jn.check}${J(n.toast)}</div>`:""}</div>`;case"site":return n.variant==="old"?`<div class="scr scr-site old">${e}<div class="old-nav">${J(n.brand)} | Home | About | Contact</div>
          <div class="old-h">${J(n.headline)}</div><div class="old-img"></div><p>${J(n.sub)}</p><p class="old-small">Copyright 2014. Best viewed in Internet Explorer.</p>
          <span class="concept">${J(n.note)}</span></div>`:`<div class="scr scr-site new">${e}<div class="new-nav"><b>${J(n.brand)}</b><span>Services</span><span>Book</span></div>
          <div class="new-hero"><strong>${J(n.headline)}</strong><span>${J(n.sub)}</span><div class="new-cta tap">${J(n.cta)}</div></div>
          <div class="new-proof"><span>★★★★★</span><em>Before &amp; after gallery</em></div><span class="concept">${J(n.note)}</span></div>`;case"record":case"task":return`<div class="scr scr-record">${e}<div class="rec-head"><span>${n.type==="task"?"Task":"Contact"}</span><b>${J(n.badge)}</b></div>
        <strong class="rec-title">${J(n.title)}</strong>
        <dl>${n.rows.map(([t,i],s)=>`<div style="animation-delay:${.1+s*.18}s"><dt>${J(t)}</dt><dd>${J(i)}</dd></div>`).join("")}</dl></div>`;case"summary":return`<div class="scr scr-summary">${e}<div class="sum-logo">${Bn(26)}</div><strong>${J(n.title)}</strong>
        <ul>${n.rows.map(([t,i],s)=>`<li style="animation-delay:${.1+s*.15}s">${jn.check}<span>${J(t)}</span><em>${J(i)}</em></li>`).join("")}</ul></div>`}return""}function p_(n){switch(n.type){case"lock":return n.notes.map(e=>`${e.app}: ${e.title}, ${e.text}`).join(". ");case"call":return`${n.state} from ${n.name}. ${n.sub||""}`;case"thread":return n.msgs.map(e=>(e.from==="in"?"Customer: ":e.from==="out"?"Business: ":"")+e.text).join(" ")+(n.card?` ${n.card.title}: ${n.card.text}.`:"");case"ad":return`Ad from ${n.brand}: ${n.headline}. Button: ${n.cta}.`;case"landing":return`${n.headline} form: ${n.fields.map(([e,t])=>`${e} ${t}`).join(", ")}. ${n.toast||""}`;case"site":return`${n.note}. ${n.headline} ${n.sub}`;case"record":case"task":return`${n.title}: ${n.rows.map(([e,t])=>`${e} ${t}`).join(", ")}.`;case"summary":return`${n.title}: ${n.rows.map(([e,t])=>`${e} ${t}`).join(", ")}.`}return""}function m_({onBeat:n,onChoose:e}={}){const t=me("#story"),i=me("#story-stage"),s=me("#story-chapters"),r=matchMedia("(max-width: 959px)");i.innerHTML=`
    <div class="stage-top">
      <span class="ill" id="stage-ill"></span>
      <nav class="story-steps" id="story-steps" aria-label="Jump to a step">${io.map((P,re)=>`<button type="button" data-step="${re}" aria-label="Step ${re+1}: ${J(P)}"><i></i></button>`).join("")}</nav>
    </div>
    <div class="stage-visual" aria-hidden="true">
      <svg class="stage-lines" id="stage-lines"><path id="ln-lead"></path><path id="ln-owner"></path></svg>
      <div class="phone3d" id="phone3d">
        <div class="ph-body" id="ph-body">
          <div class="ph-face ph-front"><div class="ph-screen"><span class="ph-island"></span><div class="ph-content" id="ph-screen"></div></div></div>
          <div class="ph-face ph-back"><span class="ph-cam"><i></i><i></i><i></i></span><span class="ph-logo">${Bn(64)}</span><span class="ph-word">SYSTEM-BASED</span></div>
          <span class="ph-side ph-l"></span><span class="ph-side ph-r"></span><span class="ph-side ph-t"></span><span class="ph-side ph-b"></span>
        </div>
        <div class="ph-shadow"></div>
      </div>
      <div class="stage-cards">
        <div class="sc lead-card" id="lead-card"></div>
        <div class="sc owner-card" id="owner-card"></div>
      </div>
      <div class="caps" id="caps">${["GR","BB","CR","AO"].map(P=>`<div class="cap" data-cap="${P}"><strong>${J(kn.find(re=>re.code===P).name)}</strong><span>${J($l[P])}</span></div>`).join("")}</div>
    </div>
    <p class="stage-hint" id="stage-hint">Scroll to see what happens next</p>`;const o=me("#ph-body"),a=me("#phone3d"),c=me("#ph-screen"),l=me("#lead-card"),u=me("#owner-card"),h=me("#ln-lead"),p=me("#ln-owner");s.innerHTML=io.map((P,re)=>`<li class="chapter" data-beat="${re}">${re===1?'<span id="journey" class="anchor"></span>':""}<div class="ch-card"></div></li>`).join("");const m=mt(".chapter",s);let g=Xl(At().scenarioId),v=-1,f=!1;const d=new Set;function A(P,re){const ue=g;let ge="";return P.connected&&(ge=`<ul class="ch-systems">${["GR","BB","CR","AO"].map(Re=>{const ke=ue.systems.includes(Re);return`<li class="${ke?"on":""}"><strong>${J(kn.find(W=>W.code===Re).name)}</strong><span>${ke?J($l[Re]):"Not needed for this example. Available when it is."}</span></li>`}).join("")}</ul>`),P.choose&&(ge=`<div class="ch-rec"><span class="eyebrow">Suggested starting point</span><strong>${J(ue.recommend.label)}</strong></div>
        <div class="ch-ctas">
          <button class="btn primary" data-book data-from="walkthrough">Get my recommendation <span aria-hidden="true">&rarr;</span></button>
          <button class="btn" data-see-rec>See what’s included</button>
        </div>
        <button class="link ch-community" data-community-invite="walkthrough">Or follow along as we build in public &rarr;</button>`),`<span class="ch-num">${String(re+1).padStart(2,"0")} · ${J(io[re])}</span>
      <h3 class="display">${J(P.title)}</h3><p>${J(P.body)}</p>
      <p class="sr-only">On screen: ${J(p_(P.screen))}</p>${ge}`}function y(){m.forEach((P,re)=>me(".ch-card",P).innerHTML=A(g.beats[re],re)),me("#stage-ill").innerHTML=`Illustrative example<span class="biz"> · ${J(g.business)}</span>`,mt("[data-cap]",i).forEach(P=>P.classList.toggle("on",g.systems.includes(P.dataset.cap)))}function x(P){if(!P.lead)return"";const re=g.stages[P.lead.stage];return`<div class="sc-head"><span>Customer record</span><b class="pill s${P.lead.stage}">${J(re)}</b></div>
      <strong class="sc-title">${J(g.customer)}</strong>
      <div class="pipe">${g.stages.map((ue,ge)=>`<i class="${ge<=P.lead.stage?"on":""}" title="${J(ue)}"></i>`).join("")}</div>
      <dl>${Object.entries(P.lead.fields).map(([ue,ge])=>`<div><dt>${J(ue)}</dt><dd>${J(ge)}</dd></div>`).join("")}</dl>`}function I(P){return P.owner?`<div class="sc-head"><span>Owner view</span><b class="pill">Live</b></div>
      <p class="sc-note">${J(P.owner.note)}</p>
      <div class="kpi">${P.owner.kpis.map(([re,ue])=>`<div><em>${J(re)}</em><strong>${J(ue)}</strong></div>`).join("")}</div>`:""}function L(P,re=!1){if(P===v&&!re)return;const ue=g.beats[P],ge=g.beats[v]?.screen.type,Re=P===v+1;(ue.screen.type!=="thread"||ge!=="thread"||re)&&(ia=new Set),v=P,c.innerHTML=f_(ue.screen),c.dataset.type=ue.screen.type,l.innerHTML=x(ue),u.innerHTML=I(ue),l.classList.toggle("show",!!ue.lead),u.classList.toggle("show",!!ue.owner),t.dataset.beat=P,t.classList.toggle("connected",!!ue.connected),t.classList.toggle("has-owner",!!ue.owner),a.classList.toggle("buzz",!!ue.buzz&&!Ht),m.forEach((ke,W)=>ke.classList.toggle("active",W===P)),mt("[data-step]",i).forEach((ke,W)=>{ke.classList.toggle("done",W<P),ke.setAttribute("aria-current",W===P?"step":"false")}),me("#stage-hint").classList.toggle("hide",P>0),Mn({currentStoryBeat:P}),P>=1&&!f&&(f=!0,ht("sb_walkthrough_started",{scenario:g.id},{once:!0})),ue.choose&&!d.has(g.id)&&(d.add(g.id),ht("sb_walkthrough_completed",{scenario:g.id})),n?.(P,g,Re)}function D(P){P===g.id&&v>=0||(g=Xl(P),y(),L(Math.max(0,v),!0),mt("[data-scenario]",me("#story-switch")).forEach(re=>re.setAttribute("aria-pressed",re.dataset.scenario===g.id)),U())}me("#story-switch").innerHTML=bn.map(P=>`<button type="button" class="chip" data-scenario="${P.id}" aria-pressed="${P.id===g.id}">${J(ro[P.id])}</button>`).join("")+'<p class="switch-note" id="switch-note"></p>';function U(){const P=At().selectedProblemId;me("#switch-note").textContent=P?`Showing your bottleneck: ${ro[g.id].toLowerCase()}.`:`Showing an example: ${ro[g.id].toLowerCase()}. Pick your bottleneck above to make it yours.`}me("#story-switch").addEventListener("click",P=>{const re=P.target.closest("[data-scenario]");re&&(Mn({selectedProblemId:re.dataset.scenario,scenarioId:re.dataset.scenario,journeySource:"story-switch"}),ht("sb_problem_selected",{problem:re.dataset.scenario}))}),pr(P=>{P.scenarioId!==g.id?D(P.scenarioId):U()}),me("#story-steps").addEventListener("click",P=>{const re=P.target.closest("[data-step]");if(!re)return;const ge=m[+re.dataset.step].getBoundingClientRect(),Re=r.matches?i.getBoundingClientRect().bottom+12:innerHeight*.3;scrollTo({top:scrollY+ge.top-Re+2,behavior:Ht?"auto":"smooth"})}),s.addEventListener("click",P=>{P.target.closest("[data-see-rec]")&&e?.(g)});const M={x:0,y:0,cx:0,cy:0};o_&&!Ht&&addEventListener("pointermove",P=>{M.x=(P.clientX/innerWidth-.5)*2,M.y=(P.clientY/innerHeight-.5)*2});let E="";function F(){const P=r.matches,re=t.getBoundingClientRect();if(re.bottom<0||re.top>innerHeight)return;const ue=i.getBoundingClientRect(),ge=P?ue.bottom+(innerHeight-ue.bottom)*.3:innerHeight*.55;let Re=0,ke=0;for(let H=0;H<m.length;H++){const $=m[H].getBoundingClientRect();$.top<=ge&&(Re=H,ke=ql((ge-$.top)/$.height))}Re!==v&&L(Re);const W=d_[P?"mobile":"desktop"],O=W[Re],b=W[Math.min(Re+1,W.length-1)],S=Ht?0:h_(ql((ke-.55)/.45));M.cx+=(M.x-M.cx)*.08,M.cy+=(M.y-M.cy)*.08;const j=xi(O.ry,b.ry,S)+M.cx*10,le=xi(O.rx,b.rx,S)-M.cy*7,G=xi(O.rz,b.rz,S),he=xi(O.s,b.s,S),_e=xi(O.x,b.x,S),C=xi(O.y,b.y,S),B=[j,le,G,he,_e,C].map(H=>H.toFixed(2)).join();B!==E&&(E=B,a.style.transform=`translate(${_e}%, ${C}%) scale(${he})`,o.style.transform=`rotateX(${le}deg) rotateY(${j}deg) rotateZ(${G}deg)`,o.style.setProperty("--sheen",`${50+((j%360+540)%360-180)*.6}%`),Z())}function k(P,re,ue){const ge=P.right-ue.left,Re=P.top+P.height*.45-ue.top,ke=re.left-ue.left,W=re.top+26-ue.top,O=(ge+ke)/2;return`M${ge.toFixed(1)} ${Re.toFixed(1)} C${O.toFixed(1)} ${Re.toFixed(1)}, ${O.toFixed(1)} ${W.toFixed(1)}, ${ke.toFixed(1)} ${W.toFixed(1)}`}function Z(){const P=me(".stage-visual",i).getBoundingClientRect(),re=me(".ph-front",i).getBoundingClientRect(),ue=(ge,Re)=>{const ke=ge.classList.contains("show")&&!(t.classList.contains("connected")&&!r.matches);Re.classList.toggle("on",ke),ke&&Re.setAttribute("d",k(re,ge.getBoundingClientRect(),P))};ue(l,h),ue(u,p)}let Q=0,ne=!1;const ee=()=>{F(),Q=ne&&!document.hidden?requestAnimationFrame(ee):0},ie=()=>{!Q&&ne&&!document.hidden&&(Q=requestAnimationFrame(ee))};return new IntersectionObserver(([P])=>{ne=P.isIntersecting,ie()}).observe(t),document.addEventListener("visibilitychange",ie),addEventListener("resize",()=>{E="",F()}),y(),L(0,!0),U(),F(),{setScenario:D,get scenario(){return g},get beat(){return v}}}const qi={buildLog:[{date:"Nov 2026",category:"Website",title:"Rebuilt the website around a scroll walkthrough",problem:"Visitors couldn’t tell how the systems connect.",changed:"Four business stories now play on one phone, synced with a CRM card and an owner view.",media:"story"},{date:"Nov 2026",category:"Operations",title:"Shipped a custom 3D site inside GoHighLevel",problem:"A coded website had to live on a GHL page and send leads into a workflow.",changed:"One paste-in block, assets served from the repo, inquiries routed to the CRM.",media:"ghl"},{date:"Nov 2026",category:"Brand & Build",title:"Built the System-Based 3D identity",problem:"A strong name with a flat logo and no visual system.",changed:"Traced the SB mark, extruded it into chrome, and built a studio that renders every asset.",media:"identity"}],areas:[{title:"Build log",text:"Watch real systems get built: the problem, the approach, what changed.",status:"live"},{title:"Systems library",text:"Starter checklists, scripts, sample pipelines and scoping worksheets.",status:"planned"},{title:"Office hours & build-alongs",text:"Live sessions to ask questions and build alongside us.",status:"planned"},{title:"Operator discussions",text:"Owners and operators comparing what actually worked.",status:"planned"}],path:[{step:"Explore",note:"Free build logs and starter resources"},{step:"Learn & implement",note:"Do it yourself with the playbooks"},{step:"Ready-made systems",note:"Templates and systems, once they’re released"},{step:"Have it built",note:"System-Based builds or runs it for you"}],businessTypes:["Trades / home services","Auto / detailing","Hospitality / food","Professional services","Creator / online business","Other"]},g_=16e3;function v_(n){return wt.FORM_MODE==="relay"||wt.FORM_MODE==="ghl"?wt.FORM_MODE:/leadconnectorhq\.com|msgsndr\.com|gohighlevel\.com/i.test(n)?"ghl":"relay"}async function nu(n){const e=wt.FORM_ENDPOINT;if(!e)return{ok:!1,confirmed:!1,reason:"not-configured"};const t=JSON.stringify(n);if(t.length>g_)return{ok:!1,confirmed:!1,reason:"too-large"};const i=new AbortController,s=setTimeout(()=>i.abort(),15e3);try{if(v_(e)==="relay"){const o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:t,signal:i.signal}),a=await o.json().catch(()=>({}));return!o.ok||a.ok===!1?{ok:!1,confirmed:!1,reason:a.error||`status ${o.status}`}:{ok:!0,confirmed:!0}}const r=Object.fromEntries(Object.entries(n).filter(([,o])=>o===null||typeof o!="object"));return await fetch(e,{method:"POST",mode:"no-cors",body:new URLSearchParams({...r,payload:t}),signal:i.signal}),{ok:!0,confirmed:!1}}catch(r){return{ok:!1,confirmed:!1,reason:r.name==="AbortError"?"timeout":"network"}}finally{clearTimeout(s)}}function iu(){const n=new URLSearchParams(location.search);return Object.fromEntries([...n].filter(([e])=>e.startsWith("utm_")).map(([e,t])=>[e,t.slice(0,120)]))}const __=7,Yl=()=>Ca(wt.COMMUNITY_URL);function x_({media:n={},goInquiry:e,isInquiryBusy:t}){const i=qi.buildLog[0];me("#community-areas").innerHTML=qi.areas.map(f=>`<div class="area"><span class="status ${f.status}">${f.status==="live"?"Live":"Planned"}</span>
        <strong>${J(f.title)}</strong><p>${J(f.text)}</p></div>`).join(""),me("#community-path").innerHTML=qi.path.map((f,d)=>`<li><b>${String(d+1).padStart(2,"0")}</b><strong>${J(f.step)}</strong><span>${J(f.note)}</span></li>`).join(""),me("#community-example").innerHTML=`<span class="eyebrow">Latest from the build log · ${J(i.date)}</span>
    <strong>${J(i.title)}</strong><p><em>Problem:</em> ${J(i.problem)}</p><p><em>What changed:</em> ${J(i.changed)}</p>`;const s=qi.buildLog.map((f,d)=>{const A=n[f.media];return`<figure class="gw-win w${d}">
        <div class="gw-bar"><i></i><i></i><i></i><span>${J(f.category)}</span></div>
        ${A?`<img src="${A}" alt="" loading="lazy" />`:`<pre class="gw-code">&lt;div id="sb-root"&gt;
  …
&lt;/div&gt;
&lt;script type="module" src="…/site.js"&gt;</pre>`}
        <figcaption><em>${J(f.date)}</em>${J(f.title)}</figcaption></figure>`}).join("");me("#community-gateway").innerHTML=`<div class="gw-portal"><span class="gw-ring"></span><span class="gw-mark">${Bn(54)}</span></div>${s}`,r();function r(){const f=Yl();me("#community-cta").innerHTML=`
      ${f?`<a class="btn primary" href="${J(f)}" target="_blank" rel="noopener" data-join="section">Join the Community ↗</a>`:'<button type="button" class="btn primary" data-community-invite="section">Get notified when it opens</button>'}
      <button type="button" class="btn" data-book data-from="community">I’d rather have it built for me</button>`,me("#community-status").textContent=f?"Free to join. Paid templates and done-for-you help are there if you want them, never required.":"The community isn’t open yet. Join the list and you’ll hear the day it opens. No spam."}new IntersectionObserver(([f])=>f.isIntersecting&&me("#community-gateway").classList.add("in"),{threshold:.25}).observe(me("#community-gateway"));const o=me("#invite"),a=me(".invite-panel",o),c=me("#gateway-fx");let l=null,u=!1,h=null;function p(){const f=+Wl.get("sb-invite-dismissed")||0;return Date.now()-f<__*864e5}function m(){const f=Yl();return`
      <span class="eyebrow">Inside System-Based</span>
      <h2 class="display" id="invite-title">See how the systems get built.</h2>
      <p class="lede">Follow real builds, see what we’re learning, get useful resources and connect with business owners improving how they operate.</p>
      <ul class="invite-list">
        <li>A public build log of real systems</li>
        <li>Starter resources as they’re released</li>
        <li>A straight path to have it built for you, if you ever want that</li>
      </ul>
      <div class="invite-ctas">
        ${f?`<a class="btn primary" href="${J(f)}" target="_blank" rel="noopener" data-join="invite">Join the Community ↗</a>`:'<button type="button" class="btn primary" data-waitlist-open>Get notified when it opens</button>'}
        <button type="button" class="btn" data-book data-from="invite">I’d rather have this built for me</button>
      </div>
      ${f?"":'<p class="fine-l">The community isn’t open yet. You’ll only be emailed about it if you ask.</p>'}
      <form class="waitlist" id="waitlist" novalidate hidden>
        <label for="wl-email">Email</label>
        <input id="wl-email" name="email" type="email" autocomplete="email" required />
        <label for="wl-type">What kind of business? <em>(optional)</em></label>
        <select id="wl-type" name="business_type"><option value="">Choose one</option>${qi.businessTypes.map(d=>`<option>${J(d)}</option>`).join("")}</select>
        <label class="check"><input type="checkbox" id="wl-consent" name="consent" /> Email me when the community opens, and occasionally after. I can unsubscribe any time.</label>
        <input type="text" name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button class="btn primary" type="submit">Notify me</button>
        <p class="form-msg" id="wl-msg" role="status"></p>
      </form>
      <button type="button" class="link keep" data-invite-close>Keep exploring</button>`}function g(f="section",d=null){if(u)return;u=!0,h=f,l=document.activeElement,Ui.set("sb-invite-shown","1"),Mn({communityInterest:!0,communityEntryPoint:f}),ht("sb_community_invite_shown",{entry:f}),me(".invite-body",o).innerHTML=m(),document.body.classList.add("locked");const A=()=>{o.hidden=!1,requestAnimationFrame(()=>{o.classList.add("open"),me("[data-invite-x]",o).focus({preventScroll:!0})})};if(Ht||!d)return A();const y=d.getBoundingClientRect(),x=y.left+y.width/2,I=y.top+y.height/2,L=innerWidth/2,D=innerHeight/2;c.innerHTML=`<svg width="100%" height="100%"><path d="M${x} ${I} C${x} ${(I+D)/2}, ${L} ${(I+D)/2}, ${L} ${D}"/></svg>
      <span class="gx-portal" style="left:${L}px;top:${D}px">${Bn(40)}</span>`,c.hidden=!1,requestAnimationFrame(()=>c.classList.add("run")),setTimeout(()=>{A(),c.classList.remove("run"),c.hidden=!0},720)}function v(f="dismissed"){u&&(u=!1,o.classList.remove("open"),document.body.classList.remove("locked"),setTimeout(()=>o.hidden=!0,Ht?0:350),f==="dismissed"&&(Wl.set("sb-invite-dismissed",String(Date.now())),ht("sb_community_invite_dismissed",{entry:h})),l?.focus?.({preventScroll:!0}))}return o.addEventListener("click",f=>{if(f.target.closest("[data-invite-close], [data-invite-x]")||f.target===me(".invite-backdrop",o)){v();return}if(f.target.closest("[data-waitlist-open]")){const d=me("#waitlist",o);d.hidden=!1,f.target.closest("[data-waitlist-open]").hidden=!0,me("#wl-email",o).focus()}f.target.closest("[data-join]")&&ht("sb_community_join_clicked",{entry:h}),f.target.closest("[data-book]")&&v("converted")}),addEventListener("keydown",f=>{if(u&&(f.key==="Escape"&&v(),f.key==="Tab")){const d=mt("button, a[href], input, select, textarea",a).filter(A=>!A.disabled&&A.offsetParent!==null&&!A.classList.contains("hp"));if(!d.length)return;f.shiftKey&&document.activeElement===d[0]?(d.at(-1).focus(),f.preventDefault()):!f.shiftKey&&document.activeElement===d.at(-1)&&(d[0].focus(),f.preventDefault())}}),o.addEventListener("submit",async f=>{f.preventDefault();const d=f.target,A=me("#wl-msg",d),y=Object.fromEntries(new FormData(d));if(y.website)return;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y.email||"")){A.className="form-msg err",A.textContent="Add a valid email so we can tell you when it opens.";return}if(!y.consent){A.className="form-msg err",A.textContent="Tick the box so we’re allowed to email you about it.";return}const x=me("button[type=submit]",d);x.disabled=!0,A.className="form-msg",A.textContent="Adding you…";const I=At(),L={schema:"system-based.community.v1",catalogVersion:Wc,submittedAt:new Date().toISOString(),email:y.email,business_type:y.business_type||"",tags:"sb-community-waitlist,sb-community-interest",sb_intake_source:"community_waitlist",sb_community_interest:"yes",sb_community_entry_point:h||"section",sb_problem_id:I.selectedProblemId||"",sb_marketing_consent:"yes",sb_request_id:d.dataset.rid||(d.dataset.rid=ta()),sb_source_page:location.href.slice(0,300),...Object.fromEntries(["utm_source","utm_medium","utm_campaign"].map(U=>[U,iu()[U]||""]))},D=await nu(L);if(x.disabled=!1,!D.ok){A.className="form-msg err",A.textContent=D.reason==="not-configured"?"Sign-ups aren’t connected yet. Please check back soon.":"That didn’t go through. Your email is still here, so try again.";return}ht("sb_community_waitlist_submitted",{entry:h||"section"}),d.innerHTML=`<p class="lede"><strong>You’re on the list.</strong> We’ll email you when the community opens${D.confirmed?"":". If nothing arrives, check your spam folder"}.</p>`}),document.addEventListener("click",f=>{const d=f.target.closest("[data-community-invite]");d&&(f.preventDefault(),g(d.dataset.communityInvite||"section",d))}),document.addEventListener("click",f=>{f.target.closest("#community [data-join]")&&ht("sb_community_join_clicked",{entry:"section"})}),{open:g,close:v,maybeInvite(f){const d=At();f<5||!d.selectedProblemId||Ui.get("sb-invite-shown")||p()||document.body.classList.contains("intro")||t?.()||g("walkthrough",me("#phone3d"))},goInquiry:e}}const Ws=n=>$t.find(e=>e.id===n);function y_(){const n=me("#inquiry-form"),e=me("#form-msg");let t=!1,i=!1,s=!1,r=ta();me("#f-problem").innerHTML='<option value="">Choose one</option>'+bn.map(c=>`<option value="${c.id}">${J(c.problem)}</option>`).join("")+'<option value="other">Something else</option>';function o(){const c=At(),l=me("#f-problem");c.selectedProblemId&&l.value!==c.selectedProblemId&&!n.dataset.touchedProblem&&(l.value=c.selectedProblemId);const u=[],h=bn.find(g=>g.id===c.selectedProblemId);h&&u.push(["Challenge",h.problem,"start"]);const p=Ws(c.acceptedPackageId),m=Ws(c.recommendedPackageId);p?u.push(["Package",`${p.name} (your choice)`,"packages"]):m?u.push(["Suggested",`${m.name} (a suggestion, not a commitment)`,"packages"]):h&&!h.recommend.packageId&&u.push(["Suggested",h.recommend.label,"projects"]),c.selectedServiceIds.length&&u.push(["Services",c.selectedServiceIds.map(g=>zt(g)?.name).filter(Boolean).join(", "),"packages"]),me("#inq-scope").innerHTML=u.length?`<span class="eyebrow">Your starting point</span><dl class="fields">${u.map(([g,v,f])=>`<div><dt>${J(g)}</dt><dd>${J(v)} <button type="button" class="link sm" data-edit="${f}">Change</button></dd></div>`).join("")}</dl>`:'<span class="eyebrow">Your starting point</span><p class="muted">Nothing chosen yet, and that’s fine. Tell us in your own words below, or <button type="button" class="link sm" data-edit="start">pick your bottleneck</button>.</p>'}pr(o),o(),me("#inq-scope").addEventListener("click",c=>{const l=c.target.closest("[data-edit]");l&&Ni(l.dataset.edit)}),me("#f-problem").addEventListener("change",()=>n.dataset.touchedProblem="1"),n.addEventListener("focusin",()=>{i||(i=!0,ht("sb_inquiry_started",{problem:At().selectedProblemId||"none"}))});function a(c){e.className="form-msg err",e.textContent=c}return n.addEventListener("submit",async c=>{if(c.preventDefault(),t)return;const l=Object.fromEntries(new FormData(n));if(l.website)return;const u=(l.name||"").trim(),h=(l.email||"").trim();if(!u)return a("Add your name so we know who we’re talking to."),me("#f-name").focus();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h))return a("Add a valid email so we can send your recommendation."),me("#f-email").focus();if(l.phone&&l.phone.replace(/\D/g,"").length<7)return a("That phone number looks too short. Leave it blank if you prefer email."),me("#f-phone").focus();const p=At(),m=l.problem||p.selectedProblemId||"",g=bn.find(E=>E.id===m),v=p.selectedServiceIds.length?qc(p.selectedServiceIds):null,f=Ws(p.acceptedPackageId),d=Ws(p.recommendedPackageId),[A,...y]=u.split(/\s+/),x=iu(),I=["sb-inquiry",f&&`sb-pkg-${f.id}`,g&&`sb-problem-${g.id}`,v?.custom&&"sb-custom",v?.projects.length&&"sb-project",l.performance&&"sb-performance",p.communityInterest&&"sb-community-interest"].filter(Boolean),L={schema:"system-based.inquiry.v2",catalogVersion:Wc,submittedAt:new Date().toISOString(),first_name:A,last_name:y.join(" "),full_name:u,email:h,phone:(l.phone||"").trim(),company_name:(l.business||"").trim(),tags:I.join(","),sb_interest:f?`${f.name} package`:v?.custom?"Custom proposal":g?g.recommend.label:"Not sure yet",sb_package:f?.name||"",sb_services:p.selectedServiceIds.join(", "),sb_projects:v?v.projects.join(", "):"",sb_system:g?wa(g.recommend.system).name:"",sb_need:g?g.problem:m==="other"?"Something else":"",sb_custom_proposal:v?.custom?"yes":"no",sb_performance:l.performance?"yes":"no",sb_message:(l.message||"").trim().slice(0,2e3),sb_source_page:location.href.slice(0,300),sb_problem_id:m,sb_scenario_id:p.scenarioId,sb_recommended_package:d?.id||"",sb_accepted_package:f?.id||"",sb_intake_source:"website_inquiry",sb_next_step:l.next_step||"",sb_marketing_consent:l.consent?"yes":"no",sb_community_interest:p.communityInterest?"yes":"no",sb_community_entry_point:p.communityEntryPoint||"",sb_scope_version:"2",sb_request_id:r,utm_source:x.utm_source||"",utm_medium:x.utm_medium||"",utm_campaign:x.utm_campaign||"",utm_content:x.utm_content||""};t=!0;const D=me("button[type=submit]",n);D.disabled=!0,D.setAttribute("aria-busy","true"),e.className="form-msg",e.textContent="Sending…";const U=await nu(L);if(t=!1,D.disabled=!1,D.removeAttribute("aria-busy"),!U.ok){const E={"not-configured":wt.CONTACT_EMAIL?`Online sending isn’t switched on yet. Please email ${wt.CONTACT_EMAIL} and we’ll pick it up from there.`:"Online sending isn’t switched on yet, so nothing was sent. Your details are still here.",timeout:"That took too long and may not have gone through. Your details are still here: try again."};return a(E[U.reason]||"That didn’t go through. Your details are still here: try again in a moment.")}s=!0,ht("sb_inquiry_submitted",{problem:m||"none",package:f?.id||""}),l_(r),r=ta();const M=Ca(wt.BOOKING_URL);me("#inquiry-done").innerHTML=`<h3 class="display">Scope received.</h3>
      <p class="lede">Thanks, ${J(A)}. We’ll look at what you shared and reply personally with a recommendation.</p>
      ${U.confirmed?"":`<p class="fine-l">Sent from this browser. If you haven’t heard from us within a business day, ${wt.CONTACT_EMAIL?`email ${J(wt.CONTACT_EMAIL)}`:"send it again"} so nothing gets lost.</p>`}
      ${M?wt.BOOKING_EMBED?`<p class="lede">Want to skip the back-and-forth? Pick a time for a short fit call:</p><iframe class="booking" src="${J(M)}" title="Book your fit call" loading="lazy"></iframe>`:`<a class="btn primary" href="${J(M)}" target="_blank" rel="noopener" data-booking>Pick a time ↗</a>`:""}`,n.hidden=!0,me("#inquiry-done").hidden=!1,me("#inquiry-done").focus?.()}),document.addEventListener("click",c=>{c.target.closest("[data-booking]")&&ht("sb_booking_link_clicked")}),{busy:()=>t||s||n.contains(document.activeElement),go(c){Mn({journeySource:c||At().journeySource}),Ni("inquiry"),setTimeout(()=>me("#f-name")?.focus({preventScroll:!0}),Ht?0:700)}}}const S_=""+new URL("build-story-CTBKc7-A.jpg",import.meta.url).href,su=n=>$t.find(e=>e.id===n),ru=e_(),M_=n=>{try{return n()}catch(e){return console.warn(e),null}};document.documentElement.classList.add("js");Ht&&document.documentElement.classList.add("reduced");me("#year").textContent=new Date().getFullYear();const Ra=n=>n&&n.value!=null&&(n.approved||wt.SHOW_PROPOSED),b_=n=>n.approved?"":' <span class="proposed">Proposed</span>',ou=n=>"$"+n.toLocaleString("en-US"),Fn=(n,e=ou,t="Confirmed after scoping")=>Ra(n)?`${e(n.value)}${b_(n)}`:`<span class="muted">${t}</span>`,au={"setup+managed":"Set up + managed",managed:"Managed monthly",project:"One-time project","project|add-on":"Project or add-on"};mt("[data-logo]").forEach(n=>{const e=n.dataset.logo==="tagline";n.innerHTML=`${Bn(28)}<i class="rule"></i><span style="display:grid;gap:6px"><span class="word chrome">System-Based</span>${e?'<span style="font:400 10px var(--sb-font-body);letter-spacing:.55em;color:var(--muted)">SYSTEMS OVER LUCK.</span>':""}</span>`});const E_=me("#nav"),lu=()=>E_.classList.toggle("scrolled",scrollY>30);addEventListener("scroll",lu,{passive:!0});lu();const La=me(".burger"),jl=me("#menu"),mr=n=>{document.body.classList.toggle("menu-open",n),document.body.classList.toggle("locked",n),La.setAttribute("aria-expanded",n),jl.setAttribute("aria-hidden",!n),n&&me("a",jl).focus({preventScroll:!0})};La.addEventListener("click",()=>mr(!document.body.classList.contains("menu-open")));mt("#menu a").forEach(n=>n.addEventListener("click",()=>mr(!1)));addEventListener("keydown",n=>{n.key==="Escape"&&document.body.classList.contains("menu-open")&&(mr(!1),La.focus())});const T_=mt(".nav-links a"),w_=new IntersectionObserver(n=>n.forEach(e=>{e.isIntersecting&&T_.forEach(t=>t.classList.toggle("active",t.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});["systems","how","work","packages","projects","community"].forEach(n=>w_.observe(document.getElementById(n)));const cu=new IntersectionObserver(n=>n.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),cu.unobserve(e.target))}),{rootMargin:"0px 0px -6% 0px"});mt("[data-reveal]").forEach(n=>cu.observe(n));const gr=me(".hero"),vr=ru&&!Ht&&Ui.get("sb-intro")!=="seen";let sa=null;const uu=()=>{document.body.classList.remove("intro"),gr.classList.add("ready"),Ui.set("sb-intro","seen")};vr||document.body.classList.remove("intro");ru?(sa=M_(()=>r_(me("#hero-canvas"),{intro:vr,onLocked:()=>gr.classList.add("ready"),onIntroEnd:uu})),!sa&&!Ht&&Kl()):Kl();vr||setTimeout(()=>gr.classList.add("ready"),Ht?0:300);function Kl(){document.body.classList.remove("intro"),me("#hero-canvas").replaceWith(Object.assign(new Image,{src:Jc,className:"poster",alt:""})),gr.classList.add("ready")}const du=()=>sa?.skip();me("#intro-skip").addEventListener("click",du);["wheel","touchstart","keydown"].forEach(n=>addEventListener(n,()=>document.body.classList.contains("intro")&&du(),{passive:!0}));vr&&setTimeout(()=>document.body.classList.contains("intro")&&uu(),7e3);me("#rail").innerHTML=kn.map(n=>`<button type="button" class="chip" data-explore="${n.code}">${J(n.name)}</button>`).join("");me("#statement-line").textContent=fr.line;me("#statement-body").textContent=fr.body;me("#statement-who").textContent=fr.who;me("#facts").innerHTML=fr.facts.map(n=>`<div class="fact"><strong class="chrome">${J(n.k)}</strong><span>${J(n.v)}</span></div>`).join("");const ts=y_(),A_=x_({media:{identity:Kc,story:S_},isInquiryBusy:ts.busy}),hu=n=>{n.recommend.packageId?U_(n.recommend.packageId):Ni("projects")};u_({onSeeIncluded:()=>hu({recommend:{packageId:At().recommendedPackageId}})});m_({onBeat:(n,e,t)=>t&&A_.maybeInvite(n),onChoose:hu});const C_={CR:'<div class="mini mini-cr"><span class="b in">Hi, is anyone free tomorrow?</span><span class="b out">Yes! 9 AM or 1:30 PM?</span><span class="b in">9 works.</span><span class="tick">Booked</span></div>',GR:'<div class="mini mini-gr"><div class="flowline"><span>Ad</span><i></i><span>Page</span><i></i><span>Lead</span></div><div class="bars"><b style="--h:35%"></b><b style="--h:55%"></b><b style="--h:48%"></b><b style="--h:72%"></b><b style="--h:86%"></b></div></div>',BB:'<div class="mini mini-bb"><div class="win"><span class="bar"></span><span class="h"></span><span class="l"></span><span class="l s"></span><span class="cta">Book</span></div></div>',AO:`<div class="mini mini-ao"><svg viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M40 26 L100 60 M160 26 L100 60 M40 94 L100 60 M160 94 L100 60"/></svg><span class="n n1">Inbox</span><span class="n n2">CRM</span><span class="n n3">Calendar</span><span class="n n4">Team</span><span class="hub">${Bn(18)}</span></div>`};let Fi="CR";me("#ex-tabs").innerHTML=kn.map(n=>`<button type="button" class="ex-tab" role="tab" data-tab="${n.code}" aria-selected="${n.code===Fi}">
    <span><strong>${J(n.name)}</strong><em>${J(Yc[n.code])}</em></span></button>`).join("");const R_=n=>$t.filter(e=>e.services.includes(n)).map(e=>e.name);function _r(n){const e=wa(Fi),t=new Set(At().selectedServiceIds),i=me("#ex-panel");n||(i.classList.remove("swap"),i.offsetWidth,i.classList.add("swap")),i.innerHTML=`
    <div class="ex-top">
      <div class="ex-head"><h3 class="display">${J(e.name)}</h3><p class="lede">${J(Yc[e.code])}</p></div>
      ${C_[e.code]}
    </div>
    <div class="ex-two">
      <div class="sh-block"><h4>The problem</h4><p>${J(e.problem)}</p></div>
      <div class="sh-block"><h4>What changes</h4><p>${J(e.outcome)}</p></div>
    </div>
    <div class="sh-block"><h4>How it flows</h4><div class="flow">${e.process.map((s,r)=>`${r?"<i></i>":""}<span style="animation-delay:${.1+r*.06}s">${J(s)}</span>`).join("")}</div></div>
    <div class="sh-block"><h4>What’s included</h4>
      <div class="svc-list">${Xc(e.code).map(s=>{const r=R_(s.code),o=t.has(s.code);return`<details class="svc" data-svc="${s.code}"${n===s.code?" open":""}>
            <summary><strong>${J(s.name)}</strong><span class="badge">${au[s.soldAs]}</span></summary>
            <dl>
              <div><dt>You get</dt><dd>${J(s.deliverables)}</dd></div>
              <div><dt>You provide</dt><dd>${J(s.client)}</dd></div>
              <div><dt>After launch</dt><dd>${J(s.ongoing)}</dd></div>
              <div><dt>Where it’s sold</dt><dd>${r.length?`In ${r.join(", ")}`:s.soldAs.startsWith("project")?"As a one-time project":"As an add-on"}</dd></div>
            </dl>
            <button type="button" class="link" data-add="${s.code}" aria-pressed="${o}">${o?"✓ In your scope (remove)":"+ Add to my scope"}</button>
          </details>`}).join("")}</div>
    </div>
    <p class="muted" style="font-size:14px">Upgrades: ${J(e.upgrades)}.</p>`,mt(".ex-tab").forEach(s=>s.setAttribute("aria-selected",s.dataset.tab===Fi))}me("#ex-tabs").addEventListener("click",n=>{const e=n.target.closest("[data-tab]");e&&(Fi=e.dataset.tab,_r(),ht("sb_system_explored",{system:Fi}))});_r();const L_=n=>{Fi=n,_r(),Ni("systems"),ht("sb_system_explored",{system:n})},ds=Wv.filter(n=>n.published),ra=n=>n.clientCase&&n.approved,fu={live:"Live project",demo:"Working demo",soon:"Concept / in progress"},pu={site:"Website",demo:"Demo",brand:"Brand",ai:"AI & software"};let Ji="all";const P_=new Set(ds.map(n=>n.type));me("#filters").innerHTML=$v.filter(n=>n.id==="all"||(n.id==="case"?ds.some(ra):P_.has(n.id))).map(n=>`<button type="button" class="chip${n.id==="all"?" on":""}" data-filter="${n.id}">${J(n.label)}</button>`).join("");const I_=n=>{const e=n.media[0];return e?`<img src="${e.poster||e.img}" alt="" loading="lazy" />`:`<div class="placeholder"><span class="ph-glyph">${Bn(64)}</span></div>`};function mu(){const n=ds.filter(e=>Ji==="all"||(Ji==="case"?ra(e):e.type===Ji));me("#work-grid").innerHTML=n.map((e,t)=>`<button type="button" class="work-card${t===0&&Ji==="all"?" wide":""}" data-work="${ds.indexOf(e)}" style="animation-delay:${t*.07}s">
        <div class="work-media">${I_(e)}</div>
        <div class="work-info">
          <div class="work-meta"><span class="pill ${e.status}">${fu[e.status]}</span><span>${J(pu[e.type]||"")}</span>${ra(e)?"<span>Client case study</span>":""}</div>
          <strong>${J(e.title)}</strong>
          <p>${J(e.summary)}</p>
        </div>
      </button>`).join("")+'<button type="button" class="work-card next" data-book data-from="work"><span class="eyebrow">Your project</span><strong>Your business could be next.</strong><span class="link">Start a project →</span></button>'}me("#filters").addEventListener("click",n=>{const e=n.target.closest("[data-filter]");e&&(Ji=e.dataset.filter,mt("[data-filter]").forEach(t=>t.classList.toggle("on",t===e)),mu())});mu();const D_=$t.some(n=>!n.implementation.approved||!n.management.approved);D_&&wt.SHOW_PROPOSED&&(me("#draft-note").hidden=!1,me("#draft-note").innerHTML='<span class="proposed">Proposed</span> Prices marked this way are under review and can change before you sign.');const or=me("#config-toggle"),xr=()=>{const n=me('[aria-pressed="true"]',or),e=me(".thumb",or);e.style.left=n.offsetLeft+"px",e.style.width=n.offsetWidth+"px"},Pa=n=>{mt("[data-view]",or).forEach(e=>e.setAttribute("aria-pressed",e.dataset.view===n)),me("#view-packages").hidden=n!=="packages",me("#view-composer").hidden=n!=="composer",xr(),n==="composer"&&ht("sb_composer_opened",{},{once:!0})};or.addEventListener("click",n=>{const e=n.target.closest("[data-view]");e&&Pa(e.dataset.view)});requestAnimationFrame(xr);addEventListener("resize",xr);document.fonts?.ready.then(xr);const gu=n=>kn.filter(e=>n.services.some(t=>zt(t).system===e.code));function vu(){const{recommendedPackageId:n,acceptedPackageId:e}=At();me("#plans").innerHTML=$t.map(t=>{const i=n===t.id,s=e===t.id;return`<article class="plan${i?" recommended":""}${s?" accepted":""}" id="pkg-${t.id}">
      ${s?'<span class="badge">Your choice</span>':i?'<span class="badge">Suggested for you</span>':""}
      <h3>${J(t.name)}</h3>
      <p class="fit">${J(jc[t.id])}</p>
      <div class="sys-chips">${gu(t).map(r=>`<span>${J(r.name)}</span>`).join("<i>+</i>")}</div>
      <div class="fee-rows">
        <div class="fee"><span>Implementation</span><strong>${Fn(t.implementation)}</strong><em>one-time</em></div>
        <div class="fee"><span>Management</span><strong>${Fn(t.management)}</strong><em>per month</em></div>
        <div class="fee"><span>Term</span><strong>${Fn(t.term,r=>r)}</strong></div>
      </div>
      <p class="count">${t.services.length} services included</p>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button type="button" class="btn ${i||s?"primary":""}" data-accept="${t.id}">${s?"Selected · continue":`Start with ${J(t.name)}`}</button>
        <button type="button" class="link" data-plan="${t.id}" style="justify-self:center;font-size:14px">See what’s included →</button>
      </div>
    </article>`}).join("")+`<article class="plan custom-plan"><h3>Custom project</h3><p class="fit">For a bounded design, build, software or automation requirement.</p>
      <p class="muted">Pick exactly the services you need, or scope a one-time build.</p>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button type="button" class="btn" data-view-composer>Build your own</button>
        <a class="link" href="#projects" style="justify-self:center;font-size:14px">See one-time projects →</a>
      </div></article>`}vu();function U_(n){Pa("packages"),Ni("packages");const e=document.getElementById("pkg-"+n);e&&(e.classList.remove("focus"),e.offsetWidth,e.classList.add("focus"),ht("sb_package_viewed",{package:n}))}const N_=[...new Set($t.flatMap(n=>[...n.services,...n.addOns]))];me("#matrix").innerHTML=`<table class="matrix"><thead><tr><th>Service</th>${$t.map(n=>`<th>${J(n.name)}</th>`).join("")}</tr></thead><tbody>${kn.map(n=>`<tr class="grp"><td colspan="${$t.length+1}">${J(n.name)}</td></tr>`+N_.filter(e=>zt(e).system===n.code).map(e=>`<tr><td>${J(zt(e).name)}</td>${$t.map(t=>t.services.includes(e)?'<td class="yes">✓</td>':t.addOns.includes(e)?'<td class="add">Add-on</td>':'<td class="no">—</td>').join("")}</tr>`).join("")).join("")}<tr><td>Usage limits (lines, minutes, posts, edit hours)</td>${$t.map(n=>`<td>${Fn(n.limits,e=>e,"Set during scoping")}</td>`).join("")}</tr></tbody></table>`;me("#compare-btn").addEventListener("click",n=>{const e=me("#matrix");e.hidden=!e.hidden,n.currentTarget.setAttribute("aria-expanded",!e.hidden),n.currentTarget.textContent=e.hidden?"See every service compared":"Hide comparison"});me("#comp-list").innerHTML=kn.map(n=>`<fieldset class="comp-group"><legend>${J(n.name)}</legend>${Xc(n.code).map(e=>`<label class="comp-item"><input type="checkbox" value="${e.code}" id="c-${e.code}" />
        <span><strong>${J(e.name)}</strong><em>${J(e.deliverables)}</em></span><span class="badge">${au[e.soldAs]}</span></label>`).join("")}</fieldset>`).join("");me("#comp-list").addEventListener("change",n=>{if(n.target.type!=="checkbox")return;tu(n.target.value)&&ht("sb_service_added",{service:n.target.value})});function _u(){const n=At().selectedServiceIds;mt("#comp-list input").forEach(s=>s.checked=n.includes(s.value));const e=me("#comp-sum");if(!n.length){e.innerHTML=`<div class="eyebrow">Your scope</div><h3 class="display">Choose the services you need.</h3>
      <p class="muted">We’ll point out the closest package, or treat it as a custom proposal.</p>`;return}const t=qc(n),i=t.pkg&&!t.custom;e.innerHTML=`
    <div class="eyebrow">Your scope · ${n.length} service${n.length>1?"s":""}</div>
    <h3 class="display">${i?`Closest fit: ${J(t.pkg.name)}`:"A custom proposal"}</h3>
    <p class="muted">${i?`${J(t.pkg.name)} covers your recurring selections${t.unused.length?` and includes ${t.unused.length} more services`:""}. Picking it is up to you.`:"Your mix doesn’t match one package. We’ll scope it service by service after a short call."}</p>
    <ul class="scope-list">${n.map(s=>`<li>${J(zt(s).name)}<button type="button" class="link sm" data-add="${s}">Remove</button></li>`).join("")}</ul>
    ${t.projects.length?`<p class="muted">Quoted as one-time projects: ${t.projects.map(s=>J(zt(s).name)).join(", ")}.</p>`:""}
    <p class="fine-l">An estimate to start the conversation, not a quote or a checkout.</p>
    <div class="need-actions">
      <button type="button" class="btn primary" data-book data-from="composer">Send this scope →</button>
      ${i?`<button type="button" class="link" data-accept="${t.pkg.id}">Choose ${J(t.pkg.name)}</button>`:""}
      <button type="button" class="link" id="comp-clear">Clear</button>
    </div>`}me("#builds").innerHTML=Uv.map(n=>`<button type="button" class="build" data-project="${n.code}"><strong>${J(n.name)}</strong><span>${J(n.note)}</span><em>${Ra(n.from)?`From ${Fn(n.from)}`:"Quoted after scoping"} →</em></button>`).join("");me("#process").innerHTML=Nv.map((n,e)=>`<li><b>${String(e+1).padStart(2,"0")}</b><strong>${J(n.step)}</strong><span>${J(n.note)}</span></li>`).join("");const xu=[{step:"Project",note:"Build the brand, site or tool.",tag:"Quoted"},...$t.map(n=>({step:n.name,note:n.outcome+".",tag:Ra(n.management)?`${ou(n.management.value)}/mo`:"Monthly"}))],ar=me("#path-track");ar.innerHTML=xu.map((n,e)=>`<div class="path-step"><span class="node">${String(e+1).padStart(2,"0")}</span><strong>${J(n.step)}</strong><span>${J(n.note)}</span><em>${J(n.tag)}</em></div>`).join("");const F_=mt(".path-step",ar),yu=()=>{const n=ar.getBoundingClientRect(),e=Ht?1:Math.min(1,Math.max(0,(innerHeight*.85-n.top)/(innerHeight*.6)));ar.style.setProperty("--p",e),F_.forEach((t,i)=>t.classList.toggle("on",e>=i/(xu.length-1)-.02))};addEventListener("scroll",yu,{passive:!0});yu();me("#faq-list").innerHTML=Fv.map(n=>`<details><summary>${J(n.q)}</summary><p>${J(n.a)}</p></details>`).join("");mt("#faq-list details").forEach(n=>n.addEventListener("toggle",()=>{n.open&&mt("#faq-list details").forEach(e=>e!==n&&(e.open=!1))}));function Su(){const n=At(),e=n.selectedServiceIds.length,t=me("#scope-bar"),i=e?`${e} service${e>1?"s":""} in your scope`:n.acceptedPackageId?`${su(n.acceptedPackageId).name} selected`:"";t.hidden=!i,t.innerHTML=i?`<span class="dot"></span>${J(i)} <b>Review →</b>`:""}me("#scope-bar").addEventListener("click",()=>ts.go("scope-bar"));pr(()=>{vu(),_u(),Su(),_r(me("#ex-panel details[open]")?.dataset.svc||"")});_u();Su();const kt=me("#sheet"),yi=me(".sheet-panel",kt),lr=me("#sheet-body");let oa=null,Mu=0;function Ia(n,e){clearTimeout(Mu);const t=kt.classList.contains("open");oa=t?oa:document.activeElement,lr.innerHTML=n,yi.scrollTop=0,kt.classList.remove("closing"),kt.setAttribute("aria-hidden","false"),document.body.classList.add("locked");const i=yi.getBoundingClientRect();yi.style.setProperty("--ox",(e?.clientX??innerWidth/2)-i.left+"px"),yi.style.setProperty("--oy",(e?.clientY??innerHeight/2)-i.top+"px"),t&&(kt.classList.remove("open"),yi.offsetWidth),requestAnimationFrame(()=>{kt.classList.add("open"),me(".sheet-close",kt).focus({preventScroll:!0})})}function ns(){kt.classList.contains("open")&&(kt.classList.add("closing"),kt.classList.remove("open"),kt.setAttribute("aria-hidden","true"),document.body.classList.remove("locked"),Mu=setTimeout(()=>lr.innerHTML="",500),oa?.focus?.({preventScroll:!0}))}kt.addEventListener("click",n=>n.target.closest("[data-close]")&&ns());addEventListener("keydown",n=>{if(kt.classList.contains("open")&&(n.key==="Escape"&&ns(),n.key==="Tab")){const e=mt("button, a[href], input, select, textarea, iframe",yi).filter(t=>!t.disabled&&t.offsetParent!==null);if(!e.length)return;n.shiftKey&&document.activeElement===e[0]?(e.at(-1).focus(),n.preventDefault()):!n.shiftKey&&document.activeElement===e.at(-1)&&(e[0].focus(),n.preventDefault())}});function O_(n,e){const t=su(n);ht("sb_package_viewed",{package:n}),Ia(`<div class="sh-copy" style="max-width:980px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Package</div><h2 class="display" id="sheet-title">${J(t.name)}</h2><p class="lede">${J(jc[t.id])}</p></div>
      <div class="fee-rows">
        <div class="fee"><span>Implementation</span><strong>${Fn(t.implementation)}</strong><em>one-time</em></div>
        <div class="fee"><span>Management</span><strong>${Fn(t.management)}</strong><em>per month</em></div>
        <div class="fee"><span>Term</span><strong>${Fn(t.term,i=>i)}</strong></div>
      </div>
      <div class="pkg-groups">${gu(t).map(i=>`<div class="sh-block"><h4>${J(i.name)}</h4><ul class="ticks">${t.services.filter(s=>zt(s).system===i.code).map(s=>`<li><span><strong>${J(zt(s).name)}</strong><em>${J(zt(s).deliverables)}</em></span></li>`).join("")}</ul></div>`).join("")}</div>
      <div class="sh-block"><h4>Can be added</h4><div class="syschips">${t.addOns.map(i=>`<span class="chip sm">${J(zt(i).name)}</span>`).join("")}</div></div>
      <div class="sh-ctas"><button type="button" class="btn primary" data-accept="${t.id}">Start with ${J(t.name)}</button>${t.performance?'<button type="button" class="btn" data-performance>Performance pricing</button>':""}</div>
    </div>`,e)}function B_(n){const e=wt.SHOW_PROPOSED;Ia(`<div class="sh-copy" style="max-width:900px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Performance pricing · <span class="proposed">Under review</span></div>
        <h2 class="display" id="sheet-title">Pay on results.</h2>
        <p class="lede">${e?J(Hl.summary):"For some marketing engagements, part of the fee can be tied to results instead of a flat monthly fee. It needs marketing run by us and tracking we can verify. Exact terms are confirmed during scoping."}</p></div>
      ${e?`<div class="rules">${Hl.rules.map(([t,i])=>`<div><dt>${J(t)}</dt><dd>${J(i)}</dd></div>`).join("")}</div>`:""}
      <div class="sh-ctas"><button type="button" class="btn primary" data-book data-from="performance" data-perf="1">Ask about performance pricing</button></div>
    </div>`,n)}function bu(n){return n.video?`<video src="${n.video}" poster="${n.poster||""}" autoplay muted loop playsinline></video>`:`<img src="${n.img}" alt="" />`}let aa=null;function k_(n,e){const t=ds[n];aa=t;const i=t.links.map(r=>({...r,url:Ca(r.url)})).filter(r=>r.url),s=[t.problem&&`<div class="sh-block"><h4>The problem</h4><p>${J(t.problem)}</p></div>`,t.solution?.length&&`<div class="sh-block"><h4>Services used</h4><div class="syschips">${t.solution.map(r=>`<span class="chip sm">${J(zt(r).name)}</span>`).join("")}</div></div>`,t.technology?.length&&`<div class="sh-block"><h4>Technology</h4><div class="syschips">${t.technology.map(r=>`<span class="chip sm">${J(r)}</span>`).join("")}</div></div>`,t.process?.length&&`<div class="sh-block"><h4>Process</h4><ol class="mini-steps">${t.process.map(r=>`<li>${J(r)}</li>`).join("")}</ol></div>`,t.results?.length?`<div class="sh-block"><h4>Results</h4><dl class="fields">${t.results.map(r=>`<div><dt>${J(r.metric)}</dt><dd>${J(r.value)} <span class="muted">· ${J(r.period)} · ${J(r.source)}</span></dd></div>`).join("")}</dl></div>`:t.observed&&`<div class="sh-block"><h4>What changed</h4><p>${J(t.observed)}</p></div>`].filter(Boolean).join("");Ia(`<div class="sh-work">
      <div class="gallery" id="gallery">${t.media[0]?bu(t.media[0]):`<div class="work-media" style="height:100%"><div class="placeholder"><span class="ph-glyph">${Bn(80)}</span></div></div>`}</div>
      ${t.media.length>1?`<div class="thumbs">${t.media.map((r,o)=>`<button type="button" data-media="${o}" aria-current="${o===0}" aria-label="Show item ${o+1}"><img src="${r.poster||r.img}" alt="" /></button>`).join("")}</div>`:""}
      <div class="sh-copy">
        <div class="sh-block full">
          <div class="work-meta"><span class="pill ${t.status}">${fu[t.status]}</span><span>${J(pu[t.type]||"")}</span><span>${J(t.client)}</span></div>
          <h2 class="display" id="sheet-title">${J(t.title)}</h2>
          <p class="lede">${J(t.about)}</p>
          <div class="sh-ctas" style="margin-top:10px">
            ${i.map((r,o)=>`<a class="btn ${o?"":"primary"}" href="${J(r.url)}" target="_blank" rel="noopener">${J(r.label)} ↗</a>`).join("")}
            ${t.status==="soon"?'<button type="button" class="btn primary" data-community-invite="work">Follow the build</button>':""}
          </div>
        </div>
        <div>${s}</div>
        <div>${t.built?.length?`<div class="sh-block"><h4>What we built</h4><ul class="ticks" style="grid-template-columns:1fr">${t.built.map(r=>`<li>${J(r)}</li>`).join("")}</ul></div>`:""}
          ${t.systems.length?`<div class="sh-block" style="margin-top:14px"><h4>Systems</h4><div class="syschips">${t.systems.map(r=>`<button type="button" class="chip" data-explore="${r}">${J(wa(r).name)}</button>`).join("")}</div></div>`:""}</div>
      </div>
    </div>`,e)}lr.addEventListener("click",n=>{const e=n.target.closest("[data-media]");e&&aa&&(me("#gallery").innerHTML=bu(aa.media[+e.dataset.media]),mt("[data-media]",lr).forEach(t=>t.setAttribute("aria-current",t===e)))});document.addEventListener("click",n=>{const e=n.target;e.closest("[data-hero-primary]")&&ht("sb_hero_primary_click");const t=e.closest("[data-book]");if(t&&!t.disabled)return n.preventDefault(),t.dataset.perf&&(me("#f-perf").checked=!0),mr(!1),ns(),ts.go(t.dataset.from);const i=e.closest("[data-accept]");if(i){const l=i.dataset.accept;return Mn({acceptedPackageId:l}),ht("sb_package_selected",{package:l}),ns(),ts.go("package")}const s=e.closest("[data-project]");if(s){const l=new Set(At().selectedServiceIds);return l.add(s.dataset.project),Mn({selectedServiceIds:[...l],customScope:!0}),ht("sb_service_added",{service:s.dataset.project}),ts.go("project")}const r=e.closest("[data-explore]");if(r)return ns(),L_(r.dataset.explore);if(e.closest("[data-view-composer]"))return Pa("composer");const o=e.closest("[data-plan]");if(o)return O_(o.dataset.plan,n);if(e.closest("[data-performance]"))return B_(n);const a=e.closest("[data-work]");if(a)return k_(+a.dataset.work,n);if(e.closest("#comp-clear"))return Mn({selectedServiceIds:[]});const c=e.closest("[data-add]");c&&tu(c.dataset.add)&&ht("sb_service_added",{service:c.dataset.add})});
