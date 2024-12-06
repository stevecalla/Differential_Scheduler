const summary = () => {
  return (
    <section className="summary-container">
      <h1>Almost Done! 🚀</h1>
      <p>Confirm your deal details information and submit to create it.</p>
      <br />
      <div className="details-container">
        <div className="service-types">
          <h4>Service Type</h4>
          <h4>Additional Service</h4>
          <h4>Dwelling Type</h4>
          <h4>Address</h4>
          <h4>Square Footage</h4>
        </div>
        <div className="response">
          <p>Walk & Talk</p>
          <p>Blue Tape</p>
          <p>Condo</p>
          <p>101 Project2 Road, Washington DC, 10000</p>
          <p>1000 sqft</p>
        </div>
      </div>
    </section>
  );
};

export default summary;