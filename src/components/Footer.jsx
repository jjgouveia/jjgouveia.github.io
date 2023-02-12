import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>
        Direitos reservados -
        {' '}
        { year }
        {' '}
        | Desenvolvido em React por Jr Gouveia
      </span>
    </footer>
  );
}
