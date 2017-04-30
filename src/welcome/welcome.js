import React, { Component } from 'react';
import './welcome.css';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import logo from '../assets/images/sword.svg';

const Container = styled.div`
  background-color: #F25F5C;
  overflow-x: hidden;
`;
const Logo = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  background: linen;
  width: 25%;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  border: 3px solid darkgray;
  div {
    border-radius: 50%;
    width: 80px;
    background: url(${logo});
    background-size: contain;
  }
`;

const Body = styled.div`
  background-color: linen;
  height: 308px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  div:nth-child(1) {
    margin-bottom: 20px;
  }
`;

class Welcome extends Component {
  render() {
    return (
      <Container>
        <Logo>
          <div/>
        </Logo>
        <div className='welcome-full-width-div'>
          <span className='welcome-semi-circle'></span>
        </div>
        <Body>
          <Button
            backgroundColor='#247BA0'
            text='Login with facebook'
            textColor='#FFFFFF'
            width={180}>
          </Button>
          <Button
            backgroundColor='#F25F5C'
            text='Login with email'
            textColor='#FFFFFF'
            width={180}>
          </Button>
        </Body>
      </Container>
    );
  }
}

export default Welcome;
