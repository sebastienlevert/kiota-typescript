import {deserializeIntoAlteredQueryToken} from './deserializeIntoAlteredQueryToken';
import {SearchAlteration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAlteration(searchAlteration: SearchAlteration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alteredHighlightedQueryString": n => { searchAlteration.alteredHighlightedQueryString = n.getStringValue() as any ; },
        "alteredQueryString": n => { searchAlteration.alteredQueryString = n.getStringValue() as any ; },
        "alteredQueryTokens": n => { searchAlteration.alteredQueryTokens = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlteredQueryToken) as any ; },
        "@odata.type": n => { searchAlteration.odataType = n.getStringValue() as any ; },
    }
}
