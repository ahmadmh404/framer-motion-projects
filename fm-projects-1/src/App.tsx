import { Loader } from "./components/Loader";
import { ScrollIndicator } from "./components/ScrollIndicator";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <ScrollIndicator /> */}
      <Loader />
    </div>
  );
};

export default App;
