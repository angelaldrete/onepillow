"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

defaults.font.family = "Poppins";
defaults.font.size = 18;

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
      <section className="stats">
        <h1 className="title">Stats</h1>
        <div
          className={styles.stats}
          style={{
            width: "99%",
          }}
        >
          <Card>
            <p>Reservations per month</p>
            <Line
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "Reservations",
                    data: [12, 19, 3, 5, 2, 3, 15],
                    fill: false,
                    tension: 0.4,
                    borderColor: "#df4496",
                    pointBorderWidth: 4,
                  },
                ],
              }}
              options={{
                responsive: true,
                font: {
                  size: 18,
                },
                layout: {
                  padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </Card>
        </div>
      </section>
    </div>
  );
}
