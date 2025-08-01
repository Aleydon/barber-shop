import { Search } from 'lucide-react';
import Image from 'next/image';

import { Header } from './components/header';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export default function Page() {
  const day = new Date().getDate();
  const mouth = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <div className="p-5">
        <h2>
          Olá, <span className="text-xl font-bold">Roberto</span>
        </h2>
        <p>{day + '/' + mouth + '/' + year}</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" />
          <Button size={'icon'}>
            <Search />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            className="rounded-xl object-cover"
            src="/banner.svg"
            alt="Agende nos melhores barbeiros"
            fill
          />
        </div>
      </div>
    </>
  );
}
