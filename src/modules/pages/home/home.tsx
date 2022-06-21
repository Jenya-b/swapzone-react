import { useEffect } from 'react';
import { Container, Main } from '../../../styles/components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCurrencies } from '../../../store/reducers/ActionCreators';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { currencies } = useAppSelector((state) => state.currencyReducer);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <Main>
      <Container>Home</Container>
    </Main>
  );
};
