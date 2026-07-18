import React, { useState, useEffect } from 'react';
import 'rc-pagination/assets/index.css';
import RcPagination, {
  PaginationProps as RcPaginationProps,
} from 'rc-pagination';
import { cn } from 'rizzui';
import { IoArrowBackOutline } from 'react-icons/io5';
import { IoMdArrowForward } from 'react-icons/io';
import { Text } from 'rizzui';

const paginationStyles = {
  base: {
    item: '[&>.rc-pagination-item>a]:!no-underline [&>.rc-pagination-item>a]:font-medium text-gray-950 [&>li.rc-pagination-item]:border-muted bg-transparent',
    icon: '[&>.rc-pagination-prev]:align-baseline [&>.rc-pagination-next]:align-baseline',
    outline:
      '[&>.rc-pagination-item]:leading-7 [&>.rc-pagination-item]:border-0 ',
    jumperDiv:
      '[&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-gray-500',
    jumperInput:
      '[&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!py-[3px] [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:border-muted [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:ring-0',
    fullWidth: 'w-full flex justify-between items-center',
    centerPages: 'flex justify-center items-center space-x-1',
    leftIcons: 'flex items-center',
    rightIcons: 'flex items-center',
  },

  rounded: {
    none: '[&>.rc-pagination-item]:rounded-none [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-none',
    sm: '[&>.rc-pagination-item]:rounded-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-sm',
    md: '[&>.rc-pagination-item]:rounded-md [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-md',
    lg: '[&>.rc-pagination-item]:rounded-lg [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-lg',
    full: '[&>.rc-pagination-item]:rounded-full [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-full',
  },
  variant: {
    solid: {
      base: '',
      color: {
        primary:
          '[&>.rc-pagination-item-active]:bg-primary [&>.rc-pagination-item-active>a]:!text-primary-foreground [&>li.rc-pagination-item-active]:border-primary [&>.rc-pagination-item-active]:hover:border-primary [&>.rc-pagination-item-active]:focus:border-primary',
        secondary:
          '[&>.rc-pagination-item-active]:bg-secondary [&>.rc-pagination-item-active>a]:!text-secondary-foreground [&>li.rc-pagination-item-active]:border-secondary [&>.rc-pagination-item-active]:hover:border-secondary [&>.rc-pagination-item-active]:focus:border-secondary',
        danger:
          '[&>.rc-pagination-item-active]:bg-red [&>.rc-pagination-item-active>a]:!text-white [&>li.rc-pagination-item-active]:border-red [&>.rc-pagination-item-active]:hover:border-red [&>.rc-pagination-item-active]:focus:border-red',
      },
    },
    flat: {
      base: '',
      color: {
        primary:
          '[&>.rc-pagination-item-active]:bg-primary-lighter [&>li.rc-pagination-item-active]:border-primary-lighter [&>.rc-pagination-item-active>a]:text-primary-dark [&>.rc-pagination-item-active>a]:hover:text-primary-dark [&>.rc-pagination-item-active>a]:focus:text-primary-dark [&>.rc-pagination-item-active]:hover:border-primary-lighter [&>.rc-pagination-item-active]:focus:border-primary-lighter',
        secondary:
          '[&>.rc-pagination-item-active]:bg-secondary-lighter [&>li.rc-pagination-item-active]:border-secondary-lighter [&>.rc-pagination-item-active>a]:text-secondary-dark [&>.rc-pagination-item-active>a]:hover:text-secondary-dark [&>.rc-pagination-item-active>a]:focus:text-secondary-dark [&>.rc-pagination-item-active]:hover:border-secondary-lighter [&>.rc-pagination-item-active]:focus:border-secondary-lighter',
        danger:
          '[&>.rc-pagination-item-active]:bg-red-lighter [&>li.rc-pagination-item-active]:border-red-lighter [&>.rc-pagination-item-active>a]:text-red-dark [&>.rc-pagination-item-active>a]:hover:text-red-dark [&>.rc-pagination-item-active>a]:focus:text-red-dark [&>.rc-pagination-item-active]:hover:border-red-lighter [&>.rc-pagination-item-active]:focus:border-red-lighter',
      },
    },
  },
};

const iconStyles = {
  base: 'text-foreground',
  outline: 'border border-muted p-[5px]',
  center: 'inline-block align-middle',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
};

type IconProps = {
  icon: React.ReactNode;
  rounded: keyof typeof iconStyles.rounded;
  outline: boolean;
  className: string;
};

const PrevIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconStyles.base,
      outline ? iconStyles.outline : iconStyles.center,
      iconStyles.rounded[rounded],
      'ml-6 rounded-md bg-white p-2'
    )}
  >
    {icon || <IoArrowBackOutline className="h-4 w-4" />}
  </div>
);

const NextIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconStyles.base,
      outline ? iconStyles.outline : iconStyles.center,
      iconStyles.rounded[rounded],
      'mr-6 rounded-md bg-white p-2'
    )}
  >
    {icon || <IoMdArrowForward className="h-4 w-4" />}
  </div>
);

const JumpPrevIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconStyles.base,
      outline ? iconStyles.outline : iconStyles.center,
      iconStyles.rounded[rounded],
      !icon && outline && 'py-0 leading-[26px]',
      className
    )}
  >
    {icon || '•••'}
  </div>
);

const JumpNextIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconStyles.base,
      outline ? iconStyles.outline : iconStyles.center,
      iconStyles.rounded[rounded],
      !icon && outline && 'py-0 leading-[26px]',
      className
    )}
  >
    {icon || '•••'}
  </div>
);

export const localeDefault = {
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size',
};

export interface PaginationProps<T = any> extends RcPaginationProps {
  outline?: boolean;
  rounded?: keyof typeof paginationStyles.rounded;
  variant?: keyof typeof paginationStyles.variant;
  color?: keyof typeof paginationStyles.variant.flat.color;
  prevIconClassName?: string;
  nextIconClassName?: string;
  jumpPrevIconClassName?: string;
  jumpNextIconClassName?: string;

  data?: T[];
  limit?: number;
  renderContent?: (slicedData: T[]) => React.ReactNode;
  paginationProps?: {
    showItemsPerPage?: boolean;
    showInfo?: boolean;
    simplify?: boolean;
    infoFormatter?: (currentPage: number, totalPages: number) => string;
  };
}

export default function Pagination<T>({
  outline = false,
  rounded = 'md',
  variant = 'solid',
  color = 'primary',
  locale,
  nextIcon,
  prevIcon,
  prevIconClassName,
  nextIconClassName,
  jumpPrevIcon,
  jumpNextIcon,
  jumpPrevIconClassName,
  jumpNextIconClassName,
  className,
  onChange,
  current: controlledCurrentPage,
  paginationProps,
  data = [],
  limit = 10,
  renderContent,
  ...props
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(controlledCurrentPage || 1);

  useEffect(() => {
    if (controlledCurrentPage) {
      setCurrentPage(controlledCurrentPage);
    }
  }, [controlledCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onChange?.(page, limit);
  };

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = data.slice(startIndex, endIndex);

  const totalItems = data.length || props.total || 0;
  const totalPages = Math.ceil(totalItems / limit);

  const showSimplifiedPagination = paginationProps?.simplify;

  return (
    <>
      {renderContent && renderContent(slicedData)}

      <div
        className={cn('flex w-full items-center justify-between', className)}
      >
        {showSimplifiedPagination ? (
          <>
            <div className="flex items-center">
              <RcPagination
                locale={locale || localeDefault}
                prevIcon={
                  <PrevIcon
                    icon={prevIcon as React.ReactNode}
                    rounded={rounded}
                    outline={outline}
                    className={prevIconClassName as string}
                  />
                }
                onChange={handlePageChange}
                current={currentPage}
                pageSize={limit}
                total={totalItems}
                className={cn(
                  paginationStyles.base.item,
                  !outline && paginationStyles.base.outline,
                  !outline && paginationStyles.base.icon,
                  paginationStyles.rounded[rounded],
                  'flex items-center'
                )}
                itemRender={(current, type, element) => {
                  if (type === 'prev') {
                    return element;
                  }
                  return null;
                }}
                {...props}
              />
            </div>

            {paginationProps?.showInfo && (
              <div className="flex items-center justify-center">
                <Text className="text-sm font-medium text-gray-700">
                  {paginationProps.infoFormatter
                    ? paginationProps.infoFormatter(currentPage, totalPages)
                    : `${currentPage}/${totalPages}`}
                </Text>
              </div>
            )}

            <div className="flex items-center">
              <RcPagination
                locale={locale || localeDefault}
                nextIcon={
                  <NextIcon
                    icon={nextIcon as React.ReactNode}
                    rounded={rounded}
                    outline={outline}
                    className={nextIconClassName as string}
                  />
                }
                onChange={handlePageChange}
                current={currentPage}
                pageSize={limit}
                total={totalItems}
                className={cn(
                  paginationStyles.base.item,
                  !outline && paginationStyles.base.outline,
                  !outline && paginationStyles.base.icon,
                  paginationStyles.rounded[rounded],
                  'flex items-center'
                )}
                itemRender={(current, type, element) => {
                  if (type === 'next') {
                    return element;
                  }
                  return null;
                }}
                {...props}
              />
            </div>
          </>
        ) : (
          <RcPagination
            locale={locale || localeDefault}
            prevIcon={
              <PrevIcon
                icon={prevIcon as React.ReactNode}
                rounded={rounded}
                outline={outline}
                className={prevIconClassName as string}
              />
            }
            nextIcon={
              <NextIcon
                icon={nextIcon as React.ReactNode}
                rounded={rounded}
                outline={outline}
                className={nextIconClassName as string}
              />
            }
            jumpPrevIcon={
              <JumpPrevIcon
                icon={jumpPrevIcon as React.ReactNode}
                rounded={rounded}
                outline={outline}
                className={jumpPrevIconClassName as string}
              />
            }
            jumpNextIcon={
              <JumpNextIcon
                icon={jumpNextIcon as React.ReactNode}
                rounded={rounded}
                outline={outline}
                className={jumpNextIconClassName as string}
              />
            }
            onChange={handlePageChange}
            current={currentPage}
            pageSize={limit}
            total={totalItems}
            className={cn(
              paginationStyles.base.item,
              paginationStyles.base.jumperDiv,
              paginationStyles.base.jumperInput,
              !outline && paginationStyles.base.outline,
              !outline && paginationStyles.base.icon,
              paginationStyles.rounded[rounded],
              paginationStyles.variant[variant].base,
              paginationStyles.variant[variant].color[color],
              'flex items-center'
            )}
            {...props}
          />
        )}
      </div>
    </>
  );
}

Pagination.displayName = 'Pagination';