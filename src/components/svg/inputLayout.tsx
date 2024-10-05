import React from "react";

type InputLayoutProps = {
  className?: string;
};

const InputLayout: React.FC<InputLayoutProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 520 65"
      fill="none"
      className={className} /* class="svg--desktop" */
    >
      <path
        d="M8.43002 2.53001C6.99002 4.75001 5.03002 6.58 2.74002 7.86C1.69002 8.45 1 9.52 1 10.72V53.64C1 54.84 1.69002 55.91 2.74002 56.5C5.03002 57.78 6.99002 59.61 8.43002 61.83C9.04002 62.77 10.06 63.36 11.18 63.36H508.68C509.8 63.36 510.82 62.77 511.43 61.83C512.87 59.62 514.83 57.78 517.12 56.5C518.17 55.91 518.86 54.84 518.86 53.64V10.72C518.86 9.52 518.17 8.45 517.12 7.86C514.83 6.58 512.87 4.75001 511.43 2.53001C510.82 1.59001 509.8 1 508.68 1H11.18C10.06 1 9.04002 1.59001 8.43002 2.53001Z"
        stroke="#00211A"
        stroke-width="2"
      ></path>
    </svg>
  );
};

export default InputLayout;
