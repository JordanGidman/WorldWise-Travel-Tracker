// import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

import styles from "./AppLayout.module.css";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";

function AppLayout() {
  const { user } = useAuth();
  return (
    <div className={styles.app}>
      {user && <User />}
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
