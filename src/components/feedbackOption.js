import App from "./App";

class FeedbackOptions extends App {
    render({options}){
        return (
            <ul>
            {options.map(optionItem => {return(
            <li><button type="button">{optionItem}</button></li>
            )})}</ul>
        )
    }
}

export default FeedbackOptions;


// export default function FeedbackOptions({ options }) {
//     return (
//     <ul>
//         {options.map(optionItem => {return(
//             <li><button type="button">{optionItem}</button></li>
//             )})}</ul>
//         )
//     }
