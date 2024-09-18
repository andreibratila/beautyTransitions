import styles from "./text.module.css";

export const TextMoving = ({
  children,
  lenghtText,
}: Readonly<{
  children: React.ReactNode;
  lenghtText: number;
}>) => {
  return (
    <div className={styles.main}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {Array.from({ length: lenghtText }, (_, i) => (
            <div className={styles.textBlock} key={i}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
