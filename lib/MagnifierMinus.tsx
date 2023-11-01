import * as React from 'react';
import type {SVGProps} from 'react';
const MagnifierMinus = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.75 11a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm0 1.5a5.725 5.725 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5Zm-2-6.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
            clipRule="evenodd"
        />
    </svg>
);
export default MagnifierMinus;
