import { useNavigate } from "react-router-dom";

const Header = ({ title, tabs, onTabClick }) => {
  const navigate = useNavigate();

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-olive fixed-top">
      <div className="container-fluid">
        <button className="btn btn-olive me-2" onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
        </svg>
        </button>
        <span className="navbar-brand">{title}</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {tabs.map((tab, index) => (
              <li key={index} className="nav-item">
                <span className="nav-link" onClick={() => onTabClick(tab.path)}>
                  {tab.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
