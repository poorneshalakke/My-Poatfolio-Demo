import styled from "styled-components";

export const ImgContainer = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;

export const Picture = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  border-radius: 20px;
`;

export const PictureImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.5s ease;

  ${ImgContainer}:hover & {
    transform: scale(1.08);
  }
`;

export const TitleContent = styled.div`
  padding: 0 22px;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.colors.primary1};

  padding: 1.8rem 0 0.6rem;

  font-size: ${({ title }) => (title ? "2.8rem" : "2rem")};

  transition: color 0.3s ease;

  ${ImgContainer}:hover & {
    color: ${({ theme }) => theme.colors.accent1};
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 22px;

  line-height: 1.8;

  font-size: 1.55rem;

  color: ${({ theme }) => theme.colors.text};

  opacity: 0.85;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.9rem 1.5rem;

  border-radius: 12px;

  font-size: 1.5rem;
  font-weight: 600;

  color: white;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.button},
    ${({ theme }) => theme.colors.accent1}
  );

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);
  }

  &.link-to {
    margin: auto;
    min-height: 44px;
    min-width: 150px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  padding: 20px;
`;

export const Tag = styled.li`
  list-style: none;

  padding: 8px 14px;

  border-radius: 999px;

  font-size: 1.3rem;

  font-weight: 500;

  background: ${({ theme }) => theme.colors.background2};

  color: ${({ theme }) => theme.colors.primary1};

  border: 1px solid rgba(127, 127, 127, 0.15);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);

    background: ${({ theme }) => theme.colors.button};

    color: white;
  }
`;

export const Button = styled.button`
  position: absolute;
  inset: 0;

  border: none;

  background: rgba(0, 0, 0, 0);

  transition: background 0.35s ease;

  svg {
    opacity: 0;
    visibility: hidden;

    transform: scale(0.4);

    transition: all 0.35s ease;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);

    svg {
      opacity: 1;
      visibility: visible;

      transform: scale(1);
    }
  }
`;

export const Hr = styled.hr`
  width: 70px;

  height: 4px;

  border: none;

  border-radius: 20px;

  margin: 0.7rem auto 2rem auto;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.button},
    ${({ theme }) => theme.colors.accent1}
  );
`;