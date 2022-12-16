import React, { SetStateAction, Dispatch } from "react";

import { Select } from "@daohaus/ui";

type ReportSelectProps = {
  report?: string;
  setReport: Dispatch<SetStateAction<string | undefined>>;
};

export const ReportSelect = ({ report, setReport }: ReportSelectProps) => {
  const updateNetwork = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReport(e.target.value);
  };

  return (
    <>
      <Select
        id="reportSelect"
        placeholder="Select"
        defaultValue={report}
        onChange={updateNetwork}
        options={[
          {
            name: "Proposals",
            value: "proposals",
          },
          {
            name: "Members",
            value: "members",
          },
          // {
          //   name: "Tokens",
          //   value: "tokens",
          // },
        ]}
      />
    </>
  );
};
