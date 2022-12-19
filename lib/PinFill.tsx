import * as React from 'react';
import {SVGProps} from 'react';
const PinFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="m13.444 6.298-.003.003c-.02.024-.102.12-.504-.007-.467-.148-1.107-.55-1.79-1.233-.684-.684-1.085-1.324-1.234-1.791-.127-.402-.03-.484-.007-.504l.003-.004.003-.003c.02-.023.102-.12.504.008.467.148 1.107.55 1.791 1.233.684.684 1.085 1.324 1.233 1.79.128.403.032.485.008.505l-.004.003Zm-4.992-2.68L6.399 4.736c-1.517-.858-2.91-1.03-3.801-.14-1.31 1.31-.323 3.705 1.762 5.982l-2.89 2.89a.75.75 0 1 0 1.06 1.061l2.89-2.89c2.278 2.084 4.672 3.072 5.982 1.762.891-.891.719-2.284-.139-3.801l1.055-1.935c.84.313 1.62.26 2.187-.307 1.06-1.061.325-2.858-1.237-4.42C11.706 1.376 9.909.64 8.848 1.701c-.506.506-.603 1.18-.396 1.915Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PinFill;