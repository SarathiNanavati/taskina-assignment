"use client";

import s from "./checkbox.module.scss";

type CheckBoxProps = {
  field: string;
  name: string;
  value: string;
  checked: boolean;
  handleChange?: (key: string, val: string) => void;
};

const CheckBox = ({
  field,
  name,
  value,
  checked,
  handleChange,
}: CheckBoxProps) => {
  const handleClick = (value: string) => {
    if (handleChange) {
      handleChange(field, value);
    }
  };

  return (
    <div
      className={`${s.checkboxContainer}`}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(value)}
    >
      <span>{name}</span>
      <div>
        <input
          type='checkbox'
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => {}}
        />
        <label>
          <svg
            width='19'
            height='14'
            viewBox='0 0 19 14'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
          >
            <path
              d='M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1'
              strokeWidth={"1px"}
              strokeLinecap='round'
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
