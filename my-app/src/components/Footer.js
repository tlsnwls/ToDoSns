// Footer 화면 하단

import styled from "styled-components";

const StyledFooter = styled.footer`
    width : 100vw;
    height : 70px;
    position : fixed;
    bottom : 0;
    align-items : center;
    justify-content : center;
    background-color : #96C4E6;
`

const Footer = () => {
    return(
        <StyledFooter></StyledFooter>
    )
}

export default Footer