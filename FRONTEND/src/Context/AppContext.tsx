import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export function AppProvider({ children }: any) {
  const [usuario, setUsuario] = useState(null);
  const [citas, setCitas] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ usuario, setUsuario, citas, setCitas }}>
      {children}
    </AppContext.Provider>
  );
}