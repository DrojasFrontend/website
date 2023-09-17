import Link from "next/link";
import className from "classnames/bind";
import styles from "./Logo.module.scss";
let cx = className.bind(styles);

const Logo = () => {
  return (
    <Link href="/" className={cx("wrapper")}>
      Daniel Rojas Astood
    </Link>
  );
};

export default Logo;
