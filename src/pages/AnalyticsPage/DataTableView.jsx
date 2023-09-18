const DataTableView = ({ filters }) => {
  // NOTE: this function will compose the brief summary of the charts - for demonstration purposes
  // TODO: this function will be removed or refactor in the future
  // TODO: think may be about more function and maybe add select input to choose form different options of summary
  // avg / max / min / most common / least common / median / mode / etc...
  const ComposeBriefSummary = () => {
    const dataArr = [];
    Object.values(filters).forEach((item) => {
      const maxCountArr = item.data.map((item) => item.count);
      const maxCount = item.data.filter((item) => item.count === Math.max(...maxCountArr))[0];
      dataArr.push({ label: item.label, count: maxCount.count, title: maxCount.title });
    });

    const summaries = dataArr.map((item, i) => (
      <div key={i}>
        <h1 className="inline-block text-slate-200 underline underline-offset-2 hover:cursor-pointer hover:decoration-yellow-400 hover:decoration-2 hover:underline-offset-4">
          There are <strong>{dataArr[i].count}</strong> cases of <strong>{dataArr[i].label}</strong>{' '}
          for/at <strong>{dataArr[i].title}</strong>
        </h1>
      </div>
    ));

    return <div>{summaries}</div>;
  };

  return (
    <div className="colo col-span-3  m-1 bg-gray-800 bg-opacity-70 p-3">
      <ComposeBriefSummary />
    </div>
  );
};

export default DataTableView;
