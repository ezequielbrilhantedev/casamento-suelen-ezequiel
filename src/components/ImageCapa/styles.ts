import styled from 'styled-components'
import media from 'styled-media-query'

export const ImageCapa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    opacity: 0.6;
  }

  h1 {
    position: absolute;
    font-family: 'Forum', cursive;
    font-size: 72px;
    font-weight: 400;
    color: #ffffff;
    line-height: 90px;
    font-style: normal;

    ${media.lessThan('medium')`
      font-size: 2rem;
    `}
  }

  p {
    color: #ffffff;
    position: absolute;
    margin-top: 10rem;
    font-family: 'Helvetica';
    font-size: 1rem;
    line-height: 33px;

    ${media.lessThan('medium')`
      margin-top: 6rem;
    `}
  }
`
