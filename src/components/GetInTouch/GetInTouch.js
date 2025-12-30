import React from "react";
import {
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import {   ContactSection,
  ContactTitle,
  ContactText,
  ContactForm,
  FormGroup,
  FormControl,
  TextArea,
  SubmitButton,
  SocialLinks, } from "./GetInTouchStyles.Js";// Make sure path is correct

const GetInTouch = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Get in Touch</SectionTitle>

      <ContactText>
        Feel free to reach out for collaborations, opportunities, or just a
        friendly hello 👋
      </ContactText>

      <ContactForm action="https://formspree.io/f/xdkeykzk" method="POST">
        <FormGroup style={{ "--index": 0 }}>
          <FormControl
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </FormGroup>

        <FormGroup style={{ "--index": 1 }}>
          <FormControl
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </FormGroup>

        <FormGroup style={{ "--index": 2 }}>
          <TextArea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>

      <SocialLinks>
        <a
          href="https://www.linkedin.com/in/poornesh-bhandary-49b293226"
          target="_blank"
          rel="noreferrer"
          style={{ "--index": 0 }}
        >
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>

        <a
          href="https://github.com/poorneshalakke"
          target="_blank"
          rel="noreferrer"
          style={{ "--index": 1 }}
        >
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="mailto:poornesh160@gmail.com"
          style={{ "--index": 2 }}
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
        </a>
      </SocialLinks>

      <SectionDivider />
    </ContactSection>
  );
};

export default GetInTouch;