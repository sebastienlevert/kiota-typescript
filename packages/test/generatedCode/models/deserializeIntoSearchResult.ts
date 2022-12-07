import {SearchResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResult(searchResult: SearchResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "onClickTelemetryUrl": n => { searchResult.onClickTelemetryUrl = n.getStringValue() as any ; },
    }
}
