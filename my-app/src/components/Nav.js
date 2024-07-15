import styled from "styled-components"

const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: black;
    flex: 1; // This allows the title to take up remaining space
`;

const StyledNav = styled.nav`
    position : fixed;
    top : 0;
    z-index: 9999;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between; // This ensures space between title and button
    padding: 0 2em; // Add some padding to the left and right
    background-color: #96C4E6;
    box-sizing: border-box; // Ensure padding is included in width calculation
`;

const StyleButton = styled.button`
    font-size: 20px;
    background-color: black;
    color: white;
    border-radius: 10em;
    padding: 0.5em 1em; // Add some padding for better touch targets
`;

const NavBar = () => {
    return (
        <StyledNav>
            <Title>할 일을 미루지 말자</Title>
            <StyleButton>Login</StyleButton>
        </StyledNav>
    )
}

export default NavBar;
