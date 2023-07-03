import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFragment } from "react";

// const heading1=React.createElement("h1",{id:"title" ,key:"h1"},"this is heading h1")
// JSX 
const heading1=(<h1 id="h1" key="h1" className="heading1"> Namaste React </h1>)
// const heading2=React.createElement("h2",{id:"title",key:"h2"},"this is heading h2")
const heading2=<h1 id="h2" key="h2"> this is heading2</h1>
// const container=React.createElement("div",{id:"container"},[heading1,heading2,"this is div from react"])

// h
console.log(heading1 
);
// convert React.createElement heading1 object to html(dom)


// React Component ----------------------
// functional component 
// class based component 
const Title=()=>{
   return (<h1 id="h1" key="h1" className="heading1"> Namaste React </h1>)}

// const data = api.getdata() --- cross side scripting attack 
const HeadingComponent = () =>{
    return (
        <React.Fragment>
        <div>
        {heading1}
        <Title/>
        {5+10}
        {/* {data } this is secure  ==== sanitization  */ } 
        <h1> This is from header component</h1>
        <h2>This is heading 2 </h2>
        </div>
        </React.Fragment>
    );
}


const root=ReactDOM.createRoot(document.getElementById("root"))
// console.log(Heading)
root.render(<HeadingComponent/>)

