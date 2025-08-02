import { StarIcon } from 'lucide-react';
import Image from 'next/image';

import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface BarbershopProps {
  id: string;
  name: string;
  address: string;
  phones: string[];
  description: string;
  imageUrl?: string;
}

export function BarbershopItem({ name, address, imageUrl }: BarbershopProps) {
  return (
    <Card className="min-w-[167px] rounded-2xl p-0">
      <CardContent className="p-1 px-1 pb-2">
        <div className="relative h-[159px] w-full">
          <Image
            className="object-fil rounded-2xl"
            src={imageUrl ?? '/barbearia.svg'}
            alt={name}
            fill
          />
          <Badge
            className="absolute top-2 left-2 space-x-1 rounded-xl"
            variant={'secondary'}
          >
            <StarIcon className="fill-primary text-primary" size={12} />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>
        <div className="px-1 py-3">
          <h3 className="truncate text-sm font-semibold">{name}</h3>
          <p className="truncate text-sm text-gray-400">{address}</p>
          <Button className="mt-3 w-full" variant={'secondary'}>
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
