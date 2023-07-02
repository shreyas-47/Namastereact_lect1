import React from "react";
import ReactDOM from "react-dom/client";

const heading1=React.createElement("h1",{id:"title"},"this is heading h1")
const heading2=React.createElement("h2",{id:"title"},"this is heading h2")
const container=React.createElement("div",{id:"container"},[heading1,heading2,"this is div from react"])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(container)

