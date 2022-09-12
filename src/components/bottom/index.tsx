import { BottomWrapper } from "./bottom.style";
import DataType from "../../interfaces/dataType"
import ValueDisplay from "../valueDisplay"

type BottomWrapperProps = {
    shouldRenderValues: DataType | {}
    data: DataType | {}
}

function Bottom(props: BottomWrapperProps) {
    return (
        props.shouldRenderValues ? 
        <BottomWrapper>
            <ValueDisplay
                value={`${(((props.data as DataType).main.feels_like) - 273.15).toFixed(1)} ºC`}
                description={"Sensação"} />
            <ValueDisplay
                value={`${((props.data as DataType).main.humidity)} %`}
                description={"Humidade"} />
            <ValueDisplay
                value={`${((props.data as DataType).wind.speed)} mph`}
                description={"Vento"} />
        </BottomWrapper> : null
    )
}

export default Bottom