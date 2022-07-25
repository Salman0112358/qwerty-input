import KeyboardControlledInput from "./components/KeyboardControlled";
import QwertyInput from "./components/QwertyInput";
import UncontrolledInput from "./components/UncontrolledInput";

function App(): JSX.Element {
  return (
    <>
      <h2>Controlled input</h2>
      <QwertyInput />
      <hr />
      <h2>Uncontrolled input</h2>
      <UncontrolledInput />
      <hr />
      <h2>Controlled Keyboard input</h2>
      <KeyboardControlledInput />
      <hr />
    </>
  );
}

export default App;
