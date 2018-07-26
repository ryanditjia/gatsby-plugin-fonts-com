/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react'

exports.onRenderBody = ({ setHeadComponents }, { projectId }) => {
  const scriptInnerHTML = `var MTIProjectId = '${projectId}';
  (function () {
      var mtiTracking = document.createElement('script');
      mtiTracking.type = 'text/javascript';
      mtiTracking.async = 'true';
      mtiTracking.src = '/mtiFontTrackingCode.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mtiTracking);
  })();`

  return setHeadComponents([
    <script
      key="fonts-com"
      dangerouslySetInnerHTML={{ __html: scriptInnerHTML }}
    />,
  ])
}
