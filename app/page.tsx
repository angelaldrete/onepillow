import Card from "./components/Card";
import OverallMetrics from "./dashboard/modules/OverallMetrics/components/OverallMetrics";
import DataChart from "./components/DataChart";
import Recent from "./dashboard/modules/OverallMetrics/components/Recent";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Welcome</h1>
      </header>
      <section className="overall-metrics">
        <OverallMetrics />
      </section>
      <section className="monthlyreservations">
        <h2 className="title">Stats</h2>
        <Card>
          <p>Reservations per month</p>
          <DataChart />
        </Card>
      </section>
      <section className="recent">
        <h2 className="title">Recent</h2>
        <Card>
          <Recent />
        </Card>
      </section>
    </div>
  );
}
