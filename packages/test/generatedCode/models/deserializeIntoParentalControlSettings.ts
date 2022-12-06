import {ParentalControlSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParentalControlSettings(parentalControlSettings: ParentalControlSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "countriesBlockedForMinors": n => { parentalControlSettings.countriesBlockedForMinors = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "legalAgeGroupRule": n => { parentalControlSettings.legalAgeGroupRule = n.getStringValue() as any ; },
        "@odata.type": n => { parentalControlSettings.odataType = n.getStringValue() as any ; },
    }
}
