import { Title } from 'rizzui';
import cn from '@/utils/class-names';
import { ForwardedRef, forwardRef } from 'react';
import Shadowimage from '@public/images/cardshadowimage.svg';
import ShadowRightimage from '@public/images/rightimage.svg';
import Shadowleftlightimage from '@public/images/lightleftimage.svg';
import ShadowLightimage from '@public/images/lightMode-shadow-right.svg';
import Image from 'next/image';
const widgetCardClasses = {
  base: 'border-2 border-gray-300 bg-gray-100/40',
  rounded: {
    sm: 'rounded-sm',
    DEFAULT: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  },
  shadow:{}
};
// bg-[#01121A]
type WidgetCardTypes = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  rounded?: keyof typeof widgetCardClasses.rounded;
  headerClassName?: string;
  titleClassName?: string;
  actionClassName?: string;
  descriptionClassName?: string;
  className?: string;
  shadow?:any;
};

function CustomWidgetCard(
  {
    title,
    action,
    description,
    rounded = 'DEFAULT',
    className,
    headerClassName,
    actionClassName,
    titleClassName,
    descriptionClassName,
    children,
    shadow="right"
  }: React.PropsWithChildren<WidgetCardTypes>,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cn(
        widgetCardClasses.base,
        widgetCardClasses.rounded[rounded],
        className
      )}
      ref={ref}
    >
      <div
        className={cn(
          action && 'flex items-start justify-between  ',
          headerClassName
        )}
      >
        <div className="relative">
          {shadow === 'right' && (
            <div className="absolute right-0 top-0 pointer-events-none">
              <Image
          src={Shadowimage}
          alt="Shadow image"
          width={200}
          height={0}
          className="hidden rounded-md"
              />
              <Image
          src={ShadowLightimage}
          alt="Shadow image"
          width={200}
          height={0}
          className="block"
              />
            </div>
          )}
          {shadow === 'left' && (
            <div className="absolute left-0 top-0 pointer-events-none">
              <Image
          src={ShadowRightimage}
          alt="Shadow image"
          width={200}
          height={0}
          className="hidden rounded-md"
              />
              <Image
          src={Shadowleftlightimage}
          alt="Shadow image"
          width={200}
          height={0}
          className="block"
              />
            </div>
          )}
          <Title
            as="h3"
            className={cn(
              'border-b border-gray-300 py-2 text-center text-base font-bold text-blackk-light sm:text-lg',
              titleClassName
            )}
          >
            {title}
          </Title>
          {description && (
            <div className={descriptionClassName}>{description}</div>
          )}
        </div>
        {action && <div className={cn('ps-2', actionClassName)}>{action}</div>}
      </div>
      {children}
    </div>
  );
}

export default forwardRef(CustomWidgetCard);
CustomWidgetCard.displayName = 'WidgetCard';
