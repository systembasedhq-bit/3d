(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="180",Uu=0,Vo=1,Nu=2,nc=1,Fu=2,xn=3,Bn=0,Dt=1,sn=2,bn=0,Ti=1,ua=2,Go=3,Wo=4,Ou=5,Qn=100,ku=101,Bu=102,zu=103,Hu=104,Vu=200,Gu=201,Wu=202,$u=203,da=204,ha=205,Xu=206,qu=207,ju=208,Yu=209,Ku=210,Ju=211,Zu=212,Qu=213,ed=214,fa=0,pa=1,ma=2,Li=3,ga=4,va=5,_a=6,xa=7,ic=0,td=1,nd=2,On=0,sc=1,rc=2,ac=3,fo=4,oc=5,lc=6,cc=7,uc=300,Pi=301,Ii=302,ya=303,ba=304,hr=306,Ma=1e3,ti=1001,er=1002,Zt=1003,id=1004,bs=1005,rn=1006,Er=1007,ni=1008,ln=1009,dc=1010,hc=1011,os=1012,po=1013,si=1014,yn=1015,on=1016,mo=1017,go=1018,ls=1020,fc=35902,pc=35899,mc=1021,gc=1022,Jt=1023,cs=1026,us=1027,vc=1028,vo=1029,_c=1030,_o=1031,xo=1033,js=33776,Ys=33777,Ks=33778,Js=33779,Sa=35840,wa=35841,Ea=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,La=37808,Pa=37809,Ia=37810,Da=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,ka=37816,Ba=37817,za=37818,Ha=37819,Va=37820,Ga=37821,Wa=36492,$a=36494,Xa=36495,qa=36283,ja=36284,Ya=36285,Ka=36286,sd=3200,rd=3201,xc=0,ad=1,Un="",Tt="srgb",Di="srgb-linear",tr="linear",tt="srgb",ci=7680,$o=519,od=512,ld=513,cd=514,yc=515,ud=516,dd=517,hd=518,fd=519,Xo=35044,qo="300 es",an=2e3,nr=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tr=Math.PI/180,Ja=180/Math.PI;function Hi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function pd(n,e){return(n%e+e)%e}function Ar(n,e,t){return(1-t)*n+t*e}function $i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ms{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const p=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==p||l!==m||u!==g){let f=1-o;const d=c*p+l*m+u*g+h*x,C=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const U=Math.sqrt(M),D=Math.atan2(U,d*C);f=Math.sin(f*D)/U,o=Math.sin(o*D)/U}const b=o*C;if(c=c*f+p*b,l=l*f+m*b,u=u*f+g*b,h=h*f+x*b,f===1-o){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*p,e[t+1]=c*g+u*p+l*h-o*m,e[t+2]=l*g+u*m+o*p-c*h,e[t+3]=u*g-o*h-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),p=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*u*h+l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h+p*m*g;break;case"YZX":this._x=p*u*h+l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h-p*m*g;break;case"XZY":this._x=p*u*h-l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new W,jo=new ms;class $e{constructor(e,t,i,s,r,a,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],p=i[2],m=i[5],g=i[8],x=s[0],f=s[3],d=s[6],C=s[1],M=s[4],b=s[7],U=s[2],D=s[5],N=s[8];return r[0]=a*x+o*C+c*U,r[3]=a*f+o*M+c*D,r[6]=a*d+o*b+c*N,r[1]=l*x+u*C+h*U,r[4]=l*f+u*M+h*D,r[7]=l*d+u*b+h*N,r[2]=p*x+m*C+g*U,r[5]=p*f+m*M+g*D,r[8]=p*d+m*b+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,p=o*c-u*r,m=l*r-a*c,g=t*h+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=p*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cr.makeScale(e,t)),this}rotate(e){return this.premultiply(Cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new $e;function bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){const n=ir("canvas");return n.style.display="block",n}const Yo={};function ds(n){n in Yo||(Yo[n]=!0,console.warn(n))}function gd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ko=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){const n={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Di]:{primaries:e,whitePoint:i,transfer:tr,toXYZ:Ko,fromXYZ:Jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Ko,fromXYZ:Jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}const Ze=vd();function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ui;class _d{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ui===void 0&&(ui=ir("canvas")),ui.width=e.width,ui.height=e.height;const s=ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ui}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mn(t[i]/255)*255):t[i]=Mn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xd=0;class yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Lr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yd=0;const Pr=new W;class Ct extends zi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=ti,s=ti,r=rn,a=ni,o=Jt,c=ln,l=Ct.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Hi(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ma:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ma:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=uc;Ct.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],m=c[5],g=c[9],x=c[2],f=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,b=(m+1)/2,U=(d+1)/2,D=(u+p)/4,N=(h+x)/4,F=(g+f)/4;return M>b&&M>U?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=D/i,r=N/i):b>U?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=D/s,r=F/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=N/r,s=F/r),this.set(i,s,r,t),this}let C=Math.sqrt((f-g)*(f-g)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(C)<.001&&(C=1),this.x=(f-g)/C,this.y=(h-x)/C,this.z=(p-u)/C,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ct(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends bd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mc extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Ss.subVectors(this.max,Xi),di.subVectors(e.a,Xi),hi.subVectors(e.b,Xi),fi.subVectors(e.c,Xi),En.subVectors(hi,di),Tn.subVectors(fi,hi),Gn.subVectors(di,fi);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Gn.z,Gn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Gn.z,0,-Gn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Gn.y,Gn.x,0];return!Ir(t,di,hi,fi,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,di,hi,fi,Ss))?!1:(ws.crossVectors(En,Tn),t=[ws.x,ws.y,ws.z],Ir(t,di,hi,fi,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new W,new W,new W,new W,new W,new W,new W,new W],qt=new W,Ms=new gs,di=new W,hi=new W,fi=new W,En=new W,Tn=new W,Gn=new W,Xi=new W,Ss=new W,ws=new W,Wn=new W;function Ir(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wn.fromArray(n,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=e.dot(Wn),l=t.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Sd=new gs,qi=new W,Dr=new W;class bo{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Dr)),this.expandByPoint(qi.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new W,Ur=new W,Es=new W,An=new W,Nr=new W,Ts=new W,Fr=new W;class wd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ur.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Ur);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=An.dot(this.direction),c=-An.dot(Es),l=An.lengthSq(),u=Math.abs(1-a*a);let h,p,m,g;if(u>0)if(h=a*c-o,p=a*o-c,g=r*u,h>=0)if(p>=-g)if(p<=g){const x=1/u;h*=x,p*=x,m=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;else p=-r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;else p<=-g?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+l):p<=g?(h=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+l);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ur).addScaledVector(Es,p),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),s=pn.dot(pn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,s,r){Nr.subVectors(t,e),Ts.subVectors(i,e),Fr.crossVectors(Nr,Ts);let a=this.direction.dot(Fr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const c=o*this.direction.dot(Ts.crossVectors(An,Ts));if(c<0)return null;const l=o*this.direction.dot(Nr.cross(An));if(l<0||c+l>a)return null;const u=-o*An.dot(Fr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,a,o,c,l,u,h,p,m,g,x,f){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,h,p,m,g,x,f)}set(e,t,i,s,r,a,o,c,l,u,h,p,m,g,x,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=g,d[11]=x,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/pi.setFromMatrixColumn(e,0).length(),r=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,m=c*h,g=l*u,x=l*h;t[0]=p+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,m=c*h,g=l*u,x=l*h;t[0]=p-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+x,t[1]=c*h,t[5]=x*l+p,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-p*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=p-x*h}else if(e.order==="XZY"){const p=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+x,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ed,e,Td)}lookAt(e,t,i){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Rn.crossVectors(i,Ot),Rn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Rn.crossVectors(i,Ot)),Rn.normalize(),As.crossVectors(Ot,Rn),s[0]=Rn.x,s[4]=As.x,s[8]=Ot.x,s[1]=Rn.y,s[5]=As.y,s[9]=Ot.y,s[2]=Rn.z,s[6]=As.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],p=i[9],m=i[13],g=i[2],x=i[6],f=i[10],d=i[14],C=i[3],M=i[7],b=i[11],U=i[15],D=s[0],N=s[4],F=s[8],S=s[12],w=s[1],k=s[5],z=s[9],ee=s[13],te=s[2],ie=s[6],Q=s[10],se=s[14],P=s[3],ne=s[7],he=s[11],ge=s[15];return r[0]=a*D+o*w+c*te+l*P,r[4]=a*N+o*k+c*ie+l*ne,r[8]=a*F+o*z+c*Q+l*he,r[12]=a*S+o*ee+c*se+l*ge,r[1]=u*D+h*w+p*te+m*P,r[5]=u*N+h*k+p*ie+m*ne,r[9]=u*F+h*z+p*Q+m*he,r[13]=u*S+h*ee+p*se+m*ge,r[2]=g*D+x*w+f*te+d*P,r[6]=g*N+x*k+f*ie+d*ne,r[10]=g*F+x*z+f*Q+d*he,r[14]=g*S+x*ee+f*se+d*ge,r[3]=C*D+M*w+b*te+U*P,r[7]=C*N+M*k+b*ie+U*ne,r[11]=C*F+M*z+b*Q+U*he,r[15]=C*S+M*ee+b*se+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],x=e[7],f=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*o*p+i*l*p+s*o*m-i*c*m)+x*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*u-r*c*u)+f*(+t*l*h-t*o*m-r*a*h+i*a*m+r*o*u-i*l*u)+d*(-s*o*u-t*c*h+t*o*p+s*a*h-i*a*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],x=e[13],f=e[14],d=e[15],C=h*f*l-x*p*l+x*c*m-o*f*m-h*c*d+o*p*d,M=g*p*l-u*f*l-g*c*m+a*f*m+u*c*d-a*p*d,b=u*x*l-g*h*l+g*o*m-a*x*m-u*o*d+a*h*d,U=g*h*c-u*x*c-g*o*p+a*x*p+u*o*f-a*h*f,D=t*C+i*M+s*b+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=C*N,e[1]=(x*p*r-h*f*r-x*s*m+i*f*m+h*s*d-i*p*d)*N,e[2]=(o*f*r-x*c*r+x*s*l-i*f*l-o*s*d+i*c*d)*N,e[3]=(h*c*r-o*p*r-h*s*l+i*p*l+o*s*m-i*c*m)*N,e[4]=M*N,e[5]=(u*f*r-g*p*r+g*s*m-t*f*m-u*s*d+t*p*d)*N,e[6]=(g*c*r-a*f*r-g*s*l+t*f*l+a*s*d-t*c*d)*N,e[7]=(a*p*r-u*c*r+u*s*l-t*p*l-a*s*m+t*c*m)*N,e[8]=b*N,e[9]=(g*h*r-u*x*r-g*i*m+t*x*m+u*i*d-t*h*d)*N,e[10]=(a*x*r-g*o*r+g*i*l-t*x*l-a*i*d+t*o*d)*N,e[11]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*m-t*o*m)*N,e[12]=U*N,e[13]=(u*x*s-g*h*s+g*i*p-t*x*p-u*i*f+t*h*f)*N,e[14]=(g*o*s-a*x*s-g*i*c+t*x*c+a*i*f-t*o*f)*N,e[15]=(a*h*s-u*o*s+u*i*c-t*h*c-a*i*p+t*o*p)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,p=r*l,m=r*u,g=r*h,x=a*u,f=a*h,d=o*h,C=c*l,M=c*u,b=c*h,U=i.x,D=i.y,N=i.z;return s[0]=(1-(x+d))*U,s[1]=(m+b)*U,s[2]=(g-M)*U,s[3]=0,s[4]=(m-b)*D,s[5]=(1-(p+d))*D,s[6]=(f+C)*D,s[7]=0,s[8]=(g+M)*N,s[9]=(f-C)*N,s[10]=(1-(p+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jt.copy(this);const l=1/r,u=1/a,h=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=an,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===an)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===nr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=an,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===an)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===nr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new W,jt=new ct,Ed=new W(0,0,0),Td=new W(1,1,1),Rn=new W,As=new W,Ot=new W,Zo=new ct,Qo=new ms;class cn{constructor(e=0,t=0,i=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ad=0;const el=new W,mi=new ms,mn=new ct,Rs=new W,ji=new W,Rd=new W,Cd=new ms,tl=new W(1,0,0),nl=new W(0,1,0),il=new W(0,0,1),sl={type:"added"},Ld={type:"removed"},gi={type:"childadded",child:null},Or={type:"childremoved",child:null};class St extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new W,t=new cn,i=new ms,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new $e}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(tl,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(il,e)}translateOnAxis(e,t){return el.copy(e).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tl,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rs.copy(e):Rs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ji,Rs,this.up):mn.lookAt(Rs,ji,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(mn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sl),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),Or.child=e,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sl),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}St.DEFAULT_UP=new W(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new W,gn=new W,kr=new W,vn=new W,vi=new W,_i=new W,rl=new W,Br=new W,zr=new W,Hr=new W,Vr=new lt,Gr=new lt,Wr=new lt;class Kt{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Yt.subVectors(s,t),gn.subVectors(i,t),kr.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(gn),c=Yt.dot(kr),l=gn.dot(gn),u=gn.dot(kr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(l*c-o*u)*p,g=(a*u-o*c)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(a,vn.y),c.addScaledVector(o,vn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Vr.setScalar(0),Gr.setScalar(0),Wr.setScalar(0),Vr.fromBufferAttribute(e,t),Gr.fromBufferAttribute(e,i),Wr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Gr,r.y),a.addScaledVector(Wr,r.z),a}static isFrontFacing(e,t,i,s){return Yt.subVectors(i,t),gn.subVectors(e,t),Yt.cross(gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Yt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;vi.subVectors(s,i),_i.subVectors(r,i),Br.subVectors(e,i);const c=vi.dot(Br),l=_i.dot(Br);if(c<=0&&l<=0)return t.copy(i);zr.subVectors(e,s);const u=vi.dot(zr),h=_i.dot(zr);if(u>=0&&h<=u)return t.copy(s);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(vi,a);Hr.subVectors(e,r);const m=vi.dot(Hr),g=_i.dot(Hr);if(g>=0&&m<=g)return t.copy(r);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(_i,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return rl.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(rl,o);const d=1/(f+x+p);return a=x*d,o=p*d,t.copy(i).addScaledVector(vi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function $r(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=pd(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=$r(a,r,e+1/3),this.g=$r(a,r,e),this.b=$r(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=wc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ze.workingToColorSpace(Mt.copy(this),e),Math.round(Ke(Mt.r*255,0,255))*65536+Math.round(Ke(Mt.g*255,0,255))*256+Math.round(Ke(Mt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Mt.copy(this),t);const i=Mt.r,s=Mt.g,r=Mt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Tt){Ze.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,s=Mt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Cs);const i=Ar(Cn.h,Cs.h,t),s=Ar(Cn.s,Cs.s,t),r=Ar(Cn.l,Cs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Xe;Xe.NAMES=wc;let Pd=0;class vs extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ti,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=ha,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==da&&(i.blendSrc=this.blendSrc),this.blendDst!==ha&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fr extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new W,Ls=new fe;let Id=0;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),e}}class Ec extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tc extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ut extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dd=0;const Wt=new ct,Xr=new St,xi=new W,kt=new gs,Yi=new gs,_t=new W;class un extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Tc:Ec)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(kt.min,Yi.min),kt.expandByPoint(_t),_t.addVectors(kt.max,Yi.max),kt.expandByPoint(_t)):(kt.expandByPoint(Yi.min),kt.expandByPoint(Yi.max))}kt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(e,l),_t.add(xi)),s=Math.max(s,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new W,c[F]=new W;const l=new W,u=new W,h=new W,p=new fe,m=new fe,g=new fe,x=new W,f=new W;function d(F,S,w){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),p.fromBufferAttribute(r,F),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,w),u.sub(l),h.sub(l),m.sub(p),g.sub(p);const k=1/(m.x*g.y-g.x*m.y);isFinite(k)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(k),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(k),o[F].add(x),o[S].add(x),o[w].add(x),c[F].add(f),c[S].add(f),c[w].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,S=C.length;F<S;++F){const w=C[F],k=w.start,z=w.count;for(let ee=k,te=k+z;ee<te;ee+=3)d(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const M=new W,b=new W,U=new W,D=new W;function N(F){U.fromBufferAttribute(s,F),D.copy(U);const S=o[F];M.copy(S),M.sub(U.multiplyScalar(U.dot(S))).normalize(),b.crossVectors(D,S);const k=b.dot(c[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,k)}for(let F=0,S=C.length;F<S;++F){const w=C[F],k=w.start,z=w.count;for(let ee=k,te=k+z;ee<te;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,u=new W,h=new W;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),x=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,f),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let d=0;d<u;d++)p[g++]=l[m++]}return new Qt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const p=l[u],m=e(p,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new ct,$n=new wd,Ps=new bo,ol=new W,Is=new W,Ds=new W,Us=new W,qr=new W,Ns=new W,ll=new W,Fs=new W;class It extends St{constructor(e=new un,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(qr.fromBufferAttribute(h,e),a?Ns.addScaledVector(qr,u):Ns.addScaledVector(qr.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(Ps.containsPoint($n.origin)===!1&&($n.intersectSphere(Ps,ol)===null||$n.origin.distanceToSquared(ol)>(e.far-e.near)**2))&&(al.copy(r).invert(),$n.copy(e.ray).applyMatrix4(al),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const f=p[g],d=a[f.materialIndex],C=Math.max(f.start,m.start),M=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=C,U=M;b<U;b+=3){const D=o.getX(b),N=o.getX(b+1),F=o.getX(b+2);s=Os(this,d,e,i,l,u,h,D,N,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=g,d=x;f<d;f+=3){const C=o.getX(f),M=o.getX(f+1),b=o.getX(f+2);s=Os(this,a,e,i,l,u,h,C,M,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const f=p[g],d=a[f.materialIndex],C=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=C,U=M;b<U;b+=3){const D=b,N=b+1,F=b+2;s=Os(this,d,e,i,l,u,h,D,N,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=g,d=x;f<d;f+=3){const C=f,M=f+1,b=f+2;s=Os(this,a,e,i,l,u,h,C,M,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Ud(n,e,t,i,s,r,a,o){let c;if(e.side===Dt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Bn,o),c===null)return null;Fs.copy(o),Fs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Fs);return l<t.near||l>t.far?null:{distance:l,point:Fs.clone(),object:n}}function Os(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Is),n.getVertexPosition(c,Ds),n.getVertexPosition(l,Us);const u=Ud(n,e,t,i,Is,Ds,Us,ll);if(u){const h=new W;Kt.getBarycoord(ll,Is,Ds,Us,h),s&&(u.uv=Kt.getInterpolatedAttribute(s,o,c,l,h,new fe)),r&&(u.uv1=Kt.getInterpolatedAttribute(r,o,c,l,h,new fe)),a&&(u.normal=Kt.getInterpolatedAttribute(a,o,c,l,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new W,materialIndex:0};Kt.getNormal(Is,Ds,Us,p.normal),u.face=p,u.barycoord=h}return u}class _s extends un{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function g(x,f,d,C,M,b,U,D,N,F,S){const w=b/N,k=U/F,z=b/2,ee=U/2,te=D/2,ie=N+1,Q=F+1;let se=0,P=0;const ne=new W;for(let he=0;he<Q;he++){const ge=he*k-ee;for(let Te=0;Te<ie;Te++){const Oe=Te*w-z;ne[x]=Oe*C,ne[f]=ge*M,ne[d]=te,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[f]=0,ne[d]=D>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Te/N),h.push(1-he/F),se+=1}}for(let he=0;he<F;he++)for(let ge=0;ge<N;ge++){const Te=p+ge+ie*he,Oe=p+ge+ie*(he+1),E=p+(ge+1)+ie*(he+1),A=p+(ge+1)+ie*he;c.push(Te,Oe,A),c.push(Oe,E,A),P+=6}o.addGroup(m,P,S),m+=P,p+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Ui(n[t]);for(const s in i)e[s]=i[s]}return e}function Nd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ac(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ni={clone:Ui,merge:Et};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new W,cl=new fe,ul=new fe;class Bt extends Rc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,cl,ul),t.subVectors(ul,cl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,bi=1;class kd extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(yi,bi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(yi,bi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(yi,bi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(yi,bi,e,t);o.layers=this.layers,this.add(o);const c=new Bt(yi,bi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(yi,bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cc extends Ct{constructor(e=[],t=Pi,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Cc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _s(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:bn});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=rn),new kd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Qi extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,i),d=this._getHandJoint(l,x);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yr=new W,Hd=new W,Vd=new $e;class Dn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yr.subVectors(i,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vd.getNormalMatrix(e),s=this.coplanarPoint(Yr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new bo,Gd=new fe(.5,.5),ks=new W;class Mo{constructor(e=new Dn,t=new Dn,i=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],p=r[6],m=r[7],g=r[8],x=r[9],f=r[10],d=r[11],C=r[12],M=r[13],b=r[14],U=r[15];if(s[0].setComponents(l-a,m-u,d-g,U-C).normalize(),s[1].setComponents(l+a,m+u,d+g,U+C).normalize(),s[2].setComponents(l+o,m+h,d+x,U+M).normalize(),s[3].setComponents(l-o,m-h,d-x,U-M).normalize(),i)s[4].setComponents(c,p,f,b).normalize(),s[5].setComponents(l-c,m-p,d-f,U-b).normalize();else if(s[4].setComponents(l-c,m-p,d-f,U-b).normalize(),t===an)s[5].setComponents(l+c,m+p,d+f,U+b).normalize();else if(t===nr)s[5].setComponents(c,p,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Gd.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ks.x=s.normal.x>0?e.max.x:e.min.x,ks.y=s.normal.y>0?e.max.y:e.min.y,ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wd extends Ct{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pc extends Ct{constructor(e,t,i=si,s,r,a,o=Zt,c=Zt,l,u=cs,h=1){if(u!==cs&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ic extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],p=i[s+1]-u,m=(a-u)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new W,s=[],r=[],a=[],o=new W,c=new ct;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new W)}r[0]=new W,a[0]=new W;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ke(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class So extends dn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*u-m*h+this.aX,l=p*h+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $d extends So{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wo(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let p=(a-r)/l-(o-r)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+h)+(c-o)/h;p*=u,m*=u,s(a,o,p,m)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Bs=new W,Kr=new wo,Jr=new wo,Zr=new wo;class Xd extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new W){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Bs.subVectors(s[0],s[1]).add(s[0]),l=Bs);const h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Bs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(u),m);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),Kr.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,g,x,f),Jr.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,g,x,f),Zr.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,g,x,f)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),Jr.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),Zr.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return i.set(Kr.calc(c),Jr.calc(c),Zr.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function qd(n,e){const t=1-n;return t*t*e}function jd(n,e){return 2*(1-n)*n*e}function Yd(n,e){return n*n*e}function ns(n,e,t,i){return qd(n,e)+jd(n,t)+Yd(n,i)}function Kd(n,e){const t=1-n;return t*t*t*e}function Jd(n,e){const t=1-n;return 3*t*t*n*e}function Zd(n,e){return 3*(1-n)*n*n*e}function Qd(n,e){return n*n*n*e}function is(n,e,t,i,s){return Kd(n,e)+Jd(n,t)+Zd(n,i)+Qd(n,s)}class Dc extends dn{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(is(e,s.x,r.x,a.x,o.x),is(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eh extends dn{constructor(e=new W,t=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new W){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(is(e,s.x,r.x,a.x,o.x),is(e,s.y,r.y,a.y,o.y),is(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uc extends dn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class th extends dn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nc extends dn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ns(e,s.x,r.x,a.x),ns(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nh extends dn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ns(e,s.x,r.x,a.x),ns(e,s.y,r.y,a.y),ns(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fc extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(dl(o,c.x,l.x,u.x,h.x),dl(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:$d,CatmullRomCurve3:Xd,CubicBezierCurve:Dc,CubicBezierCurve3:eh,EllipseCurve:So,LineCurve:Uc,LineCurve3:th,QuadraticBezierCurve:Nc,QuadraticBezierCurve3:nh,SplineCurve:Fc});class ih extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class Ri extends ih{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Uc(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Nc(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Dc(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Fc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){const l=new So(e,t,i,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ci extends Ri{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ri().fromJSON(s))}return this}}function sh(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Oc(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=ch(n,e,r,t)),n.length>80*t){o=1/0,c=1/0;let u=-1/0,h=-1/0;for(let p=t;p<s;p+=t){const m=n[p],g=n[p+1];m<o&&(o=m),g<c&&(c=g),m>u&&(u=m),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return hs(r,a,t,o,c,l,0),a}function Oc(n,e,t,i,s){let r;if(s===yh(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=hl(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=hl(a/i|0,n[a],n[a+1],r);return r&&Fi(r,r.next)&&(ps(r),r=r.next),r}function ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fi(t,t.next)||ht(t.prev,t,t.next)===0)){if(ps(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function hs(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ph(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?ah(n,i,s,r):rh(n)){e.push(c.i,n.i,l.i),ps(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=oh(ri(n),e),hs(n,e,t,i,s,r,2)):a===2&&lh(n,e,t,i,s,r):hs(ri(n),e,t,i,s,r,1);break}}}function rh(n){const e=n.prev,t=n,i=n.next;if(ht(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(s,r,a),h=Math.min(o,c,l),p=Math.max(s,r,a),m=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=m&&es(s,o,r,c,a,l,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ah(n,e,t,i){const s=n.prev,r=n,a=n.next;if(ht(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,p=a.y,m=Math.min(o,c,l),g=Math.min(u,h,p),x=Math.max(o,c,l),f=Math.max(u,h,p),d=Qa(m,g,e,t,i),C=Qa(x,f,e,t,i);let M=n.prevZ,b=n.nextZ;for(;M&&M.z>=d&&b&&b.z<=C;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&es(o,u,c,h,l,p,M.x,M.y)&&ht(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=m&&b.x<=x&&b.y>=g&&b.y<=f&&b!==s&&b!==a&&es(o,u,c,h,l,p,b.x,b.y)&&ht(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=d;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&es(o,u,c,h,l,p,M.x,M.y)&&ht(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=C;){if(b.x>=m&&b.x<=x&&b.y>=g&&b.y<=f&&b!==s&&b!==a&&es(o,u,c,h,l,p,b.x,b.y)&&ht(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function oh(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Fi(i,s)&&Bc(i,t,t.next,s)&&fs(i,s)&&fs(s,i)&&(e.push(i.i,t.i,s.i),ps(t),ps(t.next),t=n=s),t=t.next}while(t!==n);return ri(t)}function lh(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vh(a,o)){let c=zc(a,o);a=ri(a,a.next),c=ri(c,c.next),hs(a,e,t,i,s,r,0),hs(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ch(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=Oc(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(gh(l))}s.sort(uh);for(let r=0;r<s.length;r++)t=dh(s[r],t);return t}function uh(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function dh(n,e){const t=hh(n,e);if(!t)return e;const i=zc(t,n);return ri(i,i.next),ri(t,t.next)}function hh(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(Fi(n,t))return t;do{if(Fi(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&kc(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);fs(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&fh(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function fh(n,e){return ht(n.prev,n,e.prev)<0&&ht(e.next,n,n.next)<0}function ph(n,e,t,i){let s=n;do s.z===0&&(s.z=Qa(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,mh(s)}function mh(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Qa(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function gh(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function kc(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function es(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&kc(n,e,t,i,s,r,a,o)}function vh(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_h(n,e)&&(fs(n,e)&&fs(e,n)&&xh(n,e)&&(ht(n.prev,n,e.prev)||ht(n,e.prev,e))||Fi(n,e)&&ht(n.prev,n,n.next)>0&&ht(e.prev,e,e.next)>0)}function ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fi(n,e){return n.x===e.x&&n.y===e.y}function Bc(n,e,t,i){const s=Hs(ht(n,e,t)),r=Hs(ht(n,e,i)),a=Hs(ht(t,i,n)),o=Hs(ht(t,i,e));return!!(s!==r&&a!==o||s===0&&zs(n,t,e)||r===0&&zs(n,i,e)||a===0&&zs(t,n,i)||o===0&&zs(t,e,i))}function zs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Hs(n){return n>0?1:n<0?-1:0}function _h(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Bc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function fs(n,e){return ht(n.prev,n,n.next)<0?ht(n,e,n.next)>=0&&ht(n,n.prev,e)>=0:ht(n,e,n.prev)<0||ht(n,n.next,e)<0}function xh(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zc(n,e){const t=eo(n.i,n.x,n.y),i=eo(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hl(n,e,t,i){const s=eo(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ps(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yh(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class bh{static triangulate(e,t,i=2){return sh(e,t,i)}}class Nn{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Nn.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];fl(e),pl(i,e);let a=e.length;t.forEach(fl);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,pl(i,t[c]);const o=bh.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function fl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function pl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Eo extends un{constructor(e=new Ci([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Ut(s,3)),this.setAttribute("uv",new Ut(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Mh;let M,b=!1,U,D,N,F;d&&(M=d.getSpacedPoints(u),b=!0,p=!1,U=d.computeFrenetFrames(u,!1),D=new W,N=new W,F=new W),p||(f=0,m=0,g=0,x=0);const S=o.extractPoints(l);let w=S.shape;const k=S.holes;if(!Nn.isClockWise(w)){w=w.reverse();for(let H=0,$=k.length;H<$;H++){const q=k[H];Nn.isClockWise(q)&&(k[H]=q.reverse())}}function ee(H){const q=10000000000000001e-36;let K=H[0];for(let O=1;O<=H.length;O++){const R=O%H.length,oe=H[R],we=oe.x-K.x,ke=oe.y-K.y,I=we*we+ke*ke,y=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(K.x),Math.abs(K.y)),Y=q*y*y;if(I<=Y){H.splice(R,1),O--;continue}K=oe}}ee(w),k.forEach(ee);const te=k.length,ie=w;for(let H=0;H<te;H++){const $=k[H];w=w.concat($)}function Q(H,$,q){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector($,q)}const se=w.length;function P(H,$,q){let K,O,R;const oe=H.x-$.x,we=H.y-$.y,ke=q.x-H.x,I=q.y-H.y,y=oe*oe+we*we,Y=oe*I-we*ke;if(Math.abs(Y)>Number.EPSILON){const le=Math.sqrt(y),me=Math.sqrt(ke*ke+I*I),de=$.x-we/le,Pe=$.y+oe/le,be=q.x-I/me,Ie=q.y+ke/me,De=((be-de)*I-(Ie-Pe)*ke)/(oe*I-we*ke);K=de+oe*De-H.x,O=Pe+we*De-H.y;const _e=K*K+O*O;if(_e<=2)return new fe(K,O);R=Math.sqrt(_e/2)}else{let le=!1;oe>Number.EPSILON?ke>Number.EPSILON&&(le=!0):oe<-Number.EPSILON?ke<-Number.EPSILON&&(le=!0):Math.sign(we)===Math.sign(I)&&(le=!0),le?(K=-we,O=oe,R=Math.sqrt(y)):(K=oe,O=we,R=Math.sqrt(y/2))}return new fe(K/R,O/R)}const ne=[];for(let H=0,$=ie.length,q=$-1,K=H+1;H<$;H++,q++,K++)q===$&&(q=0),K===$&&(K=0),ne[H]=P(ie[H],ie[q],ie[K]);const he=[];let ge,Te=ne.concat();for(let H=0,$=te;H<$;H++){const q=k[H];ge=[];for(let K=0,O=q.length,R=O-1,oe=K+1;K<O;K++,R++,oe++)R===O&&(R=0),oe===O&&(oe=0),ge[K]=P(q[K],q[R],q[oe]);he.push(ge),Te=Te.concat(ge)}let Oe;if(f===0)Oe=Nn.triangulateShape(ie,k);else{const H=[],$=[];for(let q=0;q<f;q++){const K=q/f,O=m*Math.cos(K*Math.PI/2),R=g*Math.sin(K*Math.PI/2)+x;for(let oe=0,we=ie.length;oe<we;oe++){const ke=Q(ie[oe],ne[oe],R);Z(ke.x,ke.y,-O),K===0&&H.push(ke)}for(let oe=0,we=te;oe<we;oe++){const ke=k[oe];ge=he[oe];const I=[];for(let y=0,Y=ke.length;y<Y;y++){const le=Q(ke[y],ge[y],R);Z(le.x,le.y,-O),K===0&&I.push(le)}K===0&&$.push(I)}}Oe=Nn.triangulateShape(H,$)}const E=Oe.length,A=g+x;for(let H=0;H<se;H++){const $=p?Q(w[H],Te[H],A):w[H];b?(N.copy(U.normals[0]).multiplyScalar($.x),D.copy(U.binormals[0]).multiplyScalar($.y),F.copy(M[0]).add(N).add(D),Z(F.x,F.y,F.z)):Z($.x,$.y,0)}for(let H=1;H<=u;H++)for(let $=0;$<se;$++){const q=p?Q(w[$],Te[$],A):w[$];b?(N.copy(U.normals[H]).multiplyScalar(q.x),D.copy(U.binormals[H]).multiplyScalar(q.y),F.copy(M[H]).add(N).add(D),Z(F.x,F.y,F.z)):Z(q.x,q.y,h/u*H)}for(let H=f-1;H>=0;H--){const $=H/f,q=m*Math.cos($*Math.PI/2),K=g*Math.sin($*Math.PI/2)+x;for(let O=0,R=ie.length;O<R;O++){const oe=Q(ie[O],ne[O],K);Z(oe.x,oe.y,h+q)}for(let O=0,R=k.length;O<R;O++){const oe=k[O];ge=he[O];for(let we=0,ke=oe.length;we<ke;we++){const I=Q(oe[we],ge[we],K);b?Z(I.x,I.y+M[u-1].y,M[u-1].x+q):Z(I.x,I.y,h+q)}}}v(),_();function v(){const H=s.length/3;if(p){let $=0,q=se*$;for(let K=0;K<E;K++){const O=Oe[K];V(O[2]+q,O[1]+q,O[0]+q)}$=u+f*2,q=se*$;for(let K=0;K<E;K++){const O=Oe[K];V(O[0]+q,O[1]+q,O[2]+q)}}else{for(let $=0;$<E;$++){const q=Oe[$];V(q[2],q[1],q[0])}for(let $=0;$<E;$++){const q=Oe[$];V(q[0]+se*u,q[1]+se*u,q[2]+se*u)}}i.addGroup(H,s.length/3-H,0)}function _(){const H=s.length/3;let $=0;B(ie,$),$+=ie.length;for(let q=0,K=k.length;q<K;q++){const O=k[q];B(O,$),$+=O.length}i.addGroup(H,s.length/3-H,1)}function B(H,$){let q=H.length;for(;--q>=0;){const K=q;let O=q-1;O<0&&(O=H.length-1);for(let R=0,oe=u+f*2;R<oe;R++){const we=se*R,ke=se*(R+1),I=$+K+we,y=$+O+we,Y=$+O+ke,le=$+K+ke;ue(I,y,Y,le)}}}function Z(H,$,q){c.push(H),c.push($),c.push(q)}function V(H,$,q){ve(H),ve($),ve(q);const K=s.length/3,O=C.generateTopUV(i,s,K-3,K-2,K-1);L(O[0]),L(O[1]),L(O[2])}function ue(H,$,q,K){ve(H),ve($),ve(K),ve($),ve(q),ve(K);const O=s.length/3,R=C.generateSideWallUV(i,s,O-6,O-3,O-2,O-1);L(R[0]),L(R[1]),L(R[3]),L(R[1]),L(R[2]),L(R[3])}function ve(H){s.push(c[H*3+0]),s.push(c[H*3+1]),s.push(c[H*3+2])}function L(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Sh(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Za[s.type]().fromJSON(s)),new Eo(i,e.options)}}const Mh={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],p=e[s*3],m=e[s*3+1],g=e[s*3+2],x=e[r*3],f=e[r*3+1],d=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-h),new fe(p,1-g),new fe(x,1-d)]:[new fe(o,1-c),new fe(u,1-h),new fe(m,1-g),new fe(f,1-d)]}};function Sh(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ai extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,p=t/c,m=[],g=[],x=[],f=[];for(let d=0;d<u;d++){const C=d*p-a;for(let M=0;M<l;M++){const b=M*h-r;g.push(b,-C,0),x.push(0,0,1),f.push(M/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<o;C++){const M=C+l*d,b=C+l*(d+1),U=C+1+l*(d+1),D=C+1+l*d;m.push(M,b,D),m.push(b,U,D)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class wh extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eh extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hc extends Eh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Th extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ah extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ml={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Rh{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Ch=new Rh;class To{constructor(e){this.manager=e!==void 0?e:Ch,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}To.DEFAULT_MATERIAL_NAME="__DEFAULT";const _n={};class Lh extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends To{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ml.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:i,onError:s});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=_n[e],h=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let x=0;const f=new ReadableStream({start(d){C();function C(){h.read().then(({done:M,value:b})=>{if(M)d.close();else{x+=b.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let D=0,N=u.length;D<N;D++){const F=u[D];F.onProgress&&F.onProgress(U)}d.enqueue(b),C()}},M=>{d.error(M)})}}});return new Response(f)}else throw new Lh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{ml.add(`file:${e}`,l);const u=_n[e];delete _n[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=_n[e];if(u===void 0)throw this.manager.itemError(e),l;delete _n[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ih extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qr=new ct,gl=new W,vl=new W;class Dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),Qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ao extends Rc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uh extends Dh{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nh extends Ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fh extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Oh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const _l=new fe;class kh{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_l.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_l).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class qn{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ri,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,a){return this.currentPath.bezierCurveTo(e,t,i,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const C=[];for(let M=0,b=d.length;M<b;M++){const U=d[M],D=new Ci;D.curves=U.curves,C.push(D)}return C}function i(d,C){const M=C.length;let b=!1;for(let U=M-1,D=0;D<M;U=D++){let N=C[U],F=C[D],S=F.x-N.x,w=F.y-N.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(N=C[D],S=-S,F=C[U],w=-w),d.y<N.y||d.y>F.y)continue;if(d.y===N.y){if(d.x===N.x)return!0}else{const k=w*(d.x-N.x)-S*(d.y-N.y);if(k===0)return!0;if(k<0)continue;b=!b}}else{if(d.y!==N.y)continue;if(F.x<=d.x&&d.x<=N.x||N.x<=d.x&&d.x<=F.x)return!0}}return b}const s=Nn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new Ci,c.curves=o.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],p=[];let m=[],g=0,x;p[g]=void 0,m[g]=[];for(let d=0,C=r.length;d<C;d++)o=r[d],x=o.getPoints(),a=s(x),a=e?!a:a,a?(!u&&p[g]&&g++,p[g]={s:new Ci,p:x},p[g].s.curves=o.curves,u&&g++,m[g]=[]):m[g].push({h:o,p:x[0]});if(!p[0])return t(r);if(p.length>1){let d=!1,C=0;for(let M=0,b=p.length;M<b;M++)h[M]=[];for(let M=0,b=p.length;M<b;M++){const U=m[M];for(let D=0;D<U.length;D++){const N=U[D];let F=!0;for(let S=0;S<p.length;S++)i(N.p,p[S].p)&&(M!==S&&C++,F?(F=!1,h[S].push(N)):d=!0);F&&h[M].push(N)}}C>0&&d===!1&&(m=h)}let f;for(let d=0,C=p.length;d<C;d++){c=p[d].s,l.push(c),f=m[d];for(let M=0,b=f.length;M<b;M++)c.holes.push(f[M].h)}return l}}function xl(n,e,t,i){const s=Bh(i);switch(t){case mc:return n*e;case vc:return n*e/s.components*s.byteLength;case vo:return n*e/s.components*s.byteLength;case _c:return n*e*2/s.components*s.byteLength;case _o:return n*e*2/s.components*s.byteLength;case gc:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case xo:return n*e*4/s.components*s.byteLength;case js:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ta:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(n,8)*Math.max(e,8)/2;case Aa:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wa:case $a:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qa:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ya:case Ka:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bh(n){switch(n){case ln:case dc:return{byteLength:1,components:1};case os:case hc:case on:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case si:case po:case yn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zh(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<h.length;m++){const g=h[p],x=h[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,h[p]=x)}h.length=p+1;for(let m=0,g=h.length;m<g;m++){const x=h[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
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
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,zf=`struct PhysicalMaterial {
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
}`,Hf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
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
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,om=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,dm=`#define STANDARD
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
}`,hm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Hh,alphahash_pars_fragment:Vh,alphamap_fragment:Gh,alphamap_pars_fragment:Wh,alphatest_fragment:$h,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:jh,batching_pars_vertex:Yh,batching_vertex:Kh,begin_vertex:Jh,beginnormal_vertex:Zh,bsdfs:Qh,iridescence_fragment:ef,bumpmap_pars_fragment:tf,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:af,color_fragment:of,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:df,cube_uv_reflection_fragment:hf,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:vf,colorspace_fragment:_f,colorspace_pars_fragment:xf,envmap_fragment:yf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Uf,envmap_vertex:wf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:If,lights_pars_begin:Df,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:kf,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:Hf,lights_fragment_maps:Vf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:jf,map_pars_fragment:Yf,map_particle_fragment:Kf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:yp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:wp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Lp,specularmap_fragment:Pp,specularmap_pars_fragment:Ip,tonemapping_fragment:Dp,tonemapping_pars_fragment:Up,transmission_fragment:Np,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:kp,uv_vertex:Bp,worldpos_vertex:zp,background_vert:Hp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Wp,cube_vert:$p,cube_frag:Xp,depth_vert:qp,depth_frag:jp,distanceRGBA_vert:Yp,distanceRGBA_frag:Kp,equirect_vert:Jp,equirect_frag:Zp,linedashed_vert:Qp,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:hm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:vm,shadow_frag:_m,sprite_vert:xm,sprite_frag:ym},Ee={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},nn={basic:{uniforms:Et([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Et([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Et([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Et([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Et([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Et([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Et([Ee.points,Ee.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Et([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Et([Ee.common,Ee.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Et([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Et([Ee.sprite,Ee.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Et([Ee.common,Ee.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Et([Ee.lights,Ee.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};nn.physical={uniforms:Et([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Vs={r:0,b:0,g:0},jn=new cn,bm=new ct;function Mm(n,e,t,i,s,r,a){const o=new Xe(0);let c=r===!0?0:1,l,u,h=null,p=0,m=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function x(M){let b=!1;const U=g(M);U===null?d(o,c):U&&U.isColor&&(d(U,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(M,b){const U=g(b);U&&(U.isCubeTexture||U.mapping===hr)?(u===void 0&&(u=new It(new _s(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Ui(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),jn.copy(b.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(jn)),u.material.toneMapped=Ze.getTransfer(U.colorSpace)!==tt,(h!==U||p!==U.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=U,p=U.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new It(new ai(2,2),new yt({name:"BackgroundMaterial",uniforms:Ui(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(U.colorSpace)!==tt,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||p!==U.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=U,p=U.version,m=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,b){M.getRGB(Vs,Ac(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,b,a)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),c=b,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:x,addToRenderList:f,dispose:C}}function Sm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(w,k,z,ee,te){let ie=!1;const Q=h(ee,z,k);r!==Q&&(r=Q,l(r.object)),ie=m(w,ee,z,te),ie&&g(w,ee,z,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,b(w,k,z,ee),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,k,z){const ee=z.wireframe===!0;let te=i[w.id];te===void 0&&(te={},i[w.id]=te);let ie=te[k.id];ie===void 0&&(ie={},te[k.id]=ie);let Q=ie[ee];return Q===void 0&&(Q=p(c()),ie[ee]=Q),Q}function p(w){const k=[],z=[],ee=[];for(let te=0;te<t;te++)k[te]=0,z[te]=0,ee[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:ee,object:w,attributes:{},index:null}}function m(w,k,z,ee){const te=r.attributes,ie=k.attributes;let Q=0;const se=z.getAttributes();for(const P in se)if(se[P].location>=0){const he=te[P];let ge=ie[P];if(ge===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;Q++}return r.attributesNum!==Q||r.index!==ee}function g(w,k,z,ee){const te={},ie=k.attributes;let Q=0;const se=z.getAttributes();for(const P in se)if(se[P].location>=0){let he=ie[P];he===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(he=w.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),te[P]=ge,Q++}r.attributes=te,r.attributesNum=Q,r.index=ee}function x(){const w=r.newAttributes;for(let k=0,z=w.length;k<z;k++)w[k]=0}function f(w){d(w,0)}function d(w,k){const z=r.newAttributes,ee=r.enabledAttributes,te=r.attributeDivisors;z[w]=1,ee[w]===0&&(n.enableVertexAttribArray(w),ee[w]=1),te[w]!==k&&(n.vertexAttribDivisor(w,k),te[w]=k)}function C(){const w=r.newAttributes,k=r.enabledAttributes;for(let z=0,ee=k.length;z<ee;z++)k[z]!==w[z]&&(n.disableVertexAttribArray(z),k[z]=0)}function M(w,k,z,ee,te,ie,Q){Q===!0?n.vertexAttribIPointer(w,k,z,te,ie):n.vertexAttribPointer(w,k,z,ee,te,ie)}function b(w,k,z,ee){x();const te=ee.attributes,ie=z.getAttributes(),Q=k.defaultAttributeValues;for(const se in ie){const P=ie[se];if(P.location>=0){let ne=te[se];if(ne===void 0&&(se==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),se==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){const he=ne.normalized,ge=ne.itemSize,Te=e.get(ne);if(Te===void 0)continue;const Oe=Te.buffer,E=Te.type,A=Te.bytesPerElement,v=E===n.INT||E===n.UNSIGNED_INT||ne.gpuType===po;if(ne.isInterleavedBufferAttribute){const _=ne.data,B=_.stride,Z=ne.offset;if(_.isInstancedInterleavedBuffer){for(let V=0;V<P.locationSize;V++)d(P.location+V,_.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_.meshPerAttribute*_.count)}else for(let V=0;V<P.locationSize;V++)f(P.location+V);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let V=0;V<P.locationSize;V++)M(P.location+V,ge/P.locationSize,E,he,B*A,(Z+ge/P.locationSize*V)*A,v)}else{if(ne.isInstancedBufferAttribute){for(let _=0;_<P.locationSize;_++)d(P.location+_,ne.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _=0;_<P.locationSize;_++)f(P.location+_);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let _=0;_<P.locationSize;_++)M(P.location+_,ge/P.locationSize,E,he,ge*A,ge/P.locationSize*_*A,v)}}else if(Q!==void 0){const he=Q[se];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(P.location,he);break;case 3:n.vertexAttrib3fv(P.location,he);break;case 4:n.vertexAttrib4fv(P.location,he);break;default:n.vertexAttrib1fv(P.location,he)}}}}C()}function U(){F();for(const w in i){const k=i[w];for(const z in k){const ee=k[z];for(const te in ee)u(ee[te].object),delete ee[te];delete k[z]}delete i[w]}}function D(w){if(i[w.id]===void 0)return;const k=i[w.id];for(const z in k){const ee=k[z];for(const te in ee)u(ee[te].object),delete ee[te];delete k[z]}delete i[w.id]}function N(w){for(const k in i){const z=i[k];if(z[w.id]===void 0)continue;const ee=z[w.id];for(const te in ee)u(ee[te].object),delete ee[te];delete z[w.id]}}function F(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:f,disableUnusedAttributes:C}}function wm(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,i,1)}function c(l,u,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*p[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Em(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Jt&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const F=N===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ln&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==yn&&!F)}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:C,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:U,maxSamples:D}}function Tm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Dn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||s;return s=p,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const C=r?0:i,M=C*4;let b=d.clippingState||null;c.value=b,b=u(g,p,M,m);for(let U=0;U!==M;++U)b[U]=t[U];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,m,g){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=c.value,g!==!0||f===null){const d=m+x*4,C=p.matrixWorldInverse;o.getNormalMatrix(C),(f===null||f.length<d)&&(f=new Float32Array(d));for(let M=0,b=m;M!==x;++M,b+=4)a.copy(h[M]).applyMatrix4(C,o),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Am(n){let e=new WeakMap;function t(a,o){return o===ya?a.mapping=Pi:o===ba&&(a.mapping=Ii),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ya||o===ba)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Bd(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ei=4,yl=[.125,.215,.35,.446,.526,.582],ei=20,ea=new Ao,bl=new Xe;let ta=null,na=0,ia=0,sa=!1;const Zn=(1+Math.sqrt(5))/2,Mi=1/Zn,Ml=[new W(-Zn,Mi,0),new W(Zn,Mi,0),new W(-Mi,0,Zn),new W(Mi,0,Zn),new W(0,Zn,-Mi),new W(0,Zn,Mi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Rm=new W;class to{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Rm}=r;ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:on,format:Jt,colorSpace:Di,depthBuffer:!1},s=Sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Lm(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,i,s,r){const c=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(bl),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const x=new fr({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),f=new It(new _s,x);let d=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,d=!0):(x.color.copy(bl),d=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):b===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const U=this._cubeSize;Gs(s,b*U,M>2?U:0,U,U),h.setRenderTarget(s),d&&h.render(f,c),h.render(e,c)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=C}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Pi||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Gs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ea)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ml[(s-r-1)%Ml.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),x=r/g,f=isFinite(r)?1+Math.floor(u*x):ei;f>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);const d=[];let C=0;for(let N=0;N<ei;++N){const F=N/x,S=Math.exp(-F*F/2);d.push(S),N===0?C+=S:N<f&&(C+=2*S)}for(let N=0;N<d.length;N++)d[N]=d[N]/C;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-i;const b=this._sizeLods[s],U=3*b*(s>M-Ei?s-M+Ei:0),D=4*(this._cubeSize-b);Gs(t,U,D,3*b,2*b),c.setRenderTarget(t),c.render(h,ea)}}function Cm(n){const e=[],t=[],i=[];let s=n;const r=n-Ei+1+yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Ei?c=yl[a-n+Ei-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,f=2,d=1,C=new Float32Array(x*g*m),M=new Float32Array(f*g*m),b=new Float32Array(d*g*m);for(let D=0;D<m;D++){const N=D%3*2/3-1,F=D>2?0:-1,S=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];C.set(S,x*g*D),M.set(p,f*g*D);const w=[D,D,D,D,D,D];b.set(w,d*g*D)}const U=new un;U.setAttribute("position",new Qt(C,x)),U.setAttribute("uv",new Qt(M,f)),U.setAttribute("faceIndex",new Qt(b,d)),e.push(U),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sl(n,e,t){const i=new Xt(n,e,t);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Lm(n,e,t){const i=new Float32Array(ei),s=new W(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function wl(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function El(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Pm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ya||c===ba,u=c===Pi||c===Ii;if(l||u){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new to(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new to(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Im(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ds("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dm(n,e,t,i){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(h){const p=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const C=m.array;x=m.version;for(let M=0,b=C.length;M<b;M+=3){const U=C[M+0],D=C[M+1],N=C[M+2];p.push(U,D,D,N,N,U)}}else if(g!==void 0){const C=g.array;x=g.version;for(let M=0,b=C.length/3-1;M<b;M+=3){const U=M+0,D=M+1,N=M+2;p.push(U,D,D,N,N,U)}}else return;const f=new(bc(p)?Tc:Ec)(p,1);f.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,f)}function u(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Um(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){n.drawElements(i,m,r,p*a),t.update(m,i,1)}function l(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,p*a,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let f=0;for(let d=0;d<g;d++)f+=m[d];t.update(f,i,1)}function h(p,m,g,x){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)l(p[d]/a,m[d],x[d]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,g);let d=0;for(let C=0;C<g;C++)d+=m[C]*x[C];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Nm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,e,t){const i=new WeakMap,s=new lt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==h){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const D=new Float32Array(b*U*4*h),N=new Mc(D,b,U,h);N.type=yn,N.needsUpdate=!0;const F=M*4;for(let w=0;w<h;w++){const k=f[w],z=d[w],ee=C[w],te=b*U*4*w;for(let ie=0;ie<k.count;ie++){const Q=ie*F;m===!0&&(s.fromBufferAttribute(k,ie),D[te+Q+0]=s.x,D[te+Q+1]=s.y,D[te+Q+2]=s.z,D[te+Q+3]=0),g===!0&&(s.fromBufferAttribute(z,ie),D[te+Q+4]=s.x,D[te+Q+5]=s.y,D[te+Q+6]=s.z,D[te+Q+7]=0),x===!0&&(s.fromBufferAttribute(ee,ie),D[te+Q+8]=s.x,D[te+Q+9]=s.y,D[te+Q+10]=s.z,D[te+Q+11]=ee.itemSize===4?s.w:1)}}p={count:h,texture:N,size:new fe(b,U)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Om(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Gc=new Ct,Tl=new Pc(1,1),Wc=new Mc,$c=new Md,Xc=new Cc,Al=[],Rl=[],Cl=new Float32Array(16),Ll=new Float32Array(9),Pl=new Float32Array(4);function Vi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Al[s];if(r===void 0&&(r=new Float32Array(s),Al[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pr(n,e){let t=Rl[e];t===void 0&&(t=new Int32Array(e),Rl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Pl.set(i),n.uniformMatrix2fv(this.addr,!1,Pl),vt(t,i)}}function Gm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Ll.set(i),n.uniformMatrix3fv(this.addr,!1,Ll),vt(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Cl.set(i),n.uniformMatrix4fv(this.addr,!1,Cl),vt(t,i)}}function $m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function Ym(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Qm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tl.compareFunction=yc,r=Tl):r=Gc,t.setTexture2D(e||r,s)}function eg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$c,s)}function tg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xc,s)}function ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wc,s)}function ig(n){switch(n){case 5126:return km;case 35664:return Bm;case 35665:return zm;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return $m;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return jm;case 5125:return Ym;case 36294:return Km;case 36295:return Jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(n,e){n.uniform1fv(this.addr,e)}function rg(n,e){const t=Vi(e,this.size,2);n.uniform2fv(this.addr,t)}function ag(n,e){const t=Vi(e,this.size,3);n.uniform3fv(this.addr,t)}function og(n,e){const t=Vi(e,this.size,4);n.uniform4fv(this.addr,t)}function lg(n,e){const t=Vi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cg(n,e){const t=Vi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ug(n,e){const t=Vi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dg(n,e){n.uniform1iv(this.addr,e)}function hg(n,e){n.uniform2iv(this.addr,e)}function fg(n,e){n.uniform3iv(this.addr,e)}function pg(n,e){n.uniform4iv(this.addr,e)}function mg(n,e){n.uniform1uiv(this.addr,e)}function gg(n,e){n.uniform2uiv(this.addr,e)}function vg(n,e){n.uniform3uiv(this.addr,e)}function _g(n,e){n.uniform4uiv(this.addr,e)}function xg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gc,r[a])}function yg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$c,r[a])}function bg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xc,r[a])}function Mg(n,e,t){const i=this.cache,s=e.length,r=pr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wc,r[a])}function Sg(n){switch(n){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return hg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}class wg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}}class Eg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Il(n,e){n.seq.push(e),n.map[e.id]=e}function Ag(n,e,t){const i=n.name,s=i.length;for(ra.lastIndex=0;;){const r=ra.exec(i),a=ra.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Il(t,l===void 0?new wg(o,n,e):new Eg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Tg(o),Il(t,h)),t=h}}}class Zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ag(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Dl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rg=37297;let Cg=0;function Lg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ul=new $e;function Pg(n){Ze._getMatrix(Ul,Ze.workingColorSpace,n);const e=`mat3( ${Ul.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case tr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lg(n.getShaderSource(e),o)}else return r}function Ig(n,e){const t=Pg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dg(n,e){let t;switch(e){case sc:t="Linear";break;case rc:t="Reinhard";break;case ac:t="Cineon";break;case fo:t="ACESFilmic";break;case lc:t="AgX";break;case cc:t="Neutral";break;case oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new W;function Ug(){Ze.getLuminanceCoefficients(Ws);const n=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function Fg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Og(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ts(n){return n!==""}function Fl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(n){return n.replace(kg,zg)}const Bg=new Map;function zg(n,e){let t=Ye[e];if(t===void 0){const i=Bg.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return no(t)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(n){return n.replace(Hg,Vg)}function Vg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Gg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pi:case Ii:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $g(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Xg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ic:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function qg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Gg(t),l=Wg(t),u=$g(t),h=Xg(t),p=qg(t),m=Ng(t),g=Fg(r),x=s.createProgram();let f,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),d.length>0&&(d+=`
`)):(f=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),d=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ye.tonemapping_pars_fragment:"",t.toneMapping!==On?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ig("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=no(a),a=Fl(a,t),a=Ol(a,t),o=no(o),o=Fl(o,t),o=Ol(o,t),a=kl(a),o=kl(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=C+f+a,b=C+d+o,U=Dl(s,s.VERTEX_SHADER,M),D=Dl(s,s.FRAGMENT_SHADER,b);s.attachShader(x,U),s.attachShader(x,D),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(k){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(x)||"",ee=s.getShaderInfoLog(U)||"",te=s.getShaderInfoLog(D)||"",ie=z.trim(),Q=ee.trim(),se=te.trim();let P=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,U,D);else{const he=Nl(s,U,"vertex"),ge=Nl(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+he+`
`+ge)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Q===""||se==="")&&(ne=!1);ne&&(k.diagnostics={runnable:P,programLog:ie,vertexShader:{log:Q,prefix:f},fragmentShader:{log:se,prefix:d}})}s.deleteShader(U),s.deleteShader(D),F=new Zs(s,x),S=Og(s,x)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Rg)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=D,this}let Yg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jg(e),t.set(e,i)),i}}class Jg{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}}function Zg(n,e,t,i,s,r,a){const o=new Sc,c=new Kg,l=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function f(S,w,k,z,ee){const te=z.fog,ie=ee.geometry,Q=S.isMeshStandardMaterial?z.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||Q),P=se&&se.mapping===hr?se.image.height:null,ne=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const he=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ge=he!==void 0?he.length:0;let Te=0;ie.morphAttributes.position!==void 0&&(Te=1),ie.morphAttributes.normal!==void 0&&(Te=2),ie.morphAttributes.color!==void 0&&(Te=3);let Oe,E,A,v;if(ne){const et=nn[ne];Oe=et.vertexShader,E=et.fragmentShader}else Oe=S.vertexShader,E=S.fragmentShader,c.update(S),A=c.getVertexShaderID(S),v=c.getFragmentShaderID(S);const _=n.getRenderTarget(),B=n.state.buffers.depth.getReversed(),Z=ee.isInstancedMesh===!0,V=ee.isBatchedMesh===!0,ue=!!S.map,ve=!!S.matcap,L=!!se,H=!!S.aoMap,$=!!S.lightMap,q=!!S.bumpMap,K=!!S.normalMap,O=!!S.displacementMap,R=!!S.emissiveMap,oe=!!S.metalnessMap,we=!!S.roughnessMap,ke=S.anisotropy>0,I=S.clearcoat>0,y=S.dispersion>0,Y=S.iridescence>0,le=S.sheen>0,me=S.transmission>0,de=ke&&!!S.anisotropyMap,Pe=I&&!!S.clearcoatMap,be=I&&!!S.clearcoatNormalMap,Ie=I&&!!S.clearcoatRoughnessMap,De=Y&&!!S.iridescenceMap,_e=Y&&!!S.iridescenceThicknessMap,Ae=le&&!!S.sheenColorMap,Ge=le&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Re=!!S.specularColorMap,je=!!S.specularIntensityMap,X=me&&!!S.transmissionMap,Me=me&&!!S.thicknessMap,Se=!!S.gradientMap,Ue=!!S.alphaMap,xe=S.alphaTest>0,pe=!!S.alphaHash,Fe=!!S.extensions;let qe=On;S.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(qe=n.toneMapping);const rt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:E,defines:S.defines,customVertexShaderID:A,customFragmentShaderID:v,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:V,batchingColor:V&&ee._colorsTexture!==null,instancing:Z,instancingColor:Z&&ee.instanceColor!==null,instancingMorph:Z&&ee.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:_===null?n.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:ve,envMap:L,envMapMode:L&&se.mapping,envMapCubeUVHeight:P,aoMap:H,lightMap:$,bumpMap:q,normalMap:K,displacementMap:p&&O,emissiveMap:R,normalMapObjectSpace:K&&S.normalMapType===ad,normalMapTangentSpace:K&&S.normalMapType===xc,metalnessMap:oe,roughnessMap:we,anisotropy:ke,anisotropyMap:de,clearcoat:I,clearcoatMap:Pe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ie,dispersion:y,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:_e,sheen:le,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Re,specularIntensityMap:je,transmission:me,transmissionMap:X,thicknessMap:Me,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:pe,combine:S.combine,mapUv:ue&&x(S.map.channel),aoMapUv:H&&x(S.aoMap.channel),lightMapUv:$&&x(S.lightMap.channel),bumpMapUv:q&&x(S.bumpMap.channel),normalMapUv:K&&x(S.normalMap.channel),displacementMapUv:O&&x(S.displacementMap.channel),emissiveMapUv:R&&x(S.emissiveMap.channel),metalnessMapUv:oe&&x(S.metalnessMap.channel),roughnessMapUv:we&&x(S.roughnessMap.channel),anisotropyMapUv:de&&x(S.anisotropyMap.channel),clearcoatMapUv:Pe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&x(S.sheenRoughnessMap.channel),specularMapUv:Be&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:je&&x(S.specularIntensityMap.channel),transmissionMapUv:X&&x(S.transmissionMap.channel),thicknessMapUv:Me&&x(S.thicknessMap.channel),alphaMapUv:Ue&&x(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(K||ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ie.attributes.uv&&(ue||Ue),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:B,skinning:ee.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:R&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||V)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function d(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)w.push(k),w.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(C(w,S),M(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function C(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const w=g[S.type];let k;if(w){const z=nn[w];k=Ni.clone(z.uniforms)}else k=S.uniforms;return k}function U(S,w){let k;for(let z=0,ee=u.length;z<ee;z++){const te=u[z];if(te.cacheKey===w){k=te,++k.usedTimes;break}}return k===void 0&&(k=new jg(n,w,S,r),u.push(k)),k}function D(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function N(S){c.remove(S)}function F(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:b,acquireProgram:U,releaseProgram:D,releaseShaderCache:N,programs:u,dispose:F}}function Qg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,p,m,g,x,f){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:f},n[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=f),e++,d}function o(h,p,m,g,x,f){const d=a(h,p,m,g,x,f);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(h,p,m,g,x,f){const d=a(h,p,m,g,x,f);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,p){t.length>1&&t.sort(h||ev),i.length>1&&i.sort(p||zl),s.length>1&&s.sort(p||zl)}function u(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function tv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Hl,n.set(i,[a])):s>=r.length?(a=new Hl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Xe};break;case"SpotLight":t={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sv=0;function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function av(n){const e=new nv,t=iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const s=new W,r=new ct,a=new ct;function o(l){let u=0,h=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,x=0,f=0,d=0,C=0,M=0,b=0,U=0,D=0,N=0;l.sort(rv);for(let S=0,w=l.length;S<w;S++){const k=l[S],z=k.color,ee=k.intensity,te=k.distance,ie=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=z.r*ee,h+=z.g*ee,p+=z.b*ee;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(k.sh.coefficients[Q],ee);N++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const se=k.shadow,P=t.get(k);P.shadowIntensity=se.intensity,P.shadowBias=se.bias,P.shadowNormalBias=se.normalBias,P.shadowRadius=se.radius,P.shadowMapSize=se.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=k.shadow.matrix,C++}i.directional[m]=Q,m++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(z).multiplyScalar(ee),Q.distance=te,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,i.spot[x]=Q;const se=k.shadow;if(k.map&&(i.spotLightMap[U]=k.map,U++,se.updateMatrices(k),k.castShadow&&D++),i.spotLightMatrix[x]=se.matrix,k.castShadow){const P=t.get(k);P.shadowIntensity=se.intensity,P.shadowBias=se.bias,P.shadowNormalBias=se.normalBias,P.shadowRadius=se.radius,P.shadowMapSize=se.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=ie,b++}x++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(z).multiplyScalar(ee),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),i.rectArea[f]=Q,f++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const se=k.shadow,P=t.get(k);P.shadowIntensity=se.intensity,P.shadowBias=se.bias,P.shadowNormalBias=se.normalBias,P.shadowRadius=se.radius,P.shadowMapSize=se.mapSize,P.shadowCameraNear=se.camera.near,P.shadowCameraFar=se.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=k.shadow.matrix,M++}i.point[g]=Q,g++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(ee),Q.groundColor.copy(k.groundColor).multiplyScalar(ee),i.hemi[d]=Q,d++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==f||F.hemiLength!==d||F.numDirectionalShadows!==C||F.numPointShadows!==M||F.numSpotShadows!==b||F.numSpotMaps!==U||F.numLightProbes!==N)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=f,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=N,F.directionalLength=m,F.pointLength=g,F.spotLength=x,F.rectAreaLength=f,F.hemiLength=d,F.numDirectionalShadows=C,F.numPointShadows=M,F.numSpotShadows=b,F.numSpotMaps=U,F.numLightProbes=N,i.version=sv++)}function c(l,u){let h=0,p=0,m=0,g=0,x=0;const f=u.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const M=l[d];if(M.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(M.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),x++}}}return{setup:o,setupView:c,state:i}}function Vl(n){const e=new av(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ov(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Vl(n),e.set(s,[o])):r>=a.length?(o=new Vl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`;function uv(n,e,t){let i=new Mo;const s=new fe,r=new fe,a=new lt,o=new Th({depthPacking:rd}),c=new Ah,l={},u=t.maxTextureSize,h={[Bn]:Dt,[Dt]:Bn,[sn]:sn},p=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new It(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let d=this.type;this.render=function(D,N,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),z=n.state;z.setBlending(bn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const ee=d!==xn&&this.type===xn,te=d===xn&&this.type!==xn;for(let ie=0,Q=D.length;ie<Q;ie++){const se=D[ie],P=se.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const ne=P.getFrameExtents();if(s.multiply(ne),r.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,P.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,P.mapSize.y=r.y)),P.map===null||ee===!0||te===!0){const ge=this.type!==xn?{minFilter:Zt,magFilter:Zt}:{};P.map!==null&&P.map.dispose(),P.map=new Xt(s.x,s.y,ge),P.map.texture.name=se.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const he=P.getViewportCount();for(let ge=0;ge<he;ge++){const Te=P.getViewport(ge);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),z.viewport(a),P.updateMatrices(se,ge),i=P.getFrustum(),b(N,F,P.camera,se,this.type)}P.isPointLightShadow!==!0&&this.type===xn&&C(P,F),P.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(S,w,k)};function C(D,N){const F=e.update(x);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xt(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(N,null,F,p,x,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(N,null,F,m,x,null)}function M(D,N,F,S){let w=null;const k=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)w=k;else if(w=F.isPointLight===!0?c:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const z=w.uuid,ee=N.uuid;let te=l[z];te===void 0&&(te={},l[z]=te);let ie=te[ee];ie===void 0&&(ie=w.clone(),te[ee]=ie,N.addEventListener("dispose",U)),w=ie}if(w.visible=N.visible,w.wireframe=N.wireframe,S===xn?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:h[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=n.properties.get(w);z.light=F}return w}function b(D,N,F,S,w){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===xn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const ee=e.update(D),te=D.material;if(Array.isArray(te)){const ie=ee.groups;for(let Q=0,se=ie.length;Q<se;Q++){const P=ie[Q],ne=te[P.materialIndex];if(ne&&ne.visible){const he=M(D,ne,S,w);D.onBeforeShadow(n,D,N,F,ee,he,P),n.renderBufferDirect(F,null,ee,he,D,P),D.onAfterShadow(n,D,N,F,ee,he,P)}}}else if(te.visible){const ie=M(D,te,S,w);D.onBeforeShadow(n,D,N,F,ee,ie,null),n.renderBufferDirect(F,null,ee,ie,D,null),D.onAfterShadow(n,D,N,F,ee,ie,null)}}const z=D.children;for(let ee=0,te=z.length;ee<te;ee++)b(z[ee],N,F,S,w)}function U(D){D.target.removeEventListener("dispose",U);for(const F in l){const S=l[F],w=D.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const dv={[fa]:pa,[ma]:_a,[ga]:xa,[Li]:va,[pa]:fa,[_a]:ma,[xa]:ga,[va]:Li};function hv(n,e){function t(){let X=!1;const Me=new lt;let Se=null;const Ue=new lt(0,0,0,0);return{setMask:function(xe){Se!==xe&&!X&&(n.colorMask(xe,xe,xe,xe),Se=xe)},setLocked:function(xe){X=xe},setClear:function(xe,pe,Fe,qe,rt){rt===!0&&(xe*=qe,pe*=qe,Fe*=qe),Me.set(xe,pe,Fe,qe),Ue.equals(Me)===!1&&(n.clearColor(xe,pe,Fe,qe),Ue.copy(Me))},reset:function(){X=!1,Se=null,Ue.set(-1,0,0,0)}}}function i(){let X=!1,Me=!1,Se=null,Ue=null,xe=null;return{setReversed:function(pe){if(Me!==pe){const Fe=e.get("EXT_clip_control");pe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Me=pe;const qe=xe;xe=null,this.setClear(qe)}},getReversed:function(){return Me},setTest:function(pe){pe?_(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(pe){Se!==pe&&!X&&(n.depthMask(pe),Se=pe)},setFunc:function(pe){if(Me&&(pe=dv[pe]),Ue!==pe){switch(pe){case fa:n.depthFunc(n.NEVER);break;case pa:n.depthFunc(n.ALWAYS);break;case ma:n.depthFunc(n.LESS);break;case Li:n.depthFunc(n.LEQUAL);break;case ga:n.depthFunc(n.EQUAL);break;case va:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=pe}},setLocked:function(pe){X=pe},setClear:function(pe){xe!==pe&&(Me&&(pe=1-pe),n.clearDepth(pe),xe=pe)},reset:function(){X=!1,Se=null,Ue=null,xe=null,Me=!1}}}function s(){let X=!1,Me=null,Se=null,Ue=null,xe=null,pe=null,Fe=null,qe=null,rt=null;return{setTest:function(et){X||(et?_(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(et){Me!==et&&!X&&(n.stencilMask(et),Me=et)},setFunc:function(et,hn,tn){(Se!==et||Ue!==hn||xe!==tn)&&(n.stencilFunc(et,hn,tn),Se=et,Ue=hn,xe=tn)},setOp:function(et,hn,tn){(pe!==et||Fe!==hn||qe!==tn)&&(n.stencilOp(et,hn,tn),pe=et,Fe=hn,qe=tn)},setLocked:function(et){X=et},setClear:function(et){rt!==et&&(n.clearStencil(et),rt=et)},reset:function(){X=!1,Me=null,Se=null,Ue=null,xe=null,pe=null,Fe=null,qe=null,rt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,m=[],g=null,x=!1,f=null,d=null,C=null,M=null,b=null,U=null,D=null,N=new Xe(0,0,0),F=0,S=!1,w=null,k=null,z=null,ee=null,te=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,se=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(P)[1]),Q=se>=1):P.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),Q=se>=2);let ne=null,he={};const ge=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Oe=new lt().fromArray(ge),E=new lt().fromArray(Te);function A(X,Me,Se,Ue){const xe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(X,pe),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Se;Fe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Me+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return pe}const v={};v[n.TEXTURE_2D]=A(n.TEXTURE_2D,n.TEXTURE_2D,1),v[n.TEXTURE_CUBE_MAP]=A(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),v[n.TEXTURE_2D_ARRAY]=A(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),v[n.TEXTURE_3D]=A(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_(n.DEPTH_TEST),a.setFunc(Li),q(!1),K(Vo),_(n.CULL_FACE),H(bn);function _(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function B(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function Z(X,Me){return h[X]!==Me?(n.bindFramebuffer(X,Me),h[X]=Me,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Me),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function V(X,Me){let Se=m,Ue=!1;if(X){Se=p.get(Me),Se===void 0&&(Se=[],p.set(Me,Se));const xe=X.textures;if(Se.length!==xe.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Fe=xe.length;pe<Fe;pe++)Se[pe]=n.COLOR_ATTACHMENT0+pe;Se.length=xe.length,Ue=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Se)}function ue(X){return g!==X?(n.useProgram(X),g=X,!0):!1}const ve={[Qn]:n.FUNC_ADD,[ku]:n.FUNC_SUBTRACT,[Bu]:n.FUNC_REVERSE_SUBTRACT};ve[zu]=n.MIN,ve[Hu]=n.MAX;const L={[Vu]:n.ZERO,[Gu]:n.ONE,[Wu]:n.SRC_COLOR,[da]:n.SRC_ALPHA,[Ku]:n.SRC_ALPHA_SATURATE,[ju]:n.DST_COLOR,[Xu]:n.DST_ALPHA,[$u]:n.ONE_MINUS_SRC_COLOR,[ha]:n.ONE_MINUS_SRC_ALPHA,[Yu]:n.ONE_MINUS_DST_COLOR,[qu]:n.ONE_MINUS_DST_ALPHA,[Ju]:n.CONSTANT_COLOR,[Zu]:n.ONE_MINUS_CONSTANT_COLOR,[Qu]:n.CONSTANT_ALPHA,[ed]:n.ONE_MINUS_CONSTANT_ALPHA};function H(X,Me,Se,Ue,xe,pe,Fe,qe,rt,et){if(X===bn){x===!0&&(B(n.BLEND),x=!1);return}if(x===!1&&(_(n.BLEND),x=!0),X!==Ou){if(X!==f||et!==S){if((d!==Qn||b!==Qn)&&(n.blendEquation(n.FUNC_ADD),d=Qn,b=Qn),et)switch(X){case Ti:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFunc(n.ONE,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Go:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}C=null,M=null,U=null,D=null,N.set(0,0,0),F=0,f=X,S=et}return}xe=xe||Me,pe=pe||Se,Fe=Fe||Ue,(Me!==d||xe!==b)&&(n.blendEquationSeparate(ve[Me],ve[xe]),d=Me,b=xe),(Se!==C||Ue!==M||pe!==U||Fe!==D)&&(n.blendFuncSeparate(L[Se],L[Ue],L[pe],L[Fe]),C=Se,M=Ue,U=pe,D=Fe),(qe.equals(N)===!1||rt!==F)&&(n.blendColor(qe.r,qe.g,qe.b,rt),N.copy(qe),F=rt),f=X,S=!1}function $(X,Me){X.side===sn?B(n.CULL_FACE):_(n.CULL_FACE);let Se=X.side===Dt;Me&&(Se=!Se),q(Se),X.blending===Ti&&X.transparent===!1?H(bn):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);const Ue=X.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),R(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(X){w!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),w=X)}function K(X){X!==Uu?(_(n.CULL_FACE),X!==k&&(X===Vo?n.cullFace(n.BACK):X===Nu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),k=X}function O(X){X!==z&&(Q&&n.lineWidth(X),z=X)}function R(X,Me,Se){X?(_(n.POLYGON_OFFSET_FILL),(ee!==Me||te!==Se)&&(n.polygonOffset(Me,Se),ee=Me,te=Se)):B(n.POLYGON_OFFSET_FILL)}function oe(X){X?_(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function we(X){X===void 0&&(X=n.TEXTURE0+ie-1),ne!==X&&(n.activeTexture(X),ne=X)}function ke(X,Me,Se){Se===void 0&&(ne===null?Se=n.TEXTURE0+ie-1:Se=ne);let Ue=he[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},he[Se]=Ue),(Ue.type!==X||Ue.texture!==Me)&&(ne!==Se&&(n.activeTexture(Se),ne=Se),n.bindTexture(X,Me||v[X]),Ue.type=X,Ue.texture=Me)}function I(){const X=he[ne];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{n.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{n.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{n.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{n.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{n.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{n.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(X){Oe.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Oe.copy(X))}function Ge(X){E.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),E.copy(X))}function Be(X,Me){let Se=l.get(Me);Se===void 0&&(Se=new WeakMap,l.set(Me,Se));let Ue=Se.get(X);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,X.name),Se.set(X,Ue))}function Re(X,Me){const Ue=l.get(Me).get(X);c.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,X.__bindingPointIndex),c.set(Me,Ue))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,he={},h={},p=new WeakMap,m=[],g=null,x=!1,f=null,d=null,C=null,M=null,b=null,U=null,D=null,N=new Xe(0,0,0),F=0,S=!1,w=null,k=null,z=null,ee=null,te=null,Oe.set(0,0,n.canvas.width,n.canvas.height),E.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_,disable:B,bindFramebuffer:Z,drawBuffers:V,useProgram:ue,setBlending:H,setMaterial:$,setFlipSided:q,setCullFace:K,setLineWidth:O,setPolygonOffset:R,setScissorTest:oe,activeTexture:we,bindTexture:ke,unbindTexture:I,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:De,texImage3D:_e,updateUBOMapping:Be,uniformBlockBinding:Re,texStorage2D:be,texStorage3D:Ie,texSubImage2D:le,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:Pe,scissor:Ae,viewport:Ge,reset:je}}function fv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,y){return m?new OffscreenCanvas(I,y):ir("canvas")}function x(I,y,Y){let le=1;const me=ke(I);if((me.width>Y||me.height>Y)&&(le=Y/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(le*me.width),Pe=Math.floor(le*me.height);h===void 0&&(h=g(de,Pe));const be=y?g(de,Pe):h;return be.width=de,be.height=Pe,be.getContext("2d").drawImage(I,0,0,de,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+Pe+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function f(I){return I.generateMipmaps}function d(I){n.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(I,y,Y,le,me=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=y;if(y===n.RED&&(Y===n.FLOAT&&(de=n.R32F),Y===n.HALF_FLOAT&&(de=n.R16F),Y===n.UNSIGNED_BYTE&&(de=n.R8)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.R8UI),Y===n.UNSIGNED_SHORT&&(de=n.R16UI),Y===n.UNSIGNED_INT&&(de=n.R32UI),Y===n.BYTE&&(de=n.R8I),Y===n.SHORT&&(de=n.R16I),Y===n.INT&&(de=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(de=n.RG32F),Y===n.HALF_FLOAT&&(de=n.RG16F),Y===n.UNSIGNED_BYTE&&(de=n.RG8)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.RG8UI),Y===n.UNSIGNED_SHORT&&(de=n.RG16UI),Y===n.UNSIGNED_INT&&(de=n.RG32UI),Y===n.BYTE&&(de=n.RG8I),Y===n.SHORT&&(de=n.RG16I),Y===n.INT&&(de=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(de=n.RGB16UI),Y===n.UNSIGNED_INT&&(de=n.RGB32UI),Y===n.BYTE&&(de=n.RGB8I),Y===n.SHORT&&(de=n.RGB16I),Y===n.INT&&(de=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),Y===n.UNSIGNED_INT&&(de=n.RGBA32UI),Y===n.BYTE&&(de=n.RGBA8I),Y===n.SHORT&&(de=n.RGBA16I),Y===n.INT&&(de=n.RGBA32I)),y===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),y===n.RGBA){const Pe=me?tr:Ze.getTransfer(le);Y===n.FLOAT&&(de=n.RGBA32F),Y===n.HALF_FLOAT&&(de=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(de=Pe===tt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(I,y){let Y;return I?y===null||y===si||y===ls?Y=n.DEPTH24_STENCIL8:y===yn?Y=n.DEPTH32F_STENCIL8:y===os&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===si||y===ls?Y=n.DEPTH_COMPONENT24:y===yn?Y=n.DEPTH_COMPONENT32F:y===os&&(Y=n.DEPTH_COMPONENT16),Y}function U(I,y){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function D(I){const y=I.target;y.removeEventListener("dispose",D),F(y),y.isVideoTexture&&u.delete(y)}function N(I){const y=I.target;y.removeEventListener("dispose",N),w(y)}function F(I){const y=i.get(I);if(y.__webglInit===void 0)return;const Y=I.source,le=p.get(Y);if(le){const me=le[y.__cacheKey];me.usedTimes--,me.usedTimes===0&&S(I),Object.keys(le).length===0&&p.delete(Y)}i.remove(I)}function S(I){const y=i.get(I);n.deleteTexture(y.__webglTexture);const Y=I.source,le=p.get(Y);delete le[y.__cacheKey],a.memory.textures--}function w(I){const y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(y.__webglFramebuffer[le]))for(let me=0;me<y.__webglFramebuffer[le].length;me++)n.deleteFramebuffer(y.__webglFramebuffer[le][me]);else n.deleteFramebuffer(y.__webglFramebuffer[le]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[le])}else{if(Array.isArray(y.__webglFramebuffer))for(let le=0;le<y.__webglFramebuffer.length;le++)n.deleteFramebuffer(y.__webglFramebuffer[le]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let le=0;le<y.__webglColorRenderbuffer.length;le++)y.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[le]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Y=I.textures;for(let le=0,me=Y.length;le<me;le++){const de=i.get(Y[le]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(Y[le])}i.remove(I)}let k=0;function z(){k=0}function ee(){const I=k;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function te(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function ie(I,y){const Y=i.get(I);if(I.isVideoTexture&&oe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const le=I.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{v(Y,I,y);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function Q(I,y){const Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){v(Y,I,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function se(I,y){const Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){v(Y,I,y);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function P(I,y){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){_(Y,I,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}const ne={[Ma]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[er]:n.MIRRORED_REPEAT},he={[Zt]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[bs]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Er]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},ge={[od]:n.NEVER,[fd]:n.ALWAYS,[ld]:n.LESS,[yc]:n.LEQUAL,[cd]:n.EQUAL,[hd]:n.GEQUAL,[ud]:n.GREATER,[dd]:n.NOTEQUAL};function Te(I,y){if(y.type===yn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Er||y.magFilter===bs||y.magFilter===ni||y.minFilter===rn||y.minFilter===Er||y.minFilter===bs||y.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ne[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ne[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ne[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==bs&&y.minFilter!==ni||y.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(I,y){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",D));const le=y.source;let me=p.get(le);me===void 0&&(me={},p.set(le,me));const de=te(y);if(de!==I.__cacheKey){me[de]===void 0&&(me[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),me[de].usedTimes++;const Pe=me[I.__cacheKey];Pe!==void 0&&(me[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(y)),I.__cacheKey=de,I.__webglTexture=me[de].texture}return Y}function E(I,y,Y){return Math.floor(Math.floor(I/Y)/y)}function A(I,y,Y,le){const de=I.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Y,le,y.data);else{de.sort((_e,Ae)=>_e.start-Ae.start);let Pe=0;for(let _e=1;_e<de.length;_e++){const Ae=de[Pe],Ge=de[_e],Be=Ae.start+Ae.count,Re=E(Ge.start,y.width,4),je=E(Ae.start,y.width,4);Ge.start<=Be+1&&Re===je&&E(Ge.start+Ge.count-1,y.width,4)===Re?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Pe,de[Pe]=Ge)}de.length=Pe+1;const be=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let _e=0,Ae=de.length;_e<Ae;_e++){const Ge=de[_e],Be=Math.floor(Ge.start/4),Re=Math.ceil(Ge.count/4),je=Be%y.width,X=Math.floor(Be/y.width),Me=Re,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,je,X,Me,Se,Y,le,y.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function v(I,y,Y){let le=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(le=n.TEXTURE_3D);const me=Oe(I,y),de=y.source;t.bindTexture(le,I.__webglTexture,n.TEXTURE0+Y);const Pe=i.get(de);if(de.version!==Pe.__version||me===!0){t.activeTexture(n.TEXTURE0+Y);const be=Ze.getPrimaries(Ze.workingColorSpace),Ie=y.colorSpace===Un?null:Ze.getPrimaries(y.colorSpace),De=y.colorSpace===Un||be===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let _e=x(y.image,!1,s.maxTextureSize);_e=we(y,_e);const Ae=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type);let Be=M(y.internalFormat,Ae,Ge,y.colorSpace,y.isVideoTexture);Te(le,y);let Re;const je=y.mipmaps,X=y.isVideoTexture!==!0,Me=Pe.__version===void 0||me===!0,Se=de.dataReady,Ue=U(y,_e);if(y.isDepthTexture)Be=b(y.format===us,y.type),Me&&(X?t.texStorage2D(n.TEXTURE_2D,1,Be,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Be,_e.width,_e.height,0,Ae,Ge,null));else if(y.isDataTexture)if(je.length>0){X&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,je[0].width,je[0].height);for(let xe=0,pe=je.length;xe<pe;xe++)Re=je[xe],X?Se&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Re.width,Re.height,Ae,Ge,Re.data):t.texImage2D(n.TEXTURE_2D,xe,Be,Re.width,Re.height,0,Ae,Ge,Re.data);y.generateMipmaps=!1}else X?(Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,_e.width,_e.height),Se&&A(y,_e,Ae,Ge)):t.texImage2D(n.TEXTURE_2D,0,Be,_e.width,_e.height,0,Ae,Ge,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){X&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Be,je[0].width,je[0].height,_e.depth);for(let xe=0,pe=je.length;xe<pe;xe++)if(Re=je[xe],y.format!==Jt)if(Ae!==null)if(X){if(Se)if(y.layerUpdates.size>0){const Fe=xl(Re.width,Re.height,y.format,y.type);for(const qe of y.layerUpdates){const rt=Re.data.subarray(qe*Fe/Re.data.BYTES_PER_ELEMENT,(qe+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,qe,Re.width,Re.height,1,Ae,rt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,_e.depth,Ae,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Be,Re.width,Re.height,_e.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,_e.depth,Ae,Ge,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Be,Re.width,Re.height,_e.depth,0,Ae,Ge,Re.data)}else{X&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,je[0].width,je[0].height);for(let xe=0,pe=je.length;xe<pe;xe++)Re=je[xe],y.format!==Jt?Ae!==null?X?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Se&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Re.width,Re.height,Ae,Ge,Re.data):t.texImage2D(n.TEXTURE_2D,xe,Be,Re.width,Re.height,0,Ae,Ge,Re.data)}else if(y.isDataArrayTexture)if(X){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Be,_e.width,_e.height,_e.depth),Se)if(y.layerUpdates.size>0){const xe=xl(_e.width,_e.height,y.format,y.type);for(const pe of y.layerUpdates){const Fe=_e.data.subarray(pe*xe/_e.data.BYTES_PER_ELEMENT,(pe+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Ae,Ge,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ge,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,_e.width,_e.height,_e.depth,0,Ae,Ge,_e.data);else if(y.isData3DTexture)X?(Me&&t.texStorage3D(n.TEXTURE_3D,Ue,Be,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ge,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Be,_e.width,_e.height,_e.depth,0,Ae,Ge,_e.data);else if(y.isFramebufferTexture){if(Me)if(X)t.texStorage2D(n.TEXTURE_2D,Ue,Be,_e.width,_e.height);else{let xe=_e.width,pe=_e.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Be,xe,pe,0,Ae,Ge,null),xe>>=1,pe>>=1}}else if(je.length>0){if(X&&Me){const xe=ke(je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Be,xe.width,xe.height)}for(let xe=0,pe=je.length;xe<pe;xe++)Re=je[xe],X?Se&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae,Ge,Re):t.texImage2D(n.TEXTURE_2D,xe,Be,Ae,Ge,Re);y.generateMipmaps=!1}else if(X){if(Me){const xe=ke(_e);t.texStorage2D(n.TEXTURE_2D,Ue,Be,xe.width,xe.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ge,_e)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ae,Ge,_e);f(y)&&d(le),Pe.__version=de.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function _(I,y,Y){if(y.image.length!==6)return;const le=Oe(I,y),me=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);const de=i.get(me);if(me.version!==de.__version||le===!0){t.activeTexture(n.TEXTURE0+Y);const Pe=Ze.getPrimaries(Ze.workingColorSpace),be=y.colorSpace===Un?null:Ze.getPrimaries(y.colorSpace),Ie=y.colorSpace===Un||Pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const De=y.isCompressedTexture||y.image[0].isCompressedTexture,_e=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!De&&!_e?Ae[pe]=x(y.image[pe],!0,s.maxCubemapSize):Ae[pe]=_e?y.image[pe].image:y.image[pe],Ae[pe]=we(y,Ae[pe]);const Ge=Ae[0],Be=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),je=M(y.internalFormat,Be,Re,y.colorSpace),X=y.isVideoTexture!==!0,Me=de.__version===void 0||le===!0,Se=me.dataReady;let Ue=U(y,Ge);Te(n.TEXTURE_CUBE_MAP,y);let xe;if(De){X&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){xe=Ae[pe].mipmaps;for(let Fe=0;Fe<xe.length;Fe++){const qe=xe[Fe];y.format!==Jt?Be!==null?X?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,je,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,0,0,qe.width,qe.height,Be,Re,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,je,qe.width,qe.height,0,Be,Re,qe.data)}}}else{if(xe=y.mipmaps,X&&Me){xe.length>0&&Ue++;const pe=ke(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){X?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,Be,Re,Ae[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ae[pe].width,Ae[pe].height,0,Be,Re,Ae[pe].data);for(let Fe=0;Fe<xe.length;Fe++){const rt=xe[Fe].image[pe].image;X?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,0,0,rt.width,rt.height,Be,Re,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,je,rt.width,rt.height,0,Be,Re,rt.data)}}else{X?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be,Re,Ae[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Be,Re,Ae[pe]);for(let Fe=0;Fe<xe.length;Fe++){const qe=xe[Fe];X?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,0,0,Be,Re,qe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,je,Be,Re,qe.image[pe])}}}f(y)&&d(n.TEXTURE_CUBE_MAP),de.__version=me.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function B(I,y,Y,le,me,de){const Pe=r.convert(Y.format,Y.colorSpace),be=r.convert(Y.type),Ie=M(Y.internalFormat,Pe,be,Y.colorSpace),De=i.get(y),_e=i.get(Y);if(_e.__renderTarget=y,!De.__hasExternalTextures){const Ae=Math.max(1,y.width>>de),Ge=Math.max(1,y.height>>de);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,de,Ie,Ae,Ge,y.depth,0,Pe,be,null):t.texImage2D(me,de,Ie,Ae,Ge,0,Pe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),R(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,me,_e.__webglTexture,0,O(y)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,me,_e.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(I,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){const le=y.depthTexture,me=le&&le.isDepthTexture?le.type:null,de=b(y.stencilBuffer,me),Pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=O(y);R(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,de,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,de,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,de,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,I)}else{const le=y.textures;for(let me=0;me<le.length;me++){const de=le[me],Pe=r.convert(de.format,de.colorSpace),be=r.convert(de.type),Ie=M(de.internalFormat,Pe,be,de.colorSpace),De=O(y);Y&&R(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ie,y.width,y.height):R(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ie,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(I,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=i.get(y.depthTexture);le.__renderTarget=y,(!le.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ie(y.depthTexture,0);const me=le.__webglTexture,de=O(y);if(y.depthTexture.format===cs)R(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(y.depthTexture.format===us)R(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ue(I){const y=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),le){const me=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,le.removeEventListener("dispose",me)};le.addEventListener("dispose",me),y.__depthDisposeCallback=me}y.__boundDepthTexture=le}if(I.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const le=I.texture.mipmaps;le&&le.length>0?V(y.__webglFramebuffer[0],I):V(y.__webglFramebuffer,I)}else if(Y){y.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[le]),y.__webglDepthbuffer[le]===void 0)y.__webglDepthbuffer[le]=n.createRenderbuffer(),Z(y.__webglDepthbuffer[le],I,!1);else{const me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,de)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Z(y.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(I,y,Y){const le=i.get(I);y!==void 0&&B(le.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ue(I)}function L(I){const y=I.texture,Y=i.get(I),le=i.get(y);I.addEventListener("dispose",N);const me=I.textures,de=I.isWebGLCubeRenderTarget===!0,Pe=me.length>1;if(Pe||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=y.version,a.memory.textures++),de){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Ie=0;Ie<y.mipmaps.length;Ie++)Y.__webglFramebuffer[be][Ie]=n.createFramebuffer()}else Y.__webglFramebuffer[be]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<y.mipmaps.length;be++)Y.__webglFramebuffer[be]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let be=0,Ie=me.length;be<Ie;be++){const De=i.get(me[be]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&R(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let be=0;be<me.length;be++){const Ie=me[be];Y.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[be]);const De=r.convert(Ie.format,Ie.colorSpace),_e=r.convert(Ie.type),Ae=M(Ie.internalFormat,De,_e,Ie.colorSpace,I.isXRRenderTarget===!0),Ge=O(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ae,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Y.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),Te(n.TEXTURE_CUBE_MAP,y);for(let be=0;be<6;be++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)B(Y.__webglFramebuffer[be][Ie],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie);else B(Y.__webglFramebuffer[be],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);f(y)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let be=0,Ie=me.length;be<Ie;be++){const De=me[be],_e=i.get(De);let Ae=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,_e.__webglTexture),Te(Ae,De),B(Y.__webglFramebuffer,I,De,n.COLOR_ATTACHMENT0+be,Ae,0),f(De)&&d(Ae)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,le.__webglTexture),Te(be,y),y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)B(Y.__webglFramebuffer[Ie],I,y,n.COLOR_ATTACHMENT0,be,Ie);else B(Y.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,be,0);f(y)&&d(be),t.unbindTexture()}I.depthBuffer&&ue(I)}function H(I){const y=I.textures;for(let Y=0,le=y.length;Y<le;Y++){const me=y[Y];if(f(me)){const de=C(I),Pe=i.get(me).__webglTexture;t.bindTexture(de,Pe),d(de),t.unbindTexture()}}}const $=[],q=[];function K(I){if(I.samples>0){if(R(I)===!1){const y=I.textures,Y=I.width,le=I.height;let me=n.COLOR_BUFFER_BIT;const de=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(I),be=y.length>1;if(be)for(let De=0;De<y.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ie=I.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<y.length;De++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const _e=i.get(y[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,Y,le,0,0,Y,le,me,n.NEAREST),c===!0&&($.length=0,q.length=0,$.push(n.COLOR_ATTACHMENT0+De),I.depthBuffer&&I.resolveDepthBuffer===!1&&($.push(de),q.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let De=0;De<y.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const _e=i.get(y[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function O(I){return Math.min(s.maxSamples,I.samples)}function R(I){const y=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function oe(I){const y=a.render.frame;u.get(I)!==y&&(u.set(I,y),I.update())}function we(I,y){const Y=I.colorSpace,le=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Di&&Y!==Un&&(Ze.getTransfer(Y)===tt?(le!==Jt||me!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=P,this.rebindTextures=ve,this.setupRenderTarget=L,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=B,this.useMultisampledRTT=R}function pv(n,e){function t(i,s=Un){let r;const a=Ze.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===mo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dc)return n.BYTE;if(i===hc)return n.SHORT;if(i===os)return n.UNSIGNED_SHORT;if(i===po)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===on)return n.HALF_FLOAT;if(i===mc)return n.ALPHA;if(i===gc)return n.RGB;if(i===Jt)return n.RGBA;if(i===cs)return n.DEPTH_COMPONENT;if(i===us)return n.DEPTH_STENCIL;if(i===vc)return n.RED;if(i===vo)return n.RED_INTEGER;if(i===_c)return n.RG;if(i===_o)return n.RG_INTEGER;if(i===xo)return n.RGBA_INTEGER;if(i===js||i===Ys||i===Ks||i===Js)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===wa||i===Ea||i===Ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Aa||i===Ra||i===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Aa||i===Ra)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ca)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===La||i===Pa||i===Ia||i===Da||i===Ua||i===Na||i===Fa||i===Oa||i===ka||i===Ba||i===za||i===Ha||i===Va||i===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===La)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Va)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ga)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===$a||i===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wa)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qa||i===ja||i===Ya||i===Ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`;class vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ic(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yt({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends zi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,m=null,g=null;const x=typeof XRWebGLBinding<"u",f=new vv,d={},C=t.getContextAttributes();let M=null,b=null;const U=[],D=[],N=new fe;let F=null;const S=new Bt;S.viewport=new lt;const w=new Bt;w.viewport=new lt;const k=[S,w],z=new Fh;let ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(v){let _=U[v];return _===void 0&&(_=new jr,U[v]=_),_.getTargetRaySpace()},this.getControllerGrip=function(v){let _=U[v];return _===void 0&&(_=new jr,U[v]=_),_.getGripSpace()},this.getHand=function(v){let _=U[v];return _===void 0&&(_=new jr,U[v]=_),_.getHandSpace()};function ie(v){const _=D.indexOf(v.inputSource);if(_===-1)return;const B=U[_];B!==void 0&&(B.update(v.inputSource,v.frame,l||a),B.dispatchEvent({type:v.type,data:v.inputSource}))}function Q(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",se);for(let v=0;v<U.length;v++){const _=D[v];_!==null&&(D[v]=null,U[v].disconnect(_))}ee=null,te=null,f.reset();for(const v in d)delete d[v];e.setRenderTarget(M),m=null,p=null,h=null,s=null,b=null,A.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(v){r=v,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(v){o=v,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(v){l=v},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(v){if(s=v,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",se),C.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,Z=null,V=null;C.depth&&(V=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=C.stencil?us:cs,Z=C.stencil?ls:si);const ue={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(ue),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Xt(p.textureWidth,p.textureHeight,{format:Jt,type:ln,depthTexture:new Pc(p.textureWidth,p.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const B={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,B),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Xt(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),A.setContext(s),A.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function se(v){for(let _=0;_<v.removed.length;_++){const B=v.removed[_],Z=D.indexOf(B);Z>=0&&(D[Z]=null,U[Z].disconnect(B))}for(let _=0;_<v.added.length;_++){const B=v.added[_];let Z=D.indexOf(B);if(Z===-1){for(let ue=0;ue<U.length;ue++)if(ue>=D.length){D.push(B),Z=ue;break}else if(D[ue]===null){D[ue]=B,Z=ue;break}if(Z===-1)break}const V=U[Z];V&&V.connect(B)}}const P=new W,ne=new W;function he(v,_,B){P.setFromMatrixPosition(_.matrixWorld),ne.setFromMatrixPosition(B.matrixWorld);const Z=P.distanceTo(ne),V=_.projectionMatrix.elements,ue=B.projectionMatrix.elements,ve=V[14]/(V[10]-1),L=V[14]/(V[10]+1),H=(V[9]+1)/V[5],$=(V[9]-1)/V[5],q=(V[8]-1)/V[0],K=(ue[8]+1)/ue[0],O=ve*q,R=ve*K,oe=Z/(-q+K),we=oe*-q;if(_.matrixWorld.decompose(v.position,v.quaternion,v.scale),v.translateX(we),v.translateZ(oe),v.matrixWorld.compose(v.position,v.quaternion,v.scale),v.matrixWorldInverse.copy(v.matrixWorld).invert(),V[10]===-1)v.projectionMatrix.copy(_.projectionMatrix),v.projectionMatrixInverse.copy(_.projectionMatrixInverse);else{const ke=ve+oe,I=L+oe,y=O-we,Y=R+(Z-we),le=H*L/I*ke,me=$*L/I*ke;v.projectionMatrix.makePerspective(y,Y,le,me,ke,I),v.projectionMatrixInverse.copy(v.projectionMatrix).invert()}}function ge(v,_){_===null?v.matrixWorld.copy(v.matrix):v.matrixWorld.multiplyMatrices(_.matrixWorld,v.matrix),v.matrixWorldInverse.copy(v.matrixWorld).invert()}this.updateCamera=function(v){if(s===null)return;let _=v.near,B=v.far;f.texture!==null&&(f.depthNear>0&&(_=f.depthNear),f.depthFar>0&&(B=f.depthFar)),z.near=w.near=S.near=_,z.far=w.far=S.far=B,(ee!==z.near||te!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),ee=z.near,te=z.far),z.layers.mask=v.layers.mask|6,S.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;const Z=v.parent,V=z.cameras;ge(z,Z);for(let ue=0;ue<V.length;ue++)ge(V[ue],Z);V.length===2?he(z,S,w):z.projectionMatrix.copy(S.projectionMatrix),Te(v,z,Z)};function Te(v,_,B){B===null?v.matrix.copy(_.matrixWorld):(v.matrix.copy(B.matrixWorld),v.matrix.invert(),v.matrix.multiply(_.matrixWorld)),v.matrix.decompose(v.position,v.quaternion,v.scale),v.updateMatrixWorld(!0),v.projectionMatrix.copy(_.projectionMatrix),v.projectionMatrixInverse.copy(_.projectionMatrixInverse),v.isPerspectiveCamera&&(v.fov=Ja*2*Math.atan(1/v.projectionMatrix.elements[5]),v.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(v){c=v,p!==null&&(p.fixedFoveation=v),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=v)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(z)},this.getCameraTexture=function(v){return d[v]};let Oe=null;function E(v,_){if(u=_.getViewerPose(l||a),g=_,u!==null){const B=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Z=!1;B.length!==z.cameras.length&&(z.cameras.length=0,Z=!0);for(let L=0;L<B.length;L++){const H=B[L];let $=null;if(m!==null)$=m.getViewport(H);else{const K=h.getViewSubImage(p,H);$=K.viewport,L===0&&(e.setRenderTargetTextures(b,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(b))}let q=k[L];q===void 0&&(q=new Bt,q.layers.enable(L),q.viewport=new lt,k[L]=q),q.matrix.fromArray(H.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(H.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set($.x,$.y,$.width,$.height),L===0&&(z.matrix.copy(q.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Z===!0&&z.cameras.push(q)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const L=h.getDepthInformation(B[0]);L&&L.isValid&&L.texture&&f.init(L,s.renderState)}if(V&&V.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let L=0;L<B.length;L++){const H=B[L].camera;if(H){let $=d[H];$||($=new Ic,d[H]=$);const q=h.getCameraImage(H);$.sourceTexture=q}}}}for(let B=0;B<U.length;B++){const Z=D[B],V=U[B];Z!==null&&V!==void 0&&V.update(Z,_,l||a)}Oe&&Oe(v,_),_.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_}),g=null}const A=new Vc;A.setAnimationLoop(E),this.setAnimationLoop=function(v){Oe=v},this.dispose=function(){}}}const Yn=new cn,xv=new ct;function yv(n,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Ac(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,C,M,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),h(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,b)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),x(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,C,M):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Dt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Dt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const C=e.get(d),M=C.envMap,b=C.envMapRotation;M&&(f.envMap.value=M,Yn.copy(b),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),f.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Yn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,C,M){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*C,f.scale.value=M*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,C){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function x(f,d){const C=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,M){const b=M.program;i.uniformBlockBinding(C,b)}function l(C,M){let b=s[C.id];b===void 0&&(g(C),b=u(C),s[C.id]=b,C.addEventListener("dispose",f));const U=M.program;i.updateUBOMapping(C,U);const D=e.render.frame;r[C.id]!==D&&(p(C),r[C.id]=D)}function u(C){const M=h();C.__bindingPointIndex=M;const b=n.createBuffer(),U=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function h(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const M=s[C.id],b=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let D=0,N=b.length;D<N;D++){const F=Array.isArray(b[D])?b[D]:[b[D]];for(let S=0,w=F.length;S<w;S++){const k=F[S];if(m(k,D,S,U)===!0){const z=k.__offset,ee=Array.isArray(k.value)?k.value:[k.value];let te=0;for(let ie=0;ie<ee.length;ie++){const Q=ee[ie],se=x(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,z+te,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):(Q.toArray(k.__data,te),te+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,M,b,U){const D=C.value,N=M+"_"+b;if(U[N]===void 0)return typeof D=="number"||typeof D=="boolean"?U[N]=D:U[N]=D.clone(),!0;{const F=U[N];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return U[N]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function g(C){const M=C.uniforms;let b=0;const U=16;for(let N=0,F=M.length;N<F;N++){const S=Array.isArray(M[N])?M[N]:[M[N]];for(let w=0,k=S.length;w<k;w++){const z=S[w],ee=Array.isArray(z.value)?z.value:[z.value];for(let te=0,ie=ee.length;te<ie;te++){const Q=ee[te],se=x(Q),P=b%U,ne=P%se.boundary,he=P+ne;b+=ne,he!==0&&U-he<se.storage&&(b+=U-he),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=se.storage}}}const D=b%U;return D>0&&(b+=U-D),C.__size=b,C.__cache={},this}function x(C){const M={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function f(C){const M=C.target;M.removeEventListener("dispose",f);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const C in s)n.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Mv{constructor(e={}){const{canvas:t=md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let f=null,d=null;const C=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let U=!1;this._outputColorSpace=Tt;let D=0,N=0,F=null,S=-1,w=null;const k=new lt,z=new lt;let ee=null;const te=new Xe(0);let ie=0,Q=t.width,se=t.height,P=1,ne=null,he=null;const ge=new lt(0,0,Q,se),Te=new lt(0,0,Q,se);let Oe=!1;const E=new Mo;let A=!1,v=!1;const _=new ct,B=new W,Z=new lt,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ve(){return F===null?P:1}let L=i;function H(T,j){return t.getContext(T,j)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",xe,!1),L===null){const j="webgl2";if(L=H(j,T),L===null)throw H(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,q,K,O,R,oe,we,ke,I,y,Y,le,me,de,Pe,be,Ie,De,_e,Ae,Ge,Be,Re,je;function X(){$=new Im(L),$.init(),Be=new pv(L,$),q=new Em(L,$,e,Be),K=new hv(L,$),q.reversedDepthBuffer&&p&&K.buffers.depth.setReversed(!0),O=new Nm(L),R=new Qg,oe=new fv(L,$,K,R,q,Be,O),we=new Am(b),ke=new Pm(b),I=new zh(L),Re=new Sm(L,I),y=new Dm(L,I,O,Re),Y=new Om(L,y,I,O),_e=new Fm(L,q,oe),be=new Tm(R),le=new Zg(b,we,ke,$,q,Re,be),me=new yv(b,R),de=new tv,Pe=new ov($),De=new Mm(b,we,ke,K,Y,m,c),Ie=new uv(b,Y,q),je=new bv(L,O,q,K),Ae=new wm(L,$,O),Ge=new Um(L,$,O),O.programs=le.programs,b.capabilities=q,b.extensions=$,b.properties=R,b.renderLists=de,b.shadowMap=Ie,b.state=K,b.info=O}X();const Me=new _v(b,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(Q,se,!1))},this.getSize=function(T){return T.set(Q,se)},this.setSize=function(T,j,re=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,se=j,t.width=Math.floor(T*P),t.height=Math.floor(j*P),re===!0&&(t.style.width=T+"px",t.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(Q*P,se*P).floor()},this.setDrawingBufferSize=function(T,j,re){Q=T,se=j,P=re,t.width=Math.floor(T*re),t.height=Math.floor(j*re),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,j,re,ae){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,j,re,ae),K.viewport(k.copy(ge).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,j,re,ae){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,j,re,ae),K.scissor(z.copy(Te).multiplyScalar(P).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){K.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,re=!0){let ae=0;if(T){let J=!1;if(F!==null){const ye=F.texture.format;J=ye===xo||ye===_o||ye===vo}if(J){const ye=F.texture.type,Ce=ye===ln||ye===si||ye===os||ye===ls||ye===mo||ye===go,Ne=De.getClearColor(),Le=De.getClearAlpha(),Ve=Ne.r,We=Ne.g,ze=Ne.b;Ce?(g[0]=Ve,g[1]=We,g[2]=ze,g[3]=Le,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ve,x[1]=We,x[2]=ze,x[3]=Le,L.clearBufferiv(L.COLOR,0,x))}else ae|=L.COLOR_BUFFER_BIT}j&&(ae|=L.DEPTH_BUFFER_BIT),re&&(ae|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),De.dispose(),de.dispose(),Pe.dispose(),R.dispose(),we.dispose(),ke.dispose(),Y.dispose(),Re.dispose(),je.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",tn),Me.removeEventListener("sessionend",Fo),Hn.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=O.autoReset,j=Ie.enabled,re=Ie.autoUpdate,ae=Ie.needsUpdate,J=Ie.type;X(),O.autoReset=T,Ie.enabled=j,Ie.autoUpdate=re,Ie.needsUpdate=ae,Ie.type=J}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const j=T.target;j.removeEventListener("dispose",pe),Fe(j)}function Fe(T){qe(T),R.remove(T)}function qe(T){const j=R.get(T).programs;j!==void 0&&(j.forEach(function(re){le.releaseProgram(re)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,re,ae,J,ye){j===null&&(j=V);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Ne=Ru(T,j,re,ae,J);K.setMaterial(ae,Ce);let Le=re.index,Ve=1;if(ae.wireframe===!0){if(Le=y.getWireframeAttribute(re),Le===void 0)return;Ve=2}const We=re.drawRange,ze=re.attributes.position;let Je=We.start*Ve,nt=(We.start+We.count)*Ve;ye!==null&&(Je=Math.max(Je,ye.start*Ve),nt=Math.min(nt,(ye.start+ye.count)*Ve)),Le!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Le.count)):ze!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,ze.count));const ft=nt-Je;if(ft<0||ft===1/0)return;Re.setup(J,ae,Ne,re,Le);let at,st=Ae;if(Le!==null&&(at=I.get(Le),st=Ge,st.setIndex(at)),J.isMesh)ae.wireframe===!0?(K.setLineWidth(ae.wireframeLinewidth*ve()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(J.isLine){let He=ae.linewidth;He===void 0&&(He=1),K.setLineWidth(He*ve()),J.isLineSegments?st.setMode(L.LINES):J.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else J.isPoints?st.setMode(L.POINTS):J.isSprite&&st.setMode(L.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if($.get("WEBGL_multi_draw"))st.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const He=J._multiDrawStarts,ut=J._multiDrawCounts,Qe=J._multiDrawCount,Nt=Le?I.get(Le).bytesPerElement:1,li=R.get(ae).currentProgram.getUniforms();for(let Ft=0;Ft<Qe;Ft++)li.setValue(L,"_gl_DrawID",Ft),st.render(He[Ft]/Nt,ut[Ft])}else if(J.isInstancedMesh)st.renderInstances(Je,ft,J.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ut=Math.min(re.instanceCount,He);st.renderInstances(Je,ft,ut)}else st.render(Je,ft)};function rt(T,j,re){T.transparent===!0&&T.side===sn&&T.forceSinglePass===!1?(T.side=Dt,T.needsUpdate=!0,ys(T,j,re),T.side=Bn,T.needsUpdate=!0,ys(T,j,re),T.side=sn):ys(T,j,re)}this.compile=function(T,j,re=null){re===null&&(re=T),d=Pe.get(re),d.init(j),M.push(d),re.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),T!==re&&T.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights();const ae=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const ye=J.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Ne=ye[Ce];rt(Ne,re,J),ae.add(Ne)}else rt(ye,re,J),ae.add(ye)}),d=M.pop(),ae},this.compileAsync=function(T,j,re=null){const ae=this.compile(T,j,re);return new Promise(J=>{function ye(){if(ae.forEach(function(Ce){R.get(Ce).currentProgram.isReady()&&ae.delete(Ce)}),ae.size===0){J(T);return}setTimeout(ye,10)}$.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let et=null;function hn(T){et&&et(T)}function tn(){Hn.stop()}function Fo(){Hn.start()}const Hn=new Vc;Hn.setAnimationLoop(hn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(T){et=T,Me.setAnimationLoop(T),T===null?Hn.stop():Hn.start()},Me.addEventListener("sessionstart",tn),Me.addEventListener("sessionend",Fo),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(j),j=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,j,F),d=Pe.get(T,M.length),d.init(j),M.push(d),_.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),E.setFromProjectionMatrix(_,an,j.reversedDepth),v=this.localClippingEnabled,A=be.init(this.clippingPlanes,v),f=de.get(T,C.length),f.init(),C.push(f),Me.enabled===!0&&Me.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&Sr(ye,j,-1/0,b.sortObjects)}Sr(T,j,0,b.sortObjects),f.finish(),b.sortObjects===!0&&f.sort(ne,he),ue=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ue&&De.addToRenderList(f,T),this.info.render.frame++,A===!0&&be.beginShadows();const re=d.state.shadowsArray;Ie.render(re,T,j),A===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=f.opaque,J=f.transmissive;if(d.setupLights(),j.isArrayCamera){const ye=j.cameras;if(J.length>0)for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++){const Le=ye[Ce];ko(ae,J,T,Le)}ue&&De.render(T);for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++){const Le=ye[Ce];Oo(f,T,Le,Le.viewport)}}else J.length>0&&ko(ae,J,T,j),ue&&De.render(T),Oo(f,T,j);F!==null&&N===0&&(oe.updateMultisampleRenderTarget(F),oe.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(b,T,j),Re.resetDefaultState(),S=-1,w=null,M.pop(),M.length>0?(d=M[M.length-1],A===!0&&be.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?f=C[C.length-1]:f=null};function Sr(T,j,re,ae){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)re=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||E.intersectsSprite(T)){ae&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_);const Ce=Y.update(T),Ne=T.material;Ne.visible&&f.push(T,Ce,Ne,re,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||E.intersectsObject(T))){const Ce=Y.update(T),Ne=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Z.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Z.copy(Ce.boundingSphere.center)),Z.applyMatrix4(T.matrixWorld).applyMatrix4(_)),Array.isArray(Ne)){const Le=Ce.groups;for(let Ve=0,We=Le.length;Ve<We;Ve++){const ze=Le[Ve],Je=Ne[ze.materialIndex];Je&&Je.visible&&f.push(T,Ce,Je,re,Z.z,ze)}}else Ne.visible&&f.push(T,Ce,Ne,re,Z.z,null)}}const ye=T.children;for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++)Sr(ye[Ce],j,re,ae)}function Oo(T,j,re,ae){const J=T.opaque,ye=T.transmissive,Ce=T.transparent;d.setupLightsView(re),A===!0&&be.setGlobalState(b.clippingPlanes,re),ae&&K.viewport(k.copy(ae)),J.length>0&&xs(J,j,re),ye.length>0&&xs(ye,j,re),Ce.length>0&&xs(Ce,j,re),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function ko(T,j,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ae.id]===void 0&&(d.state.transmissionRenderTarget[ae.id]=new Xt(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?on:ln,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ye=d.state.transmissionRenderTarget[ae.id],Ce=ae.viewport||k;ye.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const Ne=b.getRenderTarget(),Le=b.getActiveCubeFace(),Ve=b.getActiveMipmapLevel();b.setRenderTarget(ye),b.getClearColor(te),ie=b.getClearAlpha(),ie<1&&b.setClearColor(16777215,.5),b.clear(),ue&&De.render(re);const We=b.toneMapping;b.toneMapping=On;const ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),d.setupLightsView(ae),A===!0&&be.setGlobalState(b.clippingPlanes,ae),xs(T,re,ae),oe.updateMultisampleRenderTarget(ye),oe.updateRenderTargetMipmap(ye),$.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let nt=0,ft=j.length;nt<ft;nt++){const at=j[nt],st=at.object,He=at.geometry,ut=at.material,Qe=at.group;if(ut.side===sn&&st.layers.test(ae.layers)){const Nt=ut.side;ut.side=Dt,ut.needsUpdate=!0,Bo(st,re,ae,He,ut,Qe),ut.side=Nt,ut.needsUpdate=!0,Je=!0}}Je===!0&&(oe.updateMultisampleRenderTarget(ye),oe.updateRenderTargetMipmap(ye))}b.setRenderTarget(Ne,Le,Ve),b.setClearColor(te,ie),ze!==void 0&&(ae.viewport=ze),b.toneMapping=We}function xs(T,j,re){const ae=j.isScene===!0?j.overrideMaterial:null;for(let J=0,ye=T.length;J<ye;J++){const Ce=T[J],Ne=Ce.object,Le=Ce.geometry,Ve=Ce.group;let We=Ce.material;We.allowOverride===!0&&ae!==null&&(We=ae),Ne.layers.test(re.layers)&&Bo(Ne,j,re,Le,We,Ve)}}function Bo(T,j,re,ae,J,ye){T.onBeforeRender(b,j,re,ae,J,ye),T.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(b,j,re,ae,T,ye),J.transparent===!0&&J.side===sn&&J.forceSinglePass===!1?(J.side=Dt,J.needsUpdate=!0,b.renderBufferDirect(re,j,ae,J,T,ye),J.side=Bn,J.needsUpdate=!0,b.renderBufferDirect(re,j,ae,J,T,ye),J.side=sn):b.renderBufferDirect(re,j,ae,J,T,ye),T.onAfterRender(b,j,re,ae,J,ye)}function ys(T,j,re){j.isScene!==!0&&(j=V);const ae=R.get(T),J=d.state.lights,ye=d.state.shadowsArray,Ce=J.state.version,Ne=le.getParameters(T,J.state,ye,j,re),Le=le.getProgramCacheKey(Ne);let Ve=ae.programs;ae.environment=T.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(T.isMeshStandardMaterial?ke:we).get(T.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",pe),Ve=new Map,ae.programs=Ve);let We=Ve.get(Le);if(We!==void 0){if(ae.currentProgram===We&&ae.lightsStateVersion===Ce)return Ho(T,Ne),We}else Ne.uniforms=le.getUniforms(T),T.onBeforeCompile(Ne,b),We=le.acquireProgram(Ne,Le),Ve.set(Le,We),ae.uniforms=Ne.uniforms;const ze=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=be.uniform),Ho(T,Ne),ae.needsLights=Lu(T),ae.lightsStateVersion=Ce,ae.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=We,ae.uniformsList=null,We}function zo(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=Zs.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Ho(T,j){const re=R.get(T);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function Ru(T,j,re,ae,J){j.isScene!==!0&&(j=V),oe.resetTextureUnits();const ye=j.fog,Ce=ae.isMeshStandardMaterial?j.environment:null,Ne=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Di,Le=(ae.isMeshStandardMaterial?ke:we).get(ae.envMap||Ce),Ve=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,We=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ze=!!re.morphAttributes.position,Je=!!re.morphAttributes.normal,nt=!!re.morphAttributes.color;let ft=On;ae.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ft=b.toneMapping);const at=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=at!==void 0?at.length:0,He=R.get(ae),ut=d.state.lights;if(A===!0&&(v===!0||T!==w)){const wt=T===w&&ae.id===S;be.setState(ae,T,wt)}let Qe=!1;ae.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ut.state.version||He.outputColorSpace!==Ne||J.isBatchedMesh&&He.batching===!1||!J.isBatchedMesh&&He.batching===!0||J.isBatchedMesh&&He.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&He.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&He.instancing===!1||!J.isInstancedMesh&&He.instancing===!0||J.isSkinnedMesh&&He.skinning===!1||!J.isSkinnedMesh&&He.skinning===!0||J.isInstancedMesh&&He.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&He.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&He.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&He.instancingMorph===!1&&J.morphTexture!==null||He.envMap!==Le||ae.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==be.numPlanes||He.numIntersection!==be.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==We||He.morphTargets!==ze||He.morphNormals!==Je||He.morphColors!==nt||He.toneMapping!==ft||He.morphTargetsCount!==st)&&(Qe=!0):(Qe=!0,He.__version=ae.version);let Nt=He.currentProgram;Qe===!0&&(Nt=ys(ae,j,J));let li=!1,Ft=!1,Wi=!1;const dt=Nt.getUniforms(),Vt=He.uniforms;if(K.useProgram(Nt.program)&&(li=!0,Ft=!0,Wi=!0),ae.id!==S&&(S=ae.id,Ft=!0),li||w!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),dt.setValue(L,"projectionMatrix",T.projectionMatrix),dt.setValue(L,"viewMatrix",T.matrixWorldInverse);const Lt=dt.map.cameraPosition;Lt!==void 0&&Lt.setValue(L,B.setFromMatrixPosition(T.matrixWorld)),q.logarithmicDepthBuffer&&dt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&dt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Ft=!0,Wi=!0)}if(J.isSkinnedMesh){dt.setOptional(L,J,"bindMatrix"),dt.setOptional(L,J,"bindMatrixInverse");const wt=J.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),dt.setValue(L,"boneTexture",wt.boneTexture,oe))}J.isBatchedMesh&&(dt.setOptional(L,J,"batchingTexture"),dt.setValue(L,"batchingTexture",J._matricesTexture,oe),dt.setOptional(L,J,"batchingIdTexture"),dt.setValue(L,"batchingIdTexture",J._indirectTexture,oe),dt.setOptional(L,J,"batchingColorTexture"),J._colorsTexture!==null&&dt.setValue(L,"batchingColorTexture",J._colorsTexture,oe));const Gt=re.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&_e.update(J,re,Nt),(Ft||He.receiveShadow!==J.receiveShadow)&&(He.receiveShadow=J.receiveShadow,dt.setValue(L,"receiveShadow",J.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Vt.envMap.value=Le,Vt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(Vt.envMapIntensity.value=j.environmentIntensity),Ft&&(dt.setValue(L,"toneMappingExposure",b.toneMappingExposure),He.needsLights&&Cu(Vt,Wi),ye&&ae.fog===!0&&me.refreshFogUniforms(Vt,ye),me.refreshMaterialUniforms(Vt,ae,P,se,d.state.transmissionRenderTarget[T.id]),Zs.upload(L,zo(He),Vt,oe)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Zs.upload(L,zo(He),Vt,oe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&dt.setValue(L,"center",J.center),dt.setValue(L,"modelViewMatrix",J.modelViewMatrix),dt.setValue(L,"normalMatrix",J.normalMatrix),dt.setValue(L,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const wt=ae.uniformsGroups;for(let Lt=0,wr=wt.length;Lt<wr;Lt++){const Vn=wt[Lt];je.update(Vn,Nt),je.bind(Vn,Nt)}}return Nt}function Cu(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Lu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,j,re){const ae=R.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),R.get(T.texture).__webglTexture=j,R.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:re,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const re=R.get(T);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const Pu=L.createFramebuffer();this.setRenderTarget=function(T,j=0,re=0){F=T,D=j,N=re;let ae=!0,J=null,ye=!1,Ce=!1;if(T){const Le=R.get(T);if(Le.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(L.FRAMEBUFFER,null),ae=!1;else if(Le.__webglFramebuffer===void 0)oe.setupRenderTarget(T);else if(Le.__hasExternalTextures)oe.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(Le.__boundDepthTexture!==ze){if(ze!==null&&R.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const We=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[j])?J=We[j][re]:J=We[j],ye=!0):T.samples>0&&oe.useMultisampledRTT(T)===!1?J=R.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?J=We[re]:J=We,k.copy(T.viewport),z.copy(T.scissor),ee=T.scissorTest}else k.copy(ge).multiplyScalar(P).floor(),z.copy(Te).multiplyScalar(P).floor(),ee=Oe;if(re!==0&&(J=Pu),K.bindFramebuffer(L.FRAMEBUFFER,J)&&ae&&K.drawBuffers(T,J),K.viewport(k),K.scissor(z),K.setScissorTest(ee),ye){const Le=R.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le.__webglTexture,re)}else if(Ce){const Le=j;for(let Ve=0;Ve<T.textures.length;Ve++){const We=R.get(T.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,We.__webglTexture,re,Le)}}else if(T!==null&&re!==0){const Le=R.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,re)}S=-1},this.readRenderTargetPixels=function(T,j,re,ae,J,ye,Ce,Ne=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){K.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Ve=T.textures[Ne],We=Ve.format,ze=Ve.type;if(!q.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-ae&&re>=0&&re<=T.height-J&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne),L.readPixels(j,re,ae,J,Be.convert(We),Be.convert(ze),ye))}finally{const Ve=F!==null?R.get(F).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,j,re,ae,J,ye,Ce,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(j>=0&&j<=T.width-ae&&re>=0&&re<=T.height-J){K.bindFramebuffer(L.FRAMEBUFFER,Le);const Ve=T.textures[Ne],We=Ve.format,ze=Ve.type;if(!q.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne),L.readPixels(j,re,ae,J,Be.convert(We),Be.convert(ze),0);const nt=F!==null?R.get(F).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,nt);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gd(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(Je),L.deleteSync(ft),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,re=0){const ae=Math.pow(2,-re),J=Math.floor(T.image.width*ae),ye=Math.floor(T.image.height*ae),Ce=j!==null?j.x:0,Ne=j!==null?j.y:0;oe.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,re,0,0,Ce,Ne,J,ye),K.unbindTexture()};const Iu=L.createFramebuffer(),Du=L.createFramebuffer();this.copyTextureToTexture=function(T,j,re=null,ae=null,J=0,ye=null){ye===null&&(J!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=J,J=0):ye=0);let Ce,Ne,Le,Ve,We,ze,Je,nt,ft;const at=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(re!==null)Ce=re.max.x-re.min.x,Ne=re.max.y-re.min.y,Le=re.isBox3?re.max.z-re.min.z:1,Ve=re.min.x,We=re.min.y,ze=re.isBox3?re.min.z:0;else{const Gt=Math.pow(2,-J);Ce=Math.floor(at.width*Gt),Ne=Math.floor(at.height*Gt),T.isDataArrayTexture?Le=at.depth:T.isData3DTexture?Le=Math.floor(at.depth*Gt):Le=1,Ve=0,We=0,ze=0}ae!==null?(Je=ae.x,nt=ae.y,ft=ae.z):(Je=0,nt=0,ft=0);const st=Be.convert(j.format),He=Be.convert(j.type);let ut;j.isData3DTexture?(oe.setTexture3D(j,0),ut=L.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(oe.setTexture2DArray(j,0),ut=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(j,0),ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),li=L.getParameter(L.UNPACK_SKIP_PIXELS),Ft=L.getParameter(L.UNPACK_SKIP_ROWS),Wi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const dt=T.isDataArrayTexture||T.isData3DTexture,Vt=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const Gt=R.get(T),wt=R.get(j),Lt=R.get(Gt.__renderTarget),wr=R.get(wt.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,Lt.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Vn=0;Vn<Le;Vn++)dt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(T).__webglTexture,J,ze+Vn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(j).__webglTexture,ye,ft+Vn)),L.blitFramebuffer(Ve,We,Ce,Ne,Je,nt,Ce,Ne,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||R.has(T)){const Gt=R.get(T),wt=R.get(j);K.bindFramebuffer(L.READ_FRAMEBUFFER,Iu),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,Du);for(let Lt=0;Lt<Le;Lt++)dt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gt.__webglTexture,J,ze+Lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gt.__webglTexture,J),Vt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,ye,ft+Lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,ye),J!==0?L.blitFramebuffer(Ve,We,Ce,Ne,Je,nt,Ce,Ne,L.COLOR_BUFFER_BIT,L.NEAREST):Vt?L.copyTexSubImage3D(ut,ye,Je,nt,ft+Lt,Ve,We,Ce,Ne):L.copyTexSubImage2D(ut,ye,Je,nt,Ve,We,Ce,Ne);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Vt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ut,ye,Je,nt,ft,Ce,Ne,Le,st,He,at.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(ut,ye,Je,nt,ft,Ce,Ne,Le,st,at.data):L.texSubImage3D(ut,ye,Je,nt,ft,Ce,Ne,Le,st,He,at):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ye,Je,nt,Ce,Ne,st,He,at.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ye,Je,nt,at.width,at.height,st,at.data):L.texSubImage2D(L.TEXTURE_2D,ye,Je,nt,Ce,Ne,st,He,at);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,li),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wi),ye===0&&j.generateMipmaps&&L.generateMipmap(ut),K.unbindTexture()},this.initRenderTarget=function(T){R.get(T).__webglFramebuffer===void 0&&oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){D=0,N=0,F=null,K.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class mr extends It{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Bt;const i=this,s=t.color!==void 0?new Xe(t.color):new Xe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||mr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Dn,h=new W,p=new W,m=new W,g=new ct,x=new W(0,0,-1),f=new lt,d=new W,C=new W,M=new lt,b=new ct,U=this.camera,D=new Xt(r,a,{samples:l,type:on}),N=new yt({name:c.name!==void 0?c.name:"unspecified",uniforms:Ni.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});N.uniforms.tDiffuse.value=D.texture,N.uniforms.color.value=s,N.uniforms.textureMatrix.value=b,this.material=N,this.onBeforeRender=function(F,S,w){if(p.setFromMatrixPosition(i.matrixWorld),m.setFromMatrixPosition(w.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(p,m),d.dot(h)>0===!0&&this.forceUpdate===!1)return;d.reflect(h).negate(),d.add(p),g.extractRotation(w.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(m),C.subVectors(p,x),C.reflect(h).negate(),C.add(p),U.position.copy(d),U.up.set(0,1,0),U.up.applyMatrix4(g),U.up.reflect(h),U.lookAt(C),U.far=w.far,U.updateMatrixWorld(),U.projectionMatrix.copy(w.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(U.projectionMatrix),b.multiply(U.matrixWorldInverse),b.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,p),u.applyMatrix4(U.matrixWorldInverse),f.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const z=U.projectionMatrix;M.x=(Math.sign(f.x)+z.elements[8])/z.elements[0],M.y=(Math.sign(f.y)+z.elements[9])/z.elements[5],M.z=-1,M.w=(1+z.elements[10])/z.elements[14],f.multiplyScalar(2/f.dot(M)),z.elements[2]=f.x,z.elements[6]=f.y,z.elements[10]=f.z+1-o,z.elements[14]=f.w,i.visible=!1;const ee=F.getRenderTarget(),te=F.xr.enabled,ie=F.shadowMap.autoUpdate;F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(D),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(S,U),F.xr.enabled=te,F.shadowMap.autoUpdate=ie,F.setRenderTarget(ee);const Q=w.viewport;Q!==void 0&&F.state.viewport(Q),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return D},this.dispose=function(){D.dispose(),i.material.dispose()}}}mr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const Sv=Tt;class sr extends To{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const r=this,a=new Ph(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(E,A){if(E.nodeType!==1)return;const v=b(E);let _=!1,B=null;switch(E.nodeName){case"svg":A=g(E,A);break;case"style":r(E);break;case"g":A=g(E,A);break;case"path":A=g(E,A),E.hasAttribute("d")&&(B=s(E));break;case"rect":A=g(E,A),B=c(E);break;case"polygon":A=g(E,A),B=l(E);break;case"polyline":A=g(E,A),B=u(E);break;case"circle":A=g(E,A),B=h(E);break;case"ellipse":A=g(E,A),B=p(E);break;case"line":A=g(E,A),B=m(E);break;case"defs":_=!0;break;case"use":A=g(E,A);const ue=(E.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ve=E.viewportElement.getElementById(ue);ve?i(ve,A):console.warn("SVGLoader: 'use node' references non-existent node id: "+ue);break}B&&(A.fill!==void 0&&A.fill!=="none"&&B.color.setStyle(A.fill,Sv),D(B,ge),z.push(B),B.userData={node:E,style:A});const Z=E.childNodes;for(let V=0;V<Z.length;V++){const ue=Z[V];_&&ue.nodeName!=="style"&&ue.nodeName!=="defs"||i(ue,A)}v&&(te.pop(),te.length>0?ge.copy(te[te.length-1]):ge.identity())}function s(E){const A=new qn,v=new fe,_=new fe,B=new fe;let Z=!0,V=!1;const ue=E.getAttribute("d");if(ue===""||ue==="none")return null;const ve=ue.match(/[a-df-z][^a-df-z]*/ig);for(let L=0,H=ve.length;L<H;L++){const $=ve[L],q=$.charAt(0),K=$.slice(1).trim();Z===!0&&(V=!0,Z=!1);let O;switch(q){case"M":O=f(K);for(let R=0,oe=O.length;R<oe;R+=2)v.x=O[R+0],v.y=O[R+1],_.x=v.x,_.y=v.y,R===0?A.moveTo(v.x,v.y):A.lineTo(v.x,v.y),R===0&&B.copy(v);break;case"H":O=f(K);for(let R=0,oe=O.length;R<oe;R++)v.x=O[R],_.x=v.x,_.y=v.y,A.lineTo(v.x,v.y),R===0&&V===!0&&B.copy(v);break;case"V":O=f(K);for(let R=0,oe=O.length;R<oe;R++)v.y=O[R],_.x=v.x,_.y=v.y,A.lineTo(v.x,v.y),R===0&&V===!0&&B.copy(v);break;case"L":O=f(K);for(let R=0,oe=O.length;R<oe;R+=2)v.x=O[R+0],v.y=O[R+1],_.x=v.x,_.y=v.y,A.lineTo(v.x,v.y),R===0&&V===!0&&B.copy(v);break;case"C":O=f(K);for(let R=0,oe=O.length;R<oe;R+=6)A.bezierCurveTo(O[R+0],O[R+1],O[R+2],O[R+3],O[R+4],O[R+5]),_.x=O[R+2],_.y=O[R+3],v.x=O[R+4],v.y=O[R+5],R===0&&V===!0&&B.copy(v);break;case"S":O=f(K);for(let R=0,oe=O.length;R<oe;R+=4)A.bezierCurveTo(x(v.x,_.x),x(v.y,_.y),O[R+0],O[R+1],O[R+2],O[R+3]),_.x=O[R+0],_.y=O[R+1],v.x=O[R+2],v.y=O[R+3],R===0&&V===!0&&B.copy(v);break;case"Q":O=f(K);for(let R=0,oe=O.length;R<oe;R+=4)A.quadraticCurveTo(O[R+0],O[R+1],O[R+2],O[R+3]),_.x=O[R+0],_.y=O[R+1],v.x=O[R+2],v.y=O[R+3],R===0&&V===!0&&B.copy(v);break;case"T":O=f(K);for(let R=0,oe=O.length;R<oe;R+=2){const we=x(v.x,_.x),ke=x(v.y,_.y);A.quadraticCurveTo(we,ke,O[R+0],O[R+1]),_.x=we,_.y=ke,v.x=O[R+0],v.y=O[R+1],R===0&&V===!0&&B.copy(v)}break;case"A":O=f(K,[3,4],7);for(let R=0,oe=O.length;R<oe;R+=7){if(O[R+5]==v.x&&O[R+6]==v.y)continue;const we=v.clone();v.x=O[R+5],v.y=O[R+6],_.x=v.x,_.y=v.y,a(A,O[R],O[R+1],O[R+2],O[R+3],O[R+4],we,v),R===0&&V===!0&&B.copy(v)}break;case"m":O=f(K);for(let R=0,oe=O.length;R<oe;R+=2)v.x+=O[R+0],v.y+=O[R+1],_.x=v.x,_.y=v.y,R===0?A.moveTo(v.x,v.y):A.lineTo(v.x,v.y),R===0&&B.copy(v);break;case"h":O=f(K);for(let R=0,oe=O.length;R<oe;R++)v.x+=O[R],_.x=v.x,_.y=v.y,A.lineTo(v.x,v.y),R===0&&V===!0&&B.copy(v);break;case"v":O=f(K);for(let R=0,oe=O.length;R<oe;R++)v.y+=O[R],_.x=v.x,_.y=v.y,A.lineTo(v.x,v.y),R===0&&V===!0&&B.copy(v);break;case"l":O=f(K);for(let R=0,oe=O.length;R<oe;R+=2)v.x+=O[R+0],v.y+=O[R+1],_.x=v.x,_.y=v.y,A.lineTo(v.x,v.y),R===0&&V===!0&&B.copy(v);break;case"c":O=f(K);for(let R=0,oe=O.length;R<oe;R+=6)A.bezierCurveTo(v.x+O[R+0],v.y+O[R+1],v.x+O[R+2],v.y+O[R+3],v.x+O[R+4],v.y+O[R+5]),_.x=v.x+O[R+2],_.y=v.y+O[R+3],v.x+=O[R+4],v.y+=O[R+5],R===0&&V===!0&&B.copy(v);break;case"s":O=f(K);for(let R=0,oe=O.length;R<oe;R+=4)A.bezierCurveTo(x(v.x,_.x),x(v.y,_.y),v.x+O[R+0],v.y+O[R+1],v.x+O[R+2],v.y+O[R+3]),_.x=v.x+O[R+0],_.y=v.y+O[R+1],v.x+=O[R+2],v.y+=O[R+3],R===0&&V===!0&&B.copy(v);break;case"q":O=f(K);for(let R=0,oe=O.length;R<oe;R+=4)A.quadraticCurveTo(v.x+O[R+0],v.y+O[R+1],v.x+O[R+2],v.y+O[R+3]),_.x=v.x+O[R+0],_.y=v.y+O[R+1],v.x+=O[R+2],v.y+=O[R+3],R===0&&V===!0&&B.copy(v);break;case"t":O=f(K);for(let R=0,oe=O.length;R<oe;R+=2){const we=x(v.x,_.x),ke=x(v.y,_.y);A.quadraticCurveTo(we,ke,v.x+O[R+0],v.y+O[R+1]),_.x=we,_.y=ke,v.x=v.x+O[R+0],v.y=v.y+O[R+1],R===0&&V===!0&&B.copy(v)}break;case"a":O=f(K,[3,4],7);for(let R=0,oe=O.length;R<oe;R+=7){if(O[R+5]==0&&O[R+6]==0)continue;const we=v.clone();v.x+=O[R+5],v.y+=O[R+6],_.x=v.x,_.y=v.y,a(A,O[R],O[R+1],O[R+2],O[R+3],O[R+4],we,v),R===0&&V===!0&&B.copy(v)}break;case"Z":case"z":A.currentPath.autoClose=!0,A.currentPath.curves.length>0&&(v.copy(B),A.currentPath.currentPoint.copy(v),Z=!0);break;default:console.warn($)}V=!1}return A}function r(E){if(!(!E.sheet||!E.sheet.cssRules||!E.sheet.cssRules.length))for(let A=0;A<E.sheet.cssRules.length;A++){const v=E.sheet.cssRules[A];if(v.type!==1)continue;const _=v.selectorText.split(/,/gm).filter(Boolean).map(B=>B.trim());for(let B=0;B<_.length;B++){const Z=Object.fromEntries(Object.entries(v.style).filter(([,V])=>V!==""));ee[_[B]]=Object.assign(ee[_[B]]||{},Z)}}}function a(E,A,v,_,B,Z,V,ue){if(A==0||v==0){E.lineTo(ue.x,ue.y);return}_=_*Math.PI/180,A=Math.abs(A),v=Math.abs(v);const ve=(V.x-ue.x)/2,L=(V.y-ue.y)/2,H=Math.cos(_)*ve+Math.sin(_)*L,$=-Math.sin(_)*ve+Math.cos(_)*L;let q=A*A,K=v*v;const O=H*H,R=$*$,oe=O/q+R/K;if(oe>1){const be=Math.sqrt(oe);A=be*A,v=be*v,q=A*A,K=v*v}const we=q*R+K*O,ke=(q*K-we)/we;let I=Math.sqrt(Math.max(0,ke));B===Z&&(I=-I);const y=I*A*$/v,Y=-I*v*H/A,le=Math.cos(_)*y-Math.sin(_)*Y+(V.x+ue.x)/2,me=Math.sin(_)*y+Math.cos(_)*Y+(V.y+ue.y)/2,de=o(1,0,(H-y)/A,($-Y)/v),Pe=o((H-y)/A,($-Y)/v,(-H-y)/A,(-$-Y)/v)%(Math.PI*2);E.currentPath.absellipse(le,me,A,v,de,de+Pe,Z===0,_)}function o(E,A,v,_){const B=E*v+A*_,Z=Math.sqrt(E*E+A*A)*Math.sqrt(v*v+_*_);let V=Math.acos(Math.max(-1,Math.min(1,B/Z)));return E*_-A*v<0&&(V=-V),V}function c(E){const A=M(E.getAttribute("x")||0),v=M(E.getAttribute("y")||0),_=M(E.getAttribute("rx")||E.getAttribute("ry")||0),B=M(E.getAttribute("ry")||E.getAttribute("rx")||0),Z=M(E.getAttribute("width")),V=M(E.getAttribute("height")),ue=1-.551915024494,ve=new qn;return ve.moveTo(A+_,v),ve.lineTo(A+Z-_,v),(_!==0||B!==0)&&ve.bezierCurveTo(A+Z-_*ue,v,A+Z,v+B*ue,A+Z,v+B),ve.lineTo(A+Z,v+V-B),(_!==0||B!==0)&&ve.bezierCurveTo(A+Z,v+V-B*ue,A+Z-_*ue,v+V,A+Z-_,v+V),ve.lineTo(A+_,v+V),(_!==0||B!==0)&&ve.bezierCurveTo(A+_*ue,v+V,A,v+V-B*ue,A,v+V-B),ve.lineTo(A,v+B),(_!==0||B!==0)&&ve.bezierCurveTo(A,v+B*ue,A+_*ue,v,A+_,v),ve}function l(E){function A(Z,V,ue){const ve=M(V),L=M(ue);B===0?_.moveTo(ve,L):_.lineTo(ve,L),B++}const v=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,_=new qn;let B=0;return E.getAttribute("points").replace(v,A),_.currentPath.autoClose=!0,_}function u(E){function A(Z,V,ue){const ve=M(V),L=M(ue);B===0?_.moveTo(ve,L):_.lineTo(ve,L),B++}const v=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,_=new qn;let B=0;return E.getAttribute("points").replace(v,A),_.currentPath.autoClose=!1,_}function h(E){const A=M(E.getAttribute("cx")||0),v=M(E.getAttribute("cy")||0),_=M(E.getAttribute("r")||0),B=new Ri;B.absarc(A,v,_,0,Math.PI*2);const Z=new qn;return Z.subPaths.push(B),Z}function p(E){const A=M(E.getAttribute("cx")||0),v=M(E.getAttribute("cy")||0),_=M(E.getAttribute("rx")||0),B=M(E.getAttribute("ry")||0),Z=new Ri;Z.absellipse(A,v,_,B,0,Math.PI*2);const V=new qn;return V.subPaths.push(Z),V}function m(E){const A=M(E.getAttribute("x1")||0),v=M(E.getAttribute("y1")||0),_=M(E.getAttribute("x2")||0),B=M(E.getAttribute("y2")||0),Z=new qn;return Z.moveTo(A,v),Z.lineTo(_,B),Z.currentPath.autoClose=!1,Z}function g(E,A){A=Object.assign({},A);let v={};if(E.hasAttribute("class")){const V=E.getAttribute("class").split(/\s/).filter(Boolean).map(ue=>ue.trim());for(let ue=0;ue<V.length;ue++)v=Object.assign(v,ee["."+V[ue]])}E.hasAttribute("id")&&(v=Object.assign(v,ee["#"+E.getAttribute("id")]));function _(V,ue,ve){ve===void 0&&(ve=function(H){return H.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),H}),E.hasAttribute(V)&&(A[ue]=ve(E.getAttribute(V))),v[V]&&(A[ue]=ve(v[V])),E.style&&E.style[V]!==""&&(A[ue]=ve(E.style[V]))}function B(V){return Math.max(0,Math.min(1,M(V)))}function Z(V){return Math.max(0,M(V))}return _("fill","fill"),_("fill-opacity","fillOpacity",B),_("fill-rule","fillRule"),_("opacity","opacity",B),_("stroke","stroke"),_("stroke-opacity","strokeOpacity",B),_("stroke-width","strokeWidth",Z),_("stroke-linejoin","strokeLineJoin"),_("stroke-linecap","strokeLineCap"),_("stroke-miterlimit","strokeMiterLimit",Z),_("visibility","visibility"),A}function x(E,A){return E-(A-E)}function f(E,A,v){if(typeof E!="string")throw new TypeError("Invalid input: "+typeof E);const _={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},B=0,Z=1,V=2,ue=3;let ve=B,L=!0,H="",$="";const q=[];function K(we,ke,I){const y=new SyntaxError('Unexpected character "'+we+'" at index '+ke+".");throw y.partial=I,y}function O(){H!==""&&($===""?q.push(Number(H)):q.push(Number(H)*Math.pow(10,Number($)))),H="",$=""}let R;const oe=E.length;for(let we=0;we<oe;we++){if(R=E[we],Array.isArray(A)&&A.includes(q.length%v)&&_.FLAGS.test(R)){ve=Z,H=R,O();continue}if(ve===B){if(_.WHITESPACE.test(R))continue;if(_.DIGIT.test(R)||_.SIGN.test(R)){ve=Z,H=R;continue}if(_.POINT.test(R)){ve=V,H=R;continue}_.COMMA.test(R)&&(L&&K(R,we,q),L=!0)}if(ve===Z){if(_.DIGIT.test(R)){H+=R;continue}if(_.POINT.test(R)){H+=R,ve=V;continue}if(_.EXP.test(R)){ve=ue;continue}_.SIGN.test(R)&&H.length===1&&_.SIGN.test(H[0])&&K(R,we,q)}if(ve===V){if(_.DIGIT.test(R)){H+=R;continue}if(_.EXP.test(R)){ve=ue;continue}_.POINT.test(R)&&H[H.length-1]==="."&&K(R,we,q)}if(ve===ue){if(_.DIGIT.test(R)){$+=R;continue}if(_.SIGN.test(R)){if($===""){$+=R;continue}$.length===1&&_.SIGN.test($)&&K(R,we,q)}}_.WHITESPACE.test(R)?(O(),ve=B,L=!1):_.COMMA.test(R)?(O(),ve=B,L=!0):_.SIGN.test(R)?(O(),ve=Z,H=R):_.POINT.test(R)?(O(),ve=V,H=R):K(R,we,q)}return O(),q}const d=["mm","cm","in","pt","pc","px"],C={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function M(E){let A="px";if(typeof E=="string"||E instanceof String)for(let _=0,B=d.length;_<B;_++){const Z=d[_];if(E.endsWith(Z)){A=Z,E=E.substring(0,E.length-Z.length);break}}let v;return A==="px"&&t.defaultUnit!=="px"?v=C.in[t.defaultUnit]/t.defaultDPI:(v=C[A][t.defaultUnit],v<0&&(v=C[A].in*t.defaultDPI)),v*parseFloat(E)}function b(E){if(!(E.hasAttribute("transform")||E.nodeName==="use"&&(E.hasAttribute("x")||E.hasAttribute("y"))))return null;const A=U(E);return te.length>0&&A.premultiply(te[te.length-1]),ge.copy(A),te.push(A),A}function U(E){const A=new $e,v=ie;if(E.nodeName==="use"&&(E.hasAttribute("x")||E.hasAttribute("y"))){const _=M(E.getAttribute("x")),B=M(E.getAttribute("y"));A.translate(_,B)}if(E.hasAttribute("transform")){const _=E.getAttribute("transform").split(")");for(let B=_.length-1;B>=0;B--){const Z=_[B].trim();if(Z==="")continue;const V=Z.indexOf("("),ue=Z.length;if(V>0&&V<ue){const ve=Z.slice(0,V),L=f(Z.slice(V+1));switch(v.identity(),ve){case"translate":if(L.length>=1){const H=L[0];let $=0;L.length>=2&&($=L[1]),v.translate(H,$)}break;case"rotate":if(L.length>=1){let H=0,$=0,q=0;H=L[0]*Math.PI/180,L.length>=3&&($=L[1],q=L[2]),Q.makeTranslation(-$,-q),se.makeRotation(H),P.multiplyMatrices(se,Q),Q.makeTranslation($,q),v.multiplyMatrices(Q,P)}break;case"scale":if(L.length>=1){const H=L[0];let $=H;L.length>=2&&($=L[1]),v.scale(H,$)}break;case"skewX":L.length===1&&v.set(1,Math.tan(L[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":L.length===1&&v.set(1,0,0,Math.tan(L[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":L.length===6&&v.set(L[0],L[2],L[4],L[1],L[3],L[5],0,0,1);break}}A.premultiply(v)}}return A}function D(E,A){function v(V){he.set(V.x,V.y,1).applyMatrix3(A),V.set(he.x,he.y)}function _(V){const ue=V.xRadius,ve=V.yRadius,L=Math.cos(V.aRotation),H=Math.sin(V.aRotation),$=new W(ue*L,ue*H,0),q=new W(-ve*H,ve*L,0),K=$.applyMatrix3(A),O=q.applyMatrix3(A),R=ie.set(K.x,O.x,0,K.y,O.y,0,0,0,1),oe=Q.copy(R).invert(),I=se.copy(oe).transpose().multiply(oe).elements,y=k(I[0],I[1],I[4]),Y=Math.sqrt(y.rt1),le=Math.sqrt(y.rt2);if(V.xRadius=1/Y,V.yRadius=1/le,V.aRotation=Math.atan2(y.sn,y.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const de=Q.set(Y,0,0,0,le,0,0,0,1),Pe=se.set(y.cs,y.sn,0,-y.sn,y.cs,0,0,0,1),be=de.multiply(Pe).multiply(R),Ie=De=>{const{x:_e,y:Ae}=new W(Math.cos(De),Math.sin(De),0).applyMatrix3(be);return Math.atan2(Ae,_e)};V.aStartAngle=Ie(V.aStartAngle),V.aEndAngle=Ie(V.aEndAngle),N(A)&&(V.aClockwise=!V.aClockwise)}}function B(V){const ue=S(A),ve=w(A);V.xRadius*=ue,V.yRadius*=ve;const L=ue>Number.EPSILON?Math.atan2(A.elements[1],A.elements[0]):Math.atan2(-A.elements[3],A.elements[4]);V.aRotation+=L,N(A)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const Z=E.subPaths;for(let V=0,ue=Z.length;V<ue;V++){const L=Z[V].curves;for(let H=0;H<L.length;H++){const $=L[H];$.isLineCurve?(v($.v1),v($.v2)):$.isCubicBezierCurve?(v($.v0),v($.v1),v($.v2),v($.v3)):$.isQuadraticBezierCurve?(v($.v0),v($.v1),v($.v2)):$.isEllipseCurve&&(ne.set($.aX,$.aY),v(ne),$.aX=ne.x,$.aY=ne.y,F(A)?_($):B($))}}}function N(E){const A=E.elements;return A[0]*A[4]-A[1]*A[3]<0}function F(E){const A=E.elements,v=A[0]*A[3]+A[1]*A[4];if(v===0)return!1;const _=S(E),B=w(E);return Math.abs(v/(_*B))>Number.EPSILON}function S(E){const A=E.elements;return Math.sqrt(A[0]*A[0]+A[1]*A[1])}function w(E){const A=E.elements;return Math.sqrt(A[3]*A[3]+A[4]*A[4])}function k(E,A,v){let _,B,Z,V,ue;const ve=E+v,L=E-v,H=Math.sqrt(L*L+4*A*A);return ve>0?(_=.5*(ve+H),ue=1/_,B=E*ue*v-A*ue*A):ve<0?B=.5*(ve-H):(_=.5*H,B=-.5*H),L>0?Z=L+H:Z=L-H,Math.abs(Z)>2*Math.abs(A)?(ue=-2*A/Z,V=1/Math.sqrt(1+ue*ue),Z=ue*V):Math.abs(A)===0?(Z=1,V=0):(ue=-.5*Z/A,Z=1/Math.sqrt(1+ue*ue),V=ue*Z),L>0&&(ue=Z,Z=-V,V=ue),{rt1:_,rt2:B,cs:Z,sn:V}}const z=[],ee={},te=[],ie=new $e,Q=new $e,se=new $e,P=new $e,ne=new fe,he=new W,ge=new $e,Te=new DOMParser().parseFromString(e,"image/svg+xml");return i(Te.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:z,xml:Te.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(x,f,d,C){const M=x.x,b=f.x,U=d.x,D=C.x,N=x.y,F=f.y,S=d.y,w=C.y,k=(D-U)*(N-S)-(w-S)*(M-U),z=(b-M)*(N-S)-(F-N)*(M-U),ee=(w-S)*(b-M)-(D-U)*(F-N),te=k/ee,ie=z/ee;if(ee===0&&k!==0||te<=0||te>=1||ie<0||ie>1)return null;if(k===0&&ee===0){for(let Q=0;Q<2;Q++)if(a(Q===0?d:C,x,f),s.loc==i.ORIGIN){const se=Q===0?d:C;return{x:se.x,y:se.y,t:s.t}}else if(s.loc==i.BETWEEN){const se=+(M+s.t*(b-M)).toPrecision(10),P=+(N+s.t*(F-N)).toPrecision(10);return{x:se,y:P,t:s.t}}return null}else{for(let P=0;P<2;P++)if(a(P===0?d:C,x,f),s.loc==i.ORIGIN){const ne=P===0?d:C;return{x:ne.x,y:ne.y,t:s.t}}const Q=+(M+te*(b-M)).toPrecision(10),se=+(N+te*(F-N)).toPrecision(10);return{x:Q,y:se,t:te}}}function a(x,f,d){const C=d.x-f.x,M=d.y-f.y,b=x.x-f.x,U=x.y-f.y,D=C*U-b*M;if(x.x===f.x&&x.y===f.y){s.loc=i.ORIGIN,s.t=0;return}if(x.x===d.x&&x.y===d.y){s.loc=i.DESTINATION,s.t=1;return}if(D<-Number.EPSILON){s.loc=i.LEFT;return}if(D>Number.EPSILON){s.loc=i.RIGHT;return}if(C*b<0||M*U<0){s.loc=i.BEHIND;return}if(Math.sqrt(C*C+M*M)<Math.sqrt(b*b+U*U)){s.loc=i.BEYOND;return}let N;C!==0?N=b/C:N=U/M,s.loc=i.BETWEEN,s.t=N}function o(x,f){const d=[],C=[];for(let M=1;M<x.length;M++){const b=x[M-1],U=x[M];for(let D=1;D<f.length;D++){const N=f[D-1],F=f[D],S=r(b,U,N,F);S!==null&&d.find(w=>w.t<=S.t+Number.EPSILON&&w.t>=S.t-Number.EPSILON)===void 0&&(d.push(S),C.push(new fe(S.x,S.y)))}}return C}function c(x,f,d){const C=new fe;f.getCenter(C);const M=[];return d.forEach(b=>{b.boundingBox.containsPoint(C)&&o(x,b.points).forEach(D=>{M.push({identifier:b.identifier,isCW:b.isCW,point:D})})}),M.sort((b,U)=>b.point.x-U.point.x),M}function l(x,f,d,C,M){(M==null||M==="")&&(M="nonzero");const b=new fe;x.boundingBox.getCenter(b);const U=[new fe(d,b.y),new fe(C,b.y)],D=c(U,x.boundingBox,f);D.sort((z,ee)=>z.point.x-ee.point.x);const N=[],F=[];D.forEach(z=>{z.identifier===x.identifier?N.push(z):F.push(z)});const S=N[0].point.x,w=[];let k=0;for(;k<F.length&&F[k].point.x<S;)w.length>0&&w[w.length-1]===F[k].identifier?w.pop():w.push(F[k].identifier),k++;if(w.push(x.identifier),M==="evenodd"){const z=w.length%2===0,ee=w[w.length-2];return{identifier:x.identifier,isHole:z,for:ee}}else if(M==="nonzero"){let z=!0,ee=null,te=null;for(let ie=0;ie<w.length;ie++){const Q=w[ie];z?(te=f[Q].isCW,z=!1,ee=Q):te!==f[Q].isCW&&(te=f[Q].isCW,z=!0)}return{identifier:x.identifier,isHole:z,for:ee}}else console.warn('fill-rule: "'+M+'" is currently not implemented.')}let u=999999999,h=-999999999,p=e.subPaths.map(x=>{const f=x.getPoints();let d=-999999999,C=999999999,M=-999999999,b=999999999;for(let U=0;U<f.length;U++){const D=f[U];D.y>d&&(d=D.y),D.y<C&&(C=D.y),D.x>M&&(M=D.x),D.x<b&&(b=D.x)}return h<=M&&(h=M+1),u>=b&&(u=b-1),{curves:x.curves,points:f,isCW:Nn.isClockWise(f),identifier:-1,boundingBox:new kh(new fe(b,C),new fe(M,d))}});p=p.filter(x=>x.points.length>1);for(let x=0;x<p.length;x++)p[x].identifier=x;const m=p.map(x=>l(x,p,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return p.forEach(x=>{if(!m[x.identifier].isHole){const d=new Ci;d.curves=x.curves,m.filter(M=>M.isHole&&M.for===x.identifier).forEach(M=>{const b=p[M.identifier],U=new Ri;U.curves=b.curves,d.holes.push(U)}),g.push(d)}}),g}static getStrokeStyle(e,t,i,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,i,s){const r=[],a=[],o=[];if(sr.pointsToStrokeWithBuffers(e,t,i,s,r,a,o)===0)return null;const c=new un;return c.setAttribute("position",new Ut(r,3)),c.setAttribute("normal",new Ut(a,3)),c.setAttribute("uv",new Ut(o,2)),c}static pointsToStrokeWithBuffers(e,t,i,s,r,a,o,c){const l=new fe,u=new fe,h=new fe,p=new fe,m=new fe,g=new fe,x=new fe,f=new fe,d=new fe,C=new fe,M=new fe,b=new fe,U=new fe,D=new fe,N=new fe,F=new fe,S=new fe;i=i!==void 0?i:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=L(e);const w=e.length;if(w<2)return 0;const k=e[0].equals(e[w-1]);let z,ee=e[0],te;const ie=t.strokeWidth/2,Q=1/(w-1);let se=0,P,ne,he,ge,Te=!1,Oe=0,E=c*3,A=c*2;v(e[0],e[1],l).multiplyScalar(ie),f.copy(e[0]).sub(l),d.copy(e[0]).add(l),C.copy(f),M.copy(d);for(let H=1;H<w;H++){z=e[H],H===w-1?k?te=e[1]:te=void 0:te=e[H+1];const $=l;if(v(ee,z,$),h.copy($).multiplyScalar(ie),b.copy(z).sub(h),U.copy(z).add(h),P=se+Q,ne=!1,te!==void 0){v(z,te,u),h.copy(u).multiplyScalar(ie),D.copy(z).sub(h),N.copy(z).add(h),he=!0,h.subVectors(te,ee),$.dot(h)<0&&(he=!1),H===1&&(Te=he),h.subVectors(te,z),h.normalize();const q=Math.abs($.dot(h));if(q>Number.EPSILON){const K=ie/q;h.multiplyScalar(-K),p.subVectors(z,ee),m.copy(p).setLength(K).add(h),F.copy(m).negate();const O=m.length(),R=p.length();p.divideScalar(R),g.subVectors(te,z);const oe=g.length();switch(g.divideScalar(oe),p.dot(F)<R&&g.dot(F)<oe&&(ne=!0),S.copy(m).add(z),F.add(z),ge=!1,ne?he?(N.copy(F),U.copy(F)):(D.copy(F),b.copy(F)):Z(),t.strokeLineJoin){case"bevel":V(he,ne,P);break;case"round":ue(he,ne),he?B(z,b,D,P,0):B(z,N,U,P,1);break;case"miter":case"miter-clip":default:const we=ie*t.strokeMiterLimit/O;if(we<1)if(t.strokeLineJoin!=="miter-clip"){V(he,ne,P);break}else ue(he,ne),he?(g.subVectors(S,b).multiplyScalar(we).add(b),x.subVectors(S,D).multiplyScalar(we).add(D),_(b,P,0),_(g,P,0),_(z,P,.5),_(z,P,.5),_(g,P,0),_(x,P,0),_(z,P,.5),_(x,P,0),_(D,P,0)):(g.subVectors(S,U).multiplyScalar(we).add(U),x.subVectors(S,N).multiplyScalar(we).add(N),_(U,P,1),_(g,P,1),_(z,P,.5),_(z,P,.5),_(g,P,1),_(x,P,1),_(z,P,.5),_(x,P,1),_(N,P,1));else ne?(he?(_(d,se,1),_(f,se,0),_(S,P,0),_(d,se,1),_(S,P,0),_(F,P,1)):(_(d,se,1),_(f,se,0),_(S,P,1),_(f,se,0),_(F,P,0),_(S,P,1)),he?D.copy(S):N.copy(S)):he?(_(b,P,0),_(S,P,0),_(z,P,.5),_(z,P,.5),_(S,P,0),_(D,P,0)):(_(U,P,1),_(S,P,1),_(z,P,.5),_(z,P,.5),_(S,P,1),_(N,P,1)),ge=!0;break}}else Z()}else Z();!k&&H===w-1&&ve(e[0],C,M,he,!0,se),se=P,ee=z,f.copy(D),d.copy(N)}if(!k)ve(z,b,U,he,!1,P);else if(ne&&r){let H=S,$=F;Te!==he&&(H=F,$=S),he?(ge||Te)&&($.toArray(r,0),$.toArray(r,9),ge&&H.toArray(r,3)):(ge||!Te)&&($.toArray(r,3),$.toArray(r,9),ge&&H.toArray(r,0))}return Oe;function v(H,$,q){return q.subVectors($,H),q.set(-q.y,q.x).normalize()}function _(H,$,q){r&&(r[E]=H.x,r[E+1]=H.y,r[E+2]=0,a&&(a[E]=0,a[E+1]=0,a[E+2]=1),E+=3,o&&(o[A]=$,o[A+1]=q,A+=2)),Oe+=3}function B(H,$,q,K,O){l.copy($).sub(H).normalize(),u.copy(q).sub(H).normalize();let R=Math.PI;const oe=l.dot(u);Math.abs(oe)<1&&(R=Math.abs(Math.acos(oe))),R/=i,h.copy($);for(let we=0,ke=i-1;we<ke;we++)p.copy(h).rotateAround(H,R),_(h,K,O),_(p,K,O),_(H,K,.5),h.copy(p);_(p,K,O),_(q,K,O),_(H,K,.5)}function Z(){_(d,se,1),_(f,se,0),_(b,P,0),_(d,se,1),_(b,P,0),_(U,P,1)}function V(H,$,q){$?H?(_(d,se,1),_(f,se,0),_(b,P,0),_(d,se,1),_(b,P,0),_(F,P,1),_(b,q,0),_(D,q,0),_(F,q,.5)):(_(d,se,1),_(f,se,0),_(U,P,1),_(f,se,0),_(F,P,0),_(U,P,1),_(U,q,1),_(F,q,0),_(N,q,1)):H?(_(b,q,0),_(D,q,0),_(z,q,.5)):(_(U,q,1),_(N,q,0),_(z,q,.5))}function ue(H,$){$&&(H?(_(d,se,1),_(f,se,0),_(b,P,0),_(d,se,1),_(b,P,0),_(F,P,1),_(b,se,0),_(z,P,.5),_(F,P,1),_(z,P,.5),_(D,se,0),_(F,P,1)):(_(d,se,1),_(f,se,0),_(U,P,1),_(f,se,0),_(F,P,0),_(U,P,1),_(U,se,1),_(F,P,0),_(z,P,.5),_(z,P,.5),_(F,P,0),_(N,se,1)))}function ve(H,$,q,K,O,R){switch(t.strokeLineCap){case"round":O?B(H,q,$,R,.5):B(H,$,q,R,.5);break;case"square":if(O)l.subVectors($,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),p.subVectors(u,l).add(H),K?(h.toArray(r,3),p.toArray(r,0),p.toArray(r,9)):(h.toArray(r,3),o[7]===1?p.toArray(r,9):h.toArray(r,9),p.toArray(r,0));else{l.subVectors(q,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),p.subVectors(u,l).add(H);const oe=r.length;K?(h.toArray(r,oe-3),p.toArray(r,oe-6),p.toArray(r,oe-12)):(p.toArray(r,oe-6),h.toArray(r,oe-3),p.toArray(r,oe-12))}break}}function L(H){let $=!1;for(let K=1,O=H.length-1;K<O;K++)if(H[K].distanceTo(H[K+1])<s){$=!0;break}if(!$)return H;const q=[];q.push(H[0]);for(let K=1,O=H.length-1;K<O;K++)H[K].distanceTo(H[K+1])>=s&&q.push(H[K]);return q.push(H[H.length-1]),q}}}function wv(n,e=Math.PI/3){const t=Math.cos(e),i=(1+1e-10)*100,s=[new W,new W,new W],r=new W,a=new W,o=new W,c=new W;function l(x){const f=~~(x.x*i),d=~~(x.y*i),C=~~(x.z*i);return`${f},${d},${C}`}const u=n.index?n.toNonIndexed():n,h=u.attributes.position,p={};for(let x=0,f=h.count/3;x<f;x++){const d=3*x,C=s[0].fromBufferAttribute(h,d+0),M=s[1].fromBufferAttribute(h,d+1),b=s[2].fromBufferAttribute(h,d+2);r.subVectors(b,M),a.subVectors(C,M);const U=new W().crossVectors(r,a).normalize();for(let D=0;D<3;D++){const N=s[D],F=l(N);F in p||(p[F]=[]),p[F].push(U)}}const m=new Float32Array(h.count*3),g=new Qt(m,3,!1);for(let x=0,f=h.count/3;x<f;x++){const d=3*x,C=s[0].fromBufferAttribute(h,d+0),M=s[1].fromBufferAttribute(h,d+1),b=s[2].fromBufferAttribute(h,d+2);r.subVectors(b,M),a.subVectors(C,M),o.crossVectors(r,a).normalize();for(let U=0;U<3;U++){const D=s[U],N=l(D),F=p[N];c.set(0,0,0);for(let S=0,w=F.length;S<w;S++){const k=F[S];o.dot(k)>t&&c.add(k)}c.normalize(),g.setXYZ(d+U,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}const Co='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1657 1000"><path fill="#fff" fill-rule="evenodd" d="M1001.2 604.4 L975.4 552.8 L970.5 549.8 L957.0 527.6 L920.1 490.8 L896.8 473.0 L856.3 451.5 L851.4 446.6 L796.1 428.7 L767.8 425.1 L762.9 422.0 L738.9 420.8 L696.6 465.0 L695.3 469.3 L679.4 484.6 L657.2 512.3 L634.5 533.8 L632.7 539.3 L608.7 562.0 L606.9 567.0 L593.4 580.5 L592.8 586.0 L598.3 589.7 L737.7 592.1 L773.3 604.4 L799.1 624.1 L817.0 646.8 L828.6 675.1 L830.5 721.7 L828.6 735.3 L816.3 765.4 L790.5 794.8 L777.6 804.7 L762.3 812.0 L722.4 823.1 L140.7 821.3 L133.3 824.3 L95.2 874.7 L89.7 878.4 L68.8 908.5 L45.5 934.3 L25.2 963.1 L1.2 989.6 L0.6 997.5 L16.6 999.4 L724.8 996.9 L783.8 988.9 L860.6 963.1 L863.6 958.8 L874.1 955.2 L902.9 936.1 L949.0 892.5 L968.1 867.3 L969.9 861.2 L975.4 856.9 L989.6 826.2 L993.9 821.9 L996.3 809.0 L1001.2 804.1 L1012.9 759.8 L1016.0 708.8 L1012.9 649.9 Z M1162.8 7.4 L1129.6 41.8 L1106.9 70.6 L1091.5 85.4 L1090.3 89.7 L1084.8 92.8 L1037.5 151.1 L1021.5 167.1 L1018.4 176.3 L1176.9 180.6 L1344.6 180.0 L1358.7 181.2 L1396.2 192.9 L1409.7 199.6 L1431.2 217.4 L1443.5 233.4 L1445.3 240.2 L1450.9 244.5 L1461.9 288.7 L1460.1 317.0 L1451.5 345.8 L1433.7 372.2 L1415.8 388.8 L1382.1 407.2 L1356.9 412.8 L1066.3 412.2 L1038.7 416.5 L962.5 417.1 L963.1 422.6 L983.4 439.2 L1019.7 482.8 L1040.5 522.1 L1045.5 526.4 L1068.2 588.5 L1123.5 590.9 L1361.2 590.3 L1396.2 598.3 L1423.8 613.0 L1451.5 640.7 L1462.5 662.8 L1469.3 683.7 L1469.3 726.7 L1457.0 759.2 L1444.1 778.9 L1412.2 805.3 L1388.2 815.7 L1361.2 822.5 L1145.0 823.1 L1123.5 826.2 L1108.1 856.3 L1089.7 882.1 L1067.0 907.9 L1046.1 938.6 L1041.2 941.6 L1019.7 968.7 L995.7 990.8 L996.3 996.9 L1048.5 997.5 L1360.6 996.9 L1417.1 988.9 L1450.2 981.0 L1495.1 963.1 L1498.8 958.8 L1538.7 937.3 L1582.9 899.3 L1602.0 875.3 L1603.8 869.2 L1608.7 866.7 L1627.1 834.2 L1629.0 824.9 L1635.1 815.7 L1646.2 786.2 L1648.6 768.4 L1652.9 761.7 L1655.4 675.7 L1653.6 650.5 L1648.0 638.2 L1645.6 621.6 L1633.9 590.9 L1629.0 584.8 L1628.4 578.6 L1617.3 561.4 L1590.9 528.3 L1559.6 497.5 L1560.2 492.0 L1584.2 469.3 L1602.0 443.5 L1603.8 436.7 L1608.1 433.7 L1627.1 392.5 L1629.6 377.8 L1633.9 371.0 L1640.7 336.6 L1642.5 281.3 L1639.4 250.0 L1627.8 199.0 L1608.7 156.6 L1603.8 153.6 L1601.4 145.6 L1582.9 117.9 L1538.1 73.7 L1522.7 64.5 L1519.7 59.6 L1488.3 40.5 L1449.6 24.0 L1428.7 19.7 L1422.0 15.4 L1379.0 8.6 Z M45.5 393.7 L70.6 444.1 L87.2 465.6 L88.5 470.5 L108.7 493.9 L153.6 531.3 L202.7 558.4 L242.6 570.0 L301.0 578.6 L517.2 578.6 L595.2 494.5 L608.7 476.7 L633.3 451.5 L634.5 447.2 L658.5 424.4 L662.2 415.2 L658.5 412.2 L323.7 411.5 L301.0 407.9 L282.6 400.5 L255.5 382.7 L229.7 354.4 L221.7 337.8 L217.4 321.9 L215.6 288.7 L219.3 261.7 L229.7 235.3 L240.8 219.3 L263.5 199.6 L271.5 197.2 L275.2 192.9 L317.6 180.0 L930.0 179.4 L1063.3 30.7 L1066.3 24.6 L1081.7 9.2 L1082.9 2.5 L1081.1 0.6 L316.3 0.6 L281.3 3.7 L230.3 16.0 L226.7 20.3 L213.1 22.7 L177.5 40.5 L173.8 45.5 L159.7 52.8 L134.5 72.5 L89.7 119.8 L87.2 126.5 L70.6 147.4 L69.4 153.6 L65.1 157.2 L52.8 181.8 L38.1 225.4 L30.7 277.0 L30.1 306.5 L33.2 343.4 Z"/></svg>',qc="#0a0a0b",Ev=Co.match(/ d="([^"]+)"/)[1],ss=Co.match(/viewBox="([^"]+)"/)[1];let Gl=0;const oi=n=>`<svg viewBox="${ss}" width="${n*ss.split(" ")[2]/ss.split(" ")[3]}" height="${n}" style="display:block;flex:none" aria-hidden="true"><defs><linearGradient id="sbg${++Gl}" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#f4f5f7"/><stop offset=".5" stop-color="#a9aeb5"/><stop offset="1" stop-color="#e9ebee"/></linearGradient></defs><path fill="url(#sbg${Gl})" fill-rule="evenodd" d="${Ev}"/></svg>`;function jc(n,e=[]){const t=new Lc;t.background=new Xe(0);const i=(a,o,c,l)=>{const u=new It(new ai(a,o),new fr({color:new Xe(1,1,1).multiplyScalar(l),side:sn}));u.position.set(...c),u.lookAt(0,0,0),t.add(u)};i(12,2,[0,7,1],2.2),i(1,9,[-7,1,3.5],6),i(.6,9,[7,1,1],3),i(10,.6,[0,1.5,-7],2.5),i(16,2.2,[0,-.6,9],.38),i(9,3,[2,-1,9],.06),e.forEach(([a,o,c,l])=>i(a,o,c,l));const s=new to(n),r=s.fromScene(t,.03).texture;return s.dispose(),r}function Tv(n,e,t,i,s=new W,r=.78){const a=new mr(new ai(60,60),{textureWidth:Math.round(e*.6),textureHeight:Math.round(t*.6),color:2763311,clipBias:.003});a.rotation.x=-Math.PI/2,a.position.set(s.x,i,s.z),n.add(a);const o=new It(new ai(60,60),new yt({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Xe(qc)},uDim:{value:r}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        varying vec2 vUv; uniform vec3 uColor; uniform float uDim;
        void main(){
          float d = length(vUv - 0.5) * 2.0;
          float a = mix(uDim, 1.0, smoothstep(0.02, 0.16, d));
          gl_FragColor = vec4(uColor, a);
        }`}));o.rotation.x=-Math.PI/2,o.position.set(s.x,i+.001,s.z),n.add(o)}const Av={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.55},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 p = vUv - 0.5;
      float v = smoothstep(0.95, 0.25, length(p * vec2(1.0, 1.2)));
      c.rgb *= mix(1.0 - uVignette, 1.0, v);
      c.rgb += (rand(vUv * 1024.0 + fract(uTime)) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};new Hc({color:13817306,metalness:1,roughness:.15,anisotropy:.45,clearcoat:.5,clearcoatRoughness:.18});const Rv=2.12,rr=new Hc({color:15790837,metalness:1,roughness:.3,anisotropy:.8,anisotropyRotation:Math.PI/4,clearcoat:.6,clearcoatRoughness:.12,envMapIntensity:1});function Cv(){const e=document.createElement("canvas");e.width=e.height=1024;const t=e.getContext("2d");t.fillStyle="#e6e6e6",t.fillRect(0,0,1024,1024);let i=7;const s=()=>(i=i*16807%2147483647)/2147483647;for(let a=2;a<1024;a+=1.5){const o=222+s()*33;t.strokeStyle=`rgb(${o},${o},${o})`,t.lineWidth=1+s()*1.5,t.beginPath(),t.arc(1024*.42,1024*.5,a,0,Math.PI*2),t.stroke()}const r=new Wd(e);return r.colorSpace=Tt,r.wrapS=r.wrapT=er,r.repeat.set(1/1700,1/1700),r.offset.set(.5,.5),r.anisotropy=8,r}let $s=null;function Lv(){if($s)return $s;const n=new sr().parse(Co),[,,e,t]=ss.split(" ").map(Number);return $s=n.paths.flatMap(i=>sr.createShapes(i)).map(i=>{const s=i.getPoints().map(o=>new fe(o.x-e/2,t/2-o.y)),r=new Ci(s),a=s.reduce((o,c)=>o.add(c),new fe).divideScalar(s.length);return{shape:r,c:a}}).sort((i,s)=>i.c.x+i.c.y*.01-(s.c.x+s.c.y*.01)),$s}function Pv(n){const e=n.attributes.position,t=n.attributes.normal,i=new W,s=new W,r=new W;for(let a=0;a<e.count;a+=3){i.fromBufferAttribute(e,a),s.fromBufferAttribute(e,a+1),r.fromBufferAttribute(e,a+2);const o=s.sub(i).cross(r.sub(i)).normalize();if(Math.abs(o.z)>.999)for(let c=0;c<3;c++)t.setXYZ(a+c,0,0,Math.sign(o.z))}t.needsUpdate=!0}function Iv(){const n=new Qi,[,,,e]=ss.split(" ").map(Number),t=Rv/e,i=1/t,s=Lv().map(({shape:r,c:a})=>{let o=new Eo(r,{depth:.3*i,bevelEnabled:!0,bevelThickness:.035*i,bevelSize:.024*i,bevelSegments:5,curveSegments:1});o.translate(0,0,-.15*i),o=wv(o,Math.PI/6),Pv(o),o.scale(t,t,t),a.multiplyScalar(t);const c=new It(o,rr);return c.userData.c=a,n.add(c),c});return n.userData.pieces=s,n}const ar=n=>Math.min(1,Math.max(0,n)),io=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Dv=n=>1+2.2*Math.pow(n-1,3)+1.2*Math.pow(n-1,2),Uv=[[-2.6,1.8,-2.2,.5],[-1.2,-2.4,1.6,-.6],[3.2,.6,-1.4,.8]];function Nv(n,e,t){if(n.userData.pieces.forEach((i,s)=>{const r=ar((e-.2-s*.22)/1.7),a=Dv(r),[o,c,l,u]=Uv[s];i.position.set(o*(1-a),c*(1-a),l*(1-a)),i.rotation.set(u*.6*(1-a),-u*(1-a),u*.3*(1-a))}),t){const s=-.9+io(ar((e-2.4)/1.5))*1.5+Math.sin(Math.max(0,e-3.9)*.3)*.12;t.environmentRotation.y=s,rr.envMapRotation.y=s}}function Fv(n){rr.envMap=jc(n,[[6,4,[-3.5,3,8],.85],[4,3,[4,-2,8],.2]]),rr.map=Cv()}const Ov=typeof window<"u"&&window.SB_CONFIG||{},Pn=(n,e,t)=>Ov[n]??(e||t),At={BOOKING_URL:Pn("BOOKING_URL",void 0,""),BOOKING_EMBED:Pn("BOOKING_EMBED",null,!0),FORM_ENDPOINT:Pn("FORM_ENDPOINT",void 0,""),FORM_MODE:Pn("FORM_MODE",null,"auto"),CONTACT_EMAIL:Pn("CONTACT_EMAIL",null,""),COMMUNITY_URL:Pn("COMMUNITY_URL",void 0,""),SHOW_PROPOSED:Pn("SHOW_PROPOSED",null,!1),MOCKUP_TOOL_URL:Pn("MOCKUP_TOOL_URL",void 0,"../index.html")},Yc="1.0.0",mt=(n,e=!1)=>({value:n,approved:e}),wn=[{code:"CR",n:"01",id:"response",name:"Client Response",scope:"Lead capture, communication, CRM, booking and follow-up",job:"Answer, follow up and book every lead",problem:"Calls go to voicemail, texts sit unanswered and leads go cold before anyone follows up. Every missed inquiry is a job someone else books.",outcome:"Every call, text and form is answered in seconds and followed up until it books or closes. All of it is visible in one pipeline.",process:["Lead reaches out","Instant reply","Qualified","Booked","Followed up"],upgrades:"Extra phone lines or locations, bilingual receptionist, custom qualification flows"},{code:"GR",n:"02",id:"growth",name:"Growth",scope:"Advertising, lead generation, conversion and retention",job:"Create a steady flow of new demand",problem:"Work comes in waves. Referrals slow down, posting is inconsistent, and ad money disappears without a clear picture of what it brought back.",outcome:"Campaigns, landing pages and content that feed straight into Client Response, with reporting from ad to booked job to revenue.",process:["Campaign","Landing page","Inquiry","CRM","Report"],upgrades:"More ad platforms, more content volume, video production"},{code:"BB",n:"03",id:"build",name:"Brand & Build",scope:"Websites, branding, product design and digital experiences",job:"Look like the obvious choice",problem:"An outdated brand or a slow, confusing website makes good businesses look small. Visitors leave before they ever call.",outcome:"A clear brand and a fast, modern site that looks established and points every visitor to one next step, wired into Client Response from day one.",process:["Positioning","Structure","Design","Launch","Measure"],upgrades:"Extra pages, copywriting, photo and video shoots"},{code:"AO",n:"04",id:"ops",name:"AI & Operations",scope:"AI agents, workflows, dashboards and custom software",job:"Connect the tools and remove the busywork",problem:"Information lives in five apps, the team repeats the same manual steps every day, and the owner can’t see what is happening without asking.",outcome:"AI agents and automations that connect your tools and remove repeat work, plus a dashboard that shows the business at a glance.",process:["Map the process","Connect tools","Build the agent","Dashboard","SOPs"],upgrades:"More agents, more data sources, extra user seats"}],Kc=[{code:"CR-01",system:"CR",name:"AI receptionist",soldAs:"setup+managed",deliverables:"Answers calls and texts 24/7, qualifies, hands off hot leads",client:"Services, pricing rules, service area, FAQs",ongoing:"We tune scripts and review calls monthly"},{code:"CR-02",system:"CR",name:"Missed-call text back",soldAs:"setup+managed",deliverables:"Tracking number, instant text on every missed call",client:"Carrier or number access",ongoing:"We monitor delivery"},{code:"CR-03",system:"CR",name:"Follow-up sequences",soldAs:"setup+managed",deliverables:"Text and email follow-up until booked or closed, reminders, no-show recovery",client:"Approve tone and offers",ongoing:"We maintain and improve sequences"},{code:"CR-04",system:"CR",name:"Online booking",soldAs:"setup+managed",deliverables:"Calendar, booking rules, confirmations",client:"Calendar access, keeps availability current",ongoing:"We maintain the rules"},{code:"CR-05",system:"CR",name:"CRM and pipeline",soldAs:"setup+managed",deliverables:"Pipeline stages, lead records, owner alerts",client:"Marks jobs won, lost or completed",ongoing:"We maintain the pipeline and automations"},{code:"GR-01",system:"GR",name:"Meta ads management",soldAs:"managed",deliverables:"Campaign build, creative testing, weekly optimisation",client:"Ad account, ad budget, job photos",ongoing:"We run campaigns. Ad spend is billed to your own account"},{code:"GR-02",system:"GR",name:"Landing pages",soldAs:"setup+managed",deliverables:"Campaign pages wired into your CRM",client:"Offer, proof, approval",ongoing:"We host and test pages"},{code:"GR-03",system:"GR",name:"Social content",soldAs:"managed",deliverables:"A set number of posts a month",client:"Photos and video from jobs",ongoing:"We produce, you approve"},{code:"GR-04",system:"GR",name:"Reporting and attribution",soldAs:"managed",deliverables:"Tracking and a monthly report from lead to booked job to revenue",client:"Job outcomes in the CRM",ongoing:"We report and review monthly"},{code:"GR-05",system:"GR",name:"Retention",soldAs:"managed",deliverables:"Review requests, past-customer reactivation campaigns",client:"Customer list",ongoing:"We run campaigns"},{code:"BB-01",system:"BB",name:"Website",soldAs:"project",deliverables:"Strategy, design, build, launch, wired into Client Response",client:"Content, photos, one decision-maker",ongoing:"Optional care plan (BB-05)"},{code:"BB-02",system:"BB",name:"Brand kit",soldAs:"project",deliverables:"Logo, colour, type, templates, usage guide",client:"Story, references, feedback rounds",ongoing:"None"},{code:"BB-03",system:"BB",name:"Graphics and templates",soldAs:"project|add-on",deliverables:"Social, print and sales templates",client:"Brand assets",ongoing:"None"},{code:"BB-04",system:"BB",name:"3D mockups and motion",soldAs:"project",deliverables:"Device mockups, product shots, logo animation",client:"Screens, products, logo files",ongoing:"None"},{code:"BB-05",system:"BB",name:"Website care plan",soldAs:"managed",deliverables:"Hosting, updates, small edits, uptime checks",client:"Edit requests",ongoing:"We maintain the site"},{code:"AO-01",system:"AO",name:"Custom AI agent",soldAs:"setup+managed",deliverables:"One agent for one defined workflow",client:"A process walkthrough, tool access",ongoing:"We monitor and improve it"},{code:"AO-02",system:"AO",name:"Owner dashboard",soldAs:"setup+managed",deliverables:"KPIs from the CRM, ads and calls in one view",client:"Data access",ongoing:"We maintain data connections"},{code:"AO-03",system:"AO",name:"Integrations and automation",soldAs:"project",deliverables:"Connected tools, automated handoffs",client:"Tool access, admin contact",ongoing:"Optional monitoring"},{code:"AO-04",system:"AO",name:"SOPs and training",soldAs:"project",deliverables:"Documented processes, team walkthrough",client:"Time with the person who does the job",ongoing:"Optional updates"},{code:"AO-05",system:"AO",name:"Custom software",soldAs:"project",deliverables:"Portals, internal tools, client apps, scoped per build",client:"Requirements sign-off",ongoing:"Optional support retainer"}],$t=[{id:"capture",name:"Capture",was:"Basic",outcome:"Every lead answered, followed up and booked",services:["CR-01","CR-02","CR-03","CR-04","CR-05"],addOns:["GR-05","AO-01","AO-02","BB-05"],implementation:mt(1500),management:mt(1200),term:mt("3-month minimum"),limits:mt(null),performance:!1},{id:"pipeline",name:"Pipeline",was:"Growth",outcome:"A steady flow of new leads, booked automatically",services:["CR-01","CR-02","CR-03","CR-04","CR-05","GR-01","GR-02","GR-03","GR-04"],addOns:["GR-05","AO-01","AO-02","BB-05"],implementation:mt(2500),management:mt(2e3),term:mt("3-month minimum"),limits:mt(null),performance:!0,featured:!0},{id:"command",name:"Command",was:"Full",outcome:"The whole business connected and visible in one dashboard",services:["CR-01","CR-02","CR-03","CR-04","CR-05","GR-01","GR-02","GR-03","GR-04","GR-05","AO-01","AO-02"],addOns:["BB-05","AO-03"],implementation:mt(4500),management:mt(3e3),term:mt("Month-to-month"),limits:mt(null),performance:!0}],kv=[{code:"BB-01",name:"Website",note:"Pages, copy, integrations",from:mt(null)},{code:"BB-02",name:"Brand kit",note:"Logo, colour, type, templates",from:mt(null)},{code:"BB-03",name:"Graphics and templates",note:"Social, print, sales",from:mt(null)},{code:"BB-04",name:"3D mockups and motion",note:"Scenes, product shots, logo reveals",from:mt(null)},{code:"AO-01",name:"Custom AI agent",note:"One workflow, tools connected",from:mt(null)},{code:"AO-03",name:"Integrations and automation",note:"Tools and flows connected",from:mt(null)},{code:"AO-05",name:"Custom software",note:"Portals, internal tools, apps",from:mt(null)}],Bv=[{step:"Fit call",note:"Problem, budget range, decision-maker"},{step:"Scoping",note:"Larger builds get a paid session, credited to the project"},{step:"Fixed quote",note:"Codes, deliverables, revision rounds, timeline"},{step:"Deposit",note:"50% to start, 50% at launch"},{step:"Build",note:"Review checkpoints agreed up front"},{step:"Launch and handoff",note:"Walkthrough, then the option to keep it running on Capture"}],Wl={summary:"On Pipeline and Command, swap the monthly fee for 10% of each new job we bring in, or a fee that matches your ad spend. You must be running marketing with us, and only completed, paid jobs count.",rules:[["Who it’s for","Pipeline or Command, with System-Based running your campaigns above a minimum monthly ad spend"],["Tracking","Leads come in through our tracking numbers, forms or booking. Other channels don’t count"],["Implementation","Charged in full"],["Monthly floor","A reduced fee that covers tools and phone costs, plus the performance fee"],["Choice","10% per qualifying job, or a fee matching monthly ad spend. Switchable at the end of the minimum term"],["What counts","A new customer who first contacted you through our channels, booked, and whose job was completed and invoiced"],["Attribution window","First contact within 30 days before the booking"],["Excluded","Existing customers, referrals, repeat work, channels we don’t run"],["Commission basis","10% of collected revenue on the first invoice, not quoted or booked value"],["Cancellations","Cancelled and no-show jobs aren’t billable. Refunds within 30 days are credited back"],["Reporting","You mark each job’s outcome and invoice in the CRM within 14 days"]]},Ht=n=>Kc.find(e=>e.code===n),Lo=n=>wn.find(e=>e.code===n),Jc=n=>Kc.filter(e=>e.system===n);function Zc(n){const e=new Set(n);if(!e.size)return null;const t=[...e].filter(l=>Ht(l).soldAs!=="project"),i=[...e].filter(l=>Ht(l).soldAs==="project");let s=null;for(const l of $t){const u=t.filter(m=>l.services.includes(m)).length,h=l.services.filter(m=>!e.has(m)).length,p=u*10-h;u&&(!s||p>s.score)&&(s={pkg:l,score:p,covered:u})}const r=s?.pkg??null,a=r?t.filter(l=>!r.services.includes(l)):t,o=r?r.services.filter(l=>!e.has(l)):[],c=!r||a.length>2;return{pkg:r,addOns:a,projects:i,unused:o,custom:c}}const gr={line:"System-Based builds the systems behind how a business attracts customers, responds to them, books work and operates.",body:"We set up the tools and processes that answer every inquiry, bring in new customers, make your business look the part and keep your team in sync. Then we run them for you, or hand them over.",facts:[{k:"4",v:"systems"},{k:"20",v:"services"},{k:"3",v:"ways to build"}],who:"For owner-led service businesses: painting, roofing and trades, auto and detailing, hospitality and other local operations."},Qc={CR:"Respond to customers, qualify inquiries, track conversations and keep follow-up moving.",GR:"Create new demand and see which campaigns bring in real opportunities.",BB:"Build the identity, website and digital experience customers trust.",AO:"Connect tools, reduce busywork and give your team a clearer view of the business."},eu={capture:"For when inquiries and follow-ups are falling through the cracks.",pipeline:"For when you need more demand, and a way to convert and track it.",command:"For when you want connected visibility, agents and coordination across the operation."},zv=[{q:"What’s the difference between a system and a package?",a:"The four systems are what we do: Client Response, Growth, Brand & Build, and AI & Operations. Packages (Capture, Pipeline, Command) are ready-made bundles of services from those systems. If none fits, we scope a custom proposal from the same services."},{q:"What am I paying for?",a:"Usually two parts. Implementation is a one-time fee to build and set up your system. Management is a monthly fee to run, monitor and improve it. Anything outside the agreed scope is quoted before it starts, and ad spend is paid from your own ad account. Exact figures are confirmed after a short scoping call."},{q:"Do I need all four systems?",a:"No. Most businesses start where work is slipping, often answering and following up on inquiries, and add more only when it makes sense. A website or brand project can also stand on its own."},{q:"Is the walkthrough on this page real?",a:"It’s an illustrative example with fictional businesses and numbers, built to show how the pieces connect. Real projects are in the Work section, and we only publish client results with their approval."},{q:"Can you work with the tools I already use?",a:"Often, yes. On the first call we look at your phone, calendar, CRM and website, then tell you what connects, what we’d replace and why. We confirm integrations during scoping rather than promising them up front."},{q:"What happens after I send my scope?",a:"We read what you shared and reply personally with a recommendation and the next step, usually a short fit call. Nothing is built or billed until you agree to a written scope."},{q:"What is the System-Based Business Community?",a:"A place to watch real systems being built, learn what works and connect with other owners and operators. It’s free to follow. Templates and done-for-you help are there if you want them, never required."}],tu=""+new URL("hero-Dm8ubQaK.jpg",import.meta.url).href,nu=""+new URL("avatar-DCwWO_Wx.jpg",import.meta.url).href,Hv=""+new URL("community-4ahijgiB.jpg",import.meta.url).href,Vv=""+new URL("banner-Czc4Ndv6.jpg",import.meta.url).href,Gv=""+new URL("story-DyAi8OBV.jpg",import.meta.url).href,Wv=""+new URL("sections-L3fdrJTW.jpg",import.meta.url).href,$v=""+new URL("pricing-BubkckJu.jpg",import.meta.url).href,Xv=""+new URL("mockup-tool-DejxXZm0.jpg",import.meta.url).href,qv=""+new URL("logo-reveal-DJRQPl5i.mp4",import.meta.url).href,jv=[{published:!0,title:"System-Based 3D identity",client:"System-Based",type:"brand",status:"live",summary:"A chrome SB monogram, a cinematic logo reveal and a full asset kit.",about:"We traced the SB monogram to vector, extruded it into spun silver and built a studio that renders every brand asset from the same 3D scene: website hero, social posts, stories, banners and the logo reveal.",built:["3D SB logo in three interlocking pieces","Cinematic logo reveal for reels and the website hero","Website, community and social asset kit","A brand system covering colour, type and motion rules"],systems:["BB"],problem:"A new company with a strong name and a 2D logo, but no visual system to carry it across a website, social and sales material.",solution:["BB-02","BB-04"],technology:["Three.js","Vector tracing","Vite","Playwright + FFmpeg rendering"],process:["Traced the master SB artwork to a vector","Extruded it into three interlocking 3D pieces","Built a studio that renders every asset from one scene","Exported stills, the logo reveal and the website hero"],results:[],observed:"One brand system now drives the website hero, social assets and the logo reveal, all from the same 3D scene.",approved:!0,clientCase:!1,links:[],media:[{video:qv,poster:nu},{img:tu},{img:Hv},{img:Gv},{img:Vv}]},{published:!0,title:"3D device mockup studio",client:"In-house tool",type:"ai",status:"demo",summary:"Drop in a screen recording and get a cinematic 3D phone video.",about:"A browser tool that puts any screen recording onto a 3D phone, with studio lighting, camera moves and video export. We use it to turn client websites, booking flows and AI receptionist demos into marketing videos.",built:["Real-time 3D phone with your video on screen","Lighting, camera and background controls","One-click System-Based black and silver look","Video recording in the browser"],systems:["BB","AO"],problem:"Turning screen recordings of websites and booking flows into marketing video took hours in editing tools.",solution:["BB-04","AO-05"],technology:["Vue","Three.js","MediaRecorder"],process:["Load a 3D phone model","Map the recording onto its screen","Add lighting, camera and export controls"],results:[],observed:"A screen recording becomes a lit, moving 3D phone video in minutes instead of hours.",approved:!0,clientCase:!1,links:[{label:"Open the tool",url:At.MOCKUP_TOOL_URL}],media:[{img:Xv}]},{published:!1,title:"Services & pricing graphics",client:"System-Based",type:"brand",status:"live",summary:"The four systems and three packages as chrome 3D graphics.",about:"The system diagram and package stack used across the site and in sales decks. Each block is a system, and packages are stacks of them, so you can see what each one adds.",built:["Four-system diagram","Pricing stack graphic","Matching social versions"],systems:["BB"],solution:["BB-03","BB-04"],approved:!0,links:[],media:[{img:Wv},{img:$v}]},{published:!0,title:"AI receptionist demo line",client:"Live demo",type:"demo",status:"soon",summary:"Call or text a real number and see how it answers, qualifies and books.",about:"A public demo of the Client Response System. Call or text the number and the AI receptionist answers like it would for your business, then books a test appointment.",built:["AI receptionist on a live phone number","Missed-call text back","Booking into a demo calendar"],systems:["CR"],solution:["CR-01","CR-02","CR-04"],approved:!0,links:[],media:[]},{published:!1,title:"Veterans Funeral Care",client:"Veterans Funeral Care",type:"site",status:"live",summary:"",about:"",built:[],systems:[],problem:"",solution:[],technology:[],process:[],results:[],approved:!1,links:[{label:"Visit site",url:""}],media:[]},{published:!1,title:"Wreck & Refine",client:"Wreck & Refine",type:"site",status:"live",summary:"",about:"",built:[],systems:[],problem:"",solution:[],technology:[],process:[],results:[],approved:!1,links:[{label:"Visit site",url:""}],media:[]},{published:!1,title:"Salvatore’s",client:"Salvatore’s",type:"site",status:"live",summary:"",about:"",built:[],systems:[],problem:"",solution:[],technology:[],process:[],results:[],approved:!1,links:[{label:"Visit site",url:""}],media:[]}],ce=(n,e=document)=>e.querySelector(n),it=(n,e=document)=>[...e.querySelectorAll(n)],G=(n="")=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ii(n){if(!n||!String(n).trim())return"";try{const e=new URL(String(n||""),location.href);return e.protocol==="https:"||e.protocol==="http:"?e.href:""}catch{return""}}const xt=matchMedia("(prefers-reduced-motion: reduce)").matches,iu=matchMedia("(hover: hover) and (pointer: fine)").matches,su=n=>({get(e){try{return window[n].getItem(e)}catch{return null}},set(e,t){try{window[n].setItem(e,t)}catch{}}}),Oi=su("sessionStorage"),$l=su("localStorage"),zn=(n,e="start")=>document.getElementById(n)?.scrollIntoView({behavior:xt?"auto":"smooth",block:e}),so=()=>(crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2)).slice(0,36),Yv=""+new URL("divine-logo-BrSPT9Op.webp",import.meta.url).href,Kv=""+new URL("wreck-wordmark-ByQ5nVxs.webp",import.meta.url).href,Jv=""+new URL("wreck-emblem-CDDHJJCb.webp",import.meta.url).href,Zv=""+new URL("veterans-logo-YYCe4wRW.webp",import.meta.url).href,Qv=""+new URL("cayena-mark-C7YsI1QL.webp",import.meta.url).href,e0=""+new URL("divine-d0-B67-zVEG.webp",import.meta.url).href,t0=""+new URL("divine-d1-BrbtMIo8.webp",import.meta.url).href,n0=""+new URL("divine-d2-BU-w49dA.webp",import.meta.url).href,i0=""+new URL("divine-d3-qiLr94ds.webp",import.meta.url).href,s0=""+new URL("divine-m0-CQCw9csa.webp",import.meta.url).href,r0=""+new URL("divine-m1-C8xNECTn.webp",import.meta.url).href,a0=""+new URL("wreck-d0-Cqps2PUd.webp",import.meta.url).href,o0=""+new URL("wreck-d1-BAA5HfCj.webp",import.meta.url).href,l0=""+new URL("wreck-d2-Cy4Qf1u_.webp",import.meta.url).href,c0=""+new URL("wreck-d3-D4yAf2pR.webp",import.meta.url).href,u0=""+new URL("wreck-m0-BGEhugVU.webp",import.meta.url).href,d0=""+new URL("wreck-m1-B-L_KI8o.webp",import.meta.url).href,h0=""+new URL("veterans-d0-DWbOsBWS.webp",import.meta.url).href,f0=""+new URL("veterans-d1-CUs15acC.webp",import.meta.url).href,p0=""+new URL("veterans-d2-DT0U_Z7I.webp",import.meta.url).href,m0=""+new URL("veterans-d3-mD_GXned.webp",import.meta.url).href,g0=""+new URL("veterans-m0-FbhpnP0T.webp",import.meta.url).href,v0=""+new URL("veterans-m1-S9HzKRSH.webp",import.meta.url).href,_0=""+new URL("cayena-d0-B8bp19D6.webp",import.meta.url).href,x0=""+new URL("cayena-d1-Dgllpaui.webp",import.meta.url).href,y0=""+new URL("cayena-d2-D91ueNmT.webp",import.meta.url).href,b0=""+new URL("cayena-d3-Cf-4FmtF.webp",import.meta.url).href,M0=""+new URL("cayena-m0-Dk6_isGp.webp",import.meta.url).href,S0=""+new URL("cayena-m1-BOb_U87_.webp",import.meta.url).href,w0=""+new URL("roc-logo-BhxeZJY2.webp",import.meta.url).href,E0=""+new URL("roc-d0-C4OF4iXl.webp",import.meta.url).href,T0=""+new URL("roc-d1-BVpEzzly.webp",import.meta.url).href,A0=""+new URL("roc-d2-BPDgWQ_v.webp",import.meta.url).href,R0=""+new URL("roc-d3-D_DZqgd_.webp",import.meta.url).href,C0=""+new URL("roc-a0-CJtNyfJS.webp",import.meta.url).href,L0=""+new URL("roc-a1-CnJVO1Nk.webp",import.meta.url).href,P0=""+new URL("roc-a2-BNvJtiRP.webp",import.meta.url).href,I0=""+new URL("roc-a3-CigTyxoi.webp",import.meta.url).href,D0=""+new URL("roc-m0-DjiCheQF.webp",import.meta.url).href,U0=""+new URL("roc-m1-dgvWeHX9.webp",import.meta.url).href,N0=""+new URL("roc-monument-designer-BUx5V2kB.html",import.meta.url).href,F0=""+new URL("guestnest-logo-J-AI07VL.webp",import.meta.url).href,O0=""+new URL("guestnest-d0-LMc5uZwP.webp",import.meta.url).href,k0=""+new URL("guestnest-d1-DLDr-NV4.webp",import.meta.url).href,B0=""+new URL("guestnest-d2-CmetfcVf.webp",import.meta.url).href,z0=""+new URL("guestnest-d3-DvitkIqH.webp",import.meta.url).href,H0=""+new URL("guestnest-m0-Cntidv9v.webp",import.meta.url).href,V0=""+new URL("guestnest-m1-DfSMMQjx.webp",import.meta.url).href,ru=[{id:"divine",published:!0,stage:"built",status:"Live",name:"Divine Detailing",place:"Stuart, FL",industry:"Mobile yacht & luxury auto detailing",summary:"An estimate-first website, AI responses and Meta ads, all feeding one pipeline the owner can see.",built:["Brand and estimate-first website","Intake that turns every request into a customer record","AI processes: a custom response to each inquiry","Meta ad campaigns and content","Owner notifications when anything changes"],systems:["CR","GR","BB","AO"],theme:{bg:"#07090c",ink:"#eef0f3",accent:"#d4932a",light:!1},logo:{src:Yv},views:[{img:e0,cap:"The first screen sells the result and asks for the estimate"},{img:t0,cap:"Services, each with its own path to a quote"},{img:n0,cap:"Intake: the boat, the location and the job, in one short form"},{img:i0,cap:"Real before-and-after work, no stock photos"}],phone:[{img:s0,cap:"Every service, one tap from a quote"},{img:r0,cap:"Owner-led, and the site says so"}],results:{title:"Meta ads",period:"Oct 20 – Nov 20, 2026",source:"Divine Detailing ad account, GoHighLevel Ad Manager",kpis:[{label:"Impressions",value:29120,format:"k"},{label:"Clicks",value:685},{label:"Facebook leads",value:26},{label:"Cost per lead",value:35.8,format:"usd"},{label:"Avg. cost per click",value:1.36,format:"usd"}],series:[{label:"Impressions",points:[6200,6700,5900,7200,3120]},{label:"Clicks",points:[182,144,151,127,81]},{label:"Leads",points:[7,6,5,3,5]}]},links:[{label:"Visit the live site",url:"https://divinedetailingestimate.com/"}],scenario:"response"},{id:"wreck",published:!0,stage:"built",status:"Live",name:"Wreck & Refine",place:"Rochester, NY",industry:"Landscaping, cleanups & snow removal",summary:"A website that books estimates, answers every lead and keeps the jobs, customers and seasons organised.",built:["Website with an estimate request built in","Lead response the moment a request comes in","Custom notifications for the owner and crew","Customer database","Operations: seasonal services and snow-route sign-ups"],systems:["CR","BB","AO"],theme:{bg:"#0a0b0a",ink:"#f2f2ee",accent:"#5fd03f",light:!1},emblem:{src:Jv},logo:{src:Kv,wide:!0},views:[{img:a0,cap:"A bold first screen with the estimate one tap away"},{img:o0,cap:"Wrecked, then refined: real before-and-after projects"},{img:l0,cap:"Every service, including the winter snow route"},{img:c0,cap:"Straight answers that pre-qualify the job"}],phone:[{img:u0,cap:"Built for the phone first"},{img:d0,cap:"Before and after, swipe by swipe"}],links:[{label:"Visit the live site",url:"https://wreckandrefinelandscaping.com/estimate"}],scenario:"ops"},{id:"veterans",published:!0,stage:"built",status:"Live",name:"Veterans Funeral Care",place:"Clearwater, FL",industry:"Funeral home & cremation",summary:"A calm, respectful website with published prices, a guided intake and the integrations behind it.",built:["Website design","Guided intake: three questions to the right next step","Published pricing families can read on their own","Integrations behind the intake"],systems:["CR","BB"],theme:{bg:"#ffffff",ink:"#0e2b58",accent:"#c8102e",light:!0},logo:{src:Zv,wide:!0},views:[{img:h0,cap:"Veterans at the heart of the first screen"},{img:f0,cap:"Clear, published prices for every plan"},{img:p0,cap:"Intake: three questions to the right next step"},{img:m0,cap:"Plan ahead, without pressure"}],phone:[{img:g0,cap:"Calm and readable on any phone"},{img:v0,cap:"Military honors, explained plainly"}],links:[],scenario:"brand"},{id:"roc",published:!0,stage:"built",status:"Website + software",name:"ROC Memorials & Monuments",place:"Hilton, NY",industry:"Custom monuments & memorials",summary:"A full website and a monument designer: families design the stone themselves, and ROC gets a production-ready proof.",built:["Full website: memorial types, design collection, granite and artwork libraries","Cemetery check: the rules for each cemetery before anyone designs","ROC Monument Designer: shape, granite, size, lettering, art and the back of the stone","Proof PDF and design summary, built for the production handoff","Staff view: production checks, supplier sheets and work-order routing","Ready to send each design into the GoHighLevel pipeline as a deal"],systems:["BB","CR","AO"],theme:{bg:"#f5f2ee",ink:"#231f20",accent:"#2f5d46",light:!0},logo:{src:w0,wide:!0},views:[{img:E0,cap:"Made to remember someone, at the Hilton showroom"},{img:T0,cap:"Every kind of memorial, with real ROC work"},{img:A0,cap:"The details are what make it theirs"},{img:R0,cap:"Cemetery check before anyone falls in love with a stone"}],app:{label:"Designer",host:"ROC Monument Designer",views:[{img:C0,cap:"Start from a design or the kind of memorial"},{img:L0,cap:"Real granite colours, rendered on the stone"},{img:P0,cap:"Names, dates and lettering, laid out live"},{img:I0,cap:"Review: production checks and a sample estimate"}]},phone:[{img:D0,cap:"Call, design or visit, from any phone"},{img:U0,cap:"The designer works on a phone too"}],demo:{title:"ROC Monument Designer",src:N0,note:"A working copy. Nothing you enter is sent to ROC or saved."},links:[],scenario:"brand"},{id:"guestnest",published:!0,stage:"built",status:"Live",name:"My Guest Nest",place:"Florida's Treasure Coast",industry:"Concierge · Co-host · Home watch",summary:"A new brand and website for a local concierge, co-hosting and home-watch company, with a path for owners and one for guests.",built:["Brand and logo","Website with separate paths for property owners and vacation guests","Co-hosting, home watch and concierge, each with a clear next step","Concierge setups guests can choose before they arrive","Service-area check before an owner signs up"],systems:["BB","CR"],theme:{bg:"#ffffff",ink:"#12304d",accent:"#c9a35a",light:!0},logo:{src:F0},views:[{img:O0,cap:"A trusted local hand, with a home-watch report up front"},{img:k0,cap:"Owners and guests each get their own path"},{img:B0,cap:"Co-hosting, home watch and concierge, explained simply"},{img:z0,cap:"Concierge setups guests can pick before they arrive"}],phone:[{img:H0,cap:"Built for owners checking in from anywhere"},{img:V0,cap:"Photos and updates with every visit"}],links:[],scenario:"brand"},{id:"cayena",published:!0,stage:"building",status:"Coming soon",name:"Cayena Food Garden",place:"Eau Gallie Arts District, Melbourne, FL",industry:"Restaurant",summary:"A restaurant opening in the Eau Gallie Arts District: the brand, the coming-soon site and the reservations behind it.",built:["Brand and logo","Coming-soon website that builds the guest list","Reservations and guest intake","Business operations, ready for opening day"],systems:["BB","CR","AO"],theme:{bg:"#0d0b08",ink:"#f6efe2",accent:"#d8b45a",light:!1},logo:{src:Qv,mask:!0},views:[{img:_0,cap:"A new table is coming to Eau Gallie"},{img:x0,cap:"Built for the district and the people in it"},{img:y0,cap:"Guest intake: what would bring you in?"},{img:b0,cap:"Cayena is taking root"}],phone:[{img:M0,cap:"The same experience on a phone"},{img:S0,cap:"Get your seat: the guest list in a few taps"}],links:[{label:"Visit the live site",url:"https://www.cayenafoodgarden.com/home"}],scenario:"brand"},{id:"faith",published:!0,stage:"building",status:"Launching December",name:"Faith Found",place:"",industry:"Product launch",summary:"Product development, brand and website, with intake and operations ready for launch.",built:["Product development","Website and brand","Intake and business operations"],systems:["BB","CR","AO"],theme:{bg:"#0e0c10",ink:"#f3eee6",accent:"#c9a56a",light:!1},wordmark:{top:"Faith Found",sub:"Launching December"},links:[]},{id:"hunters",published:!1,stage:"building",status:"Live build",name:"Hunters Marine Detailing",place:"",industry:"Marine detailing",summary:"A live build: follow the pitch as it is designed, from first concept to launch.",built:["Pitch concept","Website preview"],systems:["BB"],theme:{bg:"#06101a",ink:"#eef3f7",accent:"#4fb0d8",light:!1},wordmark:{top:"Hunters Marine",sub:"Live build"},links:[]}],Ki=ru.filter(n=>n.published),aa=n=>ru.find(e=>e.id===n),au="sb-scope-v2",G0=()=>({selectedProblemId:null,scenarioId:"response",recommendedSystem:null,recommendedPackageId:null,acceptedPackageId:null,selectedServiceIds:[],selectedProjectIds:[],customScope:!1,currentStoryBeat:0,communityInterest:!1,communityEntryPoint:null,journeySource:null});let Fn=G0();try{const n=JSON.parse(Oi.get(au)||"null");n&&typeof n=="object"&&(Fn={...Fn,...n})}catch{}const ro=new Set,Rt=()=>Fn;function en(n){Fn={...Fn,...n};const e={...Fn};delete e.currentStoryBeat,Oi.set(au,JSON.stringify(e)),ro.forEach(t=>t(Fn))}const vr=n=>(ro.add(n),()=>ro.delete(n));function ou(n){const e=new Set(Fn.selectedServiceIds);return e.has(n)?e.delete(n):e.add(n),en({selectedServiceIds:[...e]}),e.has(n)}const or=new Set;function ot(n,e={},{once:t=!1}={}){const i=n+JSON.stringify(e);if(!(t&&or.has(i))){or.add(i);try{window.dataLayer?.push({event:n,...e}),window.gtag?.("event",n,e),window.fbq?.("trackCustom",n,e)}catch{}}}function W0(n){if(!or.has("lead:"+n)){or.add("lead:"+n);try{window.fbq?.("track","Lead"),window.gtag?.("event","generate_lead")}catch{}}}const Xl=n=>wn.find(e=>e.code===n)?.name||n,Ji=n=>`--c-bg:${n.theme.bg};--c-ink:${n.theme.ink};--c-accent:${n.theme.accent}`,In=n=>!!(n.views&&n.views.length),ql=n=>{try{return new URL(n).host.replace(/^www\./,"")}catch{return""}};function Kn(n,{big:e=!1}={}){if(n.logo?.mask)return`<span class="lg lg-mask${e?" big":""}" role="img" aria-label="${G(n.name)} logo" style="--lg:url('${n.logo.src}')"></span>`;if(n.logo)return`<span class="lg${n.logo.wide?" wide":""}${e?" big":""}${n.theme.light?" on-light":""}" style="--lg:url('${n.logo.src}')"><img src="${n.logo.src}" alt="${G(n.name)} logo" decoding="async" /></span>`;const t=n.wordmark||{top:n.name,sub:""};return`<span class="lg lg-word${e?" big":""}" role="img" aria-label="${G(n.name)}"><b>${G(t.top)}</b>${t.sub?`<small>${G(t.sub)}</small>`:""}</span>`}function ao(n,e){return e==="k"?(n/1e3).toFixed(1).replace(/\.0$/,"")+"K":e==="usd"?"$"+n.toFixed(2):Math.round(n).toLocaleString("en-US")}function $0(n,e=220,t=54){const i=Math.max(...n),s=Math.min(0,...n),r=e/(n.length-1),a=n.map((l,u)=>[u*r,t-4-(l-s)/(i-s||1)*(t-10)]);let o=`M${a[0][0]},${a[0][1]}`;for(let l=1;l<a.length;l++){const[u,h]=a[l-1],[p,m]=a[l],g=(u+p)/2;o+=` C${g},${h} ${g},${m} ${p},${m}`}const c=`${o} L${e},${t} L0,${t} Z`;return`<svg viewBox="0 0 ${e} ${t}" preserveAspectRatio="none" aria-hidden="true"><path class="sp-area" d="${c}"/><path class="sp-line" pathLength="1" d="${o}"/>${a.map(([l,u])=>`<circle cx="${l}" cy="${u}" r="2.6"/>`).join("")}</svg>`}function X0(n){return n?`<div class="res">
    <div class="res-head"><span class="res-live"><i></i>${G(n.title)}</span><span>${G(n.period)}</span></div>
    <div class="res-kpis">${n.kpis.map(e=>`<div><strong data-count="${e.value}" data-format="${e.format||""}">${ao(e.value,e.format)}</strong><em>${G(e.label)}</em></div>`).join("")}</div>
    <div class="res-sparks">${(n.series||[]).map(e=>`<figure><figcaption>${G(e.label)} · weekly</figcaption>${$0(e.points)}</figure>`).join("")}</div>
    <p class="res-src">Source: ${G(n.source)}. Real numbers, not projections.</p>
  </div>`:""}function q0(){const n=Ki.filter(E=>E.stage==="built"),e=Ki.filter(E=>E.stage==="building"),t=ce("#brand-wall");t.innerHTML=Ki.map((E,A)=>`<button type="button" class="bw-tile${E.theme.light?" light":""}" style="${Ji(E)};--i:${A}" ${In(E)?`data-film="${E.id}"`:`data-show="${E.stage}" data-focus="${E.id}"`} aria-label="${G(E.name)}: ${In(E)?"watch the project":G(E.status)}">
      <span class="bw-stage">${Kn(E)}<span class="bw-sheen" aria-hidden="true"></span></span>
      <span class="bw-cap"><strong>${G(E.name)}</strong><span>${G(E.status)}${E.place?" · "+G(E.place.split(",").slice(-2).join(",").trim()):""}</span></span>
      <span class="bw-load" aria-hidden="true"></span>
    </button>`).join("");const i=()=>t.classList.add("lit");if(xt||!("IntersectionObserver"in window))i();else{const E=new IntersectionObserver(A=>{A.some(v=>v.isIntersecting)&&(i(),E.disconnect())},{threshold:.25});E.observe(t)}if(iu&&!xt){const E=A=>{A.style.removeProperty("--rx"),A.style.removeProperty("--ry")};t.addEventListener("pointermove",A=>{const v=A.target.closest(".bw-tile");if(it(".bw-tile",t).forEach(B=>B!==v&&E(B)),!v)return;const _=v.getBoundingClientRect();v.style.setProperty("--rx",((A.clientY-_.top)/_.height-.5)*-10+"deg"),v.style.setProperty("--ry",((A.clientX-_.left)/_.width-.5)*12+"deg")}),t.addEventListener("pointerleave",()=>it(".bw-tile",t).forEach(E))}const s=E=>`<article class="proj${E.theme.light?" light":""}" id="proj-${E.id}" style="${Ji(E)}">
    <div class="proj-stage">
      ${In(E)?`<button type="button" class="proj-shot" data-film="${E.id}" aria-label="Watch the ${G(E.name)} project">
              <span class="proj-browser"><span class="proj-chrome"><i></i><i></i><i></i><em>${G(ql(E.links?.[0]?.url||"")||E.name)}</em></span><img src="${E.views[0].img}" alt="" loading="lazy" decoding="async" /></span>
              <span class="proj-phone"><img src="${E.phone[0].img}" alt="" loading="lazy" decoding="async" /></span>
              <span class="proj-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
            </button>`:`<div class="proj-word">${Kn(E,{big:!0})}</div>`}
      ${In(E)?`<span class="proj-logo">${Kn(E)}</span>`:""}
    </div>
    <div class="proj-info">
      <div class="proj-meta"><span class="pill ${E.stage==="built"?"live":"soon"}">${G(E.status)}</span><span>${G(E.industry)}${E.place?" · "+G(E.place):""}</span></div>
      <h3>${G(E.name)}</h3>
      <p>${G(E.summary)}</p>
      <ul class="proj-built">${E.built.map(A=>`<li>${G(A)}</li>`).join("")}</ul>
      <div class="sys-chips">${E.systems.map(A=>`<span>${G(Xl(A))}</span>`).join("<i>+</i>")}</div>
      ${E.results?`<div class="proj-res"><strong>${E.results.kpis.find(A=>/lead/i.test(A.label))?.value??""}</strong> ${G(E.results.kpis.find(A=>/lead/i.test(A.label))?.label||"")} from ${G(E.results.title)} · ${G(E.results.period)}</div>`:""}
      <div class="proj-actions">
        ${In(E)?`<button type="button" class="btn primary" data-film="${E.id}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Watch the build</button>`:""}
        ${(E.links||[]).filter(A=>ii(A.url)).map(A=>`<a class="link" href="${G(ii(A.url))}" target="_blank" rel="noopener">${G(A.label)} ↗</a>`).join("")}
      </div>
    </div>
  </article>`;ce("#proj-built").innerHTML=n.map(s).join(""),ce("#proj-building").innerHTML=e.map(s).join("");const r=ce("#show-tabs"),a=(E,A)=>{it("[role=tab]",r).forEach(B=>{const Z=B.dataset.tab===E;B.setAttribute("aria-selected",Z),B.tabIndex=Z?0:-1,Z&&A&&B.focus(),ce("#"+B.getAttribute("aria-controls")).hidden=!Z});const v=ce(`[data-tab="${E}"]`,r),_=ce(".thumb",r);_.style.left=v.offsetLeft+"px",_.style.width=v.offsetWidth+"px"};r.addEventListener("click",E=>{const A=E.target.closest("[role=tab]");A&&a(A.dataset.tab)}),r.addEventListener("keydown",E=>{const A=it("[role=tab]",r),v=A.findIndex(B=>B.getAttribute("aria-selected")==="true"),_=E.key==="ArrowRight"?1:E.key==="ArrowLeft"?-1:0;_&&(E.preventDefault(),a(A[(v+_+A.length)%A.length].dataset.tab,!0))}),requestAnimationFrame(()=>a("built")),addEventListener("resize",()=>a(ce('[aria-selected="true"]',r)?.dataset.tab||"built")),document.fonts?.ready.then(()=>a(ce('[aria-selected="true"]',r)?.dataset.tab||"built")),ce("#show-how").addEventListener("click",E=>{const A=E.target.closest("[data-how]");A&&(A.dataset.how!=="any"&&en({scenarioId:A.dataset.how,journeySource:"showcase"}),zn("how"))});const o=ce("#film");let c=[],l=3,u=null,h=[],p=0,m=!1,g=0,x=0,f=-1,d=null;const C=E=>[{type:"logo",name:"Logo"},{type:"screen",name:"Website",views:E.views,host:ql(E.links?.[0]?.url||"")},E.app&&{type:"screen",name:E.app.label,views:E.app.views,host:E.app.host},{type:"phone",name:"Mobile",views:E.phone},{type:"system",name:"System"}].filter(Boolean);function M(E){const A=[];c.forEach((_,B)=>{_.type==="logo"&&A.push({ch:B,i:0,dur:E.emblem?4.2:3.4}),_.type==="screen"&&_.views.forEach((Z,V)=>A.push({ch:B,i:V,dur:3})),_.type==="phone"&&_.views.forEach((Z,V)=>A.push({ch:B,i:V,dur:3.2})),_.type==="system"&&A.push({ch:B,i:0,dur:1/0})});let v=0;return A.forEach(_=>{_.at=v,v+=_.dur}),A}const b=E=>h.find(A=>A.ch===E).at,U=E=>{const A=h.filter(_=>_.ch===E),v=A[A.length-1];return v.at+v.dur},D=E=>E.map((A,v)=>`<img data-v="${v}" src="${A.img}" alt="${G(A.cap)}" decoding="async" />`).join("");function N(E,A,v,_){return A.type==="logo"?`<section class="fs fs-logo" data-ch="${v}" aria-hidden="true">
        <div class="fl-glow"></div><div class="fl-flare"></div>
        ${E.emblem?`<img class="fl-emblem" src="${E.emblem.src}" alt="" />`:""}
        <div class="fl-logo">${Kn(E,{big:!0})}<span class="fl-sheen" style="--lg:url('${E.logo?.src||""}')"></span></div>
        <div class="fl-meta"><span>${G(E.industry)}</span>${E.place?`<span>${G(E.place)}</span>`:""}<span>Built by System-Based</span></div>
      </section>`:A.type==="screen"?`<section class="fs fs-web" data-ch="${v}" aria-hidden="true">
        <div class="fw-cam" data-pose="in">
          <div class="fw-browser">
            <div class="fw-chrome"><i></i><i></i><i></i><em>${G(A.host||E.name)}</em></div>
            <div class="fw-screen">${D(A.views)}</div>
          </div>
        </div>
        <p class="fs-cap" aria-live="off"></p>
      </section>`:A.type==="phone"?`<section class="fs fs-phone" data-ch="${v}" aria-hidden="true">
        <div class="fp-cam" data-pose="in">
          <div class="fp-phone"><span class="fp-island"></span><div class="fp-screen">${D(A.views)}</div></div>
        </div>
        <div class="fp-side">${Kn(E)}<p class="fs-cap"></p></div>
      </section>`:`<section class="fs fs-system" data-ch="${v}" aria-hidden="true">
        <div class="fsys">
          <div class="fsys-copy">
            <div class="fsys-logo">${Kn(E)}</div>
            <h3>${G(E.summary)}</h3>
            <ol class="fsys-built">${E.built.map((B,Z)=>`<li style="--d:${Z}"><span>${String(Z+1).padStart(2,"0")}</span>${G(B)}</li>`).join("")}</ol>
            <div class="sys-chips">${E.systems.map(B=>`<span>${G(Xl(B))}</span>`).join("<i>+</i>")}</div>
          </div>
          <div class="fsys-side">
            ${E.results?X0(E.results):`<div class="res res-none"><div class="res-head"><span class="res-live"><i></i>${G(E.status)}</span></div><p>Results are added here once they are measured in the client's own accounts. No estimates, no projections.</p></div>`}
            <div class="fsys-cta">
              ${E.demo?`<button type="button" class="btn primary" data-demo="${E.id}">Try the ${G(E.demo.title)}</button>`:""}
              ${_.map(B=>`<a class="btn" href="${G(ii(B.url))}" target="_blank" rel="noopener">${G(B.label)} ↗</a>`).join("")}
              ${E.scenario?`<button type="button" class="btn" data-film-how="${E.scenario}">See how the system works</button>`:""}
              <button type="button" class="btn${E.demo?"":" primary"}" data-book data-from="film-${E.id}">Start a project like this</button>
            </div>
          </div>
        </div>
      </section>`}function F(E){o.className="film"+(E.theme.light?" light":"")+(xt?" reduced":""),o.setAttribute("style",Ji(E)),ce("#film-label").textContent=E.name;const A=(E.links||[]).filter(B=>ii(B.url));ce("#film-stage").innerHTML=c.map((B,Z)=>N(E,B,Z,A)).join(""),ce("#film-chapters").innerHTML=c.map((B,Z)=>`<button type="button" data-ch="${Z}" aria-label="${G(B.name)}"><span class="fc-bar"><i></i></span><span class="fc-n">${G(B.name)}</span></button>`).join("");const v=Ki.filter(In),_=v.findIndex(B=>B.id===E.id);ce("#film-prev").dataset.go=v[(_-1+v.length)%v.length].id,ce("#film-next").dataset.go=v[(_+1)%v.length].id,ce("#film-next").querySelector("em").textContent=aa(ce("#film-next").dataset.go).name}function S(E){it("[data-count]",E).forEach(A=>{const v=+A.dataset.count,_=A.dataset.format;if(xt)return A.textContent=ao(v,_);const B=performance.now(),Z=V=>{const ue=Math.min(1,(V-B)/1400),ve=1-Math.pow(1-ue,3);A.textContent=ao(_==="usd"?v*ve:Math.round(v*ve),_),ue<1&&requestAnimationFrame(Z)};requestAnimationFrame(Z)})}function w(E){const A=h.findIndex((V,ue)=>p>=V.at&&(ue===h.length-1||p<h[ue+1].at)),v=h[Math.max(0,A)];if(it("#film-chapters [data-ch]").forEach(V=>{const ue=+V.dataset.ch,ve=b(ue),L=U(ue),H=ue===l?v.ch===l?1:0:Math.max(0,Math.min(1,(p-ve)/(L-ve)));V.querySelector("i").style.transform=`scaleX(${H})`,V.classList.toggle("on",ue===v.ch),V.setAttribute("aria-current",ue===v.ch?"step":"false")}),Math.max(0,A)===f&&!E)return;const _=h[f];f=Math.max(0,A),o.dataset.ch=v.ch,it(".fs",o).forEach(V=>{const ue=+V.dataset.ch===v.ch;V.classList.toggle("on",ue),V.setAttribute("aria-hidden",!ue)});const B=ce(`.fs[data-ch="${v.ch}"]`,o),Z=c[v.ch].type;if(Z==="logo"&&(!_||_.ch!==v.ch)&&(B.classList.remove("play"),B.offsetWidth,B.classList.add("play")),Z==="screen"||Z==="phone"){const V=c[v.ch].views;it("[data-v]",B).forEach(ue=>ue.classList.toggle("on",+ue.dataset.v===v.i)),ce(Z==="screen"?".fw-cam":".fp-cam",B).dataset.pose=String(v.i),it(".fs-cap",B).forEach(ue=>ue.textContent=V[v.i].cap),ce("#film-live").textContent=`${u.name}, ${c[v.ch].name}: ${V[v.i].cap}`}else ce("#film-live").textContent=`${u.name}, ${c[v.ch].name}`;Z==="system"&&(!_||_.ch!==v.ch)&&(B.classList.remove("play"),B.offsetWidth,B.classList.add("play"),S(B),ot("sb_film_completed",{client:u.id},{once:!0})),o.classList.toggle("bars",Z==="logo")}function k(E){if(x=0,!(!m||o.hidden)){if(p+=Math.max(0,Math.min(.1,(E-g)/1e3)),g=E,w(),h[f]?.ch===l)return z(!1,!0);x=requestAnimationFrame(k)}}function z(E,A){m=E;const v=ce("#film-pause");v.setAttribute("aria-pressed",!E),v.setAttribute("aria-label",E?"Pause":A?"Replay":"Play"),v.dataset.state=E?"playing":A?"ended":"paused",E&&!x&&(g=performance.now(),x=requestAnimationFrame(k))}function ee(E){p=b(E)+.001,w(!0),z(E!==l,E===l)}function te(E){if(E.key==="Escape")return Q();if(E.key===" "&&E.target===o)return E.preventDefault(),z(!m);if(E.key!=="Tab")return;const A=it("button, a[href]",o).filter(B=>B.offsetParent!==null);if(!A.length)return;const v=A[0],_=A[A.length-1];E.shiftKey&&document.activeElement===v?(E.preventDefault(),_.focus()):!E.shiftKey&&document.activeElement===_&&(E.preventDefault(),v.focus())}function ie(E,A){const v=aa(E);!v||!In(v)||(o.hidden&&(d=A||document.activeElement),u=v,c=C(v),l=c.length-1,h=M(v),p=0,f=-1,F(v),o.hidden=!1,document.documentElement.classList.add("film-open"),requestAnimationFrame(()=>o.classList.add("in")),w(!0),z(!0),ce("#film-close").focus({preventScroll:!0}),ot("sb_film_opened",{client:v.id}))}function Q(){o.hidden||(z(!1),o.classList.remove("in"),o.hidden=!0,document.documentElement.classList.remove("film-open"),d?.focus?.({preventScroll:!0}))}o.addEventListener("keydown",te),o.addEventListener("click",E=>{const A=E.target;if(A.closest("#film-close"))return Q();if(A.closest("#film-pause"))return ce("#film-pause").dataset.state==="ended"?ee(0):z(!m);const v=A.closest("#film-chapters [data-ch]");if(v)return ee(+v.dataset.ch);const _=A.closest("[data-go]");if(_)return ie(_.dataset.go);const B=A.closest("[data-film-how]");if(B)return Q(),en({scenarioId:B.dataset.filmHow,journeySource:"film"}),zn("how");A.closest("[data-book]")&&Q()}),document.addEventListener("visibilitychange",()=>{document.hidden&&m&&z(!1)}),document.addEventListener("click",E=>{const A=E.target.closest("[data-film]");if(A)return ie(A.dataset.film,A);const v=E.target.closest("[data-show]");if(v&&v.closest("#brand-wall")){a(v.dataset.show);const _=document.getElementById("proj-"+v.dataset.focus);_?.scrollIntoView({behavior:xt?"auto":"smooth",block:"center"}),_?.classList.add("flash"),setTimeout(()=>_?.classList.remove("flash"),1600)}});const se=Ki.filter(E=>E.demo);ce("#demo-grid").innerHTML=se.map(E=>`<article class="demo-card${E.theme.light?" light":""}" style="${Ji(E)}">
      <button type="button" class="demo-shot" data-demo="${E.id}" aria-label="Launch the ${G(E.demo.title)}">
        <img src="${(E.app||E).views[0].img}" alt="" loading="lazy" decoding="async" />
        <span class="demo-live"><i></i>Live software</span>
      </button>
      <div class="demo-info">
        <span class="demo-logo">${Kn(E)}</span>
        <h3>${G(E.demo.title)}</h3>
        <p>Built for ${G(E.name)}. ${G(E.demo.note)}</p>
        <div class="proj-actions">
          <button type="button" class="btn primary" data-demo="${E.id}">Launch the demo</button>
          ${In(E)?`<button type="button" class="link" data-film="${E.id}">Watch the build →</button>`:""}
        </div>
      </div>
    </article>`).join("")+'<button type="button" class="work-card next demo-next" data-book data-from="demos"><span class="eyebrow">Custom software</span><strong>Need a tool like this for your business?</strong><span class="link">Talk to us →</span></button>';const P=ce("#demo"),ne=ce("#demo-iframe");let he=null;const ge={};async function Te(E,A){const v=aa(E);if(v?.demo){he=A||document.activeElement,ce("#demo-title").textContent=v.demo.title,ce("#demo-note").textContent=v.demo.note,ne.title=v.demo.title,P.setAttribute("style",Ji(v)),P.classList.toggle("light",!!v.theme.light),P.hidden=!1,P.classList.remove("ready"),document.documentElement.classList.add("film-open"),ce("#demo-close").focus({preventScroll:!0}),ot("sb_demo_opened",{client:v.id});try{ge[E]??=await fetch(v.demo.src).then(_=>{if(!_.ok)throw new Error(_.status);return _.text()}),ne.srcdoc='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><base target="_blank">'+ge[E]+"</html>",ne.onload=()=>P.classList.add("ready")}catch{ce("#demo-loading").textContent="The demo could not load. Please try again in a moment."}}}function Oe(){P.hidden||(P.hidden=!0,ne.srcdoc="",ce("#demo-loading").textContent="Loading…",o.hidden&&document.documentElement.classList.remove("film-open"),he?.focus?.({preventScroll:!0}))}return P.addEventListener("keydown",E=>{if(E.key==="Escape")return E.stopPropagation(),Oe();E.key==="Tab"&&(E.preventDefault(),(document.activeElement===ne?ce("#demo-close"):ne).focus())}),ce("#demo-close").addEventListener("click",Oe),document.addEventListener("click",E=>{const A=E.target.closest("[data-demo]");A&&Te(A.dataset.demo,A)}),{open:ie,close:Q,openDemo:Te,closeDemo:Oe}}const Qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const j0=new Ao(-1,1,1,-1,0,1);class Y0 extends un{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}}const K0=new Y0;class Po{constructor(e){this._mesh=new It(K0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,j0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lu extends Gi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Po(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jl extends Gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class J0 extends Gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Z0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lu(Qs),this.copyPass.material.blending=bn,this.clock=new Oh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(a instanceof jl?i=!0:a instanceof J0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Q0 extends Gi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const e_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ki extends Gi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Xt(r,a,{type:on});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Xt(r,a,{type:on});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=e_;this.highPassUniforms=Ni.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ni.clone(Qs.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,blending:ua,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new fr,this._fsQuad=new Po(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ki.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ki.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ki.BlurDirectionX=new fe(1,0);ki.BlurDirectionY=new fe(0,1);const Xs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t_ extends Gi{constructor(){super(),this.uniforms=Ni.clone(Xs.uniforms),this.material=new wh({name:Xs.name,uniforms:this.uniforms,vertexShader:Xs.vertexShader,fragmentShader:Xs.fragmentShader}),this._fsQuad=new Po(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Yl=matchMedia("(prefers-reduced-motion: reduce)").matches,lr=matchMedia("(max-width: 760px)").matches||(navigator.hardwareConcurrency||8)<=4;function n_(){try{const n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}function i_(n,{alpha:e=!1}={}){const t=new Mv({canvas:n,antialias:!lr,alpha:e,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(devicePixelRatio,lr?1.5:1.75)),t.toneMapping=fo,t.outputColorSpace=Tt,t}function s_(n,e,t,i=.3){if(lr)return null;const s=new Z0(n);return s.addPass(new Q0(e,t)),s.addPass(new ki(new fe(256,256),i,.3,1.2)),s.addPass(new t_),s.addPass(new lu(Av)),s}function r_(n,e){let t=0,i=!1;const s=a=>{e(a/1e3),t=requestAnimationFrame(s)},r=()=>{const a=i&&!document.hidden;a&&!t&&(t=requestAnimationFrame(s)),!a&&t&&(cancelAnimationFrame(t),t=0)};new IntersectionObserver(([a])=>{i=a.isIntersecting,r()}).observe(n),document.addEventListener("visibilitychange",r)}function a_(n,e,t,i){const s=i.clientWidth,r=i.clientHeight;return!s||!r?!1:(n.setSize(s,r,!1),e?.setSize(s,r),t.aspect=s/r,t.updateProjectionMatrix(),!0)}function o_(n,{intro:e=!0,onIntroEnd:t,onLocked:i}={}){const s=i_(n),r=new Lc;r.background=new Xe(qc),r.environment=jc(s),Fv(s);const a=new Nh(16777215,2.2);a.position.set(-4,6,5),r.add(a);const o=new Bt(30,1,.1,100),c=Iv();r.add(c),lr||Tv(r,1200,700,-1.06);const l=s_(s,r,o),u={pos:new W,look:new W,rotY:-.12,s:.8},h={pos:new W,look:new W,rotY:-.4,s:.72};let p=8.6;const m=()=>{if(!a_(s,l,o,n))return;const S=o.aspect<1;p=S?10.5:8.6;const w=p*Math.tan(Math.PI/12);u.s=S?.56:.8,u.pos.set(0,-1.06+1.06*u.s,0),u.look.set(0,-.05,0),h.s=S?.5:o.aspect<1.4?.62:.72,h.pos.set(S?0:o.aspect<1.4?1.35:2.05,-1.06+1.06*h.s,0),h.rotY=S?-.25:-.4,h.look.set(0,S?-.7*w-.05:-.05,0)};m();const g={x:0,y:0},x={x:0,y:0};addEventListener("pointermove",S=>{g.x=S.clientX/innerWidth-.5,g.y=S.clientY/innerHeight-.5});const f=3.4,d=1.3;let C=e?0:f+d,M=!1,b=!1;const U=new W,D=S=>{Nv(c,Math.min(S,8),r);const w=io(ar((S-f)/d)),k=u.s+(h.s-u.s)*w;c.scale.setScalar(k),c.position.lerpVectors(u.pos,h.pos,w),x.x+=(g.x-x.x)*.05,x.y+=(g.y-x.y)*.05,c.rotation.y=u.rotY+(h.rotY-u.rotY)*w+(x.x*.35+Math.sin(S*.3)*.04)*w,c.rotation.x=x.y*.15*w;const z=io(ar(S/f));o.position.set(.6*(1-z),.5,p+1.6*(1-z)),U.lerpVectors(u.look,h.look,w),o.lookAt(U),!M&&S>f+d*.35&&(M=!0,i?.()),!b&&S>=f+d&&(b=!0,t?.()),l?(l.passes[3].uniforms.uTime.value=S,l.render()):s.render(r,o)};if(addEventListener("resize",()=>{m(),Yl&&D(10)}),Yl)return D(10),i?.(),t?.(),{skip(){}};let N=null,F=0;return r_(n,S=>{N===null&&(N=S),F=S-N+C,D(F)}),{skip(){F<f&&(C+=f-F)}}}const oa=["The friction","The opportunity","The response","The next step","The handoff","The owner view","Connected","Your move"],Kl={GR:"Brings the right people in, and shows which campaigns turn into real work.",BB:"Makes the first impression worth trusting, and gives every visitor a clear next step.",CR:"Answers, qualifies, books and follows up, so no inquiry goes quiet.",AO:"Connects tools and people, assigns the work and keeps the owner informed."},la=["New","Responded","Qualified","Booked","Follow-up"],l_=["New","Matched","Assigned","Scheduled","Tracked"],Sn=[{id:"response",problem:"Leads come in, but we don’t respond fast enough.",problemSub:"Missed calls, DMs, forms, follow-up gaps.",outcome:"We’d begin by making sure every inquiry is answered, qualified and tracked.",business:"Northside Roofing",customer:"Homeowner, storm leak",systems:["CR"],services:["CR-01","CR-02","CR-03","CR-04","CR-05"],recommend:{system:"CR",packageId:"capture",label:"Capture"},stages:la,beats:[{title:"This is where businesses lose opportunities.",body:"A homeowner calls after hours about a leak. The phone is face down on the counter. Most people won’t leave a voicemail. They call the next roofer.",screen:{type:"lock",time:"7:42",notes:[{app:"Phone",title:"Missed call",text:"(555) 014-2290"}]},buzz:!0},{title:"A customer reaches out.",body:"Even though nobody answered, the call is captured the moment it comes in, with the number, time and source.",screen:{type:"call",name:"(555) 014-2290",state:"Missed call · 7:42 PM",sub:"No voicemail left"},lead:{stage:0,fields:{Source:"Phone call",Received:"7:42 PM",Status:"Unanswered"}}},{title:"They get a response, even when you’re busy.",body:"A text goes out automatically, in your business’s voice, following rules you set: hours, service area, what to say.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"sys",text:"Missed call · 7:42 PM"},{from:"out",text:"Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?"}]},lead:{stage:1,fields:{Source:"Phone call",Received:"7:42 PM",Reply:"Automatic text sent"}}},{title:"The conversation moves forward.",body:"The AI receptionist asks the questions you would ask. Every answer lands on the customer’s record, so nobody has to ask twice.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"out",text:"Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?"},{from:"in",text:"Got a leak over the kitchen after the storm."},{from:"out",text:"We can help. What’s the address, and is it leaking right now?"},{from:"in",text:"418 Elm St. Yes, dripping slowly."}],chips:["Leak repair","Active leak","418 Elm St"]},lead:{stage:2,fields:{Service:"Leak repair",Urgency:"Active leak",Address:"418 Elm St"}}},{title:"The right next step gets booked.",body:"This job fits, so the customer picks an inspection time. If it didn’t, it would be flagged for you to call back instead. Nothing is forced.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"out",text:"I can get an inspector out tomorrow at 9:00 AM or 1:30 PM. Which works?"},{from:"in",text:"9 works."}],card:{title:"Inspection booked",text:"Tomorrow · 9:00 AM · 418 Elm St"}},lead:{stage:3,fields:{Service:"Leak repair",Address:"418 Elm St",Appointment:"Tomorrow 9:00 AM"}}},{title:"Your team knows what happened and what comes next.",body:"You get a short summary. The whole conversation sits on the customer’s record, and the job is on the calendar.",screen:{type:"lock",time:"7:46",notes:[{app:"Owner alert",title:"New booking",text:"Leak repair · 418 Elm St · Tomorrow 9:00 AM"}]},lead:{stage:3,fields:{Service:"Leak repair",Appointment:"Tomorrow 9:00 AM",Owner:"Notified"}},owner:{note:"Booked: leak inspection, tomorrow 9:00 AM",kpis:[["New inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]}},{title:"One connected process. No loose ends.",body:"Reminders, follow-up and a review request after the job all run on their own. Here’s the part of System-Based doing the work.",screen:{type:"thread",contact:"(555) 014-2290",msgs:[{from:"out",text:"Reminder: your inspector arrives at 9:00 AM. Reply C to confirm."},{from:"in",text:"C"},{from:"sys",text:"After the job · review request sent"}]},lead:{stage:4,fields:{Appointment:"Confirmed","After the job":"Review requested"}},owner:{note:"Reminder confirmed. Review request scheduled.",kpis:[["New inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},connected:!0},{title:"Want this running in your business?",body:"We’d start by making sure every call, text and form gets answered and tracked. That’s the Capture package. You can add more later.",screen:{type:"summary",title:"One inquiry, handled",rows:[["Missed call","Captured"],["First reply","Automatic"],["Questions","Answered"],["Inspection","Booked"],["Owner","Informed"]]},lead:{stage:4,fields:{Appointment:"Confirmed","After the job":"Review requested"}},owner:{note:"Every step recorded on one timeline.",kpis:[["New inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},choose:!0}]},{id:"growth",problem:"We need a more consistent flow of new customers.",problemSub:"Advertising, lead generation, conversion.",outcome:"We’d build demand you can measure, and make sure every new lead is answered and tracked.",business:"Brightline Painting",customer:"Homeowner, 3 rooms",systems:["GR","CR"],services:["GR-01","GR-02","GR-04","CR-01","CR-04","CR-05"],recommend:{system:"GR",packageId:"pipeline",label:"Pipeline"},stages:la,beats:[{title:"This is where businesses lose opportunities.",body:"Referrals slow down and the calendar gets gaps. Money goes into ads, but nobody can say which ones turned into paying work.",screen:{type:"lock",time:"9:15",notes:[{app:"Calendar",title:"Next week",text:"3 open days, no estimates booked"}]},buzz:!1},{title:"A customer finds you.",body:"A homeowner planning a refresh sees a campaign built for one clear offer, and taps “Get a quote”.",screen:{type:"ad",brand:"Brightline Painting",headline:"Interior painting, booked this month",text:"Clean lines, on schedule, no mess left behind.",cta:"Get a quote"},lead:{stage:0,fields:{Source:"Facebook ad",Campaign:"Spring interior",Status:"Clicked"}}},{title:"They land somewhere built to convert.",body:"The ad leads to a page made for that offer. The short form goes straight into your CRM, and a reply goes out right away.",screen:{type:"landing",brand:"Brightline Painting",headline:"Get your interior quote",fields:[["Name","Dana R."],["Rooms","3"],["When","Next month"]],button:"Request my quote",toast:"Request sent · we’ll text you shortly"},lead:{stage:1,fields:{Source:"Facebook ad",Campaign:"Spring interior",Reply:"Automatic text sent"}}},{title:"The conversation moves forward.",body:"A quick text exchange confirms the details. The answers are saved, so the estimator walks in prepared.",screen:{type:"thread",contact:"Dana R.",msgs:[{from:"out",text:"Thanks Dana! Got your request for 3 rooms. Walls only, or trim and ceilings too?"},{from:"in",text:"Walls and trim. Living room, hall and one bedroom."}],chips:["Interior","3 rooms","Walls + trim"]},lead:{stage:2,fields:{Job:"Interior, 3 rooms",Scope:"Walls + trim",Campaign:"Spring interior"}}},{title:"The right next step gets booked.",body:"Dana picks an estimate slot that fits your calendar. Nobody spent the evening chasing a form fill.",screen:{type:"thread",contact:"Dana R.",msgs:[{from:"out",text:"We can do a free estimate Thursday at 4:30 PM or Saturday at 10 AM."},{from:"in",text:"Thursday works."}],card:{title:"Estimate booked",text:"Thursday · 4:30 PM"}},lead:{stage:3,fields:{Job:"Interior, 3 rooms",Estimate:"Thursday 4:30 PM",Campaign:"Spring interior"}}},{title:"You can see where the work came from.",body:"The booking is tied to the campaign that produced it, so you know what to spend more on and what to switch off.",screen:{type:"lock",time:"6:12",notes:[{app:"Owner alert",title:"Estimate booked",text:"Dana R. · Thursday 4:30 PM · from Spring interior ad"}]},lead:{stage:3,fields:{Estimate:"Thursday 4:30 PM",Source:"Facebook ad",Campaign:"Spring interior"}},owner:{note:"Source of this booking: Spring interior campaign",kpis:[["New leads","1"],["Answered","1"],["Booked","1"],["From ads","1"]]}},{title:"One connected process. No loose ends.",body:"Growth brings the inquiry in. Client Response makes sure it’s answered and booked. Reporting connects the two.",screen:{type:"summary",title:"Spring interior campaign",rows:[["Ad","Clicked"],["Landing page","Form sent"],["First reply","Automatic"],["Estimate","Booked"],["Source","Tracked"]]},lead:{stage:4,fields:{Estimate:"Reminder sent",Source:"Facebook ad",Campaign:"Spring interior"}},owner:{note:"Campaign report updates as leads book.",kpis:[["New leads","1"],["Answered","1"],["Booked","1"],["From ads","1"]]},connected:!0},{title:"Want this running in your business?",body:"We’d build campaigns and pages for your best offer, and make sure every new lead is answered and booked. That’s the Pipeline package.",screen:{type:"summary",title:"One new customer, traced",rows:[["Campaign","Spring interior"],["Lead","Captured"],["Reply","Automatic"],["Estimate","Booked"],["Source","Known"]]},lead:{stage:4,fields:{Estimate:"Reminder sent",Source:"Facebook ad",Campaign:"Spring interior"}},owner:{note:"Spend and bookings on one view.",kpis:[["New leads","1"],["Answered","1"],["Booked","1"],["From ads","1"]]},choose:!0}]},{id:"brand",problem:"Our website or brand isn’t doing us justice.",problemSub:"Trust, presentation, conversion, digital presence.",outcome:"We’d rebuild the first impression, then connect it so every visitor has a clear next step.",business:"Ridgeway Auto Detail",customer:"SUV owner",systems:["BB","CR"],services:["BB-01","BB-02","CR-01","CR-04","CR-05"],recommend:{system:"BB",packageId:null,label:"A Brand & Build project"},stages:la,beats:[{title:"This is where businesses lose opportunities.",body:"People do find you. But an outdated site makes great work look small, and visitors leave without calling.",screen:{type:"site",variant:"old",brand:"Ridgeway Auto Detail",headline:"Welcome to our website!",sub:"We do car detailing. Call for prices. Open Mon to Sat.",note:"Concept: “before”"}},{title:"A customer is comparing options.",body:"They have three tabs open. Whoever looks most credible and easiest to book usually gets the call.",screen:{type:"site",variant:"old",brand:"Ridgeway Auto Detail",headline:"Welcome to our website!",sub:"We do car detailing. Call for prices. Open Mon to Sat.",note:"Concept: “before”"},lead:{stage:0,fields:{Visitor:"Comparing 3 detailers",Status:"Not yet in touch"}}},{title:"Your brand earns the trust.",body:"A sharp identity and a fast page show the quality of the work, what it costs to start, and one clear way to book.",screen:{type:"site",variant:"new",brand:"Ridgeway",headline:"Showroom finish, in your driveway.",sub:"Full details from a fixed starting price. Book in under a minute.",cta:"Book a detail",note:"Concept: “after”"},lead:{stage:0,fields:{Visitor:"Viewing services",Status:"Not yet in touch"}}},{title:"The customer reaches out.",body:"A short form asks only what matters. The request goes straight into the same response system as calls and texts.",screen:{type:"landing",brand:"Ridgeway",headline:"Book a detail",fields:[["Package","Full detail"],["Vehicle","SUV"],["Day","Saturday"]],button:"Request booking",toast:"Request sent · confirming your time"},lead:{stage:1,fields:{Source:"Website form",Package:"Full detail",Vehicle:"SUV"}}},{title:"The right next step gets booked.",body:"The customer gets a confirmation with the time and what to expect, without anyone stopping work to reply.",screen:{type:"thread",contact:"Ridgeway",msgs:[{from:"out",text:"Thanks for booking with Ridgeway! Saturday 10:00 AM works for a full SUV detail."},{from:"in",text:"Perfect, see you then."}],card:{title:"Detail booked",text:"Saturday · 10:00 AM · Full detail"}},lead:{stage:3,fields:{Source:"Website form",Booking:"Saturday 10:00 AM",Package:"Full detail"}}},{title:"Your team knows what happened and what comes next.",body:"The booking, the vehicle and the package are on one record. You can see which pages bring in bookings.",screen:{type:"lock",time:"11:03",notes:[{app:"Owner alert",title:"New booking",text:"Full detail · SUV · Saturday 10:00 AM · from website"}]},lead:{stage:3,fields:{Booking:"Saturday 10:00 AM",Source:"Website form",Owner:"Notified"}},owner:{note:"Booked from the new services page",kpis:[["Site inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]}},{title:"One connected process. No loose ends.",body:"Brand & Build makes the first impression. Client Response turns the visit into a booked job. Each one does its part.",screen:{type:"summary",title:"From visit to booking",rows:[["First impression","Credible"],["Next step","Obvious"],["Request","Captured"],["Booking","Confirmed"],["Owner","Informed"]]},lead:{stage:4,fields:{Booking:"Reminder sent",Source:"Website form","After the job":"Review requested"}},owner:{note:"Website and bookings on one view.",kpis:[["Site inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},connected:!0},{title:"Want this running in your business?",body:"We’d start with a one-time Brand & Build project, quoted after a short call. If you want it to keep booking jobs, it can connect to Client Response.",screen:{type:"summary",title:"A brand that books",rows:[["Identity","Rebuilt"],["Website","Fast, clear"],["Form","Connected"],["Replies","Automatic"],["Results","Visible"]]},lead:{stage:4,fields:{Booking:"Reminder sent",Source:"Website form","After the job":"Review requested"}},owner:{note:"Website and bookings on one view.",kpis:[["Site inquiries","1"],["Answered","1"],["Booked","1"],["Waiting on you","0"]]},choose:!0}]},{id:"ops",problem:"Our team and tools aren’t connected.",problemSub:"Manual tasks, scattered information, no visibility.",outcome:"We’d map how work moves today, then connect the tools so every inquiry has an owner and a next step.",business:"Harbor Kitchen & Bath",customer:"Returning customer, remodel quote",systems:["AO","CR"],services:["AO-01","AO-02","AO-03","CR-05"],recommend:{system:"AO",packageId:"command",label:"Command, or a custom scope"},stages:l_,beats:[{title:"This is where businesses lose opportunities.",body:"Inquiries arrive in email, texts and a web form. Notes live in three apps. Nobody is sure who is following up.",screen:{type:"lock",time:"8:58",notes:[{app:"Email",title:"Quote request",text:"Bathroom remodel, can someone call?"},{app:"Messages",title:"Team",text:"Did anyone get back to the remodel lady?"}]},buzz:!0},{title:"An inquiry arrives.",body:"A request for a bathroom remodel quote comes in through the website, at the same time as five other things.",screen:{type:"record",title:"New web inquiry",badge:"New",rows:[["From","Maria G."],["Request","Bathroom remodel quote"],["Received","8:58 AM"]]},lead:{stage:0,fields:{Source:"Website form",Request:"Bathroom remodel",Owner:"Unassigned"}}},{title:"Everything lands on one record.",body:"The system recognises Maria as a past customer and attaches her history, so nobody starts from zero.",screen:{type:"record",title:"Maria G.",badge:"Matched",rows:[["History","2 past jobs"],["Last job","Kitchen backsplash"],["Request","Bathroom remodel quote"]]},lead:{stage:1,fields:{Customer:"Returning",History:"2 past jobs",Owner:"Unassigned"}}},{title:"The right person gets the work.",body:"An agent assigns it using your rules, creates the task with a due time and gives the estimator a short summary.",screen:{type:"task",title:"Call Maria about remodel quote",badge:"Assigned",rows:[["Assigned to","Chris (estimator)"],["Due","Today, 3:00 PM"],["Summary","Returning customer, bath remodel"]]},lead:{stage:2,fields:{Owner:"Chris",Due:"Today 3:00 PM",Request:"Bathroom remodel"}}},{title:"The handoff is clean.",body:"Chris calls, books a site visit and updates the record once. Everyone who needs to know, knows.",screen:{type:"thread",contact:"Team · Jobs",msgs:[{from:"in",text:"Chris: Called Maria. Site visit Monday 10 AM."},{from:"sys",text:"Record updated · visit added to calendar"}],card:{title:"Site visit scheduled",text:"Monday · 10:00 AM · Chris"}},lead:{stage:3,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Request:"Bathroom remodel"}}},{title:"You see the whole business at a glance.",body:"The owner view shows what came in, who has it and what is stuck, with an alert only when something needs you.",screen:{type:"lock",time:"4:10",notes:[{app:"Owner alert",title:"Needs attention",text:"1 kitchen quote waiting over 2 days"}]},lead:{stage:3,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Status:"On track"}},owner:{note:"Alert: 1 quote waiting over 2 days",kpis:[["New today","1"],["Assigned","1"],["Scheduled","1"],["Overdue","1"]]}},{title:"One connected process. No loose ends.",body:"AI & Operations connects the tools and people. Client Response keeps every inquiry on the record. We confirm which of your tools can connect during scoping.",screen:{type:"summary",title:"One request, one owner",rows:[["Inquiry","Captured"],["History","Attached"],["Owner","Assigned"],["Visit","Scheduled"],["Exceptions","Flagged"]]},lead:{stage:4,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Status:"Tracked"}},owner:{note:"Every handoff recorded.",kpis:[["New today","1"],["Assigned","1"],["Scheduled","1"],["Overdue","1"]]},connected:!0},{title:"Want this running in your business?",body:"We’d map how work moves today, then connect the pieces. Many businesses start with Command. Bigger builds are scoped as a custom project.",screen:{type:"summary",title:"A team in sync",rows:[["Inquiries","One place"],["Assignment","Automatic"],["Tasks","Due times"],["Owner view","Live"],["Busywork","Reduced"]]},lead:{stage:4,fields:{Owner:"Chris",Visit:"Monday 10:00 AM",Status:"Tracked"}},owner:{note:"Every handoff recorded.",kpis:[["New today","1"],["Assigned","1"],["Scheduled","1"],["Overdue","1"]]},choose:!0}]}],Jl=n=>Sn.find(e=>e.id===n)||Sn[0];function c_({onSeeIncluded:n}={}){const e=ce("#need-list"),t=ce("#need-out");e.innerHTML=Sn.map((s,r)=>`<button type="button" class="need-card" data-problem="${s.id}" aria-pressed="false">
      <span class="nc-num">0${r+1}</span><strong>${G(s.problem)}</strong><span class="nc-sub">${G(s.problemSub)}</span><i class="trace" aria-hidden="true"></i></button>`).join("");function i(){const{selectedProblemId:s}=Rt();it(".need-card",e).forEach(a=>a.setAttribute("aria-pressed",a.dataset.problem===s));const r=Sn.find(a=>a.id===s);t.classList.toggle("picked",!!r),t.innerHTML=r?`<p class="need-outcome">${G(r.outcome)}</p>
         <div class="need-actions">
           <button type="button" class="btn primary" data-watch>Watch how it works <span aria-hidden="true">&darr;</span></button>
           <button type="button" class="link" data-see-included>See what’s included</button>
           <button type="button" class="link" data-book data-from="diagnostic">Talk about my business</button>
         </div>`:`<p class="need-outcome muted">Pick the one that sounds most like you. The walkthrough below changes to match.</p>
         <div class="need-actions"><button type="button" class="btn" data-watch>Or watch an example <span aria-hidden="true">&darr;</span></button></div>`}e.addEventListener("click",s=>{const r=s.target.closest("[data-problem]");if(!r)return;const a=Sn.find(o=>o.id===r.dataset.problem);en({selectedProblemId:a.id,scenarioId:a.id,recommendedSystem:a.recommend.system,recommendedPackageId:a.recommend.packageId,journeySource:"diagnostic"}),r.classList.toggle("locked",!1),r.offsetWidth,r.classList.toggle("locked",!0),ot("sb_problem_selected",{problem:a.id})}),t.addEventListener("click",s=>{s.target.closest("[data-watch]")&&zn("how"),s.target.closest("[data-see-included]")&&n?.()}),vr(i),i()}const ca={response:"Slow responses",growth:"Not enough customers",brand:"Website & brand",ops:"Disconnected tools"},u_={desktop:[{ry:166,rx:10,rz:-4,s:.92,x:0,y:2},{ry:-14,rx:4,rz:0,s:1,x:-20,y:0},{ry:-9,rx:3,rz:0,s:1,x:-22,y:0},{ry:-6,rx:2,rz:0,s:1,x:-22,y:0},{ry:-12,rx:3,rz:0,s:1,x:-22,y:0},{ry:-18,rx:6,rz:0,s:.9,x:-26,y:2},{ry:-10,rx:5,rz:0,s:.8,x:0,y:3},{ry:-12,rx:4,rz:0,s:.92,x:-22,y:0}],mobile:[{ry:166,rx:10,rz:-4,s:.9,x:0,y:0},{ry:-10,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-8,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-8,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-10,rx:3,rz:0,s:.96,x:-42,y:0},{ry:-12,rx:4,rz:0,s:.92,x:-44,y:0},{ry:-10,rx:4,rz:0,s:.92,x:-44,y:0},{ry:-10,rx:4,rz:0,s:.92,x:-44,y:0}]},d_=n=>n*n*(3-2*n),Zl=n=>Math.min(1,Math.max(0,n)),Si=(n,e,t)=>n+(e-n)*t,Jn={phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',msg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2z"/></svg>',cal:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v9h14v-9z"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>'};let oo=new Set;function h_(n){const e=`<div class="scr-bar"><span>${G(n.time||"9:41")}</span><span class="scr-sig"><i></i><i></i><i></i></span></div>`;switch(n.type){case"lock":return`<div class="scr scr-lock">${e}<div class="lock-time">${G(n.time)}</div><div class="lock-date">Tuesday</div>
        <div class="lock-notes">${n.notes.map((t,i)=>`<div class="note" style="animation-delay:${.15+i*.25}s"><b>${G(t.app)}</b><strong>${G(t.title)}</strong><span>${G(t.text)}</span></div>`).join("")}</div></div>`;case"call":return`<div class="scr scr-call">${e}<div class="call-avatar">${Jn.phone}</div><strong>${G(n.name)}</strong>
        <span class="call-state">${G(n.state)}</span><span class="call-sub">${G(n.sub||"")}</span>
        <div class="call-actions"><span>${Jn.phone}<em>Call back</em></span><span>${Jn.msg}<em>Message</em></span></div></div>`;case"thread":{const t=oo;oo=new Set(n.msgs.map(r=>r.text));let i=0;const s=n.msgs.map(r=>{const a=!t.has(r.text),o=a?`style="animation-delay:${.1+i++*.45}s"`:"";return`<div class="msg m-${r.from}${a?" fresh":""}" ${o}>${G(r.text)}</div>`}).join("");return`<div class="scr scr-thread">${e}<div class="thread-head"><span class="av">${/[A-Za-z]/.test(n.contact[0])?G(n.contact[0]):Jn.phone}</span>${G(n.contact)}</div>
        <div class="thread-body">${s}
        ${n.chips?`<div class="saved" style="animation-delay:${.2+i*.45}s"><em>Saved to record</em>${n.chips.map(r=>`<span>${G(r)}</span>`).join("")}</div>`:""}
        ${n.card?`<div class="book-card" style="animation-delay:${.25+i*.45}s">${Jn.cal}<span><strong>${G(n.card.title)}</strong><em>${G(n.card.text)}</em></span></div>`:""}
        </div></div>`}case"ad":return`<div class="scr scr-ad">${e}<div class="feed-head"><span class="av">${G(n.brand.slice(0,1))}</span><span><strong>${G(n.brand)}</strong><em>Sponsored</em></span></div>
        <div class="ad-img"><i></i><i></i><i></i></div><div class="ad-copy"><strong>${G(n.headline)}</strong><span>${G(n.text)}</span></div>
        <div class="ad-cta tap">${G(n.cta)}</div></div>`;case"landing":return`<div class="scr scr-landing">${e}<div class="url">${G(n.brand.toLowerCase().replace(/[^a-z]+/g,""))}.example</div>
        <div class="lp-brand">${G(n.brand)}</div><strong class="lp-h">${G(n.headline)}</strong>
        ${n.fields.map(([t,i],s)=>`<label style="animation-delay:${.1+s*.2}s"><em>${G(t)}</em><span>${G(i)}</span></label>`).join("")}
        <div class="lp-btn tap">${G(n.button)}</div>${n.toast?`<div class="toast">${Jn.check}${G(n.toast)}</div>`:""}</div>`;case"site":return n.variant==="old"?`<div class="scr scr-site old">${e}<div class="old-nav">${G(n.brand)} | Home | About | Contact</div>
          <div class="old-h">${G(n.headline)}</div><div class="old-img"></div><p>${G(n.sub)}</p><p class="old-small">Copyright 2014. Best viewed in Internet Explorer.</p>
          <span class="concept">${G(n.note)}</span></div>`:`<div class="scr scr-site new">${e}<div class="new-nav"><b>${G(n.brand)}</b><span>Services</span><span>Book</span></div>
          <div class="new-hero"><strong>${G(n.headline)}</strong><span>${G(n.sub)}</span><div class="new-cta tap">${G(n.cta)}</div></div>
          <div class="new-proof"><span>★★★★★</span><em>Before &amp; after gallery</em></div><span class="concept">${G(n.note)}</span></div>`;case"record":case"task":return`<div class="scr scr-record">${e}<div class="rec-head"><span>${n.type==="task"?"Task":"Contact"}</span><b>${G(n.badge)}</b></div>
        <strong class="rec-title">${G(n.title)}</strong>
        <dl>${n.rows.map(([t,i],s)=>`<div style="animation-delay:${.1+s*.18}s"><dt>${G(t)}</dt><dd>${G(i)}</dd></div>`).join("")}</dl></div>`;case"summary":return`<div class="scr scr-summary">${e}<div class="sum-logo">${oi(26)}</div><strong>${G(n.title)}</strong>
        <ul>${n.rows.map(([t,i],s)=>`<li style="animation-delay:${.1+s*.15}s">${Jn.check}<span>${G(t)}</span><em>${G(i)}</em></li>`).join("")}</ul></div>`}return""}function f_(n){switch(n.type){case"lock":return n.notes.map(e=>`${e.app}: ${e.title}, ${e.text}`).join(". ");case"call":return`${n.state} from ${n.name}. ${n.sub||""}`;case"thread":return n.msgs.map(e=>(e.from==="in"?"Customer: ":e.from==="out"?"Business: ":"")+e.text).join(" ")+(n.card?` ${n.card.title}: ${n.card.text}.`:"");case"ad":return`Ad from ${n.brand}: ${n.headline}. Button: ${n.cta}.`;case"landing":return`${n.headline} form: ${n.fields.map(([e,t])=>`${e} ${t}`).join(", ")}. ${n.toast||""}`;case"site":return`${n.note}. ${n.headline} ${n.sub}`;case"record":case"task":return`${n.title}: ${n.rows.map(([e,t])=>`${e} ${t}`).join(", ")}.`;case"summary":return`${n.title}: ${n.rows.map(([e,t])=>`${e} ${t}`).join(", ")}.`}return""}function p_({onBeat:n,onChoose:e}={}){const t=ce("#story"),i=ce("#story-stage"),s=ce("#story-chapters"),r=matchMedia("(max-width: 959px)");i.innerHTML=`
    <div class="stage-top">
      <span class="ill" id="stage-ill"></span>
      <nav class="story-steps" id="story-steps" aria-label="Jump to a step">${oa.map((P,ne)=>`<button type="button" data-step="${ne}" aria-label="Step ${ne+1}: ${G(P)}"><i></i></button>`).join("")}</nav>
    </div>
    <div class="stage-visual" aria-hidden="true">
      <svg class="stage-lines" id="stage-lines"><path id="ln-lead"></path><path id="ln-owner"></path></svg>
      <div class="phone3d" id="phone3d">
        <div class="ph-body" id="ph-body">
          <div class="ph-face ph-front"><div class="ph-screen"><span class="ph-island"></span><div class="ph-content" id="ph-screen"></div></div></div>
          <div class="ph-face ph-back"><span class="ph-cam"><i></i><i></i><i></i></span><span class="ph-logo">${oi(64)}</span><span class="ph-word">SYSTEM-BASED</span></div>
          <span class="ph-side ph-l"></span><span class="ph-side ph-r"></span><span class="ph-side ph-t"></span><span class="ph-side ph-b"></span>
        </div>
        <div class="ph-shadow"></div>
      </div>
      <div class="stage-cards">
        <div class="sc lead-card" id="lead-card"></div>
        <div class="sc owner-card" id="owner-card"></div>
      </div>
      <div class="caps" id="caps">${["GR","BB","CR","AO"].map(P=>`<div class="cap" data-cap="${P}"><strong>${G(wn.find(ne=>ne.code===P).name)}</strong><span>${G(Kl[P])}</span></div>`).join("")}</div>
    </div>
    <p class="stage-hint" id="stage-hint">Scroll to see what happens next</p>`;const a=ce("#ph-body"),o=ce("#phone3d"),c=ce("#ph-screen"),l=ce("#lead-card"),u=ce("#owner-card"),h=ce("#ln-lead"),p=ce("#ln-owner");s.innerHTML=oa.map((P,ne)=>`<li class="chapter" data-beat="${ne}">${ne===1?'<span id="journey" class="anchor"></span>':""}<div class="ch-card"></div></li>`).join("");const m=it(".chapter",s);let g=Jl(Rt().scenarioId),x=-1,f=!1;const d=new Set;function C(P,ne){const he=g;let ge="";return P.connected&&(ge=`<ul class="ch-systems">${["GR","BB","CR","AO"].map(Te=>{const Oe=he.systems.includes(Te);return`<li class="${Oe?"on":""}"><strong>${G(wn.find(E=>E.code===Te).name)}</strong><span>${Oe?G(Kl[Te]):"Not needed for this example. Available when it is."}</span></li>`}).join("")}</ul>`),P.choose&&(ge=`<div class="ch-rec"><span class="eyebrow">Suggested starting point</span><strong>${G(he.recommend.label)}</strong></div>
        <div class="ch-ctas">
          <button class="btn primary" data-book data-from="walkthrough">Get my recommendation <span aria-hidden="true">&rarr;</span></button>
          <button class="btn" data-see-rec>See what’s included</button>
        </div>
        <button class="link ch-community" data-community-invite="walkthrough">Or follow along as we build in public &rarr;</button>`),`<span class="ch-num">${String(ne+1).padStart(2,"0")} · ${G(oa[ne])}</span>
      <h3 class="display">${G(P.title)}</h3><p>${G(P.body)}</p>
      <p class="sr-only">On screen: ${G(f_(P.screen))}</p>${ge}`}function M(){m.forEach((P,ne)=>ce(".ch-card",P).innerHTML=C(g.beats[ne],ne)),ce("#stage-ill").innerHTML=`Illustrative example<span class="biz"> · ${G(g.business)}</span>`,it("[data-cap]",i).forEach(P=>P.classList.toggle("on",g.systems.includes(P.dataset.cap)))}function b(P){if(!P.lead)return"";const ne=g.stages[P.lead.stage];return`<div class="sc-head"><span>Customer record</span><b class="pill s${P.lead.stage}">${G(ne)}</b></div>
      <strong class="sc-title">${G(g.customer)}</strong>
      <div class="pipe">${g.stages.map((he,ge)=>`<i class="${ge<=P.lead.stage?"on":""}" title="${G(he)}"></i>`).join("")}</div>
      <dl>${Object.entries(P.lead.fields).map(([he,ge])=>`<div><dt>${G(he)}</dt><dd>${G(ge)}</dd></div>`).join("")}</dl>`}function U(P){return P.owner?`<div class="sc-head"><span>Owner view</span><b class="pill">Live</b></div>
      <p class="sc-note">${G(P.owner.note)}</p>
      <div class="kpi">${P.owner.kpis.map(([ne,he])=>`<div><em>${G(ne)}</em><strong>${G(he)}</strong></div>`).join("")}</div>`:""}function D(P,ne=!1){if(P===x&&!ne)return;const he=g.beats[P],ge=g.beats[x]?.screen.type,Te=P===x+1;(he.screen.type!=="thread"||ge!=="thread"||ne)&&(oo=new Set),x=P,c.innerHTML=h_(he.screen),c.dataset.type=he.screen.type,l.innerHTML=b(he),u.innerHTML=U(he),l.classList.toggle("show",!!he.lead),u.classList.toggle("show",!!he.owner),t.dataset.beat=P,t.classList.toggle("connected",!!he.connected),t.classList.toggle("has-owner",!!he.owner),o.classList.toggle("buzz",!!he.buzz&&!xt),m.forEach((Oe,E)=>Oe.classList.toggle("active",E===P)),it("[data-step]",i).forEach((Oe,E)=>{Oe.classList.toggle("done",E<P),Oe.setAttribute("aria-current",E===P?"step":"false")}),ce("#stage-hint").classList.toggle("hide",P>0),en({currentStoryBeat:P}),P>=1&&!f&&(f=!0,ot("sb_walkthrough_started",{scenario:g.id},{once:!0})),he.choose&&!d.has(g.id)&&(d.add(g.id),ot("sb_walkthrough_completed",{scenario:g.id})),n?.(P,g,Te)}function N(P){P===g.id&&x>=0||(g=Jl(P),M(),D(Math.max(0,x),!0),it("[data-scenario]",ce("#story-switch")).forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.scenario===g.id)),F())}ce("#story-switch").innerHTML=Sn.map(P=>`<button type="button" class="chip" data-scenario="${P.id}" aria-pressed="${P.id===g.id}">${G(ca[P.id])}</button>`).join("")+'<p class="switch-note" id="switch-note"></p>';function F(){const P=Rt().selectedProblemId;ce("#switch-note").textContent=P?`Showing your bottleneck: ${ca[g.id].toLowerCase()}.`:`Showing an example: ${ca[g.id].toLowerCase()}. Pick your bottleneck above to make it yours.`}ce("#story-switch").addEventListener("click",P=>{const ne=P.target.closest("[data-scenario]");ne&&(en({selectedProblemId:ne.dataset.scenario,scenarioId:ne.dataset.scenario,journeySource:"story-switch"}),ot("sb_problem_selected",{problem:ne.dataset.scenario}))}),vr(P=>{P.scenarioId!==g.id?N(P.scenarioId):F()}),ce("#story-steps").addEventListener("click",P=>{const ne=P.target.closest("[data-step]");if(!ne)return;const ge=m[+ne.dataset.step].getBoundingClientRect(),Te=r.matches?i.getBoundingClientRect().bottom+12:innerHeight*.3;scrollTo({top:scrollY+ge.top-Te+2,behavior:xt?"auto":"smooth"})}),s.addEventListener("click",P=>{P.target.closest("[data-see-rec]")&&e?.(g)});const S={x:0,y:0,cx:0,cy:0};iu&&!xt&&addEventListener("pointermove",P=>{S.x=(P.clientX/innerWidth-.5)*2,S.y=(P.clientY/innerHeight-.5)*2});let w="";function k(){const P=r.matches,ne=t.getBoundingClientRect();if(ne.bottom<0||ne.top>innerHeight)return;const he=i.getBoundingClientRect(),ge=P?he.bottom+(innerHeight-he.bottom)*.3:innerHeight*.55;let Te=0,Oe=0;for(let $=0;$<m.length;$++){const q=m[$].getBoundingClientRect();q.top<=ge&&(Te=$,Oe=Zl((ge-q.top)/q.height))}Te!==x&&D(Te);const E=u_[P?"mobile":"desktop"],A=E[Te],v=E[Math.min(Te+1,E.length-1)],_=xt?0:d_(Zl((Oe-.55)/.45));S.cx+=(S.x-S.cx)*.08,S.cy+=(S.y-S.cy)*.08;const B=Si(A.ry,v.ry,_)+S.cx*10,Z=Si(A.rx,v.rx,_)-S.cy*7,V=Si(A.rz,v.rz,_),ue=Si(A.s,v.s,_),ve=Si(A.x,v.x,_),L=Si(A.y,v.y,_),H=[B,Z,V,ue,ve,L].map($=>$.toFixed(2)).join();H!==w&&(w=H,o.style.transform=`translate(${ve}%, ${L}%) scale(${ue})`,a.style.transform=`rotateX(${Z}deg) rotateY(${B}deg) rotateZ(${V}deg)`,a.style.setProperty("--sheen",`${50+((B%360+540)%360-180)*.6}%`),ee())}function z(P,ne,he){const ge=P.right-he.left,Te=P.top+P.height*.45-he.top,Oe=ne.left-he.left,E=ne.top+26-he.top,A=(ge+Oe)/2;return`M${ge.toFixed(1)} ${Te.toFixed(1)} C${A.toFixed(1)} ${Te.toFixed(1)}, ${A.toFixed(1)} ${E.toFixed(1)}, ${Oe.toFixed(1)} ${E.toFixed(1)}`}function ee(){const P=ce(".stage-visual",i).getBoundingClientRect(),ne=ce(".ph-front",i).getBoundingClientRect(),he=(ge,Te)=>{const Oe=ge.classList.contains("show")&&!(t.classList.contains("connected")&&!r.matches);Te.classList.toggle("on",Oe),Oe&&Te.setAttribute("d",z(ne,ge.getBoundingClientRect(),P))};he(l,h),he(u,p)}let te=0,ie=!1;const Q=()=>{k(),te=ie&&!document.hidden?requestAnimationFrame(Q):0},se=()=>{!te&&ie&&!document.hidden&&(te=requestAnimationFrame(Q))};return new IntersectionObserver(([P])=>{ie=P.isIntersecting,se()}).observe(t),document.addEventListener("visibilitychange",se),addEventListener("resize",()=>{w="",k()}),M(),D(0,!0),F(),k(),{setScenario:N,get scenario(){return g},get beat(){return x}}}const Zi={buildLog:[{date:"Nov 2026",category:"Website",title:"Rebuilt the website around a scroll walkthrough",problem:"Visitors couldn’t tell how the systems connect.",changed:"Four business stories now play on one phone, synced with a CRM card and an owner view.",media:"story"},{date:"Nov 2026",category:"Operations",title:"Shipped a custom 3D site inside GoHighLevel",problem:"A coded website had to live on a GHL page and send leads into a workflow.",changed:"One paste-in block, assets served from the repo, inquiries routed to the CRM.",media:"ghl"},{date:"Nov 2026",category:"Brand & Build",title:"Built the System-Based 3D identity",problem:"A strong name with a flat logo and no visual system.",changed:"Traced the SB mark, extruded it into chrome, and built a studio that renders every asset.",media:"identity"}],areas:[{title:"Build log",text:"Watch real systems get built: the problem, the approach, what changed.",status:"live"},{title:"Systems library",text:"Starter checklists, scripts, sample pipelines and scoping worksheets.",status:"planned"},{title:"Office hours & build-alongs",text:"Live sessions to ask questions and build alongside us.",status:"planned"},{title:"Operator discussions",text:"Owners and operators comparing what actually worked.",status:"planned"}],path:[{step:"Explore",note:"Free build logs and starter resources"},{step:"Learn & implement",note:"Do it yourself with the playbooks"},{step:"Ready-made systems",note:"Templates and systems, once they’re released"},{step:"Have it built",note:"System-Based builds or runs it for you"}],businessTypes:["Trades / home services","Auto / detailing","Hospitality / food","Professional services","Creator / online business","Other"]},m_=16e3;function g_(n){return At.FORM_MODE==="relay"||At.FORM_MODE==="ghl"?At.FORM_MODE:/leadconnectorhq\.com|msgsndr\.com|gohighlevel\.com/i.test(n)?"ghl":"relay"}async function cu(n){const e=At.FORM_ENDPOINT;if(!e)return{ok:!1,confirmed:!1,reason:"not-configured"};const t=JSON.stringify(n);if(t.length>m_)return{ok:!1,confirmed:!1,reason:"too-large"};const i=new AbortController,s=setTimeout(()=>i.abort(),15e3);try{if(g_(e)==="relay"){const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:t,signal:i.signal}),o=await a.json().catch(()=>({}));return!a.ok||o.ok===!1?{ok:!1,confirmed:!1,reason:o.error||`status ${a.status}`}:{ok:!0,confirmed:!0}}const r=Object.fromEntries(Object.entries(n).filter(([,a])=>a===null||typeof a!="object"));return await fetch(e,{method:"POST",mode:"no-cors",body:new URLSearchParams({...r,payload:t}),signal:i.signal}),{ok:!0,confirmed:!1}}catch(r){return{ok:!1,confirmed:!1,reason:r.name==="AbortError"?"timeout":"network"}}finally{clearTimeout(s)}}function uu(){const n=new URLSearchParams(location.search);return Object.fromEntries([...n].filter(([e])=>e.startsWith("utm_")).map(([e,t])=>[e,t.slice(0,120)]))}const v_=7,Ql=()=>ii(At.COMMUNITY_URL);function __({media:n={},goInquiry:e,isInquiryBusy:t}){const i=Zi.buildLog[0];ce("#community-areas").innerHTML=Zi.areas.map(f=>`<div class="area"><span class="status ${f.status}">${f.status==="live"?"Live":"Planned"}</span>
        <strong>${G(f.title)}</strong><p>${G(f.text)}</p></div>`).join(""),ce("#community-path").innerHTML=Zi.path.map((f,d)=>`<li><b>${String(d+1).padStart(2,"0")}</b><strong>${G(f.step)}</strong><span>${G(f.note)}</span></li>`).join(""),ce("#community-example").innerHTML=`<span class="eyebrow">Latest from the build log · ${G(i.date)}</span>
    <strong>${G(i.title)}</strong><p><em>Problem:</em> ${G(i.problem)}</p><p><em>What changed:</em> ${G(i.changed)}</p>`;const s=Zi.buildLog.map((f,d)=>{const C=n[f.media];return`<figure class="gw-win w${d}">
        <div class="gw-bar"><i></i><i></i><i></i><span>${G(f.category)}</span></div>
        ${C?`<img src="${C}" alt="" loading="lazy" />`:`<pre class="gw-code">&lt;div id="sb-root"&gt;
  …
&lt;/div&gt;
&lt;script type="module" src="…/site.js"&gt;</pre>`}
        <figcaption><em>${G(f.date)}</em>${G(f.title)}</figcaption></figure>`}).join("");ce("#community-gateway").innerHTML=`<div class="gw-portal"><span class="gw-ring"></span><span class="gw-mark">${oi(54)}</span></div>${s}`,r();function r(){const f=Ql();ce("#community-cta").innerHTML=`
      ${f?`<a class="btn primary" href="${G(f)}" target="_blank" rel="noopener" data-join="section">Join the Community ↗</a>`:'<button type="button" class="btn primary" data-community-invite="section">Get notified when it opens</button>'}
      <button type="button" class="btn" data-book data-from="community">I’d rather have it built for me</button>`,ce("#community-status").textContent=f?"Free to join. Paid templates and done-for-you help are there if you want them, never required.":"The community isn’t open yet. Join the list and you’ll hear the day it opens. No spam."}new IntersectionObserver(([f])=>f.isIntersecting&&ce("#community-gateway").classList.add("in"),{threshold:.25}).observe(ce("#community-gateway"));const a=ce("#invite"),o=ce(".invite-panel",a),c=ce("#gateway-fx");let l=null,u=!1,h=null;function p(){const f=+$l.get("sb-invite-dismissed")||0;return Date.now()-f<v_*864e5}function m(){const f=Ql();return`
      <span class="eyebrow">Inside System-Based</span>
      <h2 class="display" id="invite-title">See how the systems get built.</h2>
      <p class="lede">Follow real builds, see what we’re learning, get useful resources and connect with business owners improving how they operate.</p>
      <ul class="invite-list">
        <li>A public build log of real systems</li>
        <li>Starter resources as they’re released</li>
        <li>A straight path to have it built for you, if you ever want that</li>
      </ul>
      <div class="invite-ctas">
        ${f?`<a class="btn primary" href="${G(f)}" target="_blank" rel="noopener" data-join="invite">Join the Community ↗</a>`:'<button type="button" class="btn primary" data-waitlist-open>Get notified when it opens</button>'}
        <button type="button" class="btn" data-book data-from="invite">I’d rather have this built for me</button>
      </div>
      ${f?"":'<p class="fine-l">The community isn’t open yet. You’ll only be emailed about it if you ask.</p>'}
      <form class="waitlist" id="waitlist" novalidate hidden>
        <label for="wl-email">Email</label>
        <input id="wl-email" name="email" type="email" autocomplete="email" required />
        <label for="wl-type">What kind of business? <em>(optional)</em></label>
        <select id="wl-type" name="business_type"><option value="">Choose one</option>${Zi.businessTypes.map(d=>`<option>${G(d)}</option>`).join("")}</select>
        <label class="check"><input type="checkbox" id="wl-consent" name="consent" /> Email me when the community opens, and occasionally after. I can unsubscribe any time.</label>
        <input type="text" name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button class="btn primary" type="submit">Notify me</button>
        <p class="form-msg" id="wl-msg" role="status"></p>
      </form>
      <button type="button" class="link keep" data-invite-close>Keep exploring</button>`}function g(f="section",d=null){if(u)return;u=!0,h=f,l=document.activeElement,Oi.set("sb-invite-shown","1"),en({communityInterest:!0,communityEntryPoint:f}),ot("sb_community_invite_shown",{entry:f}),ce(".invite-body",a).innerHTML=m(),document.body.classList.add("locked");const C=()=>{a.hidden=!1,requestAnimationFrame(()=>{a.classList.add("open"),ce("[data-invite-x]",a).focus({preventScroll:!0})})};if(xt||!d)return C();const M=d.getBoundingClientRect(),b=M.left+M.width/2,U=M.top+M.height/2,D=innerWidth/2,N=innerHeight/2;c.innerHTML=`<svg width="100%" height="100%"><path d="M${b} ${U} C${b} ${(U+N)/2}, ${D} ${(U+N)/2}, ${D} ${N}"/></svg>
      <span class="gx-portal" style="left:${D}px;top:${N}px">${oi(40)}</span>`,c.hidden=!1,requestAnimationFrame(()=>c.classList.add("run")),setTimeout(()=>{C(),c.classList.remove("run"),c.hidden=!0},720)}function x(f="dismissed"){u&&(u=!1,a.classList.remove("open"),document.body.classList.remove("locked"),setTimeout(()=>a.hidden=!0,xt?0:350),f==="dismissed"&&($l.set("sb-invite-dismissed",String(Date.now())),ot("sb_community_invite_dismissed",{entry:h})),l?.focus?.({preventScroll:!0}))}return a.addEventListener("click",f=>{if(f.target.closest("[data-invite-close], [data-invite-x]")||f.target===ce(".invite-backdrop",a)){x();return}if(f.target.closest("[data-waitlist-open]")){const d=ce("#waitlist",a);d.hidden=!1,f.target.closest("[data-waitlist-open]").hidden=!0,ce("#wl-email",a).focus()}f.target.closest("[data-join]")&&ot("sb_community_join_clicked",{entry:h}),f.target.closest("[data-book]")&&x("converted")}),addEventListener("keydown",f=>{if(u&&(f.key==="Escape"&&x(),f.key==="Tab")){const d=it("button, a[href], input, select, textarea",o).filter(C=>!C.disabled&&C.offsetParent!==null&&!C.classList.contains("hp"));if(!d.length)return;f.shiftKey&&document.activeElement===d[0]?(d.at(-1).focus(),f.preventDefault()):!f.shiftKey&&document.activeElement===d.at(-1)&&(d[0].focus(),f.preventDefault())}}),a.addEventListener("submit",async f=>{f.preventDefault();const d=f.target,C=ce("#wl-msg",d),M=Object.fromEntries(new FormData(d));if(M.website)return;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(M.email||"")){C.className="form-msg err",C.textContent="Add a valid email so we can tell you when it opens.";return}if(!M.consent){C.className="form-msg err",C.textContent="Tick the box so we’re allowed to email you about it.";return}const b=ce("button[type=submit]",d);b.disabled=!0,C.className="form-msg",C.textContent="Adding you…";const U=Rt(),D={schema:"system-based.community.v1",catalogVersion:Yc,submittedAt:new Date().toISOString(),email:M.email,business_type:M.business_type||"",tags:"sb-community-waitlist,sb-community-interest",sb_intake_source:"community_waitlist",sb_community_interest:"yes",sb_community_entry_point:h||"section",sb_problem_id:U.selectedProblemId||"",sb_marketing_consent:"yes",sb_request_id:d.dataset.rid||(d.dataset.rid=so()),sb_source_page:location.href.slice(0,300),...Object.fromEntries(["utm_source","utm_medium","utm_campaign"].map(F=>[F,uu()[F]||""]))},N=await cu(D);if(b.disabled=!1,!N.ok){C.className="form-msg err",C.textContent=N.reason==="not-configured"?"Sign-ups aren’t connected yet. Please check back soon.":"That didn’t go through. Your email is still here, so try again.";return}ot("sb_community_waitlist_submitted",{entry:h||"section"}),d.innerHTML=`<p class="lede"><strong>You’re on the list.</strong> We’ll email you when the community opens${N.confirmed?"":". If nothing arrives, check your spam folder"}.</p>`}),document.addEventListener("click",f=>{const d=f.target.closest("[data-community-invite]");d&&(f.preventDefault(),g(d.dataset.communityInvite||"section",d))}),document.addEventListener("click",f=>{f.target.closest("#community [data-join]")&&ot("sb_community_join_clicked",{entry:"section"})}),{open:g,close:x,maybeInvite(f){const d=Rt();f<5||!d.selectedProblemId||Oi.get("sb-invite-shown")||p()||document.body.classList.contains("intro")||t?.()||g("walkthrough",ce("#phone3d"))},goInquiry:e}}const qs=n=>$t.find(e=>e.id===n);function x_(){const n=ce("#inquiry-form"),e=ce("#form-msg");let t=!1,i=!1,s=!1,r=so();ce("#f-problem").innerHTML='<option value="">Choose one</option>'+Sn.map(c=>`<option value="${c.id}">${G(c.problem)}</option>`).join("")+'<option value="other">Something else</option>';function a(){const c=Rt(),l=ce("#f-problem");c.selectedProblemId&&l.value!==c.selectedProblemId&&!n.dataset.touchedProblem&&(l.value=c.selectedProblemId);const u=[],h=Sn.find(g=>g.id===c.selectedProblemId);h&&u.push(["Challenge",h.problem,"start"]);const p=qs(c.acceptedPackageId),m=qs(c.recommendedPackageId);p?u.push(["Package",`${p.name} (your choice)`,"packages"]):m?u.push(["Suggested",`${m.name} (a suggestion, not a commitment)`,"packages"]):h&&!h.recommend.packageId&&u.push(["Suggested",h.recommend.label,"projects"]),c.selectedServiceIds.length&&u.push(["Services",c.selectedServiceIds.map(g=>Ht(g)?.name).filter(Boolean).join(", "),"packages"]),ce("#inq-scope").innerHTML=u.length?`<span class="eyebrow">Your starting point</span><dl class="fields">${u.map(([g,x,f])=>`<div><dt>${G(g)}</dt><dd>${G(x)} <button type="button" class="link sm" data-edit="${f}">Change</button></dd></div>`).join("")}</dl>`:'<span class="eyebrow">Your starting point</span><p class="muted">Nothing chosen yet, and that’s fine. Tell us in your own words below, or <button type="button" class="link sm" data-edit="start">pick your bottleneck</button>.</p>'}vr(a),a(),ce("#inq-scope").addEventListener("click",c=>{const l=c.target.closest("[data-edit]");l&&zn(l.dataset.edit)}),ce("#f-problem").addEventListener("change",()=>n.dataset.touchedProblem="1"),n.addEventListener("focusin",()=>{i||(i=!0,ot("sb_inquiry_started",{problem:Rt().selectedProblemId||"none"}))});function o(c){e.className="form-msg err",e.textContent=c}return n.addEventListener("submit",async c=>{if(c.preventDefault(),t)return;const l=Object.fromEntries(new FormData(n));if(l.website)return;const u=(l.name||"").trim(),h=(l.email||"").trim();if(!u)return o("Add your name so we know who we’re talking to."),ce("#f-name").focus();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h))return o("Add a valid email so we can send your recommendation."),ce("#f-email").focus();if(l.phone&&l.phone.replace(/\D/g,"").length<7)return o("That phone number looks too short. Leave it blank if you prefer email."),ce("#f-phone").focus();const p=Rt(),m=l.problem||p.selectedProblemId||"",g=Sn.find(w=>w.id===m),x=p.selectedServiceIds.length?Zc(p.selectedServiceIds):null,f=qs(p.acceptedPackageId),d=qs(p.recommendedPackageId),[C,...M]=u.split(/\s+/),b=uu(),U=["sb-inquiry",f&&`sb-pkg-${f.id}`,g&&`sb-problem-${g.id}`,x?.custom&&"sb-custom",x?.projects.length&&"sb-project",l.performance&&"sb-performance",p.communityInterest&&"sb-community-interest"].filter(Boolean),D={schema:"system-based.inquiry.v2",catalogVersion:Yc,submittedAt:new Date().toISOString(),first_name:C,last_name:M.join(" "),full_name:u,email:h,phone:(l.phone||"").trim(),company_name:(l.business||"").trim(),tags:U.join(","),sb_interest:f?`${f.name} package`:x?.custom?"Custom proposal":g?g.recommend.label:"Not sure yet",sb_package:f?.name||"",sb_services:p.selectedServiceIds.join(", "),sb_projects:x?x.projects.join(", "):"",sb_system:g?Lo(g.recommend.system).name:"",sb_need:g?g.problem:m==="other"?"Something else":"",sb_custom_proposal:x?.custom?"yes":"no",sb_performance:l.performance?"yes":"no",sb_message:(l.message||"").trim().slice(0,2e3),sb_source_page:location.href.slice(0,300),sb_problem_id:m,sb_scenario_id:p.scenarioId,sb_recommended_package:d?.id||"",sb_accepted_package:f?.id||"",sb_intake_source:"website_inquiry",sb_next_step:l.next_step||"",sb_marketing_consent:l.consent?"yes":"no",sb_community_interest:p.communityInterest?"yes":"no",sb_community_entry_point:p.communityEntryPoint||"",sb_scope_version:"2",sb_request_id:r,utm_source:b.utm_source||"",utm_medium:b.utm_medium||"",utm_campaign:b.utm_campaign||"",utm_content:b.utm_content||""};t=!0;const N=ce("button[type=submit]",n);N.disabled=!0,N.setAttribute("aria-busy","true"),e.className="form-msg",e.textContent="Sending…";const F=await cu(D);if(t=!1,N.disabled=!1,N.removeAttribute("aria-busy"),!F.ok){const w={"not-configured":At.CONTACT_EMAIL?`Online sending isn’t switched on yet. Please email ${At.CONTACT_EMAIL} and we’ll pick it up from there.`:"Online sending isn’t switched on yet, so nothing was sent. Your details are still here.",timeout:"That took too long and may not have gone through. Your details are still here: try again."};return o(w[F.reason]||"That didn’t go through. Your details are still here: try again in a moment.")}s=!0,ot("sb_inquiry_submitted",{problem:m||"none",package:f?.id||""}),W0(r),r=so();const S=ii(At.BOOKING_URL);ce("#inquiry-done").innerHTML=`<h3 class="display">Scope received.</h3>
      <p class="lede">Thanks, ${G(C)}. We’ll look at what you shared and reply personally with a recommendation.</p>
      ${F.confirmed?"":`<p class="fine-l">Sent from this browser. If you haven’t heard from us within a business day, ${At.CONTACT_EMAIL?`email ${G(At.CONTACT_EMAIL)}`:"send it again"} so nothing gets lost.</p>`}
      ${S?At.BOOKING_EMBED?`<p class="lede">Want to skip the back-and-forth? Pick a time for a short fit call:</p><iframe class="booking" src="${G(S)}" title="Book your fit call" loading="lazy"></iframe>`:`<a class="btn primary" href="${G(S)}" target="_blank" rel="noopener" data-booking>Pick a time ↗</a>`:""}`,n.hidden=!0,ce("#inquiry-done").hidden=!1,ce("#inquiry-done").focus?.()}),document.addEventListener("click",c=>{c.target.closest("[data-booking]")&&ot("sb_booking_link_clicked")}),{busy:()=>t||s||n.contains(document.activeElement),go(c){en({journeySource:c||Rt().journeySource}),zn("inquiry"),setTimeout(()=>ce("#f-name")?.focus({preventScroll:!0}),xt?0:700)}}}const y_=""+new URL("build-story-CTBKc7-A.jpg",import.meta.url).href,du=n=>$t.find(e=>e.id===n),hu=n_(),b_=n=>{try{return n()}catch(e){return console.warn(e),null}};document.documentElement.classList.add("js");xt&&document.documentElement.classList.add("reduced");ce("#year").textContent=new Date().getFullYear();const Io=n=>n&&n.value!=null&&(n.approved||At.SHOW_PROPOSED),M_=n=>n.approved?"":' <span class="proposed">Proposed</span>',fu=n=>"$"+n.toLocaleString("en-US"),kn=(n,e=fu,t="Confirmed after scoping")=>Io(n)?`${e(n.value)}${M_(n)}`:`<span class="muted">${t}</span>`,pu={"setup+managed":"Set up + managed",managed:"Managed monthly",project:"One-time project","project|add-on":"Project or add-on"};it("[data-logo]").forEach(n=>{const e=n.dataset.logo==="tagline";n.innerHTML=`${oi(28)}<i class="rule"></i><span style="display:grid;gap:6px"><span class="word chrome">System-Based</span>${e?'<span style="font:400 10px var(--sb-font-body);letter-spacing:.55em;color:var(--muted)">SYSTEMS OVER LUCK.</span>':""}</span>`});const S_=ce("#nav"),mu=()=>S_.classList.toggle("scrolled",scrollY>30);addEventListener("scroll",mu,{passive:!0});mu();const Do=ce(".burger"),ec=ce("#menu"),_r=n=>{document.body.classList.toggle("menu-open",n),document.body.classList.toggle("locked",n),Do.setAttribute("aria-expanded",n),ec.setAttribute("aria-hidden",!n),n&&ce("a",ec).focus({preventScroll:!0})};Do.addEventListener("click",()=>_r(!document.body.classList.contains("menu-open")));it("#menu a").forEach(n=>n.addEventListener("click",()=>_r(!1)));addEventListener("keydown",n=>{n.key==="Escape"&&document.body.classList.contains("menu-open")&&(_r(!1),Do.focus())});const w_=it(".nav-links a"),E_=new IntersectionObserver(n=>n.forEach(e=>{e.isIntersecting&&w_.forEach(t=>t.classList.toggle("active",t.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});["systems","how","work","packages","projects","community"].forEach(n=>E_.observe(document.getElementById(n)));const gu=new IntersectionObserver(n=>n.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),gu.unobserve(e.target))}),{rootMargin:"0px 0px -6% 0px"});it("[data-reveal]").forEach(n=>gu.observe(n));const xr=ce(".hero"),yr=hu&&!xt&&Oi.get("sb-intro")!=="seen";let lo=null;const vu=()=>{document.body.classList.remove("intro"),xr.classList.add("ready"),Oi.set("sb-intro","seen")};yr||document.body.classList.remove("intro");hu?(lo=b_(()=>o_(ce("#hero-canvas"),{intro:yr,onLocked:()=>xr.classList.add("ready"),onIntroEnd:vu})),!lo&&!xt&&tc()):tc();yr||setTimeout(()=>xr.classList.add("ready"),xt?0:300);function tc(){document.body.classList.remove("intro"),ce("#hero-canvas").replaceWith(Object.assign(new Image,{src:nu,className:"poster",alt:""})),xr.classList.add("ready")}const _u=()=>lo?.skip();ce("#intro-skip").addEventListener("click",_u);["wheel","touchstart","keydown"].forEach(n=>addEventListener(n,()=>document.body.classList.contains("intro")&&_u(),{passive:!0}));yr&&setTimeout(()=>document.body.classList.contains("intro")&&vu(),7e3);ce("#rail").innerHTML=wn.map(n=>`<button type="button" class="chip" data-explore="${n.code}">${G(n.name)}</button>`).join("");ce("#statement-line").textContent=gr.line;ce("#statement-body").textContent=gr.body;ce("#statement-who").textContent=gr.who;ce("#facts").innerHTML=gr.facts.map(n=>`<div class="fact"><strong class="chrome">${G(n.k)}</strong><span>${G(n.v)}</span></div>`).join("");const rs=x_(),T_=__({media:{identity:tu,story:y_},isInquiryBusy:rs.busy}),xu=n=>{n.recommend.packageId?U_(n.recommend.packageId):zn("projects")};c_({onSeeIncluded:()=>xu({recommend:{packageId:Rt().recommendedPackageId}})});p_({onBeat:(n,e,t)=>t&&T_.maybeInvite(n),onChoose:xu});const A_={CR:'<div class="mini mini-cr"><span class="b in">Hi, is anyone free tomorrow?</span><span class="b out">Yes! 9 AM or 1:30 PM?</span><span class="b in">9 works.</span><span class="tick">Booked</span></div>',GR:'<div class="mini mini-gr"><div class="flowline"><span>Ad</span><i></i><span>Page</span><i></i><span>Lead</span></div><div class="bars"><b style="--h:35%"></b><b style="--h:55%"></b><b style="--h:48%"></b><b style="--h:72%"></b><b style="--h:86%"></b></div></div>',BB:'<div class="mini mini-bb"><div class="win"><span class="bar"></span><span class="h"></span><span class="l"></span><span class="l s"></span><span class="cta">Book</span></div></div>',AO:`<div class="mini mini-ao"><svg viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M40 26 L100 60 M160 26 L100 60 M40 94 L100 60 M160 94 L100 60"/></svg><span class="n n1">Inbox</span><span class="n n2">CRM</span><span class="n n3">Calendar</span><span class="n n4">Team</span><span class="hub">${oi(18)}</span></div>`};let Bi="CR";ce("#ex-tabs").innerHTML=wn.map(n=>`<button type="button" class="ex-tab" role="tab" data-tab="${n.code}" aria-selected="${n.code===Bi}">
    <span><strong>${G(n.name)}</strong><em>${G(Qc[n.code])}</em></span></button>`).join("");const R_=n=>$t.filter(e=>e.services.includes(n)).map(e=>e.name);function br(n){const e=Lo(Bi),t=new Set(Rt().selectedServiceIds),i=ce("#ex-panel");n||(i.classList.remove("swap"),i.offsetWidth,i.classList.add("swap")),i.innerHTML=`
    <div class="ex-top">
      <div class="ex-head"><h3 class="display">${G(e.name)}</h3><p class="lede">${G(Qc[e.code])}</p></div>
      ${A_[e.code]}
    </div>
    <div class="ex-two">
      <div class="sh-block"><h4>The problem</h4><p>${G(e.problem)}</p></div>
      <div class="sh-block"><h4>What changes</h4><p>${G(e.outcome)}</p></div>
    </div>
    <div class="sh-block"><h4>How it flows</h4><div class="flow">${e.process.map((s,r)=>`${r?"<i></i>":""}<span style="animation-delay:${.1+r*.06}s">${G(s)}</span>`).join("")}</div></div>
    <div class="sh-block"><h4>What’s included</h4>
      <div class="svc-list">${Jc(e.code).map(s=>{const r=R_(s.code),a=t.has(s.code);return`<details class="svc" data-svc="${s.code}"${n===s.code?" open":""}>
            <summary><strong>${G(s.name)}</strong><span class="badge">${pu[s.soldAs]}</span></summary>
            <dl>
              <div><dt>You get</dt><dd>${G(s.deliverables)}</dd></div>
              <div><dt>You provide</dt><dd>${G(s.client)}</dd></div>
              <div><dt>After launch</dt><dd>${G(s.ongoing)}</dd></div>
              <div><dt>Where it’s sold</dt><dd>${r.length?`In ${r.join(", ")}`:s.soldAs.startsWith("project")?"As a one-time project":"As an add-on"}</dd></div>
            </dl>
            <button type="button" class="link" data-add="${s.code}" aria-pressed="${a}">${a?"✓ In your scope (remove)":"+ Add to my scope"}</button>
          </details>`}).join("")}</div>
    </div>
    <p class="muted" style="font-size:14px">Upgrades: ${G(e.upgrades)}.</p>`,it(".ex-tab").forEach(s=>s.setAttribute("aria-selected",s.dataset.tab===Bi))}ce("#ex-tabs").addEventListener("click",n=>{const e=n.target.closest("[data-tab]");e&&(Bi=e.dataset.tab,br(),ot("sb_system_explored",{system:Bi}))});br();const C_=n=>{Bi=n,br(),zn("systems"),ot("sb_system_explored",{system:n})},L_=jv.filter(n=>n.published),P_={live:"Live project",demo:"Working demo",soon:"Concept / in progress"},I_={site:"Website",demo:"Demo",brand:"Brand",ai:"AI & software"};q0();const D_=$t.some(n=>!n.implementation.approved||!n.management.approved);D_&&At.SHOW_PROPOSED&&(ce("#draft-note").hidden=!1,ce("#draft-note").innerHTML='<span class="proposed">Proposed</span> Prices marked this way are under review and can change before you sign.');const cr=ce("#config-toggle"),Mr=()=>{const n=ce('[aria-pressed="true"]',cr),e=ce(".thumb",cr);e.style.left=n.offsetLeft+"px",e.style.width=n.offsetWidth+"px"},Uo=n=>{it("[data-view]",cr).forEach(e=>e.setAttribute("aria-pressed",e.dataset.view===n)),ce("#view-packages").hidden=n!=="packages",ce("#view-composer").hidden=n!=="composer",Mr(),n==="composer"&&ot("sb_composer_opened",{},{once:!0})};cr.addEventListener("click",n=>{const e=n.target.closest("[data-view]");e&&Uo(e.dataset.view)});requestAnimationFrame(Mr);addEventListener("resize",Mr);document.fonts?.ready.then(Mr);const yu=n=>wn.filter(e=>n.services.some(t=>Ht(t).system===e.code));function bu(){const{recommendedPackageId:n,acceptedPackageId:e}=Rt();ce("#plans").innerHTML=$t.map(t=>{const i=n===t.id,s=e===t.id;return`<article class="plan${i?" recommended":""}${s?" accepted":""}" id="pkg-${t.id}">
      ${s?'<span class="badge">Your choice</span>':i?'<span class="badge">Suggested for you</span>':""}
      <h3>${G(t.name)}</h3>
      <p class="fit">${G(eu[t.id])}</p>
      <div class="sys-chips">${yu(t).map(r=>`<span>${G(r.name)}</span>`).join("<i>+</i>")}</div>
      <div class="fee-rows">
        <div class="fee"><span>Implementation</span><strong>${kn(t.implementation)}</strong><em>one-time</em></div>
        <div class="fee"><span>Management</span><strong>${kn(t.management)}</strong><em>per month</em></div>
        <div class="fee"><span>Term</span><strong>${kn(t.term,r=>r)}</strong></div>
      </div>
      <p class="count">${t.services.length} services included</p>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button type="button" class="btn ${i||s?"primary":""}" data-accept="${t.id}">${s?"Selected · continue":`Start with ${G(t.name)}`}</button>
        <button type="button" class="link" data-plan="${t.id}" style="justify-self:center;font-size:14px">See what’s included →</button>
      </div>
    </article>`}).join("")+`<article class="plan custom-plan"><h3>Custom project</h3><p class="fit">For a bounded design, build, software or automation requirement.</p>
      <p class="muted">Pick exactly the services you need, or scope a one-time build.</p>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button type="button" class="btn" data-view-composer>Build your own</button>
        <a class="link" href="#projects" style="justify-self:center;font-size:14px">See one-time projects →</a>
      </div></article>`}bu();function U_(n){Uo("packages"),zn("packages");const e=document.getElementById("pkg-"+n);e&&(e.classList.remove("focus"),e.offsetWidth,e.classList.add("focus"),ot("sb_package_viewed",{package:n}))}const N_=[...new Set($t.flatMap(n=>[...n.services,...n.addOns]))];ce("#matrix").innerHTML=`<table class="matrix"><thead><tr><th>Service</th>${$t.map(n=>`<th>${G(n.name)}</th>`).join("")}</tr></thead><tbody>${wn.map(n=>`<tr class="grp"><td colspan="${$t.length+1}">${G(n.name)}</td></tr>`+N_.filter(e=>Ht(e).system===n.code).map(e=>`<tr><td>${G(Ht(e).name)}</td>${$t.map(t=>t.services.includes(e)?'<td class="yes">✓</td>':t.addOns.includes(e)?'<td class="add">Add-on</td>':'<td class="no">—</td>').join("")}</tr>`).join("")).join("")}<tr><td>Usage limits (lines, minutes, posts, edit hours)</td>${$t.map(n=>`<td>${kn(n.limits,e=>e,"Set during scoping")}</td>`).join("")}</tr></tbody></table>`;ce("#compare-btn").addEventListener("click",n=>{const e=ce("#matrix");e.hidden=!e.hidden,n.currentTarget.setAttribute("aria-expanded",!e.hidden),n.currentTarget.textContent=e.hidden?"See every service compared":"Hide comparison"});ce("#comp-list").innerHTML=wn.map(n=>`<fieldset class="comp-group"><legend>${G(n.name)}</legend>${Jc(n.code).map(e=>`<label class="comp-item"><input type="checkbox" value="${e.code}" id="c-${e.code}" />
        <span><strong>${G(e.name)}</strong><em>${G(e.deliverables)}</em></span><span class="badge">${pu[e.soldAs]}</span></label>`).join("")}</fieldset>`).join("");ce("#comp-list").addEventListener("change",n=>{if(n.target.type!=="checkbox")return;ou(n.target.value)&&ot("sb_service_added",{service:n.target.value})});function Mu(){const n=Rt().selectedServiceIds;it("#comp-list input").forEach(s=>s.checked=n.includes(s.value));const e=ce("#comp-sum");if(!n.length){e.innerHTML=`<div class="eyebrow">Your scope</div><h3 class="display">Choose the services you need.</h3>
      <p class="muted">We’ll point out the closest package, or treat it as a custom proposal.</p>`;return}const t=Zc(n),i=t.pkg&&!t.custom;e.innerHTML=`
    <div class="eyebrow">Your scope · ${n.length} service${n.length>1?"s":""}</div>
    <h3 class="display">${i?`Closest fit: ${G(t.pkg.name)}`:"A custom proposal"}</h3>
    <p class="muted">${i?`${G(t.pkg.name)} covers your recurring selections${t.unused.length?` and includes ${t.unused.length} more services`:""}. Picking it is up to you.`:"Your mix doesn’t match one package. We’ll scope it service by service after a short call."}</p>
    <ul class="scope-list">${n.map(s=>`<li>${G(Ht(s).name)}<button type="button" class="link sm" data-add="${s}">Remove</button></li>`).join("")}</ul>
    ${t.projects.length?`<p class="muted">Quoted as one-time projects: ${t.projects.map(s=>G(Ht(s).name)).join(", ")}.</p>`:""}
    <p class="fine-l">An estimate to start the conversation, not a quote or a checkout.</p>
    <div class="need-actions">
      <button type="button" class="btn primary" data-book data-from="composer">Send this scope →</button>
      ${i?`<button type="button" class="link" data-accept="${t.pkg.id}">Choose ${G(t.pkg.name)}</button>`:""}
      <button type="button" class="link" id="comp-clear">Clear</button>
    </div>`}ce("#builds").innerHTML=kv.map(n=>`<button type="button" class="build" data-project="${n.code}"><strong>${G(n.name)}</strong><span>${G(n.note)}</span><em>${Io(n.from)?`From ${kn(n.from)}`:"Quoted after scoping"} →</em></button>`).join("");ce("#process").innerHTML=Bv.map((n,e)=>`<li><b>${String(e+1).padStart(2,"0")}</b><strong>${G(n.step)}</strong><span>${G(n.note)}</span></li>`).join("");const Su=[{step:"Project",note:"Build the brand, site or tool.",tag:"Quoted"},...$t.map(n=>({step:n.name,note:n.outcome+".",tag:Io(n.management)?`${fu(n.management.value)}/mo`:"Monthly"}))],ur=ce("#path-track");ur.innerHTML=Su.map((n,e)=>`<div class="path-step"><span class="node">${String(e+1).padStart(2,"0")}</span><strong>${G(n.step)}</strong><span>${G(n.note)}</span><em>${G(n.tag)}</em></div>`).join("");const F_=it(".path-step",ur),wu=()=>{const n=ur.getBoundingClientRect(),e=xt?1:Math.min(1,Math.max(0,(innerHeight*.85-n.top)/(innerHeight*.6)));ur.style.setProperty("--p",e),F_.forEach((t,i)=>t.classList.toggle("on",e>=i/(Su.length-1)-.02))};addEventListener("scroll",wu,{passive:!0});wu();ce("#faq-list").innerHTML=zv.map(n=>`<details><summary>${G(n.q)}</summary><p>${G(n.a)}</p></details>`).join("");it("#faq-list details").forEach(n=>n.addEventListener("toggle",()=>{n.open&&it("#faq-list details").forEach(e=>e!==n&&(e.open=!1))}));function Eu(){const n=Rt(),e=n.selectedServiceIds.length,t=ce("#scope-bar"),i=e?`${e} service${e>1?"s":""} in your scope`:n.acceptedPackageId?`${du(n.acceptedPackageId).name} selected`:"";t.hidden=!i,t.innerHTML=i?`<span class="dot"></span>${G(i)} <b>Review →</b>`:""}ce("#scope-bar").addEventListener("click",()=>rs.go("scope-bar"));vr(()=>{bu(),Mu(),Eu(),br(ce("#ex-panel details[open]")?.dataset.svc||"")});Mu();Eu();const zt=ce("#sheet"),wi=ce(".sheet-panel",zt),dr=ce("#sheet-body");let co=null,Tu=0;function No(n,e){clearTimeout(Tu);const t=zt.classList.contains("open");co=t?co:document.activeElement,dr.innerHTML=n,wi.scrollTop=0,zt.classList.remove("closing"),zt.setAttribute("aria-hidden","false"),document.body.classList.add("locked");const i=wi.getBoundingClientRect();wi.style.setProperty("--ox",(e?.clientX??innerWidth/2)-i.left+"px"),wi.style.setProperty("--oy",(e?.clientY??innerHeight/2)-i.top+"px"),t&&(zt.classList.remove("open"),wi.offsetWidth),requestAnimationFrame(()=>{zt.classList.add("open"),ce(".sheet-close",zt).focus({preventScroll:!0})})}function as(){zt.classList.contains("open")&&(zt.classList.add("closing"),zt.classList.remove("open"),zt.setAttribute("aria-hidden","true"),document.body.classList.remove("locked"),Tu=setTimeout(()=>dr.innerHTML="",500),co?.focus?.({preventScroll:!0}))}zt.addEventListener("click",n=>n.target.closest("[data-close]")&&as());addEventListener("keydown",n=>{if(zt.classList.contains("open")&&(n.key==="Escape"&&as(),n.key==="Tab")){const e=it("button, a[href], input, select, textarea, iframe",wi).filter(t=>!t.disabled&&t.offsetParent!==null);if(!e.length)return;n.shiftKey&&document.activeElement===e[0]?(e.at(-1).focus(),n.preventDefault()):!n.shiftKey&&document.activeElement===e.at(-1)&&(e[0].focus(),n.preventDefault())}});function O_(n,e){const t=du(n);ot("sb_package_viewed",{package:n}),No(`<div class="sh-copy" style="max-width:980px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Package</div><h2 class="display" id="sheet-title">${G(t.name)}</h2><p class="lede">${G(eu[t.id])}</p></div>
      <div class="fee-rows">
        <div class="fee"><span>Implementation</span><strong>${kn(t.implementation)}</strong><em>one-time</em></div>
        <div class="fee"><span>Management</span><strong>${kn(t.management)}</strong><em>per month</em></div>
        <div class="fee"><span>Term</span><strong>${kn(t.term,i=>i)}</strong></div>
      </div>
      <div class="pkg-groups">${yu(t).map(i=>`<div class="sh-block"><h4>${G(i.name)}</h4><ul class="ticks">${t.services.filter(s=>Ht(s).system===i.code).map(s=>`<li><span><strong>${G(Ht(s).name)}</strong><em>${G(Ht(s).deliverables)}</em></span></li>`).join("")}</ul></div>`).join("")}</div>
      <div class="sh-block"><h4>Can be added</h4><div class="syschips">${t.addOns.map(i=>`<span class="chip sm">${G(Ht(i).name)}</span>`).join("")}</div></div>
      <div class="sh-ctas"><button type="button" class="btn primary" data-accept="${t.id}">Start with ${G(t.name)}</button>${t.performance?'<button type="button" class="btn" data-performance>Performance pricing</button>':""}</div>
    </div>`,e)}function k_(n){const e=At.SHOW_PROPOSED;No(`<div class="sh-copy" style="max-width:900px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Performance pricing · <span class="proposed">Under review</span></div>
        <h2 class="display" id="sheet-title">Pay on results.</h2>
        <p class="lede">${e?G(Wl.summary):"For some marketing engagements, part of the fee can be tied to results instead of a flat monthly fee. It needs marketing run by us and tracking we can verify. Exact terms are confirmed during scoping."}</p></div>
      ${e?`<div class="rules">${Wl.rules.map(([t,i])=>`<div><dt>${G(t)}</dt><dd>${G(i)}</dd></div>`).join("")}</div>`:""}
      <div class="sh-ctas"><button type="button" class="btn primary" data-book data-from="performance" data-perf="1">Ask about performance pricing</button></div>
    </div>`,n)}function Au(n){return n.video?`<video src="${n.video}" poster="${n.poster||""}" autoplay muted loop playsinline></video>`:`<img src="${n.img}" alt="" />`}let uo=null;function B_(n,e){const t=L_[n];uo=t;const i=t.links.map(r=>({...r,url:ii(r.url)})).filter(r=>r.url),s=[t.problem&&`<div class="sh-block"><h4>The problem</h4><p>${G(t.problem)}</p></div>`,t.solution?.length&&`<div class="sh-block"><h4>Services used</h4><div class="syschips">${t.solution.map(r=>`<span class="chip sm">${G(Ht(r).name)}</span>`).join("")}</div></div>`,t.technology?.length&&`<div class="sh-block"><h4>Technology</h4><div class="syschips">${t.technology.map(r=>`<span class="chip sm">${G(r)}</span>`).join("")}</div></div>`,t.process?.length&&`<div class="sh-block"><h4>Process</h4><ol class="mini-steps">${t.process.map(r=>`<li>${G(r)}</li>`).join("")}</ol></div>`,t.results?.length?`<div class="sh-block"><h4>Results</h4><dl class="fields">${t.results.map(r=>`<div><dt>${G(r.metric)}</dt><dd>${G(r.value)} <span class="muted">· ${G(r.period)} · ${G(r.source)}</span></dd></div>`).join("")}</dl></div>`:t.observed&&`<div class="sh-block"><h4>What changed</h4><p>${G(t.observed)}</p></div>`].filter(Boolean).join("");No(`<div class="sh-work">
      <div class="gallery" id="gallery">${t.media[0]?Au(t.media[0]):`<div class="work-media" style="height:100%"><div class="placeholder"><span class="ph-glyph">${oi(80)}</span></div></div>`}</div>
      ${t.media.length>1?`<div class="thumbs">${t.media.map((r,a)=>`<button type="button" data-media="${a}" aria-current="${a===0}" aria-label="Show item ${a+1}"><img src="${r.poster||r.img}" alt="" /></button>`).join("")}</div>`:""}
      <div class="sh-copy">
        <div class="sh-block full">
          <div class="work-meta"><span class="pill ${t.status}">${P_[t.status]}</span><span>${G(I_[t.type]||"")}</span><span>${G(t.client)}</span></div>
          <h2 class="display" id="sheet-title">${G(t.title)}</h2>
          <p class="lede">${G(t.about)}</p>
          <div class="sh-ctas" style="margin-top:10px">
            ${i.map((r,a)=>`<a class="btn ${a?"":"primary"}" href="${G(r.url)}" target="_blank" rel="noopener">${G(r.label)} ↗</a>`).join("")}
            ${t.status==="soon"?'<button type="button" class="btn primary" data-community-invite="work">Follow the build</button>':""}
          </div>
        </div>
        <div>${s}</div>
        <div>${t.built?.length?`<div class="sh-block"><h4>What we built</h4><ul class="ticks" style="grid-template-columns:1fr">${t.built.map(r=>`<li>${G(r)}</li>`).join("")}</ul></div>`:""}
          ${t.systems.length?`<div class="sh-block" style="margin-top:14px"><h4>Systems</h4><div class="syschips">${t.systems.map(r=>`<button type="button" class="chip" data-explore="${r}">${G(Lo(r).name)}</button>`).join("")}</div></div>`:""}</div>
      </div>
    </div>`,e)}dr.addEventListener("click",n=>{const e=n.target.closest("[data-media]");e&&uo&&(ce("#gallery").innerHTML=Au(uo.media[+e.dataset.media]),it("[data-media]",dr).forEach(t=>t.setAttribute("aria-current",t===e)))});document.addEventListener("click",n=>{const e=n.target;e.closest("[data-hero-primary]")&&ot("sb_hero_primary_click");const t=e.closest("[data-book]");if(t&&!t.disabled)return n.preventDefault(),t.dataset.perf&&(ce("#f-perf").checked=!0),_r(!1),as(),rs.go(t.dataset.from);const i=e.closest("[data-accept]");if(i){const l=i.dataset.accept;return en({acceptedPackageId:l}),ot("sb_package_selected",{package:l}),as(),rs.go("package")}const s=e.closest("[data-project]");if(s){const l=new Set(Rt().selectedServiceIds);return l.add(s.dataset.project),en({selectedServiceIds:[...l],customScope:!0}),ot("sb_service_added",{service:s.dataset.project}),rs.go("project")}const r=e.closest("[data-explore]");if(r)return as(),C_(r.dataset.explore);if(e.closest("[data-view-composer]"))return Uo("composer");const a=e.closest("[data-plan]");if(a)return O_(a.dataset.plan,n);if(e.closest("[data-performance]"))return k_(n);const o=e.closest("[data-work]");if(o)return B_(+o.dataset.work,n);if(e.closest("#comp-clear"))return en({selectedServiceIds:[]});const c=e.closest("[data-add]");c&&ou(c.dataset.add)&&ot("sb_service_added",{service:c.dataset.add})});
