import { useEffect } from 'react';

import './assets/js/imagerotator.js';
import config from './assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml';
import license from './assets/projects/project-1/overall/published/license.lic';
import './assets/projects/project-1/overall/published/imagerotator/html/css/round.css';

const App = () => {
  useEffect(() => {
    window.$('#wr360PlayerId').rotator({
      licenseFileURL: license,
      configFileURL: config,
      graphicsPath:
        '/assets/projects/project-1/overall/published/imagerotator/html/img/round',
      alt: '360 degree view ALT description',
      googleEventTracking: false,
    });
  }, []);
  return (
    <section
      id="wr360PlayerId"
      className="wr360_player"
      style={{ backgroundColor: '#FFFFFF' }}
    ></section>
  );
};

export default App;
