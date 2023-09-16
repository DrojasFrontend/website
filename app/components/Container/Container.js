import className from "classnames/bind";
import styles from "./Container.module.scss";
let cx = className.bind(styles);

const Container = ({ children, className }) => {
  return <div className={cx("component", className)}>{children}</div>;
};

export default Container;
