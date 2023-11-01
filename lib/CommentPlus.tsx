import * as React from 'react';
import type {SVGProps} from 'react';
const CommentPlus = (props: SVGProps<SVGSVGElement>) => (
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
            d="m4.772 11.795.071-.851-.695-.496C3.156 9.742 2.5 8.648 2.5 7c0-1.563.59-2.62 1.48-3.323C4.913 2.94 6.305 2.5 8 2.5c1.695 0 3.087.44 4.02 1.177.89.702 1.48 1.76 1.48 3.323s-.59 2.62-1.48 3.323C11.087 11.06 9.695 11.5 8 11.5c-.072 0-.143 0-.213-.002l-.59-.013-.44.391-1.77 1.572a.204.204 0 0 1-.338-.17l.123-1.483Zm2.981 1.202L5.984 14.57a1.704 1.704 0 0 1-2.83-1.415l.123-1.484C1.877 10.674 1 9.117 1 7c0-4 3.134-6 7-6s7 2 7 6-3.134 6-7 6c-.083 0-.165 0-.247-.003ZM8.75 5a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25V9a.75.75 0 0 0 1.5 0V7.75H10a.75.75 0 0 0 0-1.5H8.75V5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CommentPlus;
