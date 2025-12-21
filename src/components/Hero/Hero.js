import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    {/* Round Profile Image */}
    <img
      src="/photo.jpg"
      alt="Poornesh A"
      style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #3b82f6', // Tailwind blue border
        boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
        marginBottom: '20px',
        marginTop:'100px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0px 15px 30px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0px 10px 20px rgba(0,0,0,0.2)';
      }}
    />

    <LeftSection>
      <SectionTitle main>
        Hi, I’m Poornesh A <br />
        Associate Software Engineer
      </SectionTitle>
      <SectionText style={{ paddingBottom: 0 }}>
        I build modern, responsive web applications using Next.js, React, and FastAPI. <br />
        Explore my projects, skills, and feel free to reach out for collaboration or opportunities.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
