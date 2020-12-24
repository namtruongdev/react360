import { useCallback } from 'react';

import { initializeAPIDemo } from './assets/projects/project-1/overall/action';
import license from './assets/projects/project-1/overall/published/license.lic';
import './assets/projects/project-1/overall/published/imagerotator/html/css/round.css';

import Menu from './component/Menu';
import SwitchBtn from './component/SwitchBtn';
import Floor4 from './assets/projects/project-1/overall/components/Floor4';
import Floor7 from './assets/projects/project-1/overall/components/Floor7';

const App = () => {
  const viewer = window.WR360.ImageRotator.Create('wr360PlayerId');
  viewer.licenseFileURL = license;
  viewer.settings.configFileURL =
    '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml';
  viewer.settings.graphicsPath =
    '/assets/projects/project-1/overall/published/imagerotator/html/img/round';
  viewer.settings.alt = '360 degree view ALT description';
  viewer.settings.googleEventTracking = false;
  viewer.settings.apiReadyCallback = useCallback((api, isFullScreen) => {
    if (!isFullScreen) {
      initializeAPIDemo(api);
    }
    for (let i = 1; i <= 36; i++) {
      let fileName = `Filename_0${i}.jpg`;
      if (i >= 10) fileName = `Filename_${i}.jpg`;
      window
        .$('<img>')
        .attr({
          src: `/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/images/0001-hover.jpg`,
        })
        .appendTo('.preload');
      window
        .$('<img>')
        .attr({
          src: `/assets/projects/project-2/overall/IntegrationTemplates/360_assets/VansShoe/images/${fileName}`,
        })
        .appendTo('.preload');
    }
    return false;
  }, []);

  viewer.runImageRotator();

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
      <Floor7 />
      <Floor4 />
      <div className="preload" style={{ display: 'block' }}></div>
    </>
  );
};

export default App;
