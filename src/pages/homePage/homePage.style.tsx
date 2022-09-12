import styled from 'styled-components'

export const HomePageWrapper = styled.div`
    & {
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: rgba(0, 0, 0, 0);
        color: rgb(255, 255, 255);
    }
    &:before {
        content: '';
        background: url('src/assets/background.jpg') no-repeat center center/cover;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }
`