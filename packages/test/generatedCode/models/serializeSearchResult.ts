import {SearchResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchResult(writer: SerializationWriter, searchResult: SearchResult | undefined = {}) : void {
            writer.writeStringValue("@odata.type", searchResult.odataType);
            writer.writeStringValue("onClickTelemetryUrl", searchResult.onClickTelemetryUrl);
}
