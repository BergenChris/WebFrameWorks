export interface PokemonRoot{
    results:Pokemon[];
}

export interface Pokemon{
    
    id?:number;
    name:string;
    url?:string;
    height?:number;
    weight?:string;
    sprites?:Sprites;
}

export interface Sprites{
    front_default:string;
}