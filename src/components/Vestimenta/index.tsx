import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import IconBack from '../../assets/images/circle-arrow-left-solid.svg'

import Logo from '../Logo'
import TrajeMulher from '../../assets/images/vestimenta-mulher-casamento.jpeg'
import TrajeHomem from '../../assets/images/vestimenta-homem-casamento.jpeg'

const Vestimenta = () => {
  const navigate = useNavigate()

  function handleClickHome() {
    navigate('/')
  }

  return (
    <>
      <Logo />
      <S.ButtonBack>
        <button onClick={handleClickHome}>
          <img src={IconBack} alt="Seta voltar" />
        </button>
      </S.ButtonBack>
      <S.Body>
        <S.Header>Vestimenta dos convidados</S.Header>
        <S.SubTitle>TRAJE COMPLETO</S.SubTitle>
        <S.BoxImg>
          <img src={TrajeMulher} alt="Traje feminino" />
          <img src={TrajeHomem} alt="Traje masculino" />
        </S.BoxImg>
      </S.Body>
    </>
  )
}

export default Vestimenta
