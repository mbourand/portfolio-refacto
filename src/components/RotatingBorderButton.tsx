import { twMerge } from "tailwind-merge";

type RotatingBorderButtonProps = {
  label: string;
  className?: string;
  onClick: () => void;
};

export const RotatingBorderButton = ({
  label,
  className,
  onClick,
}: RotatingBorderButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "relative flex h-12 rounded-md p-[2px] w-fit overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] -z-10"
        style={{
          background: "conic-gradient(#4361EE, #3A0CA3, #000000, #4361EE)",
        }}
      />
      <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm">
        {label}
      </div>
    </button>
  );
};
