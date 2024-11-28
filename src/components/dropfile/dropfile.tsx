"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import Cardсall from "../cardсall/cardсall";
import styles from "./dropfile.module.css";

type Tprops = {
  userId: string;
};

const ExcelUploader = ({ userId }: Tprops) => {
  const [list, setList] = useState<{ port: string; rus: string }[]>();
  const [name, setName] = useState("Выберите файл");
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      setName(`Вы выбрали : ${file.name}`);
      reader.onload = (e) => {
        const binaryStr = e.target?.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });

        // Выбираем первую страницу (лист)
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Преобразуем лист в массив JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        //setData(jsonData);
        setList(addList(jsonData));
        console.log(jsonData); // Для проверки данных
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const addList = (data: unknown[]) => {
    let result = [{ port: "португальский", rus: "русский" }];
    if (data) {
      const list = data.map((item) => {
        if (Array.isArray(item) && item.length === 2) {
          return {
            port: item[0] as string,
            rus: item[1] as string,
          };
        } else {
          return {
            port: "что-то не так",
            rus: "что-то не так",
          };
        }
      });
      return list;
    }
    return result;
  };

  return (
    <div className={styles.main}>
      <h4>{`Файл должен содержать два столбца со словами (например: окно janela)`}</h4>
      <h5>{`(файл такого формата можно выгрузить из гугл переводчика)`}</h5>
      <h2>Загрузите Excel файл</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="inp"
        id="inp"
        placeholder="ddsff"
        style={{ display: "none" }}
      />
      <label htmlFor="inp" className={styles.custominp}>
        {name}
      </label>
      <div>
        <h3>Ваши слова:</h3>
        <div className={styles.list}>
          {list?.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <Cardсall
                  rus={item.rus}
                  port={item.port}
                  verb={false}
                  user={userId}
                  auth={true}
                  min={false}
                ></Cardсall>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExcelUploader;
//<pre>{JSON.stringify(data, null, 2)}</pre>
