const React = require("react");
const ReactDOM = require("react-dom");

const styled = require("styled-components").default;

const { useEffect } = require("react");

type Props = $ReadOnly<{
  /**
   * Optional children component that would be displayed on modal body.
   */
  children?: React.Node,
  /**
   * Optional text for the close button on modal header.
   */
  closeLabel?: string,
  /**
   * Optional footer that would be displayed on modal footer part.
   */
  footer?: React.Node,
  /**
   * Close event handler.
   */
  onModalClose: () => void,
  /**
   * Title that would be in modal header
   */
  title: React.Node,
}>;

const ModalStructure = styled.div`
  background-color: white;
  margin: 200px auto 0;
  overflow: auto;
  position: relative;
  width: 70%;
  z-index = 500;

@media screen and (max-width:600px) {
  height: 100%;
  margin: 0;
  width: 100%;
}
`;

const ModalHeader = styled.div`
  background: black;
  height: 50;
  line-height: 40px;
  font-weight: bold;
  padding: 5px 20px;
  overflow: hidden;
`;

const ModalTitle = styled.h5`
  color: white;
  float: left;
  margin: 0;
`;

const ModalCloseButton = styled.div`
  color: white;
  cursor: pointer;
  float: right;
`;

const ModalBody = styled.div`
  padding: 50px 20px;
  text-align: center;
  overflow: auto;
`;

const ModalFooter = styled.div`
  background: pink;
  height: 50;
  line-height: 40px;
  padding: 5px 20px;
  overflow: hidden;
`;

/**
 * Modal component. This component has three parts in the modal: Header, Body and Footer.
 */
function ModalComponent(props: Props): React.Node {
  const { children, closeLabel, footer, onModalClose, title } = props;

  return (
    <ModalStructure data-testid="modal">
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalCloseButton data-testid="modal-close" onClick={onModalClose}>
          {closeLabel}
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </ModalStructure>
  );
}

module.exports = ModalComponent;
