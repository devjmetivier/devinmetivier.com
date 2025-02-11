'use client';

import { differenceInMonths, differenceInYears, format } from 'date-fns';

import type { RESUME_DATA } from '~/data/resume-data';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

type Props = {
  entry: Pick<(typeof RESUME_DATA.work)[number], 'start' | 'end'>;
};

export const TenureTooltip = ({ entry }: Props) => {
  return (
    <div className='text-gray-500 text-sm tabular-nums'>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            {format(entry.start, 'MMM yyyy')} -{' '}
            {entry.end.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
              ? 'Present'
              : format(entry.end, 'MMM yyyy')}
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${differenceInYears(entry.end, entry.start)}yr ${differenceInMonths(entry.end, entry.start) % 12}mo`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
