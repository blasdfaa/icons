import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowRightFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H4.75a.75.75 0 0 1 0-1.5h7.69l-1.22-1.22a.75.75 0 0 1 1.06-1.06l2.5 2.5ZM2.5 1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V1.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowRightFromLine;
