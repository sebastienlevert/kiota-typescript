import {PrivacyProfile} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrivacyProfile(writer: SerializationWriter, privacyProfile: PrivacyProfile | undefined = {}) : void {
            writer.writeStringValue("contactEmail", privacyProfile.contactEmail);
            writer.writeStringValue("@odata.type", privacyProfile.odataType);
            writer.writeStringValue("statementUrl", privacyProfile.statementUrl);
}
