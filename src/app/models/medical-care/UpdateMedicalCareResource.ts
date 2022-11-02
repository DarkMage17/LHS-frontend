import { Dialysis } from "../patient/DIalysis.enum";

export interface UpdateMedicalCareResource {
    
    ureaPre:number;
    ureaPost:number;
    dryWeight:number;
    initialWeight:number;
    finalWeight:number;
    hdTime:number;
    uf:number;
    hb:number;
    hto:number;
    dialysisMaterial:Dialysis;
}