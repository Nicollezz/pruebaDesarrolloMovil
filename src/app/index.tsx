import Home from "../pages/Home";
import ProviderMascota from "../providers/ProviderMascota";

export default function App() {
  return (
    <ProviderMascota>
      <Home />
    </ProviderMascota>
  );
}
