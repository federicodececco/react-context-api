import { useSubmitProvider } from '../../contexts/SubmitContext'

export default function SubmitBanner() {
  const { trigger, setTrigger } = useSubmitProvider()
  console.log(trigger)

  if (!trigger) {
    return
  } else
    setTimeout(() => {
      setTrigger(false)
    }, 3000)
  return (
    <>
      <div className='animate-fadeOut hover:animate-fadeOut fixed bottom-10 mx-auto max-w-5xl translate-x-50 rounded-lg bg-blue-600/75 py-4'>
        <div className='container mx-auto px-62 text-lg text-white'>
          <h1>Staff member added with success!</h1>
        </div>
      </div>
    </>
  )
}
