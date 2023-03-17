import React from 'react'

const Post = ({ image, content, user}) => {
  console.log(image)
  return (
    <div className='grid col-auto justify-evenly p-10 border-b rounded-xl border-teal-500'>
      {image && (
        <img className='rounded-xl'
          src={URL.createObjectURL(image)}
          alt="post-cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p className='p-5 text-yellow-500 text-lg capitalize font-semibold'>{content}</p>
      <div className=' text-teal-600 text-2xl capitalize font-semibold italic underline'>{user}</div>
    </div>
  )
}

export default Post