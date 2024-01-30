import React from 'react';
import ReactDOM from 'react-dom/client'

let heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello from React"),
    React.createElement("h2", { id: "heading2" }, "Debraj Banik"),
  ]),
  React.createElement("div", { id: "child2 " }, [
    React.createElement("h1", { id: "heading1" }, "Hello from React"),
    React.createElement("h2", { id: "heading2" }, "Debraj Banik"),
  ]),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
