import Table from "react-bootstrap/Table";
import "./auth.css";

function TableExample() {
  return (
    <>
      <div className="TabDiv">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Утасны дугаар</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td colSpan={2}>Mark</td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-md-4 offset-md-4"
                >
                  Удирдах
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td colSpan={2}>Jacob</td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-md-4 offset-md-4"
                >
                  Удирдах
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td colSpan={2}>Jacob</td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-md-4 offset-md-4"
                >
                  Удирдах
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm col-md-4 offset-md-4"
                >
                  Удирдах
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TableExample;
