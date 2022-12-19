import * as React from 'react';
import {SVGProps} from 'react';
const NodesLoop = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM1 5a3 3 0 0 1 5.905-.75h2.19a3.001 3.001 0 1 1 2.115 3.645L10.092 9.85a3 3 0 1 1-4.185 0L4.79 7.895A3.004 3.004 0 0 1 1 5Zm5.092 2.15L7.21 9.105a3.003 3.003 0 0 1 1.58 0L9.908 7.15a2.997 2.997 0 0 1-.813-1.4h-2.19a2.997 2.997 0 0 1-.813 1.4ZM12 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM6.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default NodesLoop;