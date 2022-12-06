import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectPartnerReference extends DirectoryObject, Partial<Parsable> {
    /** Description of the object returned. Read-only. */
    description?: string;
    /** Name of directory object being returned, like group or application. Read-only. */
    displayName?: string;
    /** The tenant identifier for the partner tenant. Read-only. */
    externalPartnerTenantId?: string;
    /** The type of the referenced object in the partner tenant. Read-only. */
    objectType?: string;
}
