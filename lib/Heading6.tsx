import * as React from 'react';
import {SVGProps} from 'react';
const Heading6 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.5 4.25a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4v-3Zm9.9 2.532a4.857 4.857 0 0 0-1.843.293L12.273 5c.888 0 1.293.251 1.801.566l.006.003a.75.75 0 0 0 .79-1.275c-.59-.365-1.286-.794-2.597-.794-.992 0-1.855.424-2.442 1.255C9.267 5.553 9 6.665 9 8c0 1.326.246 2.438.802 3.24.583.842 1.453 1.26 2.47 1.26 1.918 0 3.228-1.236 3.228-2.795 0-.984-.388-1.74-1.024-2.237-.607-.474-1.372-.661-2.076-.686ZM11.056 5.62c-.225.32-.41.794-.498 1.455L12.272 5c-.522 0-.92.201-1.217.62Zm-.021 4.765c-.233-.336-.418-.849-.495-1.58.048-.056.165-.165.436-.282.372-.16.873-.26 1.371-.242.503.018.926.15 1.206.369.25.195.447.504.447 1.055 0 .58-.48 1.295-1.727 1.295-.564 0-.956-.207-1.238-.615Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Heading6;