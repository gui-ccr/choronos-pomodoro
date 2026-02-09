import './styles/theme.css';
import './styles/global.css';
import { Heading } from './feature/Heading';
import { Container } from './feature/Container';
import { Logo } from './feature/Logo/index'
import { Menu } from './feature/Menu/index'
import { CountDown } from './feature/CountDown/index'

function App() {

  return (
    <>
      {/* HEADER */}
      <Container>
        <Logo />
      </Container>

      {/* MENU */}
      <Container>
        <Menu />
      </Container>

      {/* CONTADOR */}
      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form className="form" action="">
          <div className='FormRow'>
            <label htmlFor='meuInput'>Task</label>  
                <input id="meuInput" type="text" />
          </div>

          <div className='formRow'>
              <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div className='formRow'>
              <p>Ciclos</p>
              <p>0 0 0 0 0 0</p>
          </div>


          <div className='formRow'>
              <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default App
