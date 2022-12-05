import { Controler } from './Controler/Controler';
import { Matrix } from './Matrix/Matrix';
import style from './App.module.css'



function App() {

  return (
    <div className={style.app}>
      <Controler />
      <Matrix />
    </div>
  )
}

export default App;
 