import {MobileApp} from './index';
import {MobileAppPublishingState} from './mobileAppPublishingState';
import {serializeEntity} from './serializeEntity';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeMobileAppAssignment} from './serializeMobileAppAssignment';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileApp(writer: SerializationWriter, mobileApp: MobileApp | undefined = {}) : void {
        serializeEntity(writer, mobileApp)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", mobileApp.assignments as any, serializeMobileAppAssignment);
            writer.writeCollectionOfObjectValuesFromMethod("categories", mobileApp.categories as any, serializeMobileAppCategory);
            writer.writeDateValue("createdDateTime", mobileApp.createdDateTime);
            writer.writeStringValue("description", mobileApp.description);
            writer.writeStringValue("developer", mobileApp.developer);
            writer.writeStringValue("displayName", mobileApp.displayName);
            writer.writeStringValue("informationUrl", mobileApp.informationUrl);
            writer.writeBooleanValue("isFeatured", mobileApp.isFeatured);
            writer.writeObjectValueFromMethod("largeIcon", mobileApp.largeIcon as any, serializeMimeContent);
            writer.writeDateValue("lastModifiedDateTime", mobileApp.lastModifiedDateTime);
            writer.writeStringValue("notes", mobileApp.notes);
            writer.writeStringValue("owner", mobileApp.owner);
            writer.writeStringValue("privacyInformationUrl", mobileApp.privacyInformationUrl);
            writer.writeStringValue("publisher", mobileApp.publisher);
            writer.writeEnumValue<MobileAppPublishingState>("publishingState", mobileApp.publishingState);
}
