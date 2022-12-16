import { useQuery } from "react-query";

import { ValidNetwork } from "@daohaus/keychain-utils";
import { listMembers, MolochV3Members } from "@daohaus/moloch-v3-data";

const graphApiKeys = { "0x1": import.meta.env.VITE_GRAPH_API_KEY_MAINNET };

const fetchMembers = async ({
  daoId,
  chainId,
}: {
  daoId: string;
  chainId: ValidNetwork;
}) => {
  try {
    return listMembers({
      networkId: chainId,
      graphApiKeys: graphApiKeys,
      filter: {
        dao: daoId,
      },
      paging: { pageSize: 1000, offset: 0 },
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message as string);
  }
};

export const useMembers = ({
  daoId,
  chainId,
}: {
  daoId: string;
  chainId: ValidNetwork;
}): { items: MolochV3Members | undefined } => {
  const { data, ...rest } = useQuery(
    ["recordData", { daoId, chainId }],
    () =>
      fetchMembers({
        daoId,
        chainId: chainId as ValidNetwork,
      }),
    { enabled: !!daoId && !!chainId }
  );

  return { items: data?.items };
};
