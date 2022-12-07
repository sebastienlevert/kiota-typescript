import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermissionGrant extends DirectoryObject, Partial<Parsable> {
    /** ID of the service principal of the Azure AD app that has been granted access. Read-only. */
    clientAppId?: string;
    /** ID of the Azure AD app that has been granted access. Read-only. */
    clientId?: string;
    /** The name of the resource-specific permission. Read-only. */
    permission?: string;
    /** The type of permission. Possible values are: Application, Delegated. Read-only. */
    permissionType?: string;
    /** ID of the Azure AD app that is hosting the resource. Read-only. */
    resourceAppId?: string;
}
