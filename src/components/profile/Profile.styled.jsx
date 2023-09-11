import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 50px;
  padding-top: 32px;
  width: 300px;
  background: linear-gradient(
    288deg,
    rgba(136, 130, 250, 1) 0%,
    rgba(202, 122, 252, 1) 50%,
    rgba(0, 211, 255, 1) 100%
  );
  border-radius: 10px;
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

export const Description = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-bottom: 32px;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding: 0;
  margin-bottom: 8px;
  color: #2e2f42;
`;

export const UserInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  color: #2e2e2e;
`;

export const StatsList = styled.ul`
  font-family: 'Segoe UI';
  list-style: none;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatsItem = styled.li`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
border-top: 1px solid #2e2e2e;

&:.item:not(:last-child) {
  border-right: 1px solid;
}

&:.item:not(:last-child) span {
  border-right: none;
}
`;

export const Label = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  justify-content: center;
  color: #2e2e2e;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: bold;
  margin: 10px auto;
`;
