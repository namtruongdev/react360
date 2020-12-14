export const initializeAPIDemo = (api) => {
  api.hotspots.onAction(({ hotspotInfo }) => {
    switch (hotspotInfo.clickDataParam) {
      case 3:
        window.location.assign(hotspotInfo.url);
        break;

      default:
        alert('haha');
        break;
    }
  });

  let config = {
    status: false,
    path:
      '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml',
  };

  window.$('#switchBtn').click((e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path =
        '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-2/overall/IntegrationTemplates/360_assets/VansShoe/VansShoe.xml';
    }

    api.reload(config.path, null, null, api.images.getCurrentImageIndex());
  });
};
