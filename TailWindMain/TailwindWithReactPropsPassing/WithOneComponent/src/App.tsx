import OnepageUseMultipleTime from "./Component/OnepageUseMultipleTime";
import Photo1 from "./assets/one.png";
import Photo2 from "./assets/Two.png";
import Photo3 from "./assets/Third.png";
import AnotherShoesQuestion from "./Component/anotherShoesQuestion";
function App() {
  return (
    <>
      <div className="flex gap-2">
        <OnepageUseMultipleTime Text="Phone" img={Photo1} color="bg-black/50" />
        <OnepageUseMultipleTime Text="Tree" img={Photo2} color="bg-black/90"/>
        <OnepageUseMultipleTime Text="Frog" img={Photo3} color="bg-black/70"/>
      </div>

      {/* <AnotherShoesQuestion/> */}
    </>
  );
}

export default App;
