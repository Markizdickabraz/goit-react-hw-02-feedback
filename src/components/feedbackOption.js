export default function FeedbackOptions({ options }) {
    return (
    <ul>
        {options.map(optionItem => {return(
            <li><button type="button">{optionItem}</button></li>
            )})}</ul>
        )
    }
