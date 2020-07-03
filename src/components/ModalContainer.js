const Modal = require("./Modal");
const React = require("react");

const styled = require("styled-components").default;

const { useState } = require("react");

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
   * Title that would be in modal header
   */
  title: React.Node,
}>;

const Button = styled.button`
  background-color: pink;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
`;

const BackDrop = styled.div`
  background-color: rgba(50, 50, 50, 0.5);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
`;

/**
 * ModalContainer component. This component controls the modal state, when clicks 
 * the modal open button, modal would pop up. When clicks the close button on modal 
 * or backDrop, the modal would be closed.
 */
function ModalContainer(props: Props): React.Node {
  const { children, closeLabel, footer, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onModalOpen = () => {
    setIsOpen(true);
  };
  const onModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div id="modal-root">
      <Button data-testid="open-modal-click-button" onClick={onModalOpen}>
        Open Modal
      </Button>
      {isOpen && (
        <>
          <BackDrop data-testid="back-drop" onClick={onModalClose}></BackDrop>
          <Modal
            closeLabel={closeLabel}
            footer={footer}
            title={title}
            onModalClose={onModalClose}
          >
            {children}
          </Modal>
        </>
      )}
    </div>
  );
}

module.exports = ModalContainer;
