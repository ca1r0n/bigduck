import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment, ReactNode } from 'react';

export interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    children?: JSX.Element | ReactNode;
    className?: string;
}

export const Modal = (props: ModalProps) => {
    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={props.onClose}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel
                                className={classNames(
                                    'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
                                    props.className,
                                )}
                            >
                                {props.children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
