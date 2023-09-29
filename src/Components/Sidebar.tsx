import React from 'react'
import {Avatar, Menu} from 'antd'
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import { HomeIcon } from './Icons/HomeIcon';
import { ProfileIcon } from './Icons/Profile';
import { CalendarIcon } from './Icons/Calendar';
import { FileeIcon } from './Icons/File';
import { BookIcon } from './Icons/Book';
import { BackArrowIcon } from './Icons/BackArrow';
import {useNavigate} from 'react-router-dom'
import { ShareIcon } from './Icons/Share';

export const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <section className='w-28 h-screen relative'>
        <Menu onClick={(item) => {navigate(item.key)}} className='fixed h-full w-28 p-6 flex flex-col gap-6 items-center'>
            <Menu.Item className='flex items-center justify-center w-full h-12'>
                <Avatar size={48} icon={<UserOutlined />} />
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="/">
                <HomeIcon stroke='#1D4ED8'/>
            </Menu.Item>
            
            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="1">
                <ProfileIcon/>
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="2">
                <CalendarIcon />
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="/share">
                <ShareIcon/>
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="/charts">
                <FileeIcon />
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="3">
                <BookIcon />
            </Menu.Item>

            <Menu.Item style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} key="4">
                <BackArrowIcon />
            </Menu.Item>

        </Menu>

        <Menu className='absolute w-full flex flex-col gap-6 text-center bottom-0'>
            <Menu.Item key="5">
                <SettingOutlined size={24}/>
            </Menu.Item>
            <Menu.Item key="6">
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </Menu.Item>
        </Menu>
    </section>
  )
}
