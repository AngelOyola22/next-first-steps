import type { Metadata } from "next";
import AboutLayout from '../layout';

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Page Description',
 keywords: ['About Page', 'Ariel','Informacion','...'],
};

export default function AboutPage(){
    return (
        <span className="text-7xl">About Page</span>
    )
}