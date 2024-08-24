import { Flex, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const styles = {
  justifyContent: 'space-between',
  gap: '10px',
};

const AuthNav = () => {
  return (
    <Flex as="ul" {...styles}>
      <li>
        <Button as={NavLink} to="/register" colorScheme="yellow">
          Register
        </Button>
      </li>
      <li>
        <Button as={NavLink} to="/login" colorScheme="yellow">
          Log In
        </Button>
      </li>
    </Flex>
  );
};

export default AuthNav;
