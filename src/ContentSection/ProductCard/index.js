import React from 'react';
import Sale from '../ProductSale';
import styled from 'styled-components';

export default () => {
  const Div = styled.div`
  background-color: #f4f4f4;
  margin: 6px 10px;
  padding-bottom: 9px;
  position: relative;
  `;
  const Image = styled.img`
  padding: 9px 9px 13px 9px;
  width: 100%;
  `;
  const Link = styled.a`
  display: block;
  padding: 24px 0;
  font-size: 30px;
  text-align: center;
  background: #ffffff;
  margin: 0 10px;
  font-weight: 900;
  color: #000000;
  color: ${props => props.active ? '#ffffff' : '#000000'};
  background-image: ${props => props.active ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#ffffff'};

  &:hover {
    background-image: linear-gradient(107deg, #0c09bf, #966dd8);
    color: #ffffff;
  }
  `;
  return (
        <div className="col-md-4 col-sm-6 col-xs-12">
          <Div>
            <Sale />
            <Image src={require(`./content-img-1.jpg`)} alt="" />
            <Link active href="product-page.html">$1024</Link>
          </Div>
        </div>
  );
};

// export default () => {
//   return (
//     React.createElement('div', {className: 'col-lg-3 col-md-4 col-sm-6 col-xs-12'},
//     React.createElement('div', {className: 'product-card-active'},
//     <Sale />,
//     React.createElement('img', null, props.name),
//     React.createElement("a", {href: "google.com"},
//     "google.com"),
//   )
//   )
//       <div className="">
//         <img src="images/content-img-1.jpg" alt="" />
//         <a href="product-page.html">$1024</a>
//       </div>
//   );
// };
