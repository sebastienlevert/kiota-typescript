import {AlteredQueryToken} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlteredQueryToken(alteredQueryToken: AlteredQueryToken | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "length": n => { alteredQueryToken.length = n.getNumberValue() as any ; },
        "@odata.type": n => { alteredQueryToken.odataType = n.getStringValue() as any ; },
        "offset": n => { alteredQueryToken.offset = n.getNumberValue() as any ; },
        "suggestion": n => { alteredQueryToken.suggestion = n.getStringValue() as any ; },
    }
}
