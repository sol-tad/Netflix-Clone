//import React from "react";
//  const Wellcom=()=>{
// //     return (

// //         <div> <h1>From jsx</h1></div>
// //     )
// return React.createElement("div", {id:"division",className:"classdiv"},React.createElement("h1",null,"welcome to jsx"));

// }
//  export {Wellcom};


import React from "react";

const Name=['ss','ff','dd'];

const jsx=()=>{
    return(
    <div>{
        Name.map((key) =>{
            return <h1>{key}</h1>
        }) 
        }

    </div>
    )
}

export default jsx;