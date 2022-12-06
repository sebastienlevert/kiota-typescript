import {IdentitySource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AzureActiveDirectoryTenant extends IdentitySource, Partial<Parsable> {
    /** The name of the Azure Active Directory tenant. Read only. */
    displayName?: string;
    /** The ID of the Azure Active Directory tenant. Read only. */
    tenantId?: string;
}
