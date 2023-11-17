const Buscador = ({ setInfo }) => {
  return (
    <div className="buscador col-12 col-md-7 d-flex mb-4">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un anime"
        className="form-control mr-2"
        onChange={(e) => setInfo(e.target.value)}
      />
    </div>
  );
};

export default Buscador;
