import{a as S}from"./chunk-EFV24HPR.js";import{g,n as v,s as h}from"./chunk-K72LVKCT.js";import{Ca as n,R as l,Ua as o,Va as c,W as m,Wa as u,aa as p,ab as d,ib as s,nb as f}from"./chunk-KLG2F6FQ.js";var x=h.base_url,b=(()=>{let i=class i{constructor(t){this.http=t}inicializarSistema(){return this.http.get(`${x}/inicializacion`)}};i.\u0275fac=function(r){return new(r||i)(m(g))},i.\u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var E=(()=>{let i=class i{constructor(t,r,a){this.inicializacionService=t,this.alertService=r,this.router=a}ngOnInit(){}inicializarSistema(){this.alertService.loading(),this.inicializacionService.inicializarSistema().subscribe({next:()=>{this.router.navigateByUrl("/login"),this.alertService.success("Sistema inicializado correctamente")},error:({error:t})=>this.alertService.errorApi(t.message)})}};i.\u0275fac=function(r){return new(r||i)(n(b),n(S),n(v))},i.\u0275cmp=p({type:i,selectors:[["app-inicializacion"]],standalone:!0,features:[f],decls:7,vars:0,consts:[[1,"h-screen","flex","items-center","bg-gray-900","justify-center"],[1,"text-center"],["src","assets/img/Logo.png","alt","Logo.png",1,"w-1/2","md:w-2/3","mx-auto"],[1,"p-2","bg-indigo-800","hover:bg-indigo-700","transform","duration-500","mt-10","text-white","rounded",3,"click"],[1,"text-gray-300","mt-10"]],template:function(r,a){r&1&&(o(0,"div",0)(1,"div",1),u(2,"img",2),o(3,"button",3),d("click",function(){return a.inicializarSistema()}),s(4," Inicializar sistema "),c(),o(5,"p",4),s(6," Sistema desarrollado por Equinoccio Techonology "),c()()())},encapsulation:2});let e=i;return e})();export{E as default};
