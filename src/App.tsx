import { BattleMage } from './Corvinus/BattleMage/BattleMage';
import { Container } from './components/Container/Container';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <BattleMage />
      </Container>
      <Footer />
    </>
  );
}

export default App;
