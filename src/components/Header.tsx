import { Link } from '@tanstack/react-router';

import { css } from '../../styled-system/css';
import { Flex } from '../../styled-system/jsx';

export default function Header() {
  return (
    <Flex
      as='header'
      padding='4'
      borderBottomWidth='1px'
      borderColor='border.subtle'
      justify='space-between'
      align='center'
    >
      <Link to='/' className={css({ fontSize: 'xl', fontWeight: 'bold' })}>
        Sartre
      </Link>
      <Flex gap='4'>
        <Link
          to='/'
          className={css({
            color: 'text.default',
            _hover: { color: 'text.emphasized' }
          })}
          activeProps={{
            className: css({ fontWeight: 'bold' })
          }}
        >
          Home
        </Link>
      </Flex>
    </Flex>
  );
}
