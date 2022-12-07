import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoItemReference} from './deserializeIntoItemReference';
import {deserializeIntoSharePointIdentitySet} from './deserializeIntoSharePointIdentitySet';
import {deserializeIntoSharingInvitation} from './deserializeIntoSharingInvitation';
import {deserializeIntoSharingLink} from './deserializeIntoSharingLink';
import {Permission} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermission(permission: Permission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(permission),
        "expirationDateTime": n => { permission.expirationDateTime = n.getDateValue() as any ; },
        "grantedTo": n => { permission.grantedTo = n.getObject(deserializeIntoIdentitySet) as any ; },
        "grantedToIdentities": n => { permission.grantedToIdentities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySet) as any ; },
        "grantedToIdentitiesV2": n => { permission.grantedToIdentitiesV2 = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharePointIdentitySet) as any ; },
        "grantedToV2": n => { permission.grantedToV2 = n.getObject(deserializeIntoSharePointIdentitySet) as any ; },
        "hasPassword": n => { permission.hasPassword = n.getBooleanValue() as any ; },
        "inheritedFrom": n => { permission.inheritedFrom = n.getObject(deserializeIntoItemReference) as any ; },
        "invitation": n => { permission.invitation = n.getObject(deserializeIntoSharingInvitation) as any ; },
        "link": n => { permission.link = n.getObject(deserializeIntoSharingLink) as any ; },
        "roles": n => { permission.roles = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "shareId": n => { permission.shareId = n.getStringValue() as any ; },
    }
}
