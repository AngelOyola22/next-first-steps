import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Pricing Page Description',
 keywords: ['Pricing Page', 'Ariel','Informacion Pricing','...'],
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}