import React, { memo, Fragment } from 'react';
import { Dialog as BaseDialog } from '@headlessui/react';
import { Transition } from '@headlessui/react';

interface DialogProps {
  visible: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  text?: React.ReactNode;
  onClose?: () => void;
}

function Component({
  title,
  visible = false,
  onClose = () => {}
}: DialogProps) {
  return (
    <>
      <Transition appear show={visible} as={Fragment}>
        <BaseDialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <BaseDialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <BaseDialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </BaseDialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </BaseDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </BaseDialog>
      </Transition>
    </>
  );
}

export const Dialog = memo(Component);
