import { useEffect } from 'react';

import './assets/js/imagerotator.js';
import { initializeAPIDemo } from './assets/projects/project-1/overall/action';
import license from './assets/projects/project-1/overall/published/license.lic';
import './assets/projects/project-1/overall/published/imagerotator/html/css/round.css';

import Menu from './component/menu';
import SwitchBtn from './component/SwitchBtn';

const App = () => {
  useEffect(() => {
    window.$('#wr360PlayerId').rotator({
      licenseFileURL: license,
      configFileURL:
        '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml',
      graphicsPath:
        '/assets/projects/project-1/overall/published/imagerotator/html/img/round',
      alt: '360 degree view ALT description',
      googleEventTracking: false,
      apiReadyCallback: (api, isFullScreen) => {
        if (!isFullScreen) {
          initializeAPIDemo(api);
        }
      },
    });
    for (let i = 1; i <= 36; i++) {
      let fileName = `Filename_0${i}.jpg`;
      if (i >= 10) fileName = `Filename_${i}.jpg`;
      window
        .$('<img>')
        .attr({
          src: `/assets/projects/project-2/overall/IntegrationTemplates/360_assets/VansShoe/images/${fileName}`,
        })
        .appendTo('.hidden');
    }
  }, []);

  const onHandleClick = (name) => {
    console.log(name);
  };

  return (
    <>
      <SwitchBtn />
      <Menu onHandleClick={onHandleClick} />
      <section
        id="wr360PlayerId"
        className="wr360_player"
        style={{ backgroundColor: '#FFFFFF' }}
      ></section>
      <div className="hidden" style={{ display: 'block' }}></div>
    </>
  );
};

export default App;
