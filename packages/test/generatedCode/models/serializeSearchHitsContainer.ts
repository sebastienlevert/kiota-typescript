import {SearchHitsContainer} from './index';
import {serializeSearchAggregation} from './serializeSearchAggregation';
import {serializeSearchHit} from './serializeSearchHit';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchHitsContainer(writer: SerializationWriter, searchHitsContainer: SearchHitsContainer | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("aggregations", searchHitsContainer.aggregations as any, serializeSearchAggregation);
            writer.writeCollectionOfObjectValuesFromMethod("hits", searchHitsContainer.hits as any, serializeSearchHit);
            writer.writeBooleanValue("moreResultsAvailable", searchHitsContainer.moreResultsAvailable);
            writer.writeStringValue("@odata.type", searchHitsContainer.odataType);
            writer.writeNumberValue("total", searchHitsContainer.total);
}
