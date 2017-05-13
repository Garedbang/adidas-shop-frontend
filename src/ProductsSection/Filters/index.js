import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 11px 23px;
  border-bottom: 3px solid rgba(231, 231, 231, .5);
`;
const Button = styled.button`
  font-size: 24px;
  font-family: avenir-next-bold, sans-serif;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: ${props => (props.active ? '#4d42f8' : '#dedede')};
  padding-left: ${props => (props.firstChildPadding ? '10px' : '6px')};

&:hover {
  color: #4d42f8;
}
`;
const FilterToggle = styled.button`
  background-color: #ebebeb;
  padding: 11px 8px;
  border: none;
  cursor: pointer;
  outline: none;
`;
const FilterToggleIcon = styled.div`
  background: url(${require('./filter-icon.png')});
  width: 40px;
  height: 33px;
`;
const Span = styled.span`
  vertical-align: super;
  padding: 0 62px 0 19px;
  color: #4d42f8;
  font-size: 24px;
  font-family: avenir-next-bold, sans-serif;
  font-weight: bold;
  color: #4d42f8;
`;

export default () => {
  return (
    <Header>
      <form action="get">
        <FilterToggle type="button">
          <FilterToggleIcon />
        </FilterToggle>
        <Span>
          <Button active type="button">MAN</Button>
          <Button type="button">WOMAN</Button>
        </Span>
        <Span>
          SIZE
          <Button firstChildPadding type="button">36</Button>
          <Button type="button">37</Button>
          <Button type="button">38</Button>
          <Button type="button">39</Button>
          <Button type="button">40</Button>
          <Button active type="button">41</Button>
          <Button type="button">42</Button>
        </Span>
      </form>
    </Header>
  );
};
