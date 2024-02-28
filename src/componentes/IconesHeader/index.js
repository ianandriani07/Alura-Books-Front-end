import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const Icones = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 50px;
    width: 25px;  
`

function IconesHeader() {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone>
              <img src={icone} alt='imagem de icones'></img>
            </Icone>
          ) ) }
        </Icones>
    )
}

export default IconesHeader