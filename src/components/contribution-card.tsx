import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

interface Props {
  title: string;
  description: string;
  link?: string;
}

export function ContributionCard({ title, description, link }: Props) {
  return (
    <Card className='flex flex-col overflow-hidden border border-muted p-3'>
      <CardHeader className=''>
        <div className='space-y-1'>
          <CardTitle className='text-base'>
            {link ? (
              <a href={link} target='_blank' className='inline-flex items-center gap-1 hover:underline'>
                {title} <span className='h-1 w-1 rounded-full bg-green-500'></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className='hidden font-mono text-xs underline print:visible'>
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <CardDescription className='font-mono text-xs'>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
