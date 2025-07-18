import { Country } from "@/types";
import { GetStaticPropsContext } from "next";
import { lightningCssTransform } from "next/dist/build/swc/generated-native";
import Link from "next/link";

export const getStaticProps = async() => {

    const response = await fetch ('https://date.nager.at/api/v3/AvailableCountries');
    let countries:Country[] = await response.json();

    return {
        props:{
            countries
        }
    }
}
interface CountriesProps{
    countries:Country[]
}

const HolidaysPage = ({countries}:CountriesProps) => {
    return (
        <>
         <ul>
            {countries.map(country=> <li key={country.countryCode}> <Link href={`/holidays/${country.countryCode}`}>{country.name} </Link></li>)}
        </ul>
        </>
       
    ) }
        
    


export default HolidaysPage;