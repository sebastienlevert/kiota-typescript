import {ServiceAnnouncementBase} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncementBase(writer: SerializationWriter, serviceAnnouncementBase: ServiceAnnouncementBase | undefined = {}) : void {
        serializeEntity(writer, serviceAnnouncementBase)
            writer.writeCollectionOfObjectValuesFromMethod("details", serviceAnnouncementBase.details as any, serializeKeyValuePair);
            writer.writeDateValue("endDateTime", serviceAnnouncementBase.endDateTime);
            writer.writeDateValue("lastModifiedDateTime", serviceAnnouncementBase.lastModifiedDateTime);
            writer.writeDateValue("startDateTime", serviceAnnouncementBase.startDateTime);
            writer.writeStringValue("title", serviceAnnouncementBase.title);
}
