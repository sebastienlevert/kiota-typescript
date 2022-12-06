import {deserializeIntoSearchAggregation} from './deserializeIntoSearchAggregation';
import {deserializeIntoSearchHit} from './deserializeIntoSearchHit';
import {SearchHitsContainer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHitsContainer(searchHitsContainer: SearchHitsContainer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregations": n => { searchHitsContainer.aggregations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchAggregation) as any ; },
        "hits": n => { searchHitsContainer.hits = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchHit) as any ; },
        "moreResultsAvailable": n => { searchHitsContainer.moreResultsAvailable = n.getBooleanValue() as any ; },
        "@odata.type": n => { searchHitsContainer.odataType = n.getStringValue() as any ; },
        "total": n => { searchHitsContainer.total = n.getNumberValue() as any ; },
    }
}
