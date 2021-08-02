import React from "react";
import "./index.scss";
const Dashboard = () => {
  // const state = useSelector((state) => state.state);
  return (
    <div>
      <aside>
        <div className="heading">
          <h1 className="greeting-head">
            Welcome
            <span>
              <i class="fas fa-user-edit"></i>
            </span>
          </h1>

          

          <h1 className="greeting-name">Vishesh!</h1>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
