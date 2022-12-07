import {UserAccountInformation} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAccountInformation(writer: SerializationWriter, userAccountInformation: UserAccountInformation | undefined = {}) : void {
        serializeItemFacet(writer, userAccountInformation)
            writer.writeStringValue("ageGroup", userAccountInformation.ageGroup);
            writer.writeStringValue("countryCode", userAccountInformation.countryCode);
            writer.writeObjectValueFromMethod("preferredLanguageTag", userAccountInformation.preferredLanguageTag as any, serializeLocaleInfo);
            writer.writeStringValue("userPrincipalName", userAccountInformation.userPrincipalName);
}
