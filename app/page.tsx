import Card from "./components/Card";
import OverallMetrics from "./dashboard/components/OverallMetrics";
import DataChart from "./components/DataChart";

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
        <div>
          <Card
            style={{
              padding: "2rem",
            }}
          >
            <p>Reservations per month</p>
            <DataChart />
          </Card>
        </div>
      </section>
      <section>
        <h2 className="title">Recent</h2>
      </section>
    </div>
  );
}
