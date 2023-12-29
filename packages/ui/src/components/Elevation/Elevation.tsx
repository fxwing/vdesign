import React from "react";
import { tv } from "tailwind-variants";

type LevelNumber = 0 | 1 | 2 | 3 | 4 | 5;
type Level = LevelNumber | `${LevelNumber}`;
type ElevationProps = React.HTMLAttributes<HTMLSpanElement> & { level?: Level };

const variants = tv({
  base: "pointer-events-none rounded-[inherit] absolute inset-0 before:absolute before:inset-0 before:transition-all after:absolute after:inset-0 after:transition-all before:rounded-[inherit] before:text-black before:opacity-30 after:opacity-[0.15] after:rounded-[inherit] after:text-black",
  variants: {
    level: {
      "0": "before:shadow-[0_0_0_0] after:shadow-[0_0_0_0]",
      "1": "before:shadow-[0_1px_2px_0] after:shadow-[0_1px_3px_1px]",
      "2": "before:shadow-[0_1px_2px_0] after:shadow-[0_2px_6px_2px]",
      "3": "before:shadow-[0_1px_3px_0] after:shadow-[0_4px_8px_3px]",
      "4": "before:shadow-[0_2px_3px_0] after:shadow-[0_6px_10px_4px]",
      "5": "before:shadow-[0_4px_4px_0] after:shadow-[0_8px_12px_6px]",
    },
  },
});

const Elevation: React.FC<ElevationProps> = (props) => {
  const { className, level } = props;
  return (
    <span
      className={variants({
        className,
        level: level as `${Level}`,
      })}
    />
  );
};

export default Elevation;
