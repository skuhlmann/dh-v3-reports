import { useParams } from "react-router-dom";
import { useDHConnect } from "@daohaus/connect";
import { H2, ParMd, SingleColumnLayout } from "@daohaus/ui";

const graphApiKeys = { "0x1": process.env["NX_GRAPH_API_KEY_MAINNET"] };

export function DaoContainer() {
  const { daochain, daoid } = useParams();

  return (
    <SingleColumnLayout>
      <H2>DAO page</H2>
      <ParMd style={{ marginBottom: "2.4rem" }}>daoid: {daoid}</ParMd>
    </SingleColumnLayout>
  );
}

export default DaoContainer;
