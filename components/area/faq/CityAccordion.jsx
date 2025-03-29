'use client'

import Icon from '@components/faq/Icon'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import React, { useState } from 'react'

const CityAccordion = ({ data }) => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='space-y-[32px]'>
            {
                data?.elements.map((element, index) => (
                    <Accordion open={open === element.id} icon={<Icon id={element.id} open={open} />} key={index}>
                        <AccordionHeader onClick={() => handleOpen(element.id)} className="text-[16px] tracking-[2.5px] font-light border-solid border-b-[1px] border-[#D9D9D9] pb-[12px] sm:text-[14px]">{element.question}</AccordionHeader>
                        <AccordionBody className="text-[16px] font-light mt-[15px] sm:text-[14px]" dangerouslySetInnerHTML={{ __html: element.answer }}></AccordionBody>
                    </Accordion>
                ))
            }
        </div>
    )
}

export default CityAccordion