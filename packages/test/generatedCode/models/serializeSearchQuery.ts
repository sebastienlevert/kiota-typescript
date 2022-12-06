import {SearchQuery} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchQuery(writer: SerializationWriter, searchQuery: SearchQuery | undefined = {}) : void {
            writer.writeStringValue("@odata.type", searchQuery.odataType);
            writer.writeStringValue("queryString", searchQuery.queryString);
}
