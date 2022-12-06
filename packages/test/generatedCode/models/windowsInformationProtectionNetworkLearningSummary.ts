import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionNetworkLearningSummary extends Entity, Partial<Parsable> {
    /** Device Count */
    deviceCount?: number;
    /** Website url */
    url?: string;
}
