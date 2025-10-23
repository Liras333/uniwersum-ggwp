import SubNavigation from "../_components/SubNavigation";
import { najnowsze } from "../_lib/listsOfNavigations";

export default function layout({children}){
    return (
        <main className="w-4/5  mx-auto grid-cols-1 grid md:grid-cols-[.35fr_1fr] gap-10 pb-10">
            <SubNavigation links={najnowsze}/>
            {children}
        </main>
    )
}