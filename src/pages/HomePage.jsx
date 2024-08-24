import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import WeatherForm from 'components/WeatherForm/WeatherForm';

const HomePage = () => {
  return (
    <Box as="section" py={20}>
      <Container maxW="800px">
        <Flex gap="20px" justify="space-between">
          <Box maxW={400}>
            <Heading as="h1" size={['md', 'lg']} textAlign="center" mb={5}>
              Welcome to your new digital address book!
            </Heading>
            <Text textAlign="center">
              We've created for you a special place to keep all your phone
              numbers — whether they belong to people you love or those you'd
              rather forget, but haven't managed to yet. 😊
              <br />
              Why burden your brain with remembering all those numbers when you
              can keep them safe here? And if, heaven forbid, you lose your
              phone, at least your contacts will still be safe. If our server
              decides to take a break and you lose all your contacts... consider
              it an opportunity to make new friends! Because, honestly, those
              old friends who haven't reached out until now probably won't start
              anytime soon. 😉
              <br />
              Create your own account and keep your connections alive, even with
              those people you haven't talked to in years. Who knows, maybe
              they'll give you a call to thank you for keeping their number.
              <br />
              <strong>Good luck, and happy reconnecting!</strong>
            </Text>
          </Box>

          <Box maxW={500}>
            <WeatherForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HomePage;
