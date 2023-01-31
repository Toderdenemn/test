import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MainSearch() {
  return (
    <>
      <div className="sticky-top mt-5 mb-4 fixed-bottom" style={{ top: 30 }}>
        <Form className="d-flex col-9 mx-auto">
          <Form.Control
            type="search"
            placeholder="Дугаараар хайх"
            className="mx-auto form-control form-control-lg"
            aria-label="Search"
          />
        </Form>
        <div className="text-center mt-3 col-9 mx-auto">
          <Button variant="btn btn-primary" className="btn-block">
            Хайх
          </Button>
        </div>
      </div>
    </>
  );
}

export default MainSearch;
