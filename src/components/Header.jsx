
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #FFD700;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const mystyle = {
        color: "black",
        fontFamily:"Camera"
        
      };
    return (
        <Container>
            <Toolbar>
              <h1 style={mystyle}>Code Editor 🖊️</h1>
            </Toolbar>
        </Container>
    )
}

export default Header