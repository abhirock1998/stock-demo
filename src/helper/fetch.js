import { useEffect, useState } from "react";
import Axios from "axios";

const ApiBaseURL = Axios.create({
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_APIKEY,
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    useQueryString: true,
  },
});

export const FetchStockFromApi = (link) => {
  const [result, setResults] = useState([]);
  useEffect(() => {
    ApiBaseURL.get(link)
      .then((r) => setResults(r.data?.finance?.result?.map((e) => e)))
      .catch((e) => null);
  }, [link]);
  return result;
};

// req.query({
// 	"region": "US",
// 	"startDate": "1585155600000",
// 	"endDate": "1589475600000",
// 	"size": "100"
// });

// req.headers({
// 	"x-rapidapi-key": "83780f0127msha884f41597b695dp11dfecjsn8c433b07df17",
// 	"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
// 	"useQueryString": true
// });

// ApiBaseURL.post('market/get-earnings',{
//     "region": "US",
// "startDate": "1585155600000",
// "endDate": "1589475600000",
// "size": "100"
// }).then(earn => console.log(earn.data)).catch(e => null)
