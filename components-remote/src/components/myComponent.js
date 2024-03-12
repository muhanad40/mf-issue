import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: bold;
  color: blue;
`;
const MyComponent = () => {
  console.log("rendering my component");
  return <Wrapper>My federated component</Wrapper>;
};

export default MyComponent;
