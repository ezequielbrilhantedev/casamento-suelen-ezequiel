import styled from 'styled-components'
import { MdContentCopy } from 'react-icons/md'
import media from 'styled-media-query'

export const SectionPresentes = styled.section`
  background: #f0f0f0;
  display: grid;
  justify-content: center;
`
export const Title = styled.h1`
  font-family: 'forum';
  color: #973116;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  margin-top: 30%;
`

export const ListaPresente = styled.p`
  font-family: 'forum';
  color: #973116;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  display: grid;

  button {
    cursor: pointer;
    font-family: 'Helvetica';
    font-size: 15px;
    border: solid 1px #973116;
    width: 34%;
    height: 162%;
    margin: auto;
    margin-top: 2%;

    :hover {
      background-color: #973116;
      transition: 0.5s;

      a {
        color: #ffffff;
        transition: 0.5s;
      }
    }

    a {
      font-size: 15px;
      font-family: 'Helvetica';
      color: #973116;

      :hover {
      }
      text-decoration: none;
    }
  }
`

export const Pix = styled.p`
  font-family: 'forum';
  color: #973116;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
`

export const QRCodePix = styled.span`
  img {
    display: grid;
    width: 30%;
    margin-top: 2%;
    margin: auto;
    margin-top: 2%;
    border: none;
    background: #f0f0f0;
  }
`

export const ChavePix = styled.p`
  font-size: 22px;

  ${media.lessThan('medium')`
    font-size: 20px;
  `}

  input {
    background-color: #f0f0f0;
    border: none;

    font-family: 'forum';
    color: #973116;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    width: 55%;
  }

  button {
    color: #973116;
    background: #f0f0f0;
    border: none;

    :active {
      background-color: #973116;
    }

    :before {
      content: 'Copiado';
      position: absolute;
      font-size: 15px;
      color: #ffffff;
      background-color: #973116;
      display: none;
    }

    :after {
      content: '';
      position: absolute;
      background-color: #973116;
      color: #ffffff;
      transform: rotate(45deg);
      display: none;
    }

    /* :after,
    :before {
      display: block;
    } */
  }
`

export const IconCopy = styled(MdContentCopy)`
  cursor: pointer;
`
