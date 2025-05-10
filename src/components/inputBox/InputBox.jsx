import styles from "./InputBox.module.css";

const InputBox = ({
  type = "text",
  name,
  placeholder,
  maxLength,
  onChange,
  value,
  isValid,
  errorMessage,
  isRequired = true,
  disabled,
}) => {
  return (
    <div className={styles.containerField}>
      <label className={`${styles.field} ${disabled && styles.success}`}>
        {type !== "textarea" ? (
          <input
            name={name}
            type={type}
            placeholder={name}
            maxLength={maxLength}
            autoComplete="on"
            required={isRequired ? true : null}
            onChange={(e) => onChange(e)}
            value={value}
            disabled={disabled}
          />
        ) : (
          <textarea
            name={name}
            placeholder={name}
            maxLength={maxLength}
            required={isRequired ? true : null}
            disabled={disabled}
            onChange={(e) => onChange(e)}
            value={value}
          ></textarea>
        )}
        <span className={styles.placeholder}>{placeholder}</span>
        <span className={`${styles.required} ${disabled && styles.send}`}>
          *
        </span>
      </label>
      <div className={`${styles.error} ${isValid ? styles.show : ""}`}>
        <span className={styles.iconError}>
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1.5L1 7.5M1 1.5L7 7.5"
              stroke="#0A0B15"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default InputBox;
