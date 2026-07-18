'use client';

import { Badge } from 'rizzui';
import cn from '@/utils/class-names';
import { useLayout } from '@/hooks/use-layout';

const classes = {
  base: 'text-xs px-2 duration-200 py-0.5 font-normal capitalize border tracking-wider font-lexend bg-opacity-50',
  color: {
    success: 'border-green bg-green-lighter text-green-dark',
    danger: 'border-red bg-red-lighter text-red-dark',
  },
  layout: {
    helium: {
      base: 'bg-opacity-40 text-opacity-90 text-gray-0 backdrop-blur group-hover:bg-opacity-100 group-hover:text-opacity-100',
      success: 'bg-green',
      danger: 'bg-red',
    },
  },
};

export default function StatusBadge({ status }: { status: string }) {
  const { layout } = useLayout();
  const colorStatus = status?.toLowerCase() === 'new' ? 'danger' : 'success';
  const layoutKey = layout as keyof typeof classes.layout;

  return (
    <Badge
      variant="flat"
      size="sm"
      color={colorStatus}
      className={cn(
        classes.base,
        classes.color[colorStatus],
        classes.layout[layoutKey]?.base,
        classes.layout[layoutKey]?.[colorStatus]
      )}
    >
      {status}
    </Badge>
  );
}
