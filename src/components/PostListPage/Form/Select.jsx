export default function Select({ formField }) {
  return (
    <>
      <select
        name='role'
        onChange={event => {
          formField('role', event.target.value)
        }}
      >
        <option value='FrontEnd'>FrontEnd</option>
        <option value='BackEnd'>BackEnd</option>
        <option value='UI/UX'>UI/UX</option>
      </select>
    </>
  )
}
