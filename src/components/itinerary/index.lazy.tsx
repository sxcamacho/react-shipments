import React, { lazy, Suspense } from 'react';

const LazyItinerary = lazy(() => import('./index'));

const Itinerary = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyItinerary {...props} />
  </Suspense>
);

export default Itinerary;
