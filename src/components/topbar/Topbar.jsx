import './topbar.scss';
import { Person, Mail } from '@mui/icons-material/';

const Topbar = () => {
  return (
    <div className='topbar' id='topbar'>
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
        <div className='right'>this is right</div>
      </div>
    </div>
  );
};

export default Topbar;
