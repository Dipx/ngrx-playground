import { IConfig } from "../../Models/IConfiguration";

export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState = {
    config: null
}