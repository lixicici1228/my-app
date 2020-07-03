const ModalContainer = require("./components/ModalContainer");
const React = require("react");

const styled = require("styled-components").default;

const Button = styled.button`
  background-color: green;
  border: none;
  color: white;
  cursor: pointer;
  float: right;
  font-weight: bold;
  padding: 10px;
`;

//Usecase of ModalContainer
function App(props: Props): React.Node {
  const footer = <Button>CONTINUE</Button>;
  return (
    <ModalContainer closeLabel="Close" footer={footer} title="Modal Title">
      Modal Content
    </ModalContainer>
  );
}

module.exports = App;
