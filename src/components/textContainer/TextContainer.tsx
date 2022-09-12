type TextContainerProps = {
    text: string;
}

function TextContainer(props: TextContainerProps){
    return <p>{props.text}</p>
}

export default TextContainer