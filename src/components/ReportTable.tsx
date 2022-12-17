import styled from "styled-components";
import { useMemo } from "react";
import { RiFileDownloadLine } from "react-icons/ri";

import { MolochV3Members, MolochV3Proposal } from "@daohaus/moloch-v3-data";
import { charLimit } from "@daohaus/utils";

import { Button, useToast } from "@daohaus/ui";
import { downloadFromBrowser, prepCsvData } from "../utils/csv";

const StyledTable = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.secondary.step2};
  padding: 1rem;
`;

const DownloadContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  margin-bottom: 3rem;
`;

export function ReportTable({
  report,
  items,
}: {
  report: string;
  items: MolochV3Proposal[] | MolochV3Members | undefined;
}) {
  const { successToast } = useToast();

  const headers = useMemo(() => {
    if (items) {
      return Object.keys(items[0]).map((k, i) => {
        return <th key={i}>{k}</th>;
      });
    }
    return null;
  }, [items]);

  const rows = useMemo(() => {
    if (items) {
      return items.map((item, i) => {
        return (
          <tr key={i}>
            {Object.values(item).map((v, idx) => {
              if (typeof v === "string") {
                return <td key={idx}>{charLimit(v, 10)}</td>;
              } else if (typeof v === "object") {
                return <td key={idx}>{charLimit(JSON.stringify(v), 15)}</td>;
              } else {
                return <td key={idx}>-</td>;
              }
            })}
          </tr>
        );
      });
    }
    return null;
  }, [items]);

  const handleDownload = () => {
    const csvArray = prepCsvData(items);
    // @ts-ignore
    const nowSeconds = (new Date() / 1000).toFixed(0);
    const filename = `${report}_${nowSeconds}.csv`;
    downloadFromBrowser(csvArray, filename);

    successToast({
      title: "Download complete",
    });
  };

  return (
    <>
      <DownloadContainer>
        <Button
          variant="ghost"
          IconLeft={RiFileDownloadLine}
          onClick={handleDownload}
        >
          Download CSV
        </Button>
      </DownloadContainer>
      <StyledTable>
        <thead>
          <tr>{headers && headers}</tr>
        </thead>
        <tbody>{rows && rows}</tbody>
      </StyledTable>
    </>
  );
}

export default ReportTable;
