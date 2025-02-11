import { react, useRef } from 'react'

import Lottie from 'lottie-react'
import aniamtion from '../../../assets/check_1.json'
export default function Iconcina() {
  const anima = useRef()
  return (
    <>
      <div className='max-w-10' onMouseEnter={() => anima.current.play()}>
        <Lottie
          lottieRef={anima}
          animationData={aniamtion}
          loop={false}
          autoplay={false}
        />
      </div>
    </>
  )
}
