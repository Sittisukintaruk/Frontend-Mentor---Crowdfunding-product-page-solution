import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -5rem;
  width: 730px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: calc(100% - 4rem);
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 9px;
`;

const Box = styled.div`
  width: 634px;
  display: flex;
  flex-direction: column;
  margin-inline: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 100%;
  }
`;

export { Wrapper, Container, Box };
