import styled from 'styled-components';
const Header = () => {
  const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: white;
    height: 4em;
    font-weight: bold;
    font-size: 2em;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `;
  return <Header>Angular/Angular-Cli</Header>;
};

export default Header;
