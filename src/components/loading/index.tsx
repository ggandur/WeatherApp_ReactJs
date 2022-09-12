import { LoadingWrapper } from "./loading.style"
import { PuffLoader } from "react-spinners";

type LoadingProps = {
    isLoading: boolean;
}

function Loading(props: LoadingProps) {

    if (typeof props.isLoading !== 'boolean') {
        console.log('Passou isLoadign diferente de Boolean', typeof props.isLoading)
        return <></>
    }else{
        console.log('Passou isLoadign corretamente')
    }

    return (
        <LoadingWrapper>
            <PuffLoader
                size={100}
                color={"#000000"}
                loading={props.isLoading}
            />
        </LoadingWrapper>
    )
}

export default Loading