import { MenuIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex items-center justify-between">
        <Image src="/logo.svg" width={120} height={18} alt="logo" priority />
        <Button variant={'outline'} size={'icon'} className="p-2">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
