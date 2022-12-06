import {SearchResponse} from './index';
import {serializeAlterationResponse} from './serializeAlterationResponse';
import {serializeResultTemplateDictionary} from './serializeResultTemplateDictionary';
import {serializeSearchHitsContainer} from './serializeSearchHitsContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchResponse(writer: SerializationWriter, searchResponse: SearchResponse | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("hitsContainers", searchResponse.hitsContainers as any, serializeSearchHitsContainer);
            writer.writeStringValue("@odata.type", searchResponse.odataType);
            writer.writeObjectValueFromMethod("queryAlterationResponse", searchResponse.queryAlterationResponse as any, serializeAlterationResponse);
            writer.writeObjectValueFromMethod("resultTemplates", searchResponse.resultTemplates as any, serializeResultTemplateDictionary);
            writer.writeCollectionOfPrimitiveValues<string>("searchTerms", searchResponse.searchTerms);
}
