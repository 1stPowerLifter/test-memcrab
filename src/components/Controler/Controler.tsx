import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibilityMatrix } from '../../redux/matrix/selectors';
import { AdditionalAbilities } from './AdditionalAbilities/AdditionalAbilities';
import { MainControler } from './MainControler/MainControler';
import styles from './Controler.module.css'

export const Controler: FC = () => {
    const visibilityMatrix = useSelector(selectVisibilityMatrix)

    return (
        <div className={styles.controler}>
            <MainControler/>
            {visibilityMatrix && <AdditionalAbilities />}
        </div>
    );
};