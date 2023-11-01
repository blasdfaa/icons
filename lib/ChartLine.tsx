import * as React from 'react';
import type {SVGProps} from 'react';
const ChartLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15.326 1.27a.75.75 0 0 1-.096 1.056l-3.674 3.062a2.75 2.75 0 0 1-2.55.522l-2.869-.86a1.25 1.25 0 0 0-1.214.285l-3.16 2.962A.75.75 0 1 1 .737 7.203l3.16-2.963a2.75 2.75 0 0 1 2.671-.628l2.868.86c.402.121.837.032 1.16-.236l3.674-3.062a.75.75 0 0 1 1.056.096Zm.113 6.185a.75.75 0 0 1-.393.984l-4.398 1.885a2.75 2.75 0 0 1-2.313-.068L6.186 9.182a1.25 1.25 0 0 0-1.238.068l-3.29 2.13a.75.75 0 0 1-.815-1.26l3.29-2.129a2.75 2.75 0 0 1 2.724-.15l2.149 1.073a1.25 1.25 0 0 0 1.051.031l4.398-1.884a.75.75 0 0 1 .984.394ZM1.25 12.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H1.25Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartLine;
