import {AppManagementConfiguration, DirectoryObject, PolicyBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppManagementPolicy extends Partial<Parsable>, PolicyBase {
    /** The appliesTo property */
    appliesTo?: DirectoryObject[];
    /** The isEnabled property */
    isEnabled?: boolean;
    /** The restrictions property */
    restrictions?: AppManagementConfiguration;
}
