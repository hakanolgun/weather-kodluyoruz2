import Select from "../select/Select";
import Days from "../days/Days";
import styles from "./container.module.css";

export default function Container() {
  return (
    <div className={styles.container}>
      <Select />
      <Days />
    </div>
  );
}
