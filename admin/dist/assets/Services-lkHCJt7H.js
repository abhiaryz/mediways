import{r as c,j as e,l as j,s as g}from"./index-Bf73z5r4.js";import{T as N}from"./TitleCard-DU_zieoU.js";import{F as y,a as w}from"./PencilIcon-PxRaepA3.js";import{l as d,u as C}from"./Layout-HwrZM4zP.js";import"./Subtitle-7zIYQHEd.js";const k=({isOpen:r,onClose:h,onSave:p,service:n})=>{const[m,v]=c.useState(null),[i,l]=c.useState(""),[u,o]=c.useState(""),[f,x]=c.useState("");c.useEffect(()=>{n?(l(n.icon||""),o(n.title||""),x(n.desc||"")):(l(""),o(""),x(""))},[n]);const b=()=>{const a=new FormData;a.append("icon",m),a.append("title",u),a.append("desc",f),p(a)},S=a=>{const t=a.target.files[0];if(t){v(t);const s=new FileReader;s.onloadend=()=>{l(s.result)},s.readAsDataURL(t)}};return r?e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50",children:e.jsxs("div",{className:"bg-[#1D232A] p-8 rounded-lg shadow-lg",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:n?"Update Service":"Create New Service"}),e.jsxs("form",{encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Service Icon"}),e.jsx("input",{type:"file",onChange:S,className:"input input-bordered w-full"}),i&&e.jsx("img",{src:i,alt:"Service Icon",className:"mt-2 h-20 w-20"})]}),e.jsx("input",{type:"text",value:u,onChange:a=>o(a.target.value),placeholder:"Service Title",className:"input input-bordered w-full mb-4"}),e.jsx("textarea",{value:f,onChange:a=>x(a.target.value),placeholder:"Service Description",className:"textarea textarea-bordered w-full mb-4"}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{type:"button",className:"btn btn-secondary mr-2",onClick:h,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:b,children:"Save"})]})]})]})}):null},M=({onCreate:r})=>e.jsx("div",{className:"inline-block float-right",children:e.jsx("button",{className:"btn px-6 btn-sm normal-case btn-primary",onClick:r,children:"Add New"})});function $(){const r=localStorage.getItem("token"),[h,p]=c.useState([]),[n,m]=c.useState(!1),[v,i]=c.useState(!1),[l,u]=c.useState(null),o=async()=>{try{m(!0);const t=await j.get("http://localhost:5000/admin/get-all-services",{headers:{Authorization:`Bearer ${r}`}});p(t.data.services)}catch(t){console.error(t),d.NotificationManager.error("Failed to fetch services","Error",5e3,()=>{alert(t.response.data.error)})}finally{m(!1)}};c.useEffect(()=>{o()},[r]);const f=async t=>{try{const s=await j.post("http://localhost:5000/admin/service-new",t,{headers:{Authorization:`Bearer ${r}`,"Content-Type":"multipart/form-data"}});d.NotificationManager.success("Service created successfully"),o()}catch(s){console.error(s),d.NotificationManager.error("Failed to create service","Error",5e3)}},x=async t=>{try{const s=await j.put(`http://localhost:5000/admin/update-service-detail/${l.id}`,t,{headers:{Authorization:`Bearer ${r}`,"Content-Type":"multipart/form-data"}});d.NotificationManager.success("Service updated successfully"),o()}catch(s){console.error(s),d.NotificationManager.error("Failed to update service","Error",5e3)}},b=async t=>{try{await j.delete(`http://localhost:5000/admin/service-delete/${t.id}`,{headers:{Authorization:`Bearer ${r}`}}),p(h.filter(s=>s.id!==t.id)),d.NotificationManager.success("Service deleted successfully")}catch(s){console.error(s),d.NotificationManager.error("Failed to delete service","Error",5e3)}},S=()=>{u(null),i(!0)},a=t=>{l?x(t):f(t),i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Services",topMargin:"mt-2",TopSideButtons:e.jsx(M,{onCreate:S}),children:e.jsx("div",{className:"overflow-x-auto w-full",children:e.jsxs("table",{className:"table w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Icon"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Last Update"}),e.jsx("th",{children:"Created At"}),e.jsx("th",{}),e.jsx("th",{})]})}),e.jsx("tbody",{children:h&&h.length>0&&h.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"flex items-center space-x-3",children:e.jsx("div",{className:"avatar",children:e.jsx("div",{className:"mask mask-squircle w-12 h-12",children:e.jsx("img",{src:t.icon,alt:"Service Icon"})})})})}),e.jsx("td",{children:t.title}),e.jsx("td",{style:{maxWidth:"300px",wordWrap:"break-word"},children:t.desc}),e.jsx("td",{children:t.lastUpdate}),e.jsx("td",{children:t.createdAt}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-square btn-ghost p-4",onClick:()=>{u(t),i(!0)},children:e.jsxs("p",{className:"flex items-center gap-1",children:["Edit ",e.jsx(y,{className:"w-5"})]})})}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-square btn-ghost",onClick:()=>b(t),children:e.jsx(w,{className:"w-5"})})})]},s))})]})})}),e.jsx(k,{isOpen:v,onClose:()=>i(!1),onSave:a,service:l})]})}function D(){const r=C();return c.useEffect(()=>{r(g({title:"Services"}))},[]),e.jsx($,{})}export{D as default};