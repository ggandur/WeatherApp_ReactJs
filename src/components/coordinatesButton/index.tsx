import { CoordinatesButtonWrapper } from "./coordinatesButton.style"

type CoordinatesButtonProps = {
    getCoordinates: (event: any) => void
}

function CoordinatesButton(props: CoordinatesButtonProps) {
    return (
        <CoordinatesButtonWrapper
            onClick={props.getCoordinates}
        >
            <img
                src="src/assets/compass-navigation.png"
                alt="GPS icon"
                height={25}
            />
        </CoordinatesButtonWrapper>
    )
}

export default CoordinatesButton