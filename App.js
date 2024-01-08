// const heading = React.createElement("h1", {id: "heading"}, "Namaste from React!!");
// console.log(heading);   //object

// heading is a React Elemenet which are js object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);   






/*

<div id ="parent">

    <div id ="child1">

        <h1> </h1>

        <h2></h2>

    </div>


     <div id ="child2">

        <h1> </h1>

        <h2></h2>

    </div>


</div>



*/
//React.createElement("type", {attributes}, [child1, child2])


const parent = React.createElement(
        "div",
        {id:"parent"},

        [
            React.createElement(
                "div",
                 {id:"child1"},          // two elements as sibling pass it in an array
                 [React.createElement("h1", {id:"heading"},"Hello1 World"),
                 React.createElement("h2", {id:"heading"},"Hello2 World")]),
                
                
        React.createElement(
            "div",
             {id:"child2"},          // two elements as sibling pass it in an array
             [React.createElement("h1", {id:"heading"},"Hello1 World"),
             React.createElement("h2", {id:"heading"},"Hello2 World")])]
        
    );

//JSX  


console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);    // root.render() will replace everything from root,
