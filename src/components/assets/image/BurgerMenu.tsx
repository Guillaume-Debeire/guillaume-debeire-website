export interface BurgerMenuProps {
  width: number;
  height?: number;
  color?: string;
}

export function BurgerMenu(props: BurgerMenuProps) {
  return (
    <svg
      width={`${props.width}`}
      height={`${props.height ?? props.width}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke={`${props.color ?? "#43494e"}`}
        stroke-width="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={`${props.color ?? "#43494e"}`}
        stroke-width="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={`${props.color ?? "#43494e"}`}
        stroke-width="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
