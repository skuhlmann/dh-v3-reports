import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ValidNetwork } from "@daohaus/keychain-utils";

import { useProposals } from "../hooks/useProposals";
import { useMembers } from "../hooks/useMembers";
import ReportTable from "./ReportTable";

type ReportProps = {
  report?: string;
  daoid: string;
  daochain: ValidNetwork;
};

export const Report = ({ report, daochain, daoid }: ReportProps) => {
  const { proposals } = useProposals({
    chainId: daochain as ValidNetwork,
    daoId: daoid,
  });
  const { members } = useMembers({
    chainId: daochain as ValidNetwork,
    daoId: daoid,
  });

  if (report === "members")
    return <ReportTable report={report} items={members} />;

  if (report === "proposals")
    return <ReportTable report={report} items={proposals} />;

  return null;
};
