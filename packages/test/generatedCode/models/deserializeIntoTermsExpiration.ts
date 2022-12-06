import {TermsExpiration} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsExpiration(termsExpiration: TermsExpiration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "frequency": n => { termsExpiration.frequency = n.getDurationValue() as any ; },
        "@odata.type": n => { termsExpiration.odataType = n.getStringValue() as any ; },
        "startDateTime": n => { termsExpiration.startDateTime = n.getDateValue() as any ; },
    }
}
