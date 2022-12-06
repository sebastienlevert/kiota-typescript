import {TimeZoneInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeZoneInformation(timeZoneInformation: TimeZoneInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alias": n => { timeZoneInformation.alias = n.getStringValue() as any ; },
        "displayName": n => { timeZoneInformation.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { timeZoneInformation.odataType = n.getStringValue() as any ; },
    }
}
