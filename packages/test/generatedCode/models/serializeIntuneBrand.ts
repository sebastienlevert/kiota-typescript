import {IntuneBrand} from './index';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeRgbColor} from './serializeRgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntuneBrand(writer: SerializationWriter, intuneBrand: IntuneBrand | undefined = {}) : void {
            writer.writeStringValue("contactITEmailAddress", intuneBrand.contactITEmailAddress);
            writer.writeStringValue("contactITName", intuneBrand.contactITName);
            writer.writeStringValue("contactITNotes", intuneBrand.contactITNotes);
            writer.writeStringValue("contactITPhoneNumber", intuneBrand.contactITPhoneNumber);
            writer.writeObjectValueFromMethod("darkBackgroundLogo", intuneBrand.darkBackgroundLogo as any, serializeMimeContent);
            writer.writeStringValue("displayName", intuneBrand.displayName);
            writer.writeObjectValueFromMethod("lightBackgroundLogo", intuneBrand.lightBackgroundLogo as any, serializeMimeContent);
            writer.writeStringValue("@odata.type", intuneBrand.odataType);
            writer.writeStringValue("onlineSupportSiteName", intuneBrand.onlineSupportSiteName);
            writer.writeStringValue("onlineSupportSiteUrl", intuneBrand.onlineSupportSiteUrl);
            writer.writeStringValue("privacyUrl", intuneBrand.privacyUrl);
            writer.writeBooleanValue("showDisplayNameNextToLogo", intuneBrand.showDisplayNameNextToLogo);
            writer.writeBooleanValue("showLogo", intuneBrand.showLogo);
            writer.writeBooleanValue("showNameNextToLogo", intuneBrand.showNameNextToLogo);
            writer.writeObjectValueFromMethod("themeColor", intuneBrand.themeColor as any, serializeRgbColor);
}
