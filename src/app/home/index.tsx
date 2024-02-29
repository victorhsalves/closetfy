'use client';
import { Card, Footer } from "@/components";
import { Header } from "@/components/header";
import { SideFilter } from "@/components/side-filter";
import { useCloset } from "@/hooks/useCloset";
import { API, User } from "@/types";
import { useEffect } from "react";

const user: User = {
  id: "b218489e-f25f-41f5-b022-a33f9a369763",
  name: "Jhon",
  email: "asd@ads.com",
  cpfNumber: "12312312",
  created_at: '',
  password: ''
}

export default function Home() {

  const { data, error, loading, handleSearchChange, search } = useCloset();
  useEffect(() => { }, [data])
  const toRender = data?.retrieveClosetById?.product.filter((result) => {
    return result?.nameOfProduct?.toLowerCase().includes(search.toLowerCase());
  }
  );
  const user = data?.retrieveClosetById?.user
  const category = data?.retrieveClosetById?.category
  return (
    <main className={"flex gap-5 max-w-[1280px] min-w-[420px] flex-col px-1 sm:px-3 md:px-7 py-10"}>
      <Header
        search={search}
        handleSearch={handleSearchChange}
      />
      <section className="flex flex-row gap-3 py-1 w-full h-full">
        <SideFilter
          categories={category}
          user={user}
        />
        <div className="flex flex-col w-full p-2">
          <div className="flex justify-between text-xs items-end">
            <span className="text-xl">Todas</span>
            <div className="flex gap-3">
              <span>Showing: 10-100</span>
              <span>Sort by: Most Popular</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 w-full justify-between">
            {toRender?.map((result, index) => (
              <Card clothingInfo={result} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
