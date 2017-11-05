import styled from 'styled-components';

const redColor = '#E31E2F';

export const brandStyle = {
  width: '100px',
  borderRadius: '10px',
  cursor: 'pointer',
}

export const buttonStyle = {
  cursor: 'pointer'
}

export const cardStyle = {
  boxShadow: '0 5px 5px 0 rgba(0,0,0,.25)',
  backgroundPosition: '0px -194px',
  width: '100%',
  margin: '20px 0 0 0'
};

export const imgStyle = {
  alignSelf: 'stretch',
  marginTop: '20px',
  maxWidth: '200px',
  maxHeight: '200px',
};

export const inputStyle = {
  fontSize: '14px',
  padding: '0.175rem 0.45rem',
}

export const DivIntro = styled.div`
  background-image: url('https://cdn.dribbble.com/users/27491/screenshots/623560/attachments/51848/Logo_17_Book_the_Room.png');
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const H4Section = styled.h4`
  border-bottom: 1px solid #dce0e0;
  font-weight: 500;
  margin-bottom: 20px;
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


export const DivText = styled.div`
  padding: ${props => props.primary ? '0 0 10px 0' : '15px 0 0 0'};
`;

export const DivTime = styled.div`
  height: 20px;
  background-color: #E31E2F;
  border-left: 1px solid white;
  border-right: 1px solid white;
  padding: 0;
`;

export const DivTimeChild = styled.div`
  height: 20px;
  background-color: #009547;
  width: ${props => props.size};
  margin-left: ${props => props.shift};
`;

export const DivTimeText = styled.div`
  padding: 0;
  transform: translateX(-12px);
`;
