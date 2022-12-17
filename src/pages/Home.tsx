import {
  Button,
  DataXs,
  H2,
  Input,
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

const AdminRegEx =
  /https:\/\/admin.daohaus.fun\/#\/molochv3\/[a-zA-Z0-9()]+\/[a-zA-Z0-9()]{42}/;

export const Home = () => {
  const [daoUrl, setDaoUrl] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDaoUrl((prevState) =>
      prevState === event.target.value ? "" : event.target.value
    );
  };

  const handleGo = () => {
    if (daoUrl && daoUrl.match(AdminRegEx)) {
      const daochain = daoUrl.split("molochv3")[1].split("/")[1];
      const daoid = daoUrl.split("molochv3")[1].split("/")[2];
      navigate(`/molochv3/${daochain}/${daoid}`);
    } else {
      setInvalid(true);
    }
  };

  return (
    <SingleColumnLayout>
      <H2>DAOhaus V3 Reports</H2>
      <HausAnimated />
      <ParMd style={{ marginBottom: "2.4rem" }}>
        Really just some CSV dumps, but get started by pasting your DAO admin
        app url below!
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
        {invalid && (
          <DataXs color="red">Doesn't look like a DAOhaus admin url</DataXs>
        )}
      </LinkBox>
    </SingleColumnLayout>
  );
};
