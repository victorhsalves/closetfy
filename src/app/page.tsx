import { Card, Footer } from "@/components";
import { Header } from "@/components/header";
import { SideFilter } from "@/components/side-filter";
import { ClothingInfo } from "@/types";

const results: ClothingInfo[] = [
  {
    name: 'Camisa Corinthians Jogador',
    description: 'Camisa do jogador, malha dryfit tecnológica.',
    imagesUrl: [],
    primaryImageUrl: '',
    rating: 4.9,
    sizes: ['XG', 'GG', 'G', 'M', 'P', 'PP'],
    style: 'Sport'
  },
  {
    name: 'Camisa Corinthians Mundial',
    description: 'Camisa em homenagem ao mundial de clubes no Japão de 2012.',
    imagesUrl: [],
    primaryImageUrl: '',
    rating: 5,
    sizes: ['XG', 'GG', 'G', 'M', 'P', 'PP'],
    style: 'Sport'
  },
  {
    name: 'Camisa Corinthians 2004',
    description: 'Camisa modelo 2004.',
    imagesUrl: [],
    primaryImageUrl: '',
    rating: 4.9,
    sizes: ['XG', 'GG', 'G', 'M', 'P', 'PP'],
    style: 'Sport'
  },
  {
    name: 'Camisa Corinthians Zé Maria',
    description: 'Camisa em homenagem ao Zé Maria, ídolo do Corinthians.',
    imagesUrl: [],
    primaryImageUrl: '',
    rating: 4.9,
    sizes: ['XG', 'GG', 'G', 'M', 'P', 'PP'],
    style: 'Sport'
  },
]

export default function Home() {
  return (
    <main className={"flex gap-5 max-w-[1280px] min-w-[420px] flex-col px-1 sm:px-3 md:px-7 py-10"}>
      <Header />
      <section className="flex flex-row gap-3 py-1 w-full h-full">
        <SideFilter />
        <div className="flex flex-col w-full p-2">
          <div className="flex justify-between text-xs items-end">
            <span className="text-xl">Todas</span>
            <div className="flex gap-3">
              <span>Showing: 10-100</span>
              <span>Sort by: Most Popular</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 w-full justify-between">
            {results?.map((result, index) => (
              <Card clothingInfo={result} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
