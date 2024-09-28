import { Link } from 'react-router-dom';

import { NotFoundSvg } from '../../assets/svgs/NotFoundSvg';

import './styles.scss';

export function NotFound() {
  return (
    <main className='notFoundContainer'>
      <h1>Pagina não encontrada!</h1>
      <Link to='/'>Voltar para home.</Link>
      <NotFoundSvg />
    </main>
  );
}
