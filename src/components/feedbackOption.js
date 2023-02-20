// import React, {Component} from "react";

// class FeedbackOptions extends Component {
//     render({options, onLeaveFeedback}){
//         return (
//             <ul>
//             {options.map(optionItem => {return(
//             <li key= {optionItem}><button type="button" onClick={onLeaveFeedback}>{optionItem}</button></li>
//             )})}</ul>
//         )
//     }
// }

// export default FeedbackOptions;


export default function FeedbackOptions({options, onLeaveFeedback}) {
    return (
    <ul>
        {options.map(optionItem => {return(
            <li key = {optionItem}><button type="button" onClick={onLeaveFeedback} >{optionItem}  </button></li>
            )})}
            </ul>
        )
    }

