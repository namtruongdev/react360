import { useCallback } from 'react';

import { initializeAPIDemo } from './assets/projects/project-3/general/action.js';
import license from './assets/projects/project-3/general/license.lic';
import './assets/projects/project-1/overall/assets/css/round.css';

import Menu from './components/Menu';
// import Floor4 from './assets/projects/project-1/overall/components/Floor4';
// import Floor7 from './assets/projects/project-1/overall/components/Floor7';

const App = () => {
  const viewer = window.WR360.ImageRotator.Create('wr360PlayerId');
  viewer.licenseFileURL = license;
  viewer.settings.configFileURL =
    '/assets/projects/project-3/general/config.xml';
  viewer.settings.graphicsPath =
    '/assets/projects/project-1/overall/assets/img/round';
  viewer.settings.alt = '360 degree view ALT description';
  viewer.settings.googleEventTracking = false;
  viewer.settings.apiReadyCallback = useCallback((api, isFullScreen) => {
    if (!isFullScreen) {
      initializeAPIDemo(api);
    }
    for (let i = 1; i <= 36; i++) {
      let general = `000${i}.jpg`;
      // let floor0 = `000${i}.jpg`;
      // let floor1 = `000${i}.jpg`;
      // let floor2 = `000${i}.jpg`;
      // let floor3 = `000${i}.jpg`;
      // let floor4 = `000${i}.jpg`;
      // let floor5 = `000${i}.jpg`;
      // let floor6 = `000${i}.jpg`;
      // let floor7 = `000${i}.jpg`;
      // let floor8 = `000${i}.jpg`;
      // let snow = `000${i}.jpg`;
      if (i >= 10) general = `00${i}.jpg`;
      // if (i >= 10) floor0 = `00${i}.jpg`;
      // if (i >= 10) floor1 = `00${i}.jpg`;
      // if (i >= 10) floor2 = `00${i}.jpg`;
      // if (i >= 10) floor3 = `00${i}.jpg`;
      // if (i >= 10) floor4 = `00${i}.jpg`;
      // if (i >= 10) floor5 = `00${i}.jpg`;
      // if (i >= 10) floor6 = `00${i}.jpg`;
      // if (i >= 10) floor7 = `00${i}.jpg`;
      // if (i >= 10) floor8 = `00${i}.jpg`;
      // if (i >= 10) snow = `00${i}.jpg`;

      window
        .$('<img>')
        .attr({
          src: `/assets/projects/project-3/general/images/${general}`,
        })
        .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor0/360_assets/images/${floor0}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor1/360_assets/images/${floor1}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor2/360_assets/images/${floor2}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor3/360_assets/images/${floor3}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor4/360_assets/images/${floor4}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor5/360_assets/images/${floor5}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor6/360_assets/images/${floor6}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor7/360_assets/images/${floor7}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Floor8/360_assets/images/${floor8}`,
      //   })
      //   .appendTo('.preload');
      // window
      //   .$('<img>')
      //   .attr({
      //     src: `/assets/projects/project-3/floor/Snow/360_assets/images/${snow}`,
      //   })
      //   .appendTo('.preload');
    }
    return false;
  }, []);

  viewer.runImageRotator();

  const onHandleClick = (name) => {
    console.log(name);
  };

  return (
    <>
      <Menu className="menu" onHandleClick={onHandleClick} />
      <section
        id="wr360PlayerId"
        className="wr360_player"
        style={{ backgroundColor: '#FFFFFF' }}
      ></section>
      {/* <Floor7 />
      <Floor4 /> */}
      <div className="preload" style={{ display: 'block' }}></div>
    </>
  );
};

export default App;
