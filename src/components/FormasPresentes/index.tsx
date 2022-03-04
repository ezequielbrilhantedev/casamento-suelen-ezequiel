import * as S from './styles'
import ImgPix from '../../assets/images/qr-code-pix.png'

const FormasPresentes = () => {
  // let copyChavePix = document.getElementById('chavePix')
  // copyChavePix.

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
            ou com a chave: &nbsp;
            <input type="text" id="chavePix" value="ezequielrb7@gmail.com" />
            {/* <button id="buttonCopyPix">
              <S.IconCopy />
            </button> */}
          </S.ChavePix>
        </S.Pix>
      </S.SectionPresentes>
    </>
  )
}

export default FormasPresentes
