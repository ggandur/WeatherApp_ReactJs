import { HeaderWrapper } from "./header.style"
import DataType from "../../interfaces/dataType"
import ValueDisplay from "../valueDisplay"
import CitySearchBar from "../citySearchBar"

type HeaderProps = {
    location: String
    shouldRenderValues: DataType | {}
    data: DataType
    onKeyPress: (event: any) => void
    getCoordinates: (event: any) => void
}

function Header(props: HeaderProps) {
    return (
        <HeaderWrapper>
            <p>{props.location}</p>
            {props.shouldRenderValues ?
                <ValueDisplay
                    value={`${((props.data.main.temp) - 273.15).toFixed(1)} ºC`}
                    description={props.data.weather[0].description}
                    topSection={true}
                /> : null}
            <CitySearchBar
                handleKeyPress={props.onKeyPress}
                getCoordinates={props.getCoordinates}
            />
        </HeaderWrapper>
    )
}

export default Header