import{g as m,n as f,s as g}from"./chunk-K72LVKCT.js";import{A as u,N as p,R as h,W as c,o as l,s as n}from"./chunk-KLG2F6FQ.js";var a=class{constructor(o,d,e,t,r){this.userId=o,this.usuario=d,this.nombre=e,this.apellido=t,this.role=r}};var s=g.base_url,z=(()=>{let o=class o{constructor(e,t){this.http=e,this.router=t}login(e){return this.http.post(`${s}/auth/login`,e).pipe(p(({token:t})=>{let r="bearer "+t;localStorage.setItem("token",r)}))}logout(){localStorage.removeItem("token"),this.router.navigateByUrl("login")}validarToken(){let e=localStorage.getItem("token");return this.http.get(`${s}/profile`,{headers:{Authorization:e}}).pipe(n(t=>{let{userId:r,usuario:k,apellido:I,nombre:b,role:v}=t.usuario;return this.usuario=new a(r,k,b,I,v),console.log(this.usuario),localStorage.setItem("token",t.token),!0}),u(t=>l(!1)))}validarAdmin(){let e=localStorage.getItem("token");return this.http.get(`${s}/profile`,{headers:{Authorization:e}}).pipe(n(t=>t.usuario.role==="ADMIN_ROLE"))}proteccionLogin(){let e=localStorage.getItem("token");return this.http.get(`${s}/auth`,{headers:{"x-token":e}}).pipe(n(()=>!1),u(t=>l(!0)))}};o.\u0275fac=function(t){return new(t||o)(c(m),c(f))},o.\u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();export{z as a};
