import * as S from './styles'
import ImgPix from '../../assets/images/qr-code-pix.png'

const FormasPresentes = () => {
  return (
    <>
      <S.SectionPresentes>
        <S.Title>Formas de nos presentear</S.Title>
        <S.ListaPresente>
          LISTA DE PRESENTES
          <button>
            <a
              href="https://www.querodecasamento.com.br/lista-de-casamento/suelen-ezequiel"
              target="_blank"
              rel="noreferrer"
            >
              SAIBA MAIS
            </a>
          </button>
        </S.ListaPresente>
        <S.Pix>
          PIX
          <S.QRCodePix>
            <img src={ImgPix} alt="QR Code pix" />
          </S.QRCodePix>
          <S.ChavePix>
            <p>chave pix: ezequielrb7@gmail.com</p>
          </S.ChavePix>
        </S.Pix>
      </S.SectionPresentes>
    </>
  )
}

export default FormasPresentes
