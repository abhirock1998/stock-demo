import React, {  useState } from "react";
import "./table.css";
import GavelIcon from "@material-ui/icons/Gavel";
import { TableLink } from "../../helper/url";
import { FetchStockFromApi } from "../../helper/fetch";
import { TableBody } from "../index";
import { Button } from "@material-ui/core";
function Table() {
  const tableData = FetchStockFromApi(TableLink);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  return (
    <div className="table">
      <div className="table__title">
        <h3>Latest Ranking</h3>
        <div>
          -------------
          <GavelIcon fontSize="small" />
          -------------
        </div>
      </div>
      <div className="table__content">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Rank</th>
              <th>Percentage %</th>
            </tr>
          </thead>
          <TableBody
            pageNumber={page}
            totalItem={tableData?.length}
            data={tableData}
          />
        </table>
      </div>
      <div className="table__contentFooter">
        <Button
          onClick={handlePrev}
          disabled={page <= 1 ? true : false}
          variant="outlined"
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={page >9 ? true : false}
          variant="outlined"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Table;
// get market/get-earnings  market/get-spark  market/v2/get-summary stock/v2/get-insights
