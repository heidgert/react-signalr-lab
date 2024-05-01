import "./App.css";
import { createSignalRContext } from "react-signalr/signalr";
import { Chat } from "./services/hub";

const SignalRContext = createSignalRContext<Chat>();

function App() {
  return (
    <SignalRContext.Provider url={"http://192.168.86.31:3031/hubs/player"}>
      <p>Hello world</p>
      {/* <button onClick={() => SignalRContext.invoke()}>Call "Play"</button> */}
    </SignalRContext.Provider>
  );
}

export default App;
