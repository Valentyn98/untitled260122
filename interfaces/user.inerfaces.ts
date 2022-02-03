export interface IMission{
    mission_name: string
    launch_date_local:string
    launch_site:IlSite
    links:ILink
    rocket:IRocket
    second_stage:ISecond_stage
}

export interface IlSite{
    site_name_long:string
}
export interface ILink{
    article_link:null
    video_link:string
}
export interface IRocket{
    rocket_name:string
    first_stage:IFirst_stage;
}
export interface IFirst_stage{
    cores:[ICores]
}
export interface ICores{
    flight:number
    core:ICore
}
export interface ICore{
    reuse_count:number;
    status: string;
}
export interface ISecond_stage{
    payloads: [IPayloads]
}
export interface IPayloads{

    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;

}