import {ApplicationType} from './applicationType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLearningSummary extends Entity, Partial<Parsable> {
    /** Application Name */
    applicationName?: string;
    /** Possible types of Application */
    applicationType?: ApplicationType;
    /** Device Count */
    deviceCount?: number;
}
