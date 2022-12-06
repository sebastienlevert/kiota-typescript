import {deserializeIntoAggregationOption} from './deserializeIntoAggregationOption';
import {deserializeIntoResultTemplateOption} from './deserializeIntoResultTemplateOption';
import {deserializeIntoSearchAlterationOptions} from './deserializeIntoSearchAlterationOptions';
import {deserializeIntoSearchQuery} from './deserializeIntoSearchQuery';
import {deserializeIntoSortProperty} from './deserializeIntoSortProperty';
import {EntityType} from './entityType';
import {SearchRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchRequest(searchRequest: SearchRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationFilters": n => { searchRequest.aggregationFilters = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "aggregations": n => { searchRequest.aggregations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAggregationOption) as any ; },
        "contentSources": n => { searchRequest.contentSources = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "enableTopResults": n => { searchRequest.enableTopResults = n.getBooleanValue() as any ; },
        "entityTypes": n => { searchRequest.entityTypes = n.getEnumValues<EntityType>(EntityType) as any ; },
        "fields": n => { searchRequest.fields = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "from": n => { searchRequest.from = n.getNumberValue() as any ; },
        "@odata.type": n => { searchRequest.odataType = n.getStringValue() as any ; },
        "query": n => { searchRequest.query = n.getObject(deserializeIntoSearchQuery) as any ; },
        "queryAlterationOptions": n => { searchRequest.queryAlterationOptions = n.getObject(deserializeIntoSearchAlterationOptions) as any ; },
        "resultTemplateOptions": n => { searchRequest.resultTemplateOptions = n.getObject(deserializeIntoResultTemplateOption) as any ; },
        "size": n => { searchRequest.size = n.getNumberValue() as any ; },
        "sortProperties": n => { searchRequest.sortProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSortProperty) as any ; },
    }
}
