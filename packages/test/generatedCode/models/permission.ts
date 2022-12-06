import {Entity, IdentitySet, ItemReference, SharePointIdentitySet, SharingInvitation, SharingLink} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Permission extends Entity, Partial<Parsable> {
    /** A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional. */
    expirationDateTime?: Date;
    /** The grantedTo property */
    grantedTo?: IdentitySet;
    /** The grantedToIdentities property */
    grantedToIdentities?: IdentitySet[];
    /** For link type permissions, the details of the users to whom permission was granted. Read-only. */
    grantedToIdentitiesV2?: SharePointIdentitySet[];
    /** For user type permissions, the details of the users and applications for this permission. Read-only. */
    grantedToV2?: SharePointIdentitySet;
    /** Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only.. */
    hasPassword?: boolean;
    /** Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only. */
    inheritedFrom?: ItemReference;
    /** Details of any associated sharing invitation for this permission. Read-only. */
    invitation?: SharingInvitation;
    /** Provides the link details of the current permission, if it is a link type permissions. Read-only. */
    link?: SharingLink;
    /** The type of permission, for example, read. See below for the full list of roles. Read-only. */
    roles?: string[];
    /** A unique token that can be used to access this shared item via the **shares** API. Read-only. */
    shareId?: string;
}
