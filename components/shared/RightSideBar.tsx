import React from 'react'

export default function RightSideBar() {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className="flex flex-col flex-1 justify-start">
        <h3 className='text-light-1 ubuntu-medium'>Suggested Communities</h3>
      </div>
      <div className="flex flex-col flex-1 justify-start">
        <h3 className='text-light-1 ubuntu-medium'>Suggested Users</h3>
      </div>
    </section>
  )
}
