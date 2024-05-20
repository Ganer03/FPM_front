import {notFound} from "next/navigation";
import {TeachersPage} from "@/ui-pages";

export default function Teachers({ params }: { params: { slug: string } }) {
    if (params.slug.length != 2) {
        return notFound()
    }
    return <TeachersPage params={params}/>
}