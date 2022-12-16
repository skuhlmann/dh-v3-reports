import { useParams } from "react-router-dom";
import { ValidNetwork } from "@daohaus/keychain-utils";
import Dao from "./Dao";

export function DaoContainer() {
  const { daochain, daoid } = useParams();

  if (!daoid || !daochain) return null;

  return <Dao daoid={daoid} daochain={daochain as ValidNetwork} />;
}

export default DaoContainer;
