import styled from 'styled-components'
import media from 'styled-media-query'

export const Body = styled.section`
  width: 100%;
  background-color: #973116;
`
export const ButtonBack = styled.div`
  button {
    background-color: none;
    border: none;

    img {
      width: 5rem;
    }
  }
`

export const Header = styled.h1`
  font-family: 'forum';
  color: #fff;
  font-size: 50px;
  line-height: 67px;
  font-weight: 400;
  text-align: center;
  padding-top: 10%;
  margin: 0px;

  ${media.lessThan('medium')`
    font-size: 32px;
  `}
`

export const SubTitle = styled.h3`
  font-family: 'Helvetica';
  font-size: 20px;
  line-height: 33px;
  color: #ffffff;
  font-weight: 200;
  text-align: center;

  ${media.lessThan('medium')`
    font-size: 15px;
    margin-bottom: 10%;
  `}
`

export const BoxImg = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding-bottom: 10%;
  margin-top: 5%;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}

  img {
    width: 30%;

    ${media.lessThan('medium')`
      width: 48%;
      margin: auto;
      margin-bottom: 5%;
    `}
  }
`
