import { useNavigate } from 'react-router-dom'; 

const ServiceSelection = () => {
  
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handlePrevious = () => {
    navigate('/'); 
  };

  const handleNext = () => {
    navigate('/propertyDetails'); 
  };

    return (
      <>
        <section>
          <h1>Service Selection</h1>
        </section>

        <div className="first-page-button">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </>
    );
  };
  
  export default ServiceSelection;