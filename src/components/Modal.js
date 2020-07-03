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
 * Modal component. This component uses ReactDOM.createPortal to injects the
 * modal and would be mounted to modal-root element. It has three parts in the
 * modal, Header, Body and Footer.
 */
function ModalComponent(props: Props): React.Node {
  const { children, closeLabel, footer, onModalClose, title } = props;
  // Create an empty div that we'll render the modal into.
  const modalElement = document.createElement("div");
  const modalRoot = document.getElementById("modal-root");

  // Append element part would only run when mount and unmount,
  // it not depends on any states and porps.
  useEffect(() => {
    // Append the element into the modal root once it mounts
    modalRoot.appendChild(modalElement);
    return () => {
      // Remove the element from the modal root once it unmounts
      modalRoot.removeChild(modalElement);
    };
  }, []);

  const modalRender = (
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

  // Use ReactDOM.createPortal to injects the modal. We need this because Modal is a
  // base component, we need to make sure it is visually 'break out', even if parent
  // component has an `overflow:hidden` or `z-index` style
  return ReactDOM.createPortal(
    // modal dom
    modalRender,
    // A modal element where React injects the modal
    modalElement
  );
}

module.exports = ModalComponent;
