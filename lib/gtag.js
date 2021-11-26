export const GA_TRACKING_ID = 'G-NZ12J5Y365';

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}