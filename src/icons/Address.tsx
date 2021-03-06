import { SVGProps } from 'react'
import { createIcon } from '../util/createIconComponent'

export const [Address, AddressIcon] = createIcon(
  (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.7354 2.50973L11.6129 3.1226L11.1624 5.37502L13.25 5.37502H13.875V6.62502H13.25H10.9124L10.3624 9.37502H12.75H13.375V10.625H12.75H10.1124L9.61286 13.1226L9.49029 13.7355L8.26456 13.4903L8.38714 12.8774L8.83762 10.625H6.11238L5.61286 13.1226L5.49029 13.7355L4.26456 13.4903L4.38714 12.8774L4.83762 10.625H2.75H2.125V9.37502H2.75H5.08762L5.63762 6.62502H3.25H2.625L2.625 5.37502H3.25L5.88762 5.37502L6.38714 2.87745L6.50971 2.26459L7.73544 2.50973L7.61286 3.1226L7.16238 5.37502L9.88762 5.37502L10.3871 2.87745L10.5097 2.26459L11.7354 2.50973ZM6.91238 6.62502L6.36238 9.37502H9.08762L9.63762 6.62502H6.91238Z'
          fill='currentColor'
        />
      </svg>
    )
  }
)
