import s from "./button.module.scss";

export enum ButtonVariantType {
  DEFAULT = "default",
}

type ButtonProps = {
  title: string;
  variantType?: ButtonVariantType;
};

const Button = ({
  variantType = ButtonVariantType.DEFAULT,
  title,
}: ButtonProps) => {
  return (
    <>
      {variantType === ButtonVariantType.DEFAULT && (
        <button className={s.button}>
          <span>{title}</span>
        </button>
      )}
    </>
  );
};

export default Button;
