// import React, {Component} from "react";

// class FeedbackOptions extends Component {
//     render(){
//         return (
//             <ul>
//             {options.map(optionItem => {return(
//             <li key= {optionItem}><button type="button">{optionItem}</button></li>
//             )})}</ul>
//         )
//     }
// }

// export default FeedbackOptions;

import App from "./App"
const app = new App();

export default function FeedbackOptions({options}) {
    return (
    <ul>
        {options.map(optionItem => {return(
            <li key = {optionItem}><button type="button" onClick={app.btnClick}>{optionItem} </button></li>
            )})}</ul>
        )
    }

