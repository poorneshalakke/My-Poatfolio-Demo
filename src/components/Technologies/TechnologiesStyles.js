import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.18) 45%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin: 3rem 0;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  padding: 26px;
  border-radius: 20px;

  background: ${({ theme }) =>
    theme.colors.cardBg || "rgba(255,255,255,0.03)"};

  border: 1px solid
    ${({ theme }) => theme.colors.border || "rgba(127,127,127,0.15)"};

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  transition: all 0.35s ease;

  picture {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 70px;
    min-height: 70px;

    border-radius: 16px;

    background: ${({ theme }) =>
      theme.colors.iconBg || "rgba(70,130,255,.08)"};

    color: ${({ theme }) => theme.colors.primary};

    transition: all 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px);

    box-shadow: 0 18px 45px rgba(59, 130, 246, 0.18);

    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover picture {
    transform: scale(1.08) rotate(-5deg);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 18px;
    gap: 16px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 12px;

  color: ${({ theme }) => theme.colors.primary};

  transition: all 0.3s ease;

  ${ListItem}:hover & {
    letter-spacing: 0.8px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 17px;
  line-height: 30px;

  color: ${({ theme }) => theme.colors.text};

  opacity: 0.85;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 52px;
  height: 52px;
  object-fit: contain;

  transition: transform 0.3s ease;

  ${ListItem}:hover & {
    transform: scale(1.08);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 44px;
    height: 44px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 36px;
    height: 36px;
  }
`;