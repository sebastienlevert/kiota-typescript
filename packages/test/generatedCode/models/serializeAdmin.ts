import {Admin} from './index';
import {serializeServiceAnnouncement} from './serializeServiceAnnouncement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdmin(writer: SerializationWriter, admin: Admin | undefined = {}) : void {
            writer.writeStringValue("@odata.type", admin.odataType);
            writer.writeObjectValueFromMethod("serviceAnnouncement", admin.serviceAnnouncement as any, serializeServiceAnnouncement);
}
