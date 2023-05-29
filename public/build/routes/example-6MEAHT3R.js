import{a as m}from"/build/_shared/chunk-4BHLMLDL.js";import{c as t}from"/build/_shared/chunk-ILVVFOSI.js";import{o as s}from"/build/_shared/chunk-GLVWW33M.js";import{f as n,h as o,i as e,j as l}from"/build/_shared/chunk-XNUFYIVR.js";e();e();var a=n(l());var p=n(m());var d=t.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #f7f7f7;
  border-left: 1px solid #ccc;
`,c=t.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`,f=t.li`
  margin-bottom: 10px;
  cursor: pointer;
`,q=t.a`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;function h(){let{questionsFAQ:r}=s();return(0,a.useEffect)(()=>{console.log(r)},[r]),o.createElement(d,null,o.createElement(c,null,r.map((i,u)=>o.createElement(f,{key:u},o.createElement(q,{href:`http://localhost:3000/questions/${i.question_id}`},i.question)))))}var x=h;export{x as default};
