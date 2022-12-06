import {PlannerBucketCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlannerBucket} from './serializePlannerBucket';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucketCollectionResponse(writer: SerializationWriter, plannerBucketCollectionResponse: PlannerBucketCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, plannerBucketCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", plannerBucketCollectionResponse.value as any, serializePlannerBucket);
}
