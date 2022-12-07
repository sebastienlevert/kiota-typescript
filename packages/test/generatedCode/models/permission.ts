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
    /** The grantedToV2 property */
    grantedToV2?: SharePointIdentitySet;
    /** Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only. */
    hasPassword?: boolean;
    /** The inheritedFrom property */
    inheritedFrom?: ItemReference;
    /** The invitation property */
    invitation?: SharingInvitation;
    /** The link property */
    link?: SharingLink;
    /** The type of permission, for example, read. See below for the full list of roles. Read-only. */
    roles?: string[];
    /** A unique token that can be used to access this shared item via the [shares API][]. Read-only. */
    shareId?: string;
}
