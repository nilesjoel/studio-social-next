import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
//   grid-template-rows: 100vh;
`;

const Panel = styled.div`
  height: 100%;
`;

const LeftPanel = styled(Panel)`
padding: 3rem 2.5rem;
  background-color: #f2f2f2;
`;

const RightPanel = styled(Panel)`
  background-color: #e6e6e6;
`;

function DualPanelLayout({ leftPanel, rightPanel }) {
  return (
    <Container>
      <LeftPanel>
        {leftPanel}
        {/* Content for the left panel goes here */}
      </LeftPanel>
      <RightPanel>
        {rightPanel}
        {/* Content for the right panel goes here */}
      </RightPanel>
    </Container>
  );
}


export { DualPanelLayout };