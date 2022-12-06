import {EntityType} from './entityType';
import {SearchRequest} from './index';
import {serializeAggregationOption} from './serializeAggregationOption';
import {serializeResultTemplateOption} from './serializeResultTemplateOption';
import {serializeSearchAlterationOptions} from './serializeSearchAlterationOptions';
import {serializeSearchQuery} from './serializeSearchQuery';
import {serializeSortProperty} from './serializeSortProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchRequest(writer: SerializationWriter, searchRequest: SearchRequest | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("aggregationFilters", searchRequest.aggregationFilters);
            writer.writeCollectionOfObjectValuesFromMethod("aggregations", searchRequest.aggregations as any, serializeAggregationOption);
            writer.writeCollectionOfPrimitiveValues<string>("contentSources", searchRequest.contentSources);
            writer.writeBooleanValue("enableTopResults", searchRequest.enableTopResults);
            writer.writeEnumValue<EntityType>("entityTypes", searchRequest.entityTypes);
            writer.writeCollectionOfPrimitiveValues<string>("fields", searchRequest.fields);
            writer.writeNumberValue("from", searchRequest.from);
            writer.writeStringValue("@odata.type", searchRequest.odataType);
            writer.writeObjectValueFromMethod("query", searchRequest.query as any, serializeSearchQuery);
            writer.writeObjectValueFromMethod("queryAlterationOptions", searchRequest.queryAlterationOptions as any, serializeSearchAlterationOptions);
            writer.writeObjectValueFromMethod("resultTemplateOptions", searchRequest.resultTemplateOptions as any, serializeResultTemplateOption);
            writer.writeNumberValue("size", searchRequest.size);
            writer.writeCollectionOfObjectValuesFromMethod("sortProperties", searchRequest.sortProperties as any, serializeSortProperty);
}
