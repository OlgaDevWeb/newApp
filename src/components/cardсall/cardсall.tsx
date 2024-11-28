"use client";
import { useEffect, useState } from "react";
import Speak from "../speak/speak";
import styles from "./cardсall.module.css";
import Link from "next/link";
import { AddButton } from "../addbutton/addbutton";
import { DellButton } from "../dellbutton/dellbutton";

type Tprops = {
  rus: string;
  port: string;
  verb: boolean;
  user: string;
  auth: boolean;
  min: boolean;
};

const Cardсall = ({ rus, port, verb, user, auth, min }: Tprops) => {
  const [okadd, setOkAdd] = useState(false);
  const [okdell, setOkDell] = useState(false);
  const [err, seterr] = useState(false);

  return (
    <div className={styles.mainbox}>
      <div className={styles.front}>
        <div className={styles.name}>{rus}</div>
      </div>
      <div className={styles.back}>
        <div className={styles.name}>{port}</div>
        <div className={styles.boxx}>
          {verb && (
            <Link
              href={`https://european-portuguese.info/pt/conjugator/${port}`}
              target="_blank"
              style={{ textAlign: "center", fontSize: 10 }}
            >
              Все спряжения на стороннем сайте
            </Link>
          )}
          <div className={styles.box}>
            <Speak text={port}></Speak>
            {auth && !min && (
              <AddButton rus={rus} port={port} user={user}></AddButton>
            )}
            {auth && min && (
              <DellButton rus={rus} port={port} user={user}></DellButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardсall;
