import * as React from 'react';
import {SVGProps} from 'react';
const At = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 2.5a5.5 5.5 0 1 0 3.52 9.726.75.75 0 0 1 .96 1.153A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 1 0 2 0A5.5 5.5 0 0 0 8 2.5ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default At;
