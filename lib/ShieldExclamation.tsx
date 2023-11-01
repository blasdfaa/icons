import * as React from 'react';
import type {SVGProps} from 'react';
const ShieldExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="m3.003 4.702 4.22-2.025a1.796 1.796 0 0 1 1.554 0l4.22 2.025a.886.886 0 0 1 .503.8V6a8.55 8.55 0 0 1-3.941 7.201l-.986.631a1.063 1.063 0 0 1-1.146 0l-.986-.63A8.55 8.55 0 0 1 2.5 6v-.498c0-.341.196-.652.503-.8Zm3.57-3.377L2.354 3.35A2.387 2.387 0 0 0 1 5.502V6a10.05 10.05 0 0 0 4.632 8.465l.986.63a2.563 2.563 0 0 0 2.764 0l.986-.63A10.05 10.05 0 0 0 15 6v-.498c0-.918-.526-1.755-1.354-2.152l-4.22-2.025a3.296 3.296 0 0 0-2.852 0ZM8 4.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 4.75Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ShieldExclamation;
