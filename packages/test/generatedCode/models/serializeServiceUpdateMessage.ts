import {ServiceUpdateMessage} from './index';
import {serializeItemBody} from './serializeItemBody';
import {serializeServiceAnnouncementAttachment} from './serializeServiceAnnouncementAttachment';
import {serializeServiceAnnouncementBase} from './serializeServiceAnnouncementBase';
import {serializeServiceUpdateMessageViewpoint} from './serializeServiceUpdateMessageViewpoint';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUpdateMessage(writer: SerializationWriter, serviceUpdateMessage: ServiceUpdateMessage | undefined = {}) : void {
        serializeServiceAnnouncementBase(writer, serviceUpdateMessage)
            writer.writeDateValue("actionRequiredByDateTime", serviceUpdateMessage.actionRequiredByDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("attachments", serviceUpdateMessage.attachments as any, serializeServiceAnnouncementAttachment);
            writer.writeStringValue("attachmentsArchive", serviceUpdateMessage.attachmentsArchive);
            writer.writeObjectValueFromMethod("body", serviceUpdateMessage.body as any, serializeItemBody);
            writer.writeEnumValue<ServiceUpdateCategory>("category", serviceUpdateMessage.category);
            writer.writeBooleanValue("hasAttachments", serviceUpdateMessage.hasAttachments);
            writer.writeBooleanValue("isMajorChange", serviceUpdateMessage.isMajorChange);
            writer.writeCollectionOfPrimitiveValues<string>("services", serviceUpdateMessage.services);
            writer.writeEnumValue<ServiceUpdateSeverity>("severity", serviceUpdateMessage.severity);
            writer.writeCollectionOfPrimitiveValues<string>("tags", serviceUpdateMessage.tags);
            writer.writeObjectValueFromMethod("viewPoint", serviceUpdateMessage.viewPoint as any, serializeServiceUpdateMessageViewpoint);
}
