import { HeaderSearchInput } from ".";


export default function Header() {
  return (
    <div className="w-full flex h-12 items-center justify-between gap-5 px-14">
      <span className="italic text-xl">
        ClosetFy
      </span>
      <HeaderSearchInput />
    </div>
  );
}
