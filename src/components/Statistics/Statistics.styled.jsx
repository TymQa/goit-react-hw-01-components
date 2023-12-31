import styled from '@emotion/styled';

export const Section = styled.section`
  width: 350px;
  margin: 0px auto;
  margin-bottom: 60px;
  box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca,
    0 0 40px #0ba9ca, 0 0 50px #0ba9ca;
  -webkit-animation: blink 0.7s infinite alternate;
  animation: blink 0.7s infinite alternate;
  border-radius: 10px;
  background: linear-gradient(
    288deg,
    rgba(136, 130, 250, 1) 0%,
    rgba(202, 122, 252, 1) 50%,
    rgba(0, 211, 255, 1) 100%
  );
  color: #fff;

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

export const Title = styled.h2`
  font-size: 22px;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #2e2e2e;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: calc(100% / 5);
padding: 10px;

&:first-of-type {
  border-bottom-left-radius: inherit;
}

&:last-child {
  border-bottom-right-radius: inherit;
}
}
`;

export const Label = styled.span`
  font-size: 16px;
  padding-top: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
`;
