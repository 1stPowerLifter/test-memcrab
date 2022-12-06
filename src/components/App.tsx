import { Controler } from './Controler/Controler';
import { Matrix } from './Matrix/Matrix';
import style from './App.module.css'
import { useSelector } from 'react-redux';
import { selectVisibilityMatrix } from '../redux/matrix/selectors';



function App() {

  const visibilityMatrix = useSelector(selectVisibilityMatrix)
  
  return (
    <div className={style.app}>
      <Controler />
      {visibilityMatrix && <Matrix />}
    </div>
  )
}

export default App;
 