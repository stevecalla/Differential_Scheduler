import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ParticipantInformationPage: React.FC = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation

    const handlePrevious = () => {
        navigate('/previous-page'); // Replace with the actual path of the previous page
    };

    const handleNext = () => {
        navigate('/next-page'); // Replace with the actual path of the next page
    };

    return (
        <>
            <h1>Contact Information</h1>
            <p>Add contact info for all interested parties who will receive inspection correspondence</p>
            <br />
            <h3>Client Information</h3>

            <div className="input-container">
                <form>
                    <p>First Name</p>
                    <input type="text" placeholder="Joe" />
                </form>
                <form>
                    <p>Last Name</p>
                    <input type="text" placeholder="Smith" />
                </form>
                <form>
                    <p>Email</p>
                    <input type="text" placeholder="joe.smith@xyz.com" />
                </form>
            </div>

            <br />
            <h3>Agent Information</h3>

            <div className="input-container">
                <form>
                    <p>First Name</p>
                    <input type="text" placeholder="Joe" />
                </form>
                <form>
                    <p>Last Name</p>
                    <input type="text" placeholder="Smith" />
                </form>
                <form>
                    <p>Email</p>
                    <input type="text" placeholder="joe.smith@xyz.com" />
                </form>
            </div>

            <div className="button-container">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

export default ParticipantInformationPage;