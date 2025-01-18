import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      const metrics = [getCLS, getFID, getFCP, getLCP, getTTFB];
      metrics.forEach((metric) => {
        metric(entry => {
          onPerfEntry(entry.name, entry.value);
        });
      });
    }
  }
  export default reportWebVitals;