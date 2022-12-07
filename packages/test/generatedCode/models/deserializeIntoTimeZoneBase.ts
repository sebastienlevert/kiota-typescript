import {TimeZoneBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeZoneBase(timeZoneBase: TimeZoneBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { timeZoneBase.name = n.getStringValue() as any ; },
    }
}
