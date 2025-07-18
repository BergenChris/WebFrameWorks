import type { Country, Holiday } from "@/types";
import { GetStaticPropsContext } from "next";



export const getStaticPaths = async() => {
    const response = await fetch ('https://date.nager.at/api/v3/AvailableCountries');
    let countries:Country[] = await response.json();
    const paths = countries.map((country) => ({
    params: { countryCode: country.countryCode }, // ✅ match the filename
    }));

    return {
        paths:paths,
        fallback:false,
    }
    
} 
export const getStaticProps = async(context:GetStaticPropsContext)=>{  //{params}: {params:{countryCode:string}}
    const response = await fetch (`https://date.nager.at/api/v3/PublicHolidays/2025/${context!.params!.countryCode}`) //params.countryCode
    const holidays: Holiday[] = await response.json();
    return {
        props: {
            holidays:holidays,
            countryCode:context!.params!.countryCode
        }
    }

}

const HolidayArticle = ({ holiday }: { holiday: Holiday }) =>{

    return(
        <>
            <h1>{holiday.localName}</h1>
            <p>Date:{holiday.date}</p>
            <p>Local Name:{holiday.localName}</p>
            <p>Country Coe: {holiday.countryCode}</p>

            </>
    )   
}

interface CountryPageProps{
    holidays:Holiday[],
    countryCode : string;
}
const CountryPage = ({holidays,countryCode}:CountryPageProps) => {

    const years = [
        "2000", "2001", "2002", "2003", "2004", "2005",
        "2006", "2007", "2008", "2009", "2010", "2011",
        "2012", "2013", "2014", "2015", "2016", "2017",
        "2018", "2019", "2020", "2021", "2022", "2023",
        "2024", "2025"
    ];
    

    return (
        <>
        <ul>
        {years.map((year) => (
          <li key={year}>
            <a href={`/holidays/${countryCode}/${year}`}>{year}</a>
          </li>
        ))}
      </ul>
        <ul>
        {holidays.map(holiday=><HolidayArticle key={holiday.countryCode} holiday={holiday}/>)}
        </ul>
        </>
        
    )
}

export default CountryPage;