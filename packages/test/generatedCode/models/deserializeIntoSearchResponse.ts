import {deserializeIntoAlterationResponse} from './deserializeIntoAlterationResponse';
import {deserializeIntoResultTemplateDictionary} from './deserializeIntoResultTemplateDictionary';
import {deserializeIntoSearchHitsContainer} from './deserializeIntoSearchHitsContainer';
import {SearchResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchResponse(searchResponse: SearchResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hitsContainers": n => { searchResponse.hitsContainers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchHitsContainer) as any ; },
        "@odata.type": n => { searchResponse.odataType = n.getStringValue() as any ; },
        "queryAlterationResponse": n => { searchResponse.queryAlterationResponse = n.getObject(deserializeIntoAlterationResponse) as any ; },
        "resultTemplates": n => { searchResponse.resultTemplates = n.getObject(deserializeIntoResultTemplateDictionary) as any ; },
        "searchTerms": n => { searchResponse.searchTerms = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
