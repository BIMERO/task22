import React from 'react'
import { Col, Row } from 'antd'
import { DropdownIcon } from '../Icons/Dropdown'
import { Dropdown } from './Dropdown'

export const HomeHeader = () => {
  return (
    <section>
       <Row>
            <Col span={8}>
                <h1 className='text-xl text-brand_primary-200 font-semibold mb-2'>London Internship Program</h1>
                <p className='text-xs'>London</p>
            </Col>
            <Col span={16}>
                <nav>
                    <Dropdown/>
                    <ul className='flex items-center gap-2'>
                        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/tag.svg"/></button> </li>
                        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/user-x.svg"/></button> </li>
                        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/user-tick.svg"/></button> </li>
                        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/user-ring.svg"/></button> </li>
                        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/mail.svg"/></button> </li>
                        <li className='flex items-center text-brand_neutral-50 bg-brand_primary-200 font-medium drop-shadow-brand_100 rounded-lg'>
                            <button className="py-2 px-4 border-r border-brand_neutral-50">
                                Move To Video Interview I 
                            </button>
                            <DropdownIcon stroke='#FFFFFF'/>
                        </li>
                        
                    </ul>
                </nav>
            </Col>
        </Row>
    </section>
  )
}
