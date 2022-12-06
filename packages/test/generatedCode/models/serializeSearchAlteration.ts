import {SearchAlteration} from './index';
import {serializeAlteredQueryToken} from './serializeAlteredQueryToken';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAlteration(writer: SerializationWriter, searchAlteration: SearchAlteration | undefined = {}) : void {
            writer.writeStringValue("alteredHighlightedQueryString", searchAlteration.alteredHighlightedQueryString);
            writer.writeStringValue("alteredQueryString", searchAlteration.alteredQueryString);
            writer.writeCollectionOfObjectValuesFromMethod("alteredQueryTokens", searchAlteration.alteredQueryTokens as any, serializeAlteredQueryToken);
            writer.writeStringValue("@odata.type", searchAlteration.odataType);
}
