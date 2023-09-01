import styled from '@emotion/styled';

export const List = styled.ul`
  font-family: 'Segoe UI';
  list-style: none;
  background: linear-gradient(
    288deg,
    rgba(136, 130, 250, 1) 0%,
    rgba(202, 122, 252, 1) 50%,
    rgba(0, 211, 255, 1) 100%
  );
  width: 350px;
  margin: 0px auto;
  margin-bottom: 60px;
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
  box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca,
    0 0 40px #0ba9ca, 0 0 50px #0ba9ca;
  -webkit-animation: blink 0.7s infinite alternate;
  animation: blink 0.7s infinite alternate;

  @-webkit-keyframes blink {
    100% {
      box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ba9ca,
        0 0 70px #0ba9ca, 0 0 80px #0ba9ca;
    }
  }

  @keyframes blink {
    100% {
      box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ba9ca,
        0 0 70px #0ba9ca, 0 0 80px #0ba9ca;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 300px;
  background: rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
    0px 2px 1px rgb(0 0 0 / 20%);
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 7px;
  margin-right: 20px;
  background-color: #d8e4e6;
  border-radius: 8px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
  font-size: 19px;
  line-height: 1.54;
  margin-left: 20px;
`;
