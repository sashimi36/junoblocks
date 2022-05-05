import { SVGProps } from 'react'
import { createIcon } from '../util/createIconComponent'

export const [Treasury, TreasuryIcon] = createIcon(
  (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width='24'
        height='25'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M8.33301 11.1665H6.99967V15.8332H8.33301V11.1665ZM12.333 11.1665H10.9997V15.8332H12.333V11.1665ZM17.9997 17.1665H5.33301V18.4998H17.9997V17.1665ZM16.333 11.1665H14.9997V15.8332H16.333V11.1665ZM11.6663 6.67317L15.1397 8.49984H8.19301L11.6663 6.67317ZM11.6663 5.1665L5.33301 8.49984V9.83317H17.9997V8.49984L11.6663 5.1665Z'
          fill='currentColor'
        />
      </svg>
    )
  }
)
