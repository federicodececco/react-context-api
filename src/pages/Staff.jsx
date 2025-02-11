import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Staff() {
  const [staff, setStaff] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setStaff(res.data)
        console.log(staff)
      })
      .catch(err => {
        console.error('errore brutto')
      })
  }, [id, navigate])
  return (
    <>
      <div className='container mx-auto max-w-4xl px-4 py-12'>
        <a
          href='/post-list'
          className='mb-8 inline-block text-blue-600 hover:text-blue-700'
        >
          <i className='fa-solid fa-arrow-left'></i> Back to our Team
        </a>

        <div className='overflow-hidden rounded-xl bg-white shadow-md'>
          <div className='bg-blue-600 p-8'>
            <div className='flex flex-col items-center gap-6 md:flex-row'>
              <img
                src={staff.img}
                className='h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg'
              />
              <div className='text-center md:text-left'>
                <h1 className='mb-2 text-3xl font-bold text-white'>
                  {staff.author}
                </h1>
                <p className='text-xl text-blue-100'>{staff.role}</p>
                <p className='mt-2 text-blue-200'>{staff.author}</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 p-8 md:grid-cols-2'>
            <div className='space-y-6'>
              <div>
                <h2 className='mb-4 text-xl font-semibold text-gray-800'>
                  Contact Information
                </h2>
                <div className='space-y-3'>
                  <div className='flex items-center text-gray-600'>
                    <span>{staff.content}</span>
                  </div>
                  <div className='flex items-center text-gray-600'>
                    <span>Based in {staff.name}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='mb-4 text-xl font-semibold text-gray-800'>
                  Skills & Expertise
                </h2>
                <div className='flex flex-wrap gap-2'></div>
              </div>
            </div>

            <div className='space-y-6'>
              <div>
                <h2 className='mb-4 text-xl font-semibold text-gray-800'>
                  Bio
                </h2>
                <p className='leading-relaxed text-gray-600'>{staff.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-around'>
          {id > 1 && (
            <button
              className='my-4 inline-block cursor-pointer text-blue-600 hover:text-blue-700'
              onClick={() => {
                navigate(`/post-list/${Number(id) - 1}`)
              }}
            >
              <i className='fa-solid fa-arrow-left'></i> Previous
            </button>
          )}

          <button
            onClick={() => {
              navigate(`/post-list/${Number(id) + 1}`)
            }}
            className='my-4 inline-block cursor-pointer text-blue-600 hover:text-blue-700'
          >
            Next <i className='fa-solid fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </>
  )
}
