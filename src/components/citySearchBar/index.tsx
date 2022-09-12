import { InputWrapper } from "../input/input.style";
import { CitySearchBarWrapper } from "./citySearchBar.style";
import CoordinatesButton from "../../components/coordinatesButton";

type CitySearchBarProps = {
    handleKeyPress: (event: any) => void
    getCoordinates: (event: any) => void
}

function CitySearchBar(props: CitySearchBarProps) {
    return (
        <CitySearchBarWrapper>
            <InputWrapper
                onKeyPress={props.handleKeyPress}
                placeholder={`Pesquisar cidade...`}
                type={"text"}
            />
            <CoordinatesButton
            getCoordinates={props.getCoordinates}
            />
        </CitySearchBarWrapper>
    )
}

export default CitySearchBar