export interface PokeApiPokemonList{
    results:PokeAPIPokemonListItem[];
}

export interface PokeAPIPokemonListItem{
    name:string;
    url:string;
}

export interface PokeApiPokemon{
    id:number;
    name:string;
    sprites:{
        front_default:string;
    };
    height:number;
    weight:number;

}

export interface Pokemon{
    
    id?:number;
    name:string;
    url?:string;
    height?:number;
    weight?:string;
    sprites?:string;
}

