import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {SharingInvitation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingInvitation(sharingInvitation: SharingInvitation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { sharingInvitation.email = n.getStringValue() as any ; },
        "invitedBy": n => { sharingInvitation.invitedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "redeemedBy": n => { sharingInvitation.redeemedBy = n.getStringValue() as any ; },
        "signInRequired": n => { sharingInvitation.signInRequired = n.getBooleanValue() as any ; },
    }
}
