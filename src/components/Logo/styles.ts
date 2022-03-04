import styled from 'styled-components'
import media from 'styled-media-query'

export const ImgLogo = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 20%;

        ${media.lessThan('medium')`
          width: 30%
        `}

        ${media.greaterThan('medium')`
          width: 20%;
        `}

        ${media.greaterThan('large')`
          width: 15%;
        `}
    }
}
`
