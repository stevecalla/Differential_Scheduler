import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Service Selection
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/property"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/property' ? 'nav-link active' : 'nav-link'}
        >
          Property Details
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/appointment"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/appointment' ? 'nav-link active' : 'nav-link'}
        >
          Appointment Availability
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/personal"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/personal' ? 'nav-link active' : 'nav-link'}
        >
          Personal Information
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/summary"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/summary' ? 'nav-link active' : 'nav-link'}
        >
          Summary
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
