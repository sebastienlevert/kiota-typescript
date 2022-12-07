import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {SharingLink} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingLink(sharingLink: SharingLink | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { sharingLink.application = n.getObject(deserializeIntoIdentity) as any ; },
        "configuratorUrl": n => { sharingLink.configuratorUrl = n.getStringValue() as any ; },
        "preventsDownload": n => { sharingLink.preventsDownload = n.getBooleanValue() as any ; },
        "scope": n => { sharingLink.scope = n.getStringValue() as any ; },
        "type": n => { sharingLink.type = n.getStringValue() as any ; },
        "webHtml": n => { sharingLink.webHtml = n.getStringValue() as any ; },
        "webUrl": n => { sharingLink.webUrl = n.getStringValue() as any ; },
    }
}
