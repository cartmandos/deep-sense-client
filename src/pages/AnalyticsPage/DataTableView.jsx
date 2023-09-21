/**
 * brief data overview in table format
 */
const DataTableView = ({ filters, data }) => {
  //1. show/sort/add: avg / max / min / most common / least common / median / mode
  //2. add a button to show more data (modal)
  //3. connect clicks to the charts?
  //4. add a color indicator matching the charts

  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-800 bg-opacity-70">
      {filters.map((filter) => (
        <div key={filter}>
          <FilterTable data={data[filter]} />
        </div>
      ))}
    </div>
  );
};

const FilterTable = ({ data }) => {
  return (
    <div className="col-span-3 h-full w-full p-3">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-1 py-1 text-slate-100">Title</th>
            <th className="px-1 py-1 text-slate-100">Count</th>
          </tr>
        </thead>
        <tbody>
          {/* avoid re-rendering the table (useMemo) */}
          {data &&
            data
              .sort((a, b) => b.count - a.count)
              .map((filter, i) => (
                <tr key={i}>
                  <td className="border px-1 py-1 text-slate-100">{filter.title}</td>
                  <td className="border px-1 py-1 text-slate-100">{filter.count}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableView;
