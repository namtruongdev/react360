import FeatherIcon from 'feather-icons-react';
import { initializeAPIDemo } from './assets/projects/project-3/general/action.js';
import license from './assets/projects/project-3/general/license.lic';
import './assets/projects/project-1/overall/assets/css/round.css';
import styled from 'styled-components';

import Menu from './components/Menu';
// import Floor4 from './assets/projects/project-1/overall/components/Floor4';
// import Floor7 from './assets/projects/project-1/overall/components/Floor7';

const Popup = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  background: #fff;
  z-index: 999999999999;
  border-radius: 5px;
  padding: 28px 20px 20px 20px;
  width: 280px;
  transform: translate(-50%, 0);
  top: -27px;
  left: 175px;
  &:hover .position_rollover {
    display: none !important;
    visibility: hidden !important;
  }
  .icon-close {
    position: absolute;
    top: 8px;
    right: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999999999999;
  }

  &:hover {
    // background: #333
  }
`;

const Button = styled.button`
  border: none;
  background: rgb(5, 167, 173);
  color: #fff;
  padding: 8px 20px;
  border-radius: 5;
  cursor: pointer;
  margin: auto;
`;

const App = () => {
  const viewer = window.WR360.ImageRotator.Create('wr360PlayerId');

  viewer.licenseFileURL = license;
  viewer.settings.configFileURL =
    '/assets/projects/project-3/general/config.xml';
  viewer.settings.graphicsPath =
    '/assets/projects/project-1/overall/assets/img/round';
  viewer.settings.alt = '360 degree view ALT description';
  viewer.settings.googleEventTracking = false;
  viewer.settings.apiReadyCallback = (api, isFullScreen) => {
    if (!isFullScreen) {
      initializeAPIDemo(api);
    }
    // for (let i = 1; i <= 36; i++) {
    //   let general = `000${i}.jpg`;
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
    // if (i >= 10) general = `00${i}.jpg`;
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

    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/general/images/${general}`,
    //   })
    //   .appendTo('.preload');
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
    // }

    return false;
  };

  viewer.runImageRotator();

  const onHandleClick = (name) => {
    // console.log(name);
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
      <div
        id="overlay"
        style={{
          background: 'transparent',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: '9999',
          display: 'none',
        }}
      ></div>
      <Popup id="popup">
        <FeatherIcon icon="x" size="16" fill="white" color="grey" className="icon-close" />
        <Button id="virtual_360">3D preview</Button>
        <Button id="image_360">image 360</Button>
      </Popup>
    </>
  );
};

export default App;
