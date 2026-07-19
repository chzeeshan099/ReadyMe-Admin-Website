import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Title, Collapse } from 'rizzui';
import cn from '@/utils/class-names';
import { PiCaretDownBold } from 'react-icons/pi';
import { MenuItems,
  //  QuickMenuItems
   } from '@/layouts/hydrogen/menu-items';
import StatusBadge from '@/components/others/get-status-badge';
import { filterMenuItems } from '@/utils/MoneyMutt/func';

import { useSelector } from 'react-redux';
import { RootState } from '@/reducer/store';
import { User } from '@/reducer/auth/authSlice';
import { MenuItem } from '@/types';

export function SidebarMenu() {
  const pathname = usePathname();
  const user: User = useSelector((state: RootState) => state?.user?.user);
  const permissions = user?.roleId?.permissions;

  // let quickMenuItems = QuickMenuItems;
  let menuItems: MenuItem[] = MenuItems;

  // if (permissions) {
  //   menuItems = filterMenuItems(MenuItems, permissions)
  // }
  // else if (user?.accountType == 'owner') {
  //   menuItems = MenuItems
  // }

  return (
    <div className="pb-20 custom-scrollbar">

{/* <div className="w-full py-3">
  <div className="flex items-start justify-around gap-2 overflow-x-auto px-2">
    {quickMenuItems?.map((item, index) => {
      const isActive = pathname === item.href;

      return (
        <Link
          key={item.name + '-' + index}
          href={item.href || ''}
          className={cn(
            'group flex min-w-[72px] flex-col items-center justify-center rounded-md px-2 py-2 text-center transition-colors duration-200',
            isActive
              ? 'bg-pink-500 text-black'
              : 'text-black hover:bg-pink-300 hover:text-black'
          )}
        >
          {item.icon && (
            <span
              className={cn(
                'mb-1 inline-flex h-8 w-8 items-center justify-center rounded-md [&>svg]:h-[24px] [&>svg]:w-[24px]',
                isActive
                  ? 'text-black'
                  : 'text-black'
              )}
            >
              {item.icon}
            </span>
          )}

          <span className="text-xs font-medium leading-tight">
            {item.name}
          </span>
        </Link>
      );
    })}
  </div>
</div> */}



      <div className="3xl:mt-6">
        {menuItems.map((item, index) => {
          const isActive = pathname === (item?.href as string);
          const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
            (dropdownItem) => dropdownItem.href === pathname
          );
          const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

          return (
            <Fragment key={item.name + '-' + index}>
              {item?.href ? (
                <>
                  {item?.dropdownItems ? (
                    <Collapse
                      defaultOpen={isDropdownOpen}
                      header={({ open, toggle }) => (
                        <div
                          onClick={toggle}
                          className={cn(
                            'group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-3 font-medium lg:my-1 2xl:mx-5 2xl:my-2',
                            isDropdownOpen || isActive
                              ? 'before:top-2/5 text-black before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-blue-light 2xl:before:-start-5'
                              : 'text-black transition-colors duration-200 hover:bg-pink-300'
                          )}
                        >
                          <span className="flex items-center">
                            {item?.icon && (
                              <span
                                className={cn(
                                  'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                  isDropdownOpen
                                    ? 'text-black'
                                    : 'text-black'
                                )}
                              >
                                {item?.icon}
                              </span>
                            )}
                            {item.name}
                          </span>

                          <PiCaretDownBold
                            strokeWidth={3}
                            className={cn(
                              'h-3.5 w-3.5 -rotate-90 text-gray-400 transition-transform duration-200 rtl:rotate-90',
                              open && 'rotate-0 rtl:rotate-0'
                            )}
                          />
                        </div>
                      )}
                    >
                      {item?.dropdownItems?.map((dropdownItem, index) => {
                        const isChildActive =
                          pathname === (dropdownItem?.href as string);

                        return (
                          <Link
                            href={dropdownItem?.href || ''}
                            key={dropdownItem?.name + index}
                            className={cn(
                              'mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
                              'pl-10', // Added more left padding for nesting effect
                              isChildActive
                                ? 'bg-blue-light text-black'
                                : 'text-black transition-colors duration-200 hover:bg-pink-300 hover:text-gray-900'
                            )}
                          >
                            <div className="flex items-center truncate">
                              {dropdownItem?.icon && (
                                <span
                                  className={cn(
                                    'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[18px] [&>svg]:w-[18px]',
                                    isChildActive
                                      ? 'text-black'
                                      : 'text-black group-hover:text-gray-900'
                                  )}
                                >
                                  {dropdownItem?.icon}
                                </span>
                              )}
                              <span className="truncate">{dropdownItem?.name}</span>
                            </div>
                            {dropdownItem?.badge?.length ? (
                              <StatusBadge status={dropdownItem?.badge} />
                            ) : null}
                          </Link>
                        );
                      })}
                    </Collapse>
                  ) : (
                    <Link
                      href={item?.href}
                      className={cn(
                        'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-3 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                        isActive
                          ? 'before:top-2/5 bg-blue-light before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md 2xl:before:-start-5'
                          : 'text-black transition-colors duration-200 hover:bg-blue-lighter'
                      )}
                    >
                      <div className="flex items-center truncate">
                        {item?.icon && (
                          <span
                            className={cn(
                              'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                              isActive
                                ? ''
                                : ''
                            )}
                          >
                            {item?.icon}
                          </span>
                        )}
                        <span className="truncate">{item.name}</span>
                      </div>
                    </Link>
                  )}
                </>
              ) : (
                <Title
                  as="h6"
                  className={cn(
                    'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8',
                    index !== 0 && 'mt-6 3xl:mt-7'
                  )}
                >
                  {item.name}
                </Title>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
