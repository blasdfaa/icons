import * as React from 'react';
import {SVGProps} from 'react';
const TvRetro = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.086 1.282a.75.75 0 1 0-1.172.937L5.94 3.5H3.5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-2.44l1.026-1.281a.75.75 0 0 0-1.172-.937L8.14 3.5h-.28L6.086 1.282ZM7.494 5H12.5A1.5 1.5 0 0 1 14 6.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5v-5A1.5 1.5 0 0 1 3.5 5h3.994ZM5 8v2h3.5V8H5Zm-.5-1.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4.5Zm8 .75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TvRetro;