import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const ShoeWrapper = styled.div`
  min-width: 275px; // firm when flexbox. width is just a suggestion
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  /*
    Alternatively, if we can't use 'gap', we could set:
    margin: -16px;
    We'd also need to set this on the ShoeWrapper:
    margin: 16px;
  */
`;

export default ShoeGrid;
