'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify'

const TableContents = ({ content }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [headings, setHeadings] = useState([]);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!content) return
        const temp = []
        const regex = /<(h[23])>(.*?)<\/h[23]>/gi
        let match
        let currentH2 = null
        let h2Count = 0
        let h3Count = 0

        while ((match = regex.exec(content)) !== null) {
            const tag = match[1]
            const text = match[2]
            let id = ''

            if (tag === 'h2') {
                id = `blog-anchor-h2-${h2Count++}`
                currentH2 = { title: text, id, subheadings: [] }
                temp.push(currentH2)
            } else if (tag === 'h3' && currentH2) {
                id = `blog-anchor-h3-${h3Count++}`
                currentH2.subheadings.push({ title: text, id })
            }
        }

        setHeadings(temp)
    }, [content])

    useEffect(() => {
        if (typeof window === 'undefined') return
        const container = document.querySelector('.blog-content')
        if (!container) return
        Array.from(container.querySelectorAll('h2')).forEach(el2 => {
            const match = headings.find(h => h.title === el2.textContent)
            if (match) el2.id = match.id
        })
        Array.from(container.querySelectorAll('h3')).forEach(el3 => {
            headings.forEach(h2 => {
                const sub = h2.subheadings.find(s => s.title === el3.textContent)
                if (sub) el3.id = sub.id
            })
        })
    }, [headings])

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen, headings]);

    const scrollToSectionBlog = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 140;
            const y = el.getBoundingClientRect().y + window.pageYOffset - offset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };

    return (
        <section className='mt-[96px] w-[800px] mx-auto rounded-[5px] border-[0.5px] border-[#ABABAB80] px-[28px] py-[12px]'>
            <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <p className='font-extralight text-[20px] text-[#E2B350]'>Spis treści</p>
                <Icon icon="icon-park-outline:down" width="24" height="24" className={`text-[#E2B350] duration-700 ${isOpen ? '' : 'rotate-180'}`} />
            </div>
            <ol ref={contentRef} className={`list-decimal pl-[35px] space-y-[4px] text-[16px] font-extralight overflow-hidden duration-700 ${isOpen ? 'mt-[12px]' : 'mt-0'}`} style={{ maxHeight: `${height}px` }}>
                {headings.map((heading, index) => (
                    <li key={index}>
                        <button onClick={() => scrollToSectionBlog(heading.id)} className='duration-500 hover:text-[#E2B350]'>
                            {heading.title}
                        </button>

                        {heading.subheadings &&
                            <ul className='list-disc pl-[25px] mt-[4px] space-y-[4px] marker:text-[#E2B350]'>
                                {heading.subheadings.map((element, index) => (
                                    <li key={index}>
                                        <button onClick={() => scrollToSectionBlog(element.id)} className="duration-500 hover:text-[#E2B350]">
                                            {element.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        }

                    </li>
                ))}
            </ol>
        </section>
    )
}

export default TableContents