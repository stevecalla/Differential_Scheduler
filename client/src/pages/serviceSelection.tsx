import { useNavigate } from 'react-router-dom'; 

const ServiceSelection = () => {
  
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handlePrevious = () => {
    navigate('/previous-page'); // Replace with the actual path of the previous page
  };

  const handleNext = () => {
    navigate('/next-page'); // Replace with the actual path of the next page
  };

    return (
      <>
        <section>
          <h1>Service Selection</h1>
        </section>

        <div className="button-container">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </>
    );
  };
  
  export default ServiceSelection;