import { styled } from '../theme'

export const TokenLogo = () => {
  return (
    <StyledWrapper>
      <StyledBackground />
    </StyledWrapper>
  )
}

const StyledWrapper = styled('div', {
  padding: '$2',
  borderRadius: '50%',
  width: '3rem',
  height: '3rem',
  border: '1px solid $colors$brand',
})

const StyledBackground = styled('div', {
  backgroundColor: '$colors$dark',
})
