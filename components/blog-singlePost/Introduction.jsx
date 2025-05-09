import React from 'react'

const Introduction = ({ title, date, time }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const months = [
      "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
      "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <section className='mt-[16px] w-[1240px] mx-auto'>
      <h1 className='text-[50px] font-bold' dangerouslySetInnerHTML={{ __html: title }} />

      <div className='mt-[4px] flex items-center gap-[32px] font-extralight text-[16px]'>
        <span>{formatDate(date)}</span>
        <div className='w-[30px] h-[1px] bg-[#D9D9D9]' />
        <span>Czas czytania:&nbsp;{time}&nbsp;min</span>
      </div>
    </section>
  )
}

export default Introduction