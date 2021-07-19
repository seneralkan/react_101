
import Button from './Button';
import Header from './Header';
import Profile from './Profile';
import {useTheme} from '../context/ThemeContext';

function Container() {

    const {theme} = useTheme();

    return (
        <div className={`app ${theme === 'dark' ? theme : ''}`}>
            <Header />
            <hr/>
            <Button />
            <br/><br/>
            <div>
                <Profile />
            </div>
        </div>
    )
}

export default Container
