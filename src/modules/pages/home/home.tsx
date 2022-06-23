import { Container, Main } from '../../../styles/components';
import { CryptoForm } from '../../components/cryptoForm/cryptoForm';
import { FlexDirection } from './home.styled';

export const Home = () => {
  return (
    <Main>
      <Container>
        <FlexDirection>
          <CryptoForm />
        </FlexDirection>
      </Container>
    </Main>
  );
};
