import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-right: 24px;

  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-right: 12px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
    padding-right: 0;
    text-align: center;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }
`;