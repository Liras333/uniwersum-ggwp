import { Search } from "@deemlol/next-icons"

export default function FilterSort(){
    return (
        <div className="flex flex-col-reverse gap-5 items-center lg:flex-row flex-wrap justify-between  my-5">
            <p className="flex items-center rounded gap-3 bg-secondary-800 pl-3 py-1">
                <span className="text-neutral-300"><Search size={20} /></span>
                <input type="text" placeholder="Wyszukaj" className="pr-3"/>
            </p>

            <div className=" flex justify-end items-center ">
                <button className="px-1 m-1 bg-neutral-700 text-neutral-200 rounded-md cursor-pointer hover:bg-primary-500 transition-colors">A-Z</button>
                <button className="px-1 m-1 bg-neutral-700 text-neutral-200 rounded-md cursor-pointer hover:bg-primary-500 transition-colors">Z-A</button>
                <button className="px-1 m-1 bg-primary-400 text-neutral-800 rounded-md cursor-pointer hover:bg-primary-500 transition-colors">Od najnowszych</button>
                <button className="px-1 m-1 bg-neutral-700 text-neutral-200 rounded-md cursor-pointer hover:bg-primary-500 transition-colors" >Od najstarszych</button>
            </div>
        </div>
    )
} 