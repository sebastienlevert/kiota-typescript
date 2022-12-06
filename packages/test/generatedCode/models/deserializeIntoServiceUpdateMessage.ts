import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoServiceAnnouncementAttachment} from './deserializeIntoServiceAnnouncementAttachment';
import {deserializeIntoServiceAnnouncementBase} from './deserializeIntoServiceAnnouncementBase';
import {deserializeIntoServiceUpdateMessageViewpoint} from './deserializeIntoServiceUpdateMessageViewpoint';
import {ServiceUpdateMessage} from './index';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUpdateMessage(serviceUpdateMessage: ServiceUpdateMessage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoServiceAnnouncementBase(serviceUpdateMessage),
        "actionRequiredByDateTime": n => { serviceUpdateMessage.actionRequiredByDateTime = n.getDateValue() as any ; },
        "attachments": n => { serviceUpdateMessage.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceAnnouncementAttachment) as any ; },
        "attachmentsArchive": n => { serviceUpdateMessage.attachmentsArchive = n.getStringValue() as any ; },
        "body": n => { serviceUpdateMessage.body = n.getObject(deserializeIntoItemBody) as any ; },
        "category": n => { serviceUpdateMessage.category = n.getEnumValue<ServiceUpdateCategory>(ServiceUpdateCategory) as any ; },
        "hasAttachments": n => { serviceUpdateMessage.hasAttachments = n.getBooleanValue() as any ; },
        "isMajorChange": n => { serviceUpdateMessage.isMajorChange = n.getBooleanValue() as any ; },
        "services": n => { serviceUpdateMessage.services = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "severity": n => { serviceUpdateMessage.severity = n.getEnumValue<ServiceUpdateSeverity>(ServiceUpdateSeverity) as any ; },
        "tags": n => { serviceUpdateMessage.tags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "viewPoint": n => { serviceUpdateMessage.viewPoint = n.getObject(deserializeIntoServiceUpdateMessageViewpoint) as any ; },
    }
}
