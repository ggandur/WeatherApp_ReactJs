import { ValueDisplayWrapper } from "./valueDisplay.style";

type ValueDisplayProps = {
    value: String;
    description: String;
    topSection?: boolean;
}

// valueDisplay.defaultProps = {
//     topSection: false
// }

function valueDisplay({
    value,
    description,
    topSection = false
}: ValueDisplayProps) {

    return (
        <ValueDisplayWrapper>
            {topSection ?
                <h1>{value}</h1> :
                <p>{value}</p>}
            <p>{description}</p>
        </ValueDisplayWrapper>
    )
}

export default valueDisplay