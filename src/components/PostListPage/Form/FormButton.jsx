import { useSubmitProvider } from '../../../contexts/SubmitContext'
import Iconcina from './Iconcina'
export default function FormButton(formSubmit) {
  const { trigger, setTrigger } = useSubmitProvider()
  return (
    <button
      onClick={() => {
        setTrigger(true)
      }}
      type='submit'
      className='mx-auto px-4 text-slate-900'
    >
      <Iconcina />
    </button>
  )
}
