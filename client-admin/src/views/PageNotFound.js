import { useHistory } from "react-router";

export default function PagetNotFound() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="d-flex  justify-content-center align-items-center text-white" style={{ minHeight: "100vh", backgroundColor: "#212121" }}>
      <div className="text-center">
        <i class="fas fa-sad-tear fa-7x"></i>
        <h2>
          Sorry, the page you are looking for <br /> is not found
        </h2>
        <button
          className="btn btn-danger rounded-pill"
          onClick={(e) => {
            e.preventDefault();
            goBack();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
