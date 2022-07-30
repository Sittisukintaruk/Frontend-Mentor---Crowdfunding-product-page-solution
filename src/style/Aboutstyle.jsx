import styled, { css } from "styled-components";
import { H3, H4, Paragraph } from "./genaral/typography";

const Card = styled.div`
  width: 100%;
  padding: 40px 31px 20px;
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 9px;
  opacity: ${({ disabled }) => disabled && 0.5};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      user-select: none;
      cursor: not-allowed;

      & button {
        cursor: not-allowed;
      }

      & button:hover {
        background-color: ${({ theme }) => theme.color.primary.Moderatecyan};
      }
    `}
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    align-items: unset;
  }
`;

const Bottomcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-wrap: wrap;

    & button {
      margin-top: 20px;
    }
  }
`;

const BottomcardLeftside = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled(H3)`
  font-weight: ${({ theme }) => theme.fontweight.bold};
`;

const Pledge = styled(H4)`
  font-weight: ${({ theme }) => theme.fontweight.bold};
  color: ${({ theme }) => theme.color.primary.Moderatecyan};
`;

const Cardparagraph = styled(Paragraph)`
  color: hsla(0, 0%, 0%, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: 20px;
  }
`;

const Righttext = styled(H4)`
  color: hsla(0, 0%, 0%, 0.5);
`;

export {
  Card,
  Title,
  Pledge,
  Head,
  Cardparagraph,
  Container,
  Bottomcard,
  Righttext,
  BottomcardLeftside,
};
