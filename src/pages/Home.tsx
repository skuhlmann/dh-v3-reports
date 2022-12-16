import {
  Button,
  H2,
  Input,
  Link,
  ParMd,
  SingleColumnLayout,
} from "@daohaus/ui";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HausAnimated } from "../components/HausAnimated";

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
  const [daoUrl, setDaoUrl] = useState<string>("");
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO: validate url

    console.log("whaaa");
    setDaoUrl((prevState) =>
      prevState === event.target.value ? "" : event.target.value
    );
  };

  const handleGo = () => {
    const daochain = daoUrl.split("molochv3")[1].split("/")[1];
    const daoid = daoUrl.split("molochv3")[1].split("/")[2];
    console.log(
      'daoUrl.split("molochv3")[1].split("/")',
      daoUrl.split("molochv3")[1].split("/")
    );
    console.log("daoid", daoid, daochain);
    navigate(`/molochv3/${daochain}/${daoid}`);
  };

  return (
    <SingleColumnLayout>
      <H2>DAOhaus V3 Reports</H2>
      <HausAnimated />
      <ParMd style={{ marginBottom: "2.4rem" }}>
        Get started by pasting your DAO admin app url below
      </ParMd>
      <LinkBox>
        <Input
          id="daoUrl"
          long
          placeholder="https://admin.daohaus.club/..."
          defaultValue={daoUrl}
          onChange={handleInput}
        ></Input>
        <Button onClick={handleGo} disabled={daoUrl === ""}>
          GO
        </Button>
      </LinkBox>
    </SingleColumnLayout>
  );
};
