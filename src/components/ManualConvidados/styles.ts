import styled from 'styled-components'
import media from 'styled-media-query'

export const SectionManual = styled.section`
  width: 100%;
  background: #973116;
  display: grid;

  ${media.lessThan('medium')`
    padding-bottom: 10%;
  `}
`
export const Title = styled.h1`
  font-family: 'forum';
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  margin-top: 10%;
`
export const SubTitle = styled.h3`
  font-family: 'Helvetica', sans-serif;
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  line-height: 32px;
  margin: 0 auto;
`

export const Vestimenta = styled.p`
  font-family: 'forum';
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  color: #ffffff;
  text-align: center;
`
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  cursor: pointer;
  font-family: 'Helvetica';
  font-size: 15px;
  border: solid 1px #ffffff;
  width: 20%;
  height: 100%;
  background: #973116;
  margin-bottom: 3%;

  ${media.lessThan('medium')`
    width: 35%;
    margin-bottom: 9%;
  `}

  span {
    color: #ffffff;
  }
`

export const Horario = styled.p`
  font-family: 'forum';
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  color: #ffffff;
  margin-bottom: 0;
  text-align: center;
`
// export const DivLocation = styled.div`
//   margin-bottom: 10%;

//   ${media.lessThan('medium')`
//     margin-bottom: 20%;
//   `}
// `

export const Localizacao = styled.p`
  font-family: 'forum';
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  color: #ffffff;
  text-align: center;
`
export const ButtonLocalizacao = styled.button`
  cursor: pointer;
  font-family: 'Helvetica';
  font-size: 15px;
  border: solid 1px #ffffff;
  width: 20%;
  height: 42%;
  background: #973116;
  margin-bottom: 9%;

  ${media.lessThan('medium')`
    width: 35%;
    height: 100%;
  `}

  a {
    text-decoration: none;
    color: #ffffff;
  }
`
