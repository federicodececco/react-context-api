import { useSubmitProvider } from '../../../contexts/SubmitContext'
import Select from './Select'
import FormButton from './FormButton'
export default function Form({ user, formField, formSubmit }) {
  const { trigger, setTrigger } = useSubmitProvider()
  return (
    <>
      <form onSubmit={formSubmit}>
        {/*  */}
        <div className='overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
          <img
            src='/img/PlaceHolder.svg'
            className='h-64 w-full object-cover'
          />
          <div className='p-6'>
            <h3 className='mb-2 inline text-xl font-bold text-gray-800'>
              <input
                className='my-4 border px-1 text-black'
                name='author'
                type='text'
                placeholder='Jane Doe'
                value={user.author}
                onChange={event => {
                  formField('author', event.target.value)
                }}
              />
            </h3>{' '}
            <p className='mb-3 font-medium text-blue-600'>
              <Select formField={formField}></Select>
            </p>
            <div className='mb-2 flex items-center text-gray-600'>
              <span>
                {' '}
                <input
                  className='my-4 border px-1 text-black'
                  name='content'
                  type='text'
                  value={user.content}
                  onChange={event => {
                    formField('content', event.target.value)
                  }}
                />
              </span>
            </div>
            <div className='flex items-center text-gray-600'>
              <span>
                <input
                  className='border text-black'
                  name='name'
                  type='text'
                  value={user.name}
                  onChange={event => {
                    formField('name', event.target.value)
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
              </span>
              <span className='px-2'>visible</span>
            </div>
            <div className='flex'>
              <FormButton formSubmit={formSubmit}></FormButton>
            </div>
          </div>
        </div>
        {/*  */}
      </form>
    </>
  )
}
