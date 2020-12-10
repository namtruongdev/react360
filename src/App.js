import { useEffect } from 'react';
import './App.css';

import './assets/js/imagerotator.js';
import config from './assets/projects/projects-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml';

const App = () => {
  useEffect(() => {
    window.$('#wr360PlayerId').rotator({
      licenseFileURL: 'license.lic',
      configFileURL: config,
      rootPath: 'http://localhost:3000/src/',
      graphicsPath: 'imagerotator/html/img/round',
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
