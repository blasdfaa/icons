import * as React from 'react';
import type {SVGProps} from 'react';
const Sliders = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1.405.75a3.001 3.001 0 0 1-5.81 0H1.747a.75.75 0 0 1 0-1.5h1.348a3.001 3.001 0 0 1 5.81 0h5.345a.75.75 0 0 1 0 1.5H8.905Zm-7.158 4.5h5.345a3.001 3.001 0 0 1 5.811 0h1.347a.75.75 0 1 1 0 1.5h-1.347a3.001 3.001 0 0 1-5.81 0H1.746a.75.75 0 0 1 0-1.5Zm8.25-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Sliders;
