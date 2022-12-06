import {DetailsInfo, Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedIdentity extends Identity, Partial<Parsable> {
    /** Details of the identity. */
    details?: DetailsInfo;
    /** Type of identity that has been provisioned, such as 'user' or 'group'. */
    identityType?: string;
}
