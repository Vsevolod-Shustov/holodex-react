import { atom } from 'jotai';

import VideoGrid from './VideoGrid';
import { Suspense } from 'react';

export const queryOrg = atom<string>("Hololive")

function Home() {

  return (
    <>
      <Suspense fallback={<div className='text-center'>Loading...</div>}>
        <VideoGrid></VideoGrid>
      </Suspense>
    </>
  )
}

export default Home