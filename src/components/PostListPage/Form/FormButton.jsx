import { useSubmitProvider } from '../../../contexts/SubmitContext'
export default function FormButton(formSubmit) {
  const { trigger, setTrigger } = useSubmitProvider()
  return (
    <button
      onClick={() => {
        setTrigger(true)
      }}
      type='submit'
      className='mx-1 border-1 px-4 text-slate-900 hover:border-2'
    >
      Aggiungi
    </button>
  )
}
