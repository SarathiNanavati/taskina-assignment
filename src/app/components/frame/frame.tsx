import { OptionsType } from "@/utils/common.types";
import FrameCardComponent from "../frame-card/frame-card";
import styles from "./frame.module.scss";

const FrameComponent = () => {
  const checkboxOptions: OptionsType = [
    { value: "page-1", label: "Page 1" },
    { value: "page-2", label: "Page 2" },
    { value: "page-3", label: "Page 3" },
    { value: "page-4", label: "Page 4" },
    { value: "page-5", label: "Page 5" },
  ];

  return (
    <div className={styles.frameContainer}>
      <FrameCardComponent options={checkboxOptions} />
    </div>
  );
};

export default FrameComponent;
