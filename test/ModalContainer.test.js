const React = require("react");
const ModalContainer = require("../src/components/ModalContainer");

const { fireEvent, render } = require("@testing-library/react");

//No need afterEach as running cleanup is done automatically in the test library
it("should open the modal correctly", () => {
  // Render the react component to dom and return two callback function
  const { queryByTestId, getByTestId } = render(
    <ModalContainer title="Modal Header"> hello world</ModalContainer>
  );

  // Before modal is open, only have the modal open button which would trigger modal open
  expect(queryByTestId("open-modal-click-button")).toBeTruthy();
  expect(queryByTestId("modal")).toBeFalsy();

  // After the modal open buttion is clicked, modal is open
  fireEvent.click(getByTestId("open-modal-click-button"));
  expect(queryByTestId("modal")).toBeTruthy();
});

it("should open the modal and close after close button is clicked", () => {
  // Render the react component to dom and return two callback function
  const { queryByTestId, getByTestId } = render(
    <ModalContainer title="Modal Header"> hello world</ModalContainer>
  );

  // Before modal is open, only have the modal open button which would trigger modal open
  expect(queryByTestId("open-modal-click-button")).toBeTruthy();
  expect(queryByTestId("modal")).toBeFalsy();

  // After the modal open buttion is clicked, modal is open
  fireEvent.click(getByTestId("open-modal-click-button"));
  expect(queryByTestId("modal")).toBeTruthy();

  // After the close button in modal is clicked, modal is closed
  fireEvent.click(getByTestId("modal-close"));
  expect(queryByTestId("modal")).toBeFalsy();
});

it("should open the modal and close after backdrop is clicked", () => {
  // Render the react component to dom and return two callback function
  const { queryByTestId, getByTestId } = render(
    <ModalContainer title="Modal Header"> hello world</ModalContainer>
  );

  // Before modal is open, only have the modal open button which would trigger modal open
  expect(queryByTestId("open-modal-click-button")).toBeTruthy();
  expect(queryByTestId("modal")).toBeFalsy();

  // After the modal open buttion is clicked, modal is open
  fireEvent.click(getByTestId("open-modal-click-button"));
  expect(queryByTestId("modal")).toBeTruthy();

  // After the backdrop is clicked, modal is closed
  fireEvent.click(getByTestId("back-drop"));
  expect(queryByTestId("modal")).toBeFalsy();
});
