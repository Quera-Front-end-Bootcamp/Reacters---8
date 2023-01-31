import { Outlet } from "react-router-dom";

function AccountPage() {
  return (
    <div className="account-page">
      <Outlet />
    </div>
  );
}

export default AccountPage;
