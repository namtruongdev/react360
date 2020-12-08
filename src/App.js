import { useEffect } from 'react';
import './App.css';
import config from './360_assets/COR49_Billancourt/COR49_Billancourt.xml';

import './imagerotator/html/js/imagerotator.js';

const App = () => {
  console.log(config);
  useEffect(() => {
    window.$('#wr360PlayerId').rotator({
      licenseFileURL: 'license.lic',
      configFileURL: `${config}`,
      graphicsPath: 'imagerotator/html/img/retina',
      alt: '360 degree view ALT description',
      googleEventTracking: false,
    });
  }, []);
  return (
    <div className="app">
      <section
        id="wr360PlayerId"
        className="wr360_player"
        style={{ backgroundColor: '#FFFFFF' }}
      ></section>
    </div>
  );
};

export default App;
