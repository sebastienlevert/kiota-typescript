import {deserializeIntoServiceAnnouncement} from './deserializeIntoServiceAnnouncement';
import {Admin} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdmin(admin: Admin | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { admin.odataType = n.getStringValue() as any ; },
        "serviceAnnouncement": n => { admin.serviceAnnouncement = n.getObject(deserializeIntoServiceAnnouncement) as any ; },
    }
}
