type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

function Button({ label, onClick, variant = "primary", disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-md px-4 py-2 font-semibold 
        ${disabled ?
          "bg-zinc-700/70" :
          variant === "primary"
            ? "bg-accent"
            : "bg-zinc-700"
        } ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );
}

export default Button;
