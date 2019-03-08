/* eslint-disable import/no-unresolved */
import React from 'react'

exports.onRenderBody = (
  { setHeadComponents },
  { projectId, enableDuringDevelop = true },
) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'gatsby-plugin-fonts-com configured not to load in development server.',
    )
    return null
  }

  if (!projectId) {
    console.log(
      'You have not provided projectId, gatsby-plugin-fonts-com will not take effect.',
    )
    return null
  }

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
