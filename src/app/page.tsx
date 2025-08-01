import { Search } from 'lucide-react';
import Image from 'next/image';

import { Header } from './components/header';
import { Avatar, AvatarImage } from './components/ui/avatar';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';

export default function Page() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2>
          Olá, <span className="text-xl font-bold">Miguel!</span>
        </h2>
        <p>Sexta, 2 de Fevereiro.</p>

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

        <div className="mt-6">
          <h2 className="text-gray-500 uppercase">Agendamentos</h2>
        </div>

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 pl-5">
              <Badge className="text-primary mb-2 w-fit rounded-xl bg-[#221C3D]">
                confirmado
              </Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/barbearia.svg" alt="User Avatar" />
                </Avatar>
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
