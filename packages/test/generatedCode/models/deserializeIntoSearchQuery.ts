import {SearchQuery} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchQuery(searchQuery: SearchQuery | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchQuery.odataType = n.getStringValue() as any ; },
        "queryString": n => { searchQuery.queryString = n.getStringValue() as any ; },
    }
}
