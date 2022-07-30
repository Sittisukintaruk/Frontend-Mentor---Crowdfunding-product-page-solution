import styled, { keyframes } from "styled-components";

const setProgress = (value) => {
  const maxbacked = 100000;
  let progresswide = (value / maxbacked) * 100;
  return Math.ceil(progresswide);
};

const Groupitem = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: 1.5rem;
    flex-direction: column;
  }
`;

const Backeditem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: #969696;
  padding-block: 2rem;
  padding-inline: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
  }
`;

const scaleup = keyframes`
  from {
    width: 100%;
  }
  to {
    width: ${(props) => setProgress(props.backed) + "%"}
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 16px;
  position: relative;
  background-color: #dadada;

  ::after {
    content: "";
    width: ${(props) => setProgress(props.backed) + "%"};
    position: absolute;
    height: 100%;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.primary.Moderatecyan};
    animation: ${scaleup} 1200ms ease-out;
    left: 0;
  }
`;

export { Backeditem, Groupitem, Progress };
