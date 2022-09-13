import useFetch from "../customize/fetch";
import moment from "moment";
const Covid = () => {
  // const today = new Date(new Date().setHours(0, 0, 0, 0));
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    // "https://api.covid19api.com/country/vietnam?from=2022-08-01T00:00:00Z&to=2022-09-05T00:00:00Z"
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
    true
  );
  return (
    <>
      <h2>API Covid 19 VietNam</h2>
      <table id="customers">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  backgroundColor: "#282c34",
                  border: "none",
                }}
              >
                Loading...
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  backgroundColor: "#282c34",
                  border: "none",
                }}
              >
                Some thing wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
