import {SearchBucketCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSearchBucket} from './serializeSearchBucket';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchBucketCollectionResponse(writer: SerializationWriter, searchBucketCollectionResponse: SearchBucketCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, searchBucketCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", searchBucketCollectionResponse.value as any, serializeSearchBucket);
}
