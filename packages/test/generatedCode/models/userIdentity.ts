import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserIdentity extends Identity, Partial<Parsable> {
    /** Indicates the client IP address used by user performing the activity (audit log only). */
    ipAddress?: string;
    /** The userPrincipalName attribute of the user. */
    userPrincipalName?: string;
}
