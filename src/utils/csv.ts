export const prepCsvData = (list: any) => {
  const header = Object.keys(list[0]).join(",");
  const values = list
    .map((o: string) => {
      return Object.values(o)
        .map((val) => (val === null ? `""` : `"${val}"`))
        .join(",");
    })
    .join("\n");
  return `${header}\n${values}`;
};

export const downloadFromBrowser = (csvArray: any, filename: string) => {
  const blob = new Blob([csvArray], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
