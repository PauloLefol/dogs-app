import React from 'react';
import styled from 'styled-components';
import Dogs from '../Assets/dogs-footer.svg?react';

const FooterStyled = styled.footer`
  background: var(--primary-yellow);
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  text-align: center;
  color: var(--primary-brown);

  p {
    margin-top: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Dogs />
      <p>Dogs. Some rights reserved. Developed by Paulo Alexsander Lefol.</p>
    </FooterStyled>
  );
};

export default Footer;
