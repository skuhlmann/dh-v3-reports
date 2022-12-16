import styled from "styled-components";

import { ValidNetwork } from "@daohaus/keychain-utils";
import {
  DataMd,
  DataSm,
  H2,
  ParMd,
  ProfileAvatar,
  SingleColumnLayout,
} from "@daohaus/ui";
import { useDao } from "../hooks/useDao";
import { ReportSelect } from "../components/ReportSelect";
import { useState } from "react";

const AvatarBox = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

export function Dao({
  daoid,
  daochain,
}: {
  daoid: string;
  daochain: ValidNetwork;
}) {
  const { dao } = useDao({
    chainId: daochain as ValidNetwork,
    daoId: daoid,
  });
  const [report, setReport] = useState<string | undefined>();

  return (
    <SingleColumnLayout>
      <AvatarBox>
        <ProfileAvatar size="xl" address={dao?.id} image={dao?.avatarImg} />
        <H2>{dao?.name}</H2>
      </AvatarBox>

      <ParMd style={{ marginBottom: "2.4rem" }}>
        I was made at a hackathon in a few hours and don't have many reports
        yet.
      </ParMd>

      <DataSm>Select an entity to generate a report</DataSm>
      <Controls>
        <ReportSelect report={report} setReport={setReport} />
      </Controls>
    </SingleColumnLayout>
  );
}

export default Dao;
