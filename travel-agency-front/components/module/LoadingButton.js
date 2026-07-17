import styles from "./LoadingButton.module.css";

function LoadingButton({
  className = "",
  loading,
  children,
  disabled,
  ...props
}) {
  return (
    <button {...props} disabled={loading || disabled} className={className}>
      {loading ? (
        <span className={styles.loader}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default LoadingButton;
