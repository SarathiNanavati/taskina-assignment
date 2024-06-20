"use client";

import Button from "@/components/ui/Button/button";
import CheckBox from "@/components/ui/CheckBox/checkbox";
import Divider from "@/components/ui/Divider/divider";
import { OptionType, OptionsType } from "@/utils/common.types";
import { useState } from "react";
import styles from "./frame-card.module.scss";

type FrameCardComponentProps = {
  options: OptionsType;
};

type FormType = {
  pages: OptionType["value"][];
  [key: string]: string | OptionType["value"][];
};

const FrameCardComponent = ({ options }: FrameCardComponentProps) => {
  const [form, setForm] = useState<FormType>({ pages: [] });
  const [isAllPageSelected, setIsAllPageSelected] = useState<boolean>(false);

  const handleAllPageChange = (key: string, val: string) => {
    if (val === "unchecked") {
      setIsAllPageSelected(false);
      setForm({ pages: [] });
    } else {
      setIsAllPageSelected(true);
      setForm({ pages: options.map((option) => option.value) });
    }
  };

  const handleChange = (key: string, val: string) => {
    const vForm = { ...form };

    if (key === "pages") {
      vForm.pages = vForm.pages.includes(val)
        ? vForm.pages.filter((v) => v !== val)
        : [...vForm.pages, val];
    } else {
      vForm[key] = val;
    }

    if (vForm.pages.length === options.length) {
      setIsAllPageSelected(true);
    } else {
      setIsAllPageSelected(false);
    }
    setForm(vForm);
  };

  return (
    <div className={styles.frameCardContainer}>
      <CheckBox
        field='all_pages'
        name='All pages'
        value={(isAllPageSelected && "unchecked") || "checked"}
        checked={isAllPageSelected}
        handleChange={handleAllPageChange}
      />
      <Divider />
      {options.map((option, iOption) => {
        return (
          <CheckBox
            key={`checkbox-${iOption}`}
            field='pages'
            name={option.label}
            value={option.value}
            checked={form.pages.includes(option.value)}
            handleChange={handleChange}
          />
        );
      })}

      <Divider />
      <div className={styles.buttonContainer}>
        <Button title='Done'></Button>
      </div>
    </div>
  );
};

export default FrameCardComponent;
