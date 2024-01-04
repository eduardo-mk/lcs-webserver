const SimpleTable = ({ data }: SimpleTableArgs) => {
  if (!Array.isArray(data)) return null;
  if (data.length === 0) return null;

  return (
    <table className="info-table">
      <thead className="info-table__head">
        {/* <tr>
              <th className=""></th>
              <th className=""></th>
            </tr> */}
      </thead>
      <tbody className="info-table__body">
        {data.map((item, index) => {
          const topValueClass = index === 0 ? ' top-value' : '';
          const bottomValueClass =
            index === data.length - 1 ? ' bottom-value' : '';
          const additionalRowClass =
            item.rowClass !== undefined ? ` ${item.rowClass}` : '';
          return (
            <tr
              key={index}
              className={`info-table__row${topValueClass}${bottomValueClass}${additionalRowClass}`}
            >
              {item.title !== undefined ? (
                <td className="info-table__data">{item.title}</td>
              ) : null}
              {item.value !== undefined ? (
                <td className={`info-table__data`}>{item.value}</td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
      {/* <tfoot>
            <tr>
              <td className=""></td>
              <td className=""></td>
            </tr>
          </tfoot> */}
    </table>
  );
};

interface DataRow {
  title: string;
  value: string;
  rowClass?: string;
}
interface SimpleTableArgs {
  data: DataRow[];
}
export default SimpleTable;
