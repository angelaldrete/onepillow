import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className="title">Welcome</h1>
      <div className={styles.metrics}>
        <Card
          style={{
            backgroundImage:
              "linear-gradient(45deg, var(--primary-color), var(--secondary-color))",
            animationDelay: `${0 * 0.1}s`,
          }}
        >
          <p>Your reservations</p>
          <h2 className="subtitle">24</h2>
        </Card>
        <Card
          style={{
            backgroundImage:
              "linear-gradient(45deg, var(--quinary-color), var(--secondary-color))",
            animationDelay: `${1 * 0.1}s`,
          }}
        >
          <p>Total reservations</p>
          <h2 className="subtitle">124</h2>
        </Card>
        <Card
          style={{
            backgroundImage:
              "linear-gradient(45deg, var(--primary-color), var(--tertiary-color))",
            animationDelay: `${2 * 0.1}s`,
          }}
        >
          <p>Overall Profit</p>
          <h2 className="subtitle">$ 124</h2>
        </Card>
        <Card
          style={{
            backgroundImage:
              "linear-gradient(45deg, var(--tertiary-color), var(--quinary-color))",
            animationDelay: `${3 * 0.1}s`,
          }}
        >
          <p>Average Reservations</p>
          <h2 className="subtitle">24</h2>
        </Card>
      </div>
    </div>
  );
}
