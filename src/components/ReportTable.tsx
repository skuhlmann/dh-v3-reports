import styled from "styled-components";

import { MolochV3Members, MolochV3Proposal } from "@daohaus/moloch-v3-data";
import { useMemo } from "react";

export function ReportTable({
  report,
  items,
}: {
  report: string;
  items: MolochV3Proposal[] | MolochV3Members | undefined;
}) {
  //todo = filter out object.
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
                return <td key={idx}>{v}</td>;
              } else if (typeof v === "object") {
                return <td key={idx}>{JSON.stringify(v)}</td>;
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

  console.log("rows", rows);
  return (
    <table>
      <thead>
        <tr>{headers && headers}</tr>
      </thead>
      <tbody>{rows && rows}</tbody>
    </table>
  );
}

export default ReportTable;
