// GetInTouchStyles.js
import styled, { keyframes } from "styled-components";

// Keyframes
export const slideFadeInRotate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
`;

export const bounceFade = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
`;

export const ripplePulse = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
`;

export const spinFade = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: rotate(180deg) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 0.8;
  }
`;

export const glowFade = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    text-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components
export const ContactSection = styled.section`
  padding: 60px 120px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 80px 30px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2.8rem;
  color: #f8fafc;
  margin-bottom: 20px;
  animation: ${glowFade} 4s ease-in-out infinite;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.3rem;
  }
`;

export const ContactText = styled.p`
  font-size: 1.3rem;
  color: #cbd5e1;
  max-width: 700px;
  margin: 20px auto 60px;
  line-height: 1.8;
  animation: ${fadeIn} 1.5s ease-out forwards;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

export const ContactForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
  opacity: 0;
  animation: ${slideFadeInRotate} 1.2s ease-out forwards;
  animation-delay: calc(var(--index) * 0.3s);
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 1.1rem;
  resize: vertical;
  min-height: 140px;
  transition: all 0.3s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
`;

export const SubmitButton = styled.button`
  background: #3b82f6;
  padding: 16px 50px;
  border-radius: 50px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  position: relative;
  overflow: hidden;
  animation: ${bounceFade} 3s ease-in-out infinite;

  &:hover {
    background: #2563eb;
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${ripplePulse} 4s ease-in-out infinite;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 14px 40px;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 40px;

  a {
    color: #e2e8f0;
    font-size: 2rem;
    transition: all 0.4s ease;
    opacity: 0;
    animation: ${spinFade} 5s linear infinite;
    animation-delay: calc(var(--index) * 0.5s);

    &:hover {
      color: #3b82f6;
      transform: scale(1.3) rotate(10deg);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 30px;

    a {
      font-size: 1.8rem;
    }
  }
`;