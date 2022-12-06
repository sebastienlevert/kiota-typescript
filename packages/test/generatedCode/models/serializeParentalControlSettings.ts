import {ParentalControlSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParentalControlSettings(writer: SerializationWriter, parentalControlSettings: ParentalControlSettings | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("countriesBlockedForMinors", parentalControlSettings.countriesBlockedForMinors);
            writer.writeStringValue("legalAgeGroupRule", parentalControlSettings.legalAgeGroupRule);
            writer.writeStringValue("@odata.type", parentalControlSettings.odataType);
}
