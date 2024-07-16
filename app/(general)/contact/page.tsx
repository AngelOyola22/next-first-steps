import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact Page Description',
 keywords: ['Contact Page', 'Ariel','Informacion Contact','...'],
};

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}