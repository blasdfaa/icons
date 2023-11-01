import * as React from 'react';
import type {SVGProps} from 'react';
const Flag = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.47 3.588a4.447 4.447 0 0 0-4.15-.224.55.55 0 0 0-.32.499v5.533a6.25 6.25 0 0 1 5.547.439l.344.207a4.018 4.018 0 0 0 3.865.148.442.442 0 0 0 .244-.395V4.182a6.264 6.264 0 0 1-5.386-.508l-.143-.086Zm5.957 7.944a5.518 5.518 0 0 1-5.307-.204l-.345-.207a4.75 4.75 0 0 0-4.314-.293L3 11.026v3.255a.75.75 0 0 1-1.5 0V3.863c0-.8.465-1.526 1.19-1.861a5.947 5.947 0 0 1 5.552.3l.144.086a4.761 4.761 0 0 0 4.447.24l.603-.278a.75.75 0 0 1 1.064.681v6.764c0 .735-.416 1.408-1.073 1.737Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Flag;
