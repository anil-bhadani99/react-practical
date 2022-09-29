import { Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Tabel = ({ rowClassName = '', tabelData = [], handleRowClick = () => null }) => {
  const tabelHeadArray = tabelData.length > 0 ? Object.keys(tabelData[0]) : [];

  return (
    <Table striped bordered hover variant="dark" className="mt-5">
      <thead>
        <tr>
          {tabelHeadArray.map((head) => (
            <th key={uuidv4()} className="text-capitalize text-center">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tabelData.map((item) => (
          <tr
            key={uuidv4()}
            className={`text-center ${rowClassName}`}
            onClick={() => handleRowClick(item)}>
            {tabelHeadArray.map((rowItem) => (
              <td key={uuidv4()}>{item[rowItem]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tabel;
