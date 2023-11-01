import * as React from 'react';
import type {SVGProps} from 'react';
const Moon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 0 0 2.263-10.514 5.5 5.5 0 0 1-7.278 7.278A5.501 5.501 0 0 0 8 13.5ZM1.045 8.795a7.001 7.001 0 1 0 7.75-7.75l-.028-.003A7.078 7.078 0 0 0 8 1c-.527 0-.59.842-.185 1.18a4.02 4.02 0 0 1 .342.322A4 4 0 1 1 2.18 7.814C1.842 7.41 1 7.474 1 8a7.078 7.078 0 0 0 .045.794Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Moon;
