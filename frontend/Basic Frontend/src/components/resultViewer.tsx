import React from 'react';
import './dataViewerContent.css';

interface ContainerProps {
  performanceId: string;
  i: number;
  timeArr: string[];
}

const TableRow: React.FC<ContainerProps> = ({ performanceId, i, timeArr }) => {
  return (
    <tr className='tallRow'>

      <td>performance {i}</td>
      {i === 2 ? <td /> : null}
      {i === 3 ? <td colSpan={2} /> : null}
      {i === 4 ? <td colSpan={3} /> : null}
      {i === 5 ? <td colSpan={4} /> : null}
      {i === 6 ? <td colSpan={5} /> : null}
      {i === 7 ? <td colSpan={6} /> : null}
      {i === 8 ? <td colSpan={7} /> : null}

      <td key={performanceId} className="performance">{performanceId}</td>
      {i === 1 && timeArr.length > 1 ? <td colSpan={5} /> : null}
      {i === 2 ? <td colSpan={5} /> : null}
      {i === 3 ? <td colSpan={5} /> : null}
      {i === 4 ? <td colSpan={5} /> : null}
      {i === 5 ? <td colSpan={5} /> : null}
      {i === 6 ? <td colSpan={5} /> : null}
      {i === 7 ? <td colSpan={6} /> : null}
      {i === 8 ? <td colSpan={7} /> : null}
    </tr>
  );
};

export default TableRow;
