// <div id="parent"> 
    //   <div id="child">
    //         <h1>This is H1 Tag </h1>
    //</div>
    //</div>


const parent=React.createElement("div",
    {id:"parent"},
     React.createElement("div",{},[React.createElement("h1",{},"This is H1 Tag"),React.createElement("h2",{},"This is H2 Tag"),React.createElement("h1",{},"This is H1 Tag"),React.createElement("h2",{},"this is H2 tag")]));

console.log(parent);

// JSX


// const heading=React.createElement("h1",{},"Hello World from React!!!");
//this heading will get replaced with new root.render
// creating an element is a root thing in react

root= ReactDOM.createRoot(document.getElementById("root"));
//when we want to put 
root.render(parent);
// this is the main function in react that is used to render the element in the DOM