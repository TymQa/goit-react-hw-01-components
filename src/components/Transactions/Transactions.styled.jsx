import styled from '@emotion/styled';

export const TabelHistory = styled.table`
  font-family: 'Segoe UI';

  background: linear-gradient(
    288deg,
    rgba(136, 130, 250, 1) 0%,
    rgba(202, 122, 252, 1) 50%,
    rgba(0, 211, 255, 1) 100%
  );
  width: 600px;
  margin: 0px auto;
  margin-bottom: 100px;
  border-collapse: collapse;
  box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca,
    0 0 40px #0ba9ca, 0 0 50px #0ba9ca;
  -webkit-animation: blink 0.7s infinite alternate;
  animation: blink 0.7s infinite alternate;
`;

export const TableHeader = styled.th`
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #8ba1a5;
  color: #2e2e2e;
  font-size: 14px;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
  background: rgba(255, 255, 255, 0.38);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  }
  &:hover {
    cursor: pointer;
    background: rgba(118, 118, 118, 0.42);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(118, 118, 118, 0.45);
  }
`;

export const TableData = styled.td`
  background: rgba(255, 255, 255, 0.38);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #8ba1a5;
  border-radius: inherit;
`;