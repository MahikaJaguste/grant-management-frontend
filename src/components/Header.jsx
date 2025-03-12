const Header = ({ title, tabs, onTabClick }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-olive fixed-top">
      <div className="container-fluid">
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
