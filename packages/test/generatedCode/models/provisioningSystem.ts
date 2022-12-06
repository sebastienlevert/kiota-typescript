import {DetailsInfo, Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningSystem extends Identity, Partial<Parsable> {
    /** Details of the system. */
    details?: DetailsInfo;
}
