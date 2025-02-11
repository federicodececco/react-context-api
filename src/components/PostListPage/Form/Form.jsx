import { useSubmitProvider } from '../../../contexts/SubmitContext'
import Select from './Select'
import FormButton from './FormButton'
export default function Form({ user, formField, formSubmit }) {
  const { trigger, setTrigger } = useSubmitProvider()
  return (
    <>
      <div className='overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
        <img src='/img/PlaceHolder.svg' className='h-64 w-full object-cover' />
        <div className='p-6'>
          <h3 className='mb-2 inline text-xl font-bold text-gray-800'>cippo</h3>{' '}
          <p className='mb-3 font-medium text-blue-600'>{user.role}</p>
          <div className='mb-2 flex items-center text-gray-600'>
            <span>{user.content}</span>
          </div>
          <div className='flex items-center text-gray-600'>
            <span>{user.name}</span>
          </div>
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <input
          className='my-4 border px-1 text-emerald-800'
          name='name'
          type='text'
          value={user.name}
          onChange={event => {
            formField('name', event.target.value)
          }}
        />
        <input
          className='my-4 border px-1 text-emerald-800'
          name='author'
          type='text'
          value={user.author}
          onChange={event => {
            formField('author', event.target.value)
          }}
        />
        <input
          className='my-4 border px-1 text-emerald-800'
          name='content'
          type='text'
          value={user.content}
          onChange={event => {
            formField('content', event.target.value)
          }}
        />
        <input
          name='visible'
          type='checkbox'
          checked={true}
          onChange={event => {
            formField('visible', event.target.checked)
          }}
        />
        <Select formField={formField}></Select>
        <FormButton formSubmit={formSubmit}></FormButton>
      </form>
    </>
  )
}
