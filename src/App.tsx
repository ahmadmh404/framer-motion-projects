import { ScrrollableCarousdel } from "./components/scrollable-carousel";
import { Carosel } from "./components/carosel";
import { DraggableCard } from "./components/draggable-card";
import { Loader } from "./components/Loader";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { Sidebar } from "./components/sidebar";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <ScrollIndicator /> */}
      {/* <Loader /> */}
      {/* <DraggableCard /> */}
      {/* <Carosel /> */}
      {/* <Sidebar /> */}
      <ScrrollableCarousdel />
    </div>
  );
};

export default App;
