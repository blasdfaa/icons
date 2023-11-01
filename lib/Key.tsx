import * as React from 'react';
import type {SVGProps} from 'react';
const Key = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.313 7.488 9 7.653v5.37a.5.5 0 0 1-.353.478l-1.62.498-.006.001h-.008a.024.024 0 0 1-.007-.006.023.023 0 0 1-.005-.007v-.003L7 13.979V7.653l-1.313-.165a1.5 1.5 0 0 1-1.271-1.144l-.588-2.5A1.5 1.5 0 0 1 5.288 2h5.424a1.5 1.5 0 0 1 1.46 1.844l-.588 2.5a1.5 1.5 0 0 1-1.271 1.144Zm2.731-.8A3 3 0 0 1 10.5 8.975v4.047a2 2 0 0 1-1.412 1.911l-1.62.499A1.521 1.521 0 0 1 5.5 13.979V8.977a3 3 0 0 1-2.544-2.29l-.588-2.5A3 3 0 0 1 5.288.5h5.424a3 3 0 0 1 2.92 3.687l-.588 2.5ZM6.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Key;
