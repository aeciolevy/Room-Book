import styled from 'styled-components';

const redColor = '#E31E2F';

export const DivIntro = styled.div`
  background-image: url('https://cdn.dribbble.com/users/27491/screenshots/623560/attachments/51848/Logo_17_Book_the_Room.png');
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const ButtonIntro = styled.button`
  background: transparent;
  border: 3px solid ${redColor};
  border-radius: 8px;
  cursor: pointer;
  color: ${redColor};
  font-size: 16px;
  width: 160px;
  padding: 10px;
  overflow: hidden;
  &:hover {
    background-color: ${redColor};
    color: white;
    font-weight: 600;
  }
`;

export const cardStyle = {
  boxShadow: '0 5px 5px 0 rgba(0,0,0,.25)',
  backgroundPosition: '0px -194px',
  width: '100%',
  margin: '20px 0 0 0'
}
