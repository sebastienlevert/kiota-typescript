import {SearchResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResult(searchResult: SearchResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { searchResult.odataType = n.getStringValue() as any ; },
        "onClickTelemetryUrl": n => { searchResult.onClickTelemetryUrl = n.getStringValue() as any ; },
    }
}
