import * as React from 'react';
import type {SVGProps} from 'react';
const ShoppingCart = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.018 3.068 3.395 4.5 4.58 9.005a3 3 0 0 0 4.186 1.948l4.518-2.14A3 3 0 0 0 15 6.102V5a2 2 0 0 0-2-2H4.556l-.15-.535A2 2 0 0 0 2.48 1H.75a.75.75 0 0 0 0 1.5h1.73a.5.5 0 0 1 .482.366l.056.202Zm5.106 6.53 4.518-2.14a1.5 1.5 0 0 0 .858-1.356V5a.5.5 0 0 0-.5-.5H4.946L6.03 8.624a1.5 1.5 0 0 0 2.093.973ZM12 14.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM4.75 13a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ShoppingCart;
