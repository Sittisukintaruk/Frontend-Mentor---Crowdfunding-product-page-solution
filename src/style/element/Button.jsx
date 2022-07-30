import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary.Moderatecyan};
  font-size: ${(props) =>
    props.small
      ? ({ theme }) => theme.fontsize.xs
      : ({ theme }) => theme.fontsize.base};
  font-weight: ${({ theme }) => theme.fontweight.medium};
  color: ${({ theme }) => theme.color.neutral.white};
  padding: ${(props) =>
    props.small ? "17px 38px 17px 32px" : "20px 41px 20px 41px"};
  border-radius: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 100ms ease-in;

  :hover {
    background-color: ${({ theme }) => theme.color.primary.Darkcyan};
  }
`;
