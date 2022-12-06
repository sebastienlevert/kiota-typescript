import {ExpirationPatternType} from './expirationPatternType';
import {ExpirationPattern} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExpirationPattern(expirationPattern: ExpirationPattern | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "duration": n => { expirationPattern.duration = n.getDurationValue() as any ; },
        "endDateTime": n => { expirationPattern.endDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { expirationPattern.odataType = n.getStringValue() as any ; },
        "type": n => { expirationPattern.type = n.getEnumValue<ExpirationPatternType>(ExpirationPatternType) as any ; },
    }
}
