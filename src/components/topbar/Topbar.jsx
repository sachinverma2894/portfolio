import './topbar.scss';
import { Person, Mail } from '@mui/icons-material/';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`topbar ${menuOpen && 'active'}`} id='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Sachin.
          </a>

          <div className='item-container'>
            <Person className='icon' />
            <span>+91-9113379933</span>
          </div>
          <div className='item-container'>
            <Mail className='icon' />
            <span>skverma@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
