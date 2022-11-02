import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavigationsModel {
    name: string,
    icon: IconDefinition,
    active: boolean,
    path: string
}