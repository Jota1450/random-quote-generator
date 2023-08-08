interface SvgProps {
  size?: number;
}

export const ArrowRight = ({ size = 34 }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g>
        <path
          d="M21.65 11.65L18.86 8.86C18.54 8.54 18 8.76 18 9.21V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H18V14.79C18 15.24 18.54 15.46 18.85 15.14L21.64 12.35C21.84 12.16 21.84 11.84 21.65 11.65Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_174_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRight;
