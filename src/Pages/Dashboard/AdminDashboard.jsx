import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AdminDashboard = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Dashboard Content */}
      <div className="container my-5">
        <h2>Welcome to Admin Dashboard</h2>
        <div className="row">
          {/* Manage Products */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Manage Products</h5>
                <p className="card-text">
                  Add, update, or delete products in your store.
                </p>
                <button className="btn btn-primary">Manage Products</button>
              </div>
            </div>
          </div>

          {/* View Orders */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">View Orders</h5>
                <p className="card-text">
                  Manage customer orders and their status.
                </p>
                <button className="btn btn-success">View Orders</button>
              </div>
            </div>
          </div>

          {/* Manage Users */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Manage Users</h5>
                <p className="card-text">
                  View and manage users who have registered.
                </p>
                <button className="btn btn-info">Manage Users</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Settings */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Settings</h5>
                <p className="card-text">Update your store settings here.</p>
                <button className="btn btn-warning">Settings</button>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <p className="card-text">View and edit your profile details.</p>
                <button className="btn btn-dark">View Profile</button>
              </div>
            </div>
          </div>

          {/* Sales Stats */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Sales Statistics</h5>
                <p className="card-text">View and analyze your sales data.</p>
                <button className="btn btn-secondary">View Stats</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminDashboard;
