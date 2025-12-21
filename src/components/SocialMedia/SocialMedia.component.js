import { SocialContainer, SocialIcons } from "./SocialMedia.styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function SocialMedia({ inFooter }) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com/poorneshalakke"
        title="Visit my GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="https://www.linkedin.com/in/poornesh-bhandary-49b293226"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="mailto:poornesh160@gmail.com"
        title="Send me an email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CgMail size="3rem" />
      </SocialIcons>
    </SocialContainer>
  );
}
