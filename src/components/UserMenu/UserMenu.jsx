import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selector';
import { Flex, Button, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);

  const hendlerLogOut = () => {
    setIsLoading(true);
    dispatch(logOut()).then(() => setIsLoading(false));
  };

  return (
    <Flex gap="20px" justify="cente" align="center">
      <Text fontSize="2xl">Hello, {user.name}</Text>
      <Button onClick={hendlerLogOut} variant="changeBg" isLoading={isLoading}>
        LogOut
      </Button>
    </Flex>
  );
};
export default UserMenu;
