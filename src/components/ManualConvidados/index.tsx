import * as S from './styles'

import { useNavigate } from 'react-router-dom'
import AppRoutes from '../../core/app-routes'

const ManualConvidados = () => {
  const navigate = useNavigate()

  function handleClickVestimenta() {
    navigate(`/${AppRoutes.Vestimenta}`)
  }

  return (
    <>
      <S.SectionManual>
        <S.Title>Manual dos Convidados</S.Title>
        <S.Horario>Horário: 16:00 horas</S.Horario>
        <S.Vestimenta>Vestimenta:</S.Vestimenta>

        <S.DivButton>
          <S.Button onClick={handleClickVestimenta}>
            <span>SAIBA MAIS</span>
          </S.Button>
        </S.DivButton>

        <S.Localizacao>Localização:</S.Localizacao>
        <S.DivButton>
          <S.ButtonLocalizacao>
            <a href="https://www.google.com/maps/place/DoValle+Palatium+Buffet/@-3.7315137,-38.5609484,17z/data=!3m1!4b1!4m5!3m4!1s0x7c7499abf4fbdd7:0xc0fad76158743d77!8m2!3d-3.7315137!4d-38.5587597">
              VER NO MAPS
            </a>
          </S.ButtonLocalizacao>
        </S.DivButton>
      </S.SectionManual>
    </>
  )
}

export default ManualConvidados
