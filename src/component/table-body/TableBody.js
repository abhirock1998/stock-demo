import React, { useEffect, useState } from "react";

function TableBody({ perPageItem = 10, totalItem, pageNumber = 1, data = [] }) {
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const initialIndex = pageNumber * perPageItem - perPageItem;

    const finalIndex = initialIndex + perPageItem;
    let SliceArray = data.slice(initialIndex, finalIndex);
    setSlice(SliceArray);
  }, [perPageItem, totalItem, pageNumber,data]);

  return (
    <>
      <tbody>
        {slice?.map((table, index) => (
          <tr key={table.ticker}>
            <td>{index + 1}</td>
            <td>{table.ticker}</td>
            <td>{table.companyShortName}</td>
            <td>{table.rank}</td>
            <td>{table.surprisePercent}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TableBody;
