import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";
import ReservationsPerMonth from "./components/ReservationsPerMonth";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.welcome}>
        <h1 className="title">Welcome</h1>
        <div className={styles.metrics}>
          <Card
            style={{
              backgroundImage:
                "linear-gradient(45deg, var(--primary-color), var(--secondary-color))",
              animationDelay: `${0 * 0.2}s`,
            }}
          >
            <p>Your reservations</p>
            <h2 className="subtitle">24</h2>
          </Card>
          <Card
            style={{
              backgroundImage:
                "linear-gradient(45deg, var(--quinary-color), var(--secondary-color))",
              animationDelay: `${1 * 0.2}s`,
            }}
          >
            <p>Total reservations</p>
            <h2 className="subtitle">124</h2>
          </Card>
          <Card
            style={{
              backgroundImage:
                "linear-gradient(45deg, var(--primary-color), var(--tertiary-color))",
              animationDelay: `${2 * 0.2}s`,
            }}
          >
            <p>Overall Profit</p>
            <h2 className="subtitle">$ 124</h2>
          </Card>
          <Card
            style={{
              backgroundImage:
                "linear-gradient(45deg, var(--tertiary-color), var(--quinary-color))",
              animationDelay: `${3 * 0.2}s`,
            }}
          >
            <p>Average Reservations</p>
            <h2 className="subtitle">24</h2>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="title">Stats</h2>
        <div>
          <Card
            style={{
              padding: "2rem",
            }}
          >
            <p>Reservations per month</p>
            <ReservationsPerMonth />
          </Card>
        </div>
      </section>
      <section>
        <h2 className="title">Recent</h2>
      </section>
    </div>
  );
}
