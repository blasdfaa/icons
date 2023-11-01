import * as React from 'react';
import type {SVGProps} from 'react';
const LogoMarkdown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.443 4.699A1.294 1.294 0 0 0 1 5.294v5.956a.75.75 0 0 0 1.5 0V6.139l1.834 3.54a.75.75 0 0 0 1.332 0L7.5 6.138v5.111a.75.75 0 0 0 1.5 0V5.294A1.294 1.294 0 0 0 6.557 4.7L5 7.703 3.443 4.7Zm9.807.051a.75.75 0 0 0-1.5 0v4.69l-.47-.47a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l1.75-1.75a.75.75 0 1 0-1.06-1.06l-.47.47V4.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LogoMarkdown;
