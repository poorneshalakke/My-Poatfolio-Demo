import React from "react";
import {
  DiReact,
  DiDatabase,
  DiGit,
  DiDocker,
} from "react-icons/di";
import { AiOutlineCloudServer } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I develop full-stack web applications with expertise in modern frontend
      frameworks, scalable backend development, relational databases, cloud
      deployment, and DevOps practices. I enjoy building responsive,
      high-performance applications with clean architecture and seamless user
      experiences.
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>

        <ListContainer>
          <ListTitle>Front-End</ListTitle>

          <ListParagraph>
            HTML5, CSS3, JavaScript (ES6+), TypeScript
            <br />
            React.js, Next.js
            <br />
            Tailwind CSS, Material UI (MUI)
            <br />
            Zustand, React Hooks
            <br />
            REST API Integration
            <br />
            Responsive Web Design
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiDatabase size="6rem" />
        </picture>

        <ListContainer>
          <ListTitle>Back-End & Database</ListTitle>

          <ListParagraph>
            Python
            <br />
            FastAPI
            <br />
            JWT Authentication
            <br />
            REST API Development
            <br />
            PostgreSQL
            <br />
            Microsoft SQL Server (MSSQL)
            <br />
            SQLAlchemy
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <AiOutlineCloudServer size="5.8rem" />
        </picture>

        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>

          <ListParagraph>
            Docker
            <br />
            AWS ECS
            <br />
            AWS ECR
            <br />
            GitHub Actions
            <br />
            CI/CD Pipelines
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGit size="6rem" />
        </picture>

        <ListContainer>
          <ListTitle>Tools</ListTitle>

          <ListParagraph>
            Git
            <br />
            GitHub
            <br />
            Bitbucket
            <br />
            Jira
            <br />
            DBeaver
            <br />
            pgAdmin
            <br />
            Postman
            <br />
            VS Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;