import {Entity} from './index';
import {PermissionClassificationType} from './permissionClassificationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassification extends Entity, Partial<Parsable> {
    /** The classification property */
    classification?: PermissionClassificationType;
    /** The unique identifier (id) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter. */
    permissionId?: string;
    /** The claim value (value) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Does not support $filter. */
    permissionName?: string;
}
