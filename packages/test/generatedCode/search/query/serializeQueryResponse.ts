import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSearchResponse} from '../../models/serializeSearchResponse';
import {QueryResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQueryResponse(writer: SerializationWriter, queryResponse: QueryResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, queryResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", queryResponse.value as any, serializeSearchResponse);
}
