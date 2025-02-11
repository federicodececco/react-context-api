import { useSubmitProvider } from '../../contexts/SubmitContext'
export default function SubmitBanner() {
  const { trigger, setTrigger } = useSubmitProvider()
  if (!trigger) return
  else
    return (
      <>
        <div className='fixed bottom-10 mx-auto max-w-5xl translate-x-50 rounded-lg bg-blue-600/75 py-4'>
          <div className='container mx-auto px-62 text-lg text-white'>
            <h1>Staff member added with success!</h1>
          </div>
        </div>
      </>
    )
}
