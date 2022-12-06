import {ServiceUpdateMessageViewpoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUpdateMessageViewpoint(serviceUpdateMessageViewpoint: ServiceUpdateMessageViewpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isArchived": n => { serviceUpdateMessageViewpoint.isArchived = n.getBooleanValue() as any ; },
        "isFavorited": n => { serviceUpdateMessageViewpoint.isFavorited = n.getBooleanValue() as any ; },
        "isRead": n => { serviceUpdateMessageViewpoint.isRead = n.getBooleanValue() as any ; },
        "@odata.type": n => { serviceUpdateMessageViewpoint.odataType = n.getStringValue() as any ; },
    }
}
