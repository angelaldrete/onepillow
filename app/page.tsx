import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className="title">Welcome</h1>
      <div className={styles.metrics}>
        <Card>
          <h2 className="subtitle">Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Card>
        <Card>
          <h2 className="subtitle">Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Card>
        <Card>
          <h2 className="subtitle">Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Card>
        <Card>
          <h2 className="subtitle">Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </Card>
      </div>
    </div>
  );
}
