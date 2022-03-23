import { useState } from "react";

import { Usercontext } from "./contexts/UserContext";
import { ClientContext } from "./contexts/ClientContext";
import MainRouter from "./MainRouter";
import { PanierContext } from "./contexts/PanierContext";

function App() {
  const [user, setuser] = useState();
  const [PrenomClient, setPrenomClient] = useState();
  const [panier, setPanier] = useState();

  return (
    <div className="App">
      <Usercontext.Provider value={{ user, setuser }}>
        <ClientContext.Provider value={{ PrenomClient, setPrenomClient }}>
          <PanierContext.Provider value={{ panier, setPanier }}>
            <MainRouter />
          </PanierContext.Provider>
        </ClientContext.Provider>
      </Usercontext.Provider>
    </div>
  );
}

export default App;
