import React from 'react';
import styled from 'styled-components';
import media from '../../../media';

const Header = styled.header`
  padding: 11px 23px;
  border-bottom: 3px solid rgba(231, 231, 231, .5);
  ${media.tablet`padding: 76px 15px 15px 15px;`}

`;
const Form = styled.form`
  padding-left: 9px;
  ${media.tablet`padding-left: 0;`}
`;
const Button = styled.button`
  font-size: 24px;
  font-family: avenir-next-bold, sans-serif;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  padding-left: 2px;
  ${media.desktop`padding-left:0;`}
  color: ${props => (props.active ? '#4d42f8' : '#dedede')};

  &:hover {
    color: #4d42f8;
  }
  &:first-child {
    padding-left: 19px;
  }
`;
const GenderButton = styled(Button)`
  padding-right: 15px;
  ${media.tablet`
    &:first-child {
      padding-left:0;
    }
  `}
`;
const Toggle = styled.button`
  background-color: #ebebeb;
  padding: 11px 8px 8px 8px;
  border: none;
  cursor: pointer;
  outline: none;
  ${media.tablet`display: none`}
`;
const Icon = styled.div`
  display: inline-block;
  background: url(${require('./filter-icon.png')});
  width: 40px;
  height: 33px;
`;

const Span = styled.span`
  vertical-align: super;
  padding: 0 25px 0 19px;
  color: #4d42f8;
  font-size: 24px;
  font-family: avenir-next-bold, sans-serif;
  font-weight: bold;
  color: #4d42f8;
`;
const Gender = styled(Span)`
  ${media.tablet`padding-left:0`}
`;
const Sizes = styled(Span)`
  ${media.giant`
    display: block;
    padding: 0;
  `}
  padding-left: 0;
`;

export default () => (
  <Header>
    <Form action="get">
      <Toggle>
        <Icon />
      </Toggle>
      <Gender>
        <GenderButton active>MAN</GenderButton>
        <Button>WOMAN</Button>
      </Gender>
      <Sizes>
        SIZE
        <Button>36</Button>
        <Button>37</Button>
        <Button>38</Button>
        <Button>39</Button>
        <Button>40</Button>
        <Button active>41</Button>
        <Button>42</Button>
      </Sizes>
    </Form>
  </Header>
);
