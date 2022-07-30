import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.xl};
  font-weight: ${({ theme }) => theme.fontweight.bold};
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontsize.lg};
  font-weight: ${({ theme }) => theme.fontweight.bold};
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontsize.md};
  font-weight: ${({ theme }) => theme.fontweight.medium};
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontsize.sm};
  font-weight: ${({ theme }) => theme.fontweight.medium};
`;

const Navbarlink = styled.a`
  font-size: ${({ theme }) => theme.fontsize.base};
  font-weight: ${({ theme }) => theme.fontweight.medium};
  color: ${({ theme }) => theme.color.neutral.white};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontsize.base};
  font-weight: ${({ theme }) => theme.fontweight.normal};
  line-height: 30px;
`;

const Paragraphoverlay = styled.p`
  font-size: ${({ theme }) => theme.fontsize.sm};
  font-weight: ${({ theme }) => theme.fontweight.normal};
  line-height: 28px;
  color: ${({ theme }) => theme.color.neutral.Darkgray};
`;

const Titlebacked = styled.span`
  font-size: ${({ theme }) => theme.fontsize.xl};
  font-weight: ${({ theme }) => theme.fontweight.bold};
`;

export { H1, Titlebacked, H2, H3, Paragraph, H4, Paragraphoverlay, Navbarlink };
