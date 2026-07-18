import { Title } from 'rizzui';
import cn from '@/utils/class-names';
import { ForwardedRef, forwardRef } from 'react';
import ShadowRightimage from '@public/images/rightimage.svg';
import Image from 'next/image';
import Shadowimage from '@public/images/cardshadowimage.svg';
import ShadowLightimage from '@public/images/lightMode-shadow-right.svg';

const widgetCardClasses = {
  base: 'border border-muted border-white bg-white',
  rounded: {
    sm: 'rounded-sm',
    DEFAULT: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  },
};

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
  shadow?: any;
};

function RoadMApCard(
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
    shadow = 'left',
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
          action && 'flex items-start justify-between',
          headerClassName
        )}
      >
        <div className="relative">
          {shadow === 'left' && (
            <div className="absolute left-0 -top-3">
              <Image
          src={ShadowRightimage}
          alt="Shadow image"
          width={190}
          height={0}
          className="hidden rounded-md"
              />
            </div>
          )}
          {shadow === 'right' && (
            <div className="absolute right-0 top-0">
              <Image
          src={Shadowimage}
          alt="Shadow image"
          width={190}
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
        </div>
        <div>
          <Title
            as="h3"
            className={cn('text-sm font-medium my-3 px-5 sm:text-base text-white', titleClassName)}
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

export default forwardRef(RoadMApCard);
RoadMApCard.displayName = 'WidgetCard';
