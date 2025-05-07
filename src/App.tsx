import { StickyNav } from "./components/sticky-nav";
import { ScrrollableCarousdel } from "./components/scrollable-carousel";
import { Carosel } from "./components/carosel";
import { DraggableCard } from "./components/draggable-card";
import { Loader } from "./components/Loader";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { Sidebar } from "./components/sidebar";
import { ProgressSteps } from "./components/progress-steps";

const App = () => {
  return (
    <div className="w-full h-screen">
      {/* <ScrollIndicator /> */}
      {/* <Loader /> */}
      {/* <DraggableCard /> */}
      {/* <Carosel /> */}
      {/* <Sidebar /> */}
      {/* <ScrrollableCarousdel /> */}
      {/* <StickyNav /> */}
      <ProgressSteps />
    </div>
  );
};

export default App;
