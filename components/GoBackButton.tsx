import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import styles from "../styles/components/GoBackButton.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const GoBackButton = () => {
  const router = useRouter();

  const isRoot = useMemo(() => router.pathname === "/", [router.pathname]);

  return isRoot ? null : (
    <Link href="/" className={styles.goBackButton}>
      <IoMdArrowRoundBack size={24} />
    </Link>
  );
};

export default GoBackButton;
