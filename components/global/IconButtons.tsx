import React from 'react';
// import HeartIcon from '@/public/icons/heart.svg';
import ShopIcon from '@/public/icons/shop.svg';
import ProfileIcon from '@/public/icons/user.svg';
import { IconButton } from './IconButton';
import { signOutAction } from '@/app/lib/actions';
import { Power } from 'lucide-react';

export const ActionButtons = () => (
  <div className='hidden md:flex justify-end w-1/4 gap-x-4 px-4 items-center'>
    <form action={signOutAction}>
      <button className='flex grow items-center justify-center gap-2 rounded-md text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'>
        <Power className='w-3' />
        <div className='hidden text-xs md:block'>Sign Out</div>
      </button>
    </form>
    <IconButton
      icon={ProfileIcon}
      alt='calendar icon'
      title='Book Appointment'
      ariaLabel='Book Appointment'
      className='size-[1.2rem]'
    />
    <IconButton
      icon={ShopIcon}
      alt='shop icon'
      title='Shopping Cart'
      className='size-[0.9rem]'
      ariaLabel='View Shopping Cart'
    />
  </div>
);
