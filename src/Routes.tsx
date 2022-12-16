import { DHLayout } from "@daohaus/connect";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import DaoContainer from "./pages/DaoContainer";
import { FormTest } from "./pages/FormTest";
import { Home } from "./pages/Home";

export const Routes = () => {
  const { pathname } = useLocation();
  return (
    <DHLayout pathname={pathname} navLinks={[{ label: "Home", href: "/" }]}>
      <Router>
        <Route path="/" element={<Home />} />
        <Route
          path="molochv3/:daochain/:daoid"
          element={<DaoContainer />}
        ></Route>
      </Router>
    </DHLayout>
  );
};
