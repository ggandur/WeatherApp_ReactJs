import Bottom from "../../components/bottom";
import { ColumnWrapper } from "../../components/column/column.style";
import Header from "../../components/header";
import Loading from "../../components/loading";
import DataType from "../../interfaces/dataType";
import { HomePageWrapper } from "./homePage.style";

type HomePageProps = {
    loading: boolean
    data: DataType | {}
    shouldRenderValues: DataType | {}
    handleKeyPress: (event: any) => void
    getCoordinates: (event: any) => void
}

function HomePage(props: HomePageProps) {
    return (
        <HomePageWrapper>
            {props.loading ?
                <Loading isLoading={props.loading}
                /> :
                <ColumnWrapper>
                    <Header
                        location={(props.data as DataType).name}
                        shouldRenderValues={props.shouldRenderValues}
                        data={props.data as DataType}
                        onKeyPress={props.handleKeyPress}
                        getCoordinates={props.getCoordinates}
                    />
                    <Bottom
                        shouldRenderValues={props.shouldRenderValues}
                        data={props.data as DataType}
                    />
                </ColumnWrapper>
            }
        </HomePageWrapper>
    )
}

export default HomePage