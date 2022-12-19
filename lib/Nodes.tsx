import * as React from 'react';
import {SVGProps} from 'react';
const Nodes = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM1 5a3 3 0 0 1 5.905-.75h2.19a3.001 3.001 0 1 1 0 1.5h-2.19a2.997 2.997 0 0 1-.813 1.4L7.21 9.105A3.003 3.003 0 0 1 11 12a3 3 0 1 1-5.092-2.15L4.79 7.895A3.003 3.003 0 0 1 1 5Zm11 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM6.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Nodes;