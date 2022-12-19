import * as React from 'react';
import {SVGProps} from 'react';
const Heart = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.067 3.2C2.785 2.424 3.807 2 5 2c1.07 0 2.217.49 3 1.454A3.899 3.899 0 0 1 11 2c1.19 0 2.21.421 2.93 1.197.713.77 1.07 1.823 1.07 2.989 0 2.005-1.045 3.613-2.356 4.855-1.307 1.24-2.947 2.184-4.303 2.876a.75.75 0 0 1-.685-.002c-1.355-.698-2.996-1.635-4.303-2.87C2.043 9.808 1 8.205 1 6.186c0-1.16.355-2.214 1.067-2.984Zm1.102 1.02C2.76 4.66 2.5 5.325 2.5 6.186c0 1.454.74 2.69 1.883 3.77 1.05.99 2.382 1.793 3.618 2.448 1.23-.646 2.561-1.455 3.611-2.451C12.758 8.866 13.5 7.625 13.5 6.186c0-.864-.262-1.528-.67-1.97-.403-.434-1.007-.716-1.83-.716-.887 0-1.897.562-2.288 1.737a.75.75 0 0 1-1.424 0C6.898 4.064 5.878 3.5 5 3.5c-.825 0-1.43.284-1.831.719Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Heart;