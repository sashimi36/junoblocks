import { SVGProps } from 'react'
import { createIcon } from '../util/createIconComponent'

export const [Wallet, WalletIcon] = createIcon(
  (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.37512 4.5C1.37512 3.32639 2.32651 2.375 3.50012 2.375H12.5001C13.6737 2.375 14.6251 3.32639 14.6251 4.5V7.25V9V9.25V9.625V9.875H14.6201V11.75C14.6201 12.8546 13.7247 13.75 12.6201 13.75H3.37012C2.26555 13.75 1.37012 12.8546 1.37012 11.75V9H1.37512V7.25V4.5ZM2.62512 7.25V9H5.50012L7.25012 11H8.75012L10.5001 9H13.3751V7.25C13.3751 6.76675 12.9834 6.375 12.5001 6.375H3.50012C3.01687 6.375 2.62512 6.76675 2.62512 7.25ZM13.3751 5.31293C13.1083 5.19221 12.812 5.125 12.5001 5.125H3.50012C3.18819 5.125 2.89196 5.19221 2.62512 5.31293V4.5C2.62512 4.01675 3.01687 3.625 3.50012 3.625H12.5001C12.9834 3.625 13.3751 4.01675 13.3751 4.5V5.31293Z'
          fillOpacity='0.9'
        />
      </svg>
    )
  }
)
