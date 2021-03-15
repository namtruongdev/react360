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
  background: transparent;
  z-index: 999999999999;
  border-radius: 5px;
  padding: 28px 20px 20px 20px;
  width: 280px;
  transform: translate(-50%, 0);
  top: -27px;
  left: 175px;

  .icon-close {
    position: absolute;
    top: 8px;
    right: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999999999999;
  }
  .icon-close1 {
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999999999999;
  }
`;

const Preview = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999999;
  background-color: rgb(0 0 0 / 75%);
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.7s;
  img {
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
  } 

  iframe {
    width: 90%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    border: none;
  }

  @-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)}
    to {-webkit-transform:scale(1)}
  }

  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }

  .close-preview {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;


const Div = styled.div`
  border:none;
  background: white;
  color: black;
  border-radius: 5px;
  padding: 2.9%;
  cursor: pointer;
  margin: auto;
  display: flex;
  .text{
  font-weight: 600;
  display: flex;
  align-items:center;
  padding-left:5px;
  }
`;
const Div1 = styled.div`
  border:none;
  background: #ea4c89;
  color: #fff;
  padding: 3%;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
  display: flex;
  .text{
  font-weight: 600;
  padding-left:5px;
  display: flex;
  align-items:center;
  }
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
        <Div id="virtual_360" >
          <FeatherIcon icon="codepen" size="28" fill="white" color="black" className="icon-close1" />
          <small className="text">360 Preview</small>
        </Div>
        <Div1 id="image_360">
          <FeatherIcon icon="image" size="28" fill="white" color="#ea4c89" className="icon-close1" />
          <small className="text">3D Image</small>
        </Div1>
      </Popup>
      <Preview className="preview_360">
        <FeatherIcon icon="x" size="45" fill="black" color="white" className="close-preview" />
      </Preview>
    </>
  );
};

export default App;
