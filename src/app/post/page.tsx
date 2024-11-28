import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "@/configs/auth";
import Link from "next/link";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import ArrowRun from "@/components/ut/arrowrun/arrowrun";
import { ExitButton } from "@/components/exitbutton/exitbutton";

export default async function Page() {
  return <div className={styles.main}></div>;
}
