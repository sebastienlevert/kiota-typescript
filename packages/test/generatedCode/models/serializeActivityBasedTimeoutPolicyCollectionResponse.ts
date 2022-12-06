import {ActivityBasedTimeoutPolicyCollectionResponse} from './index';
import {serializeActivityBasedTimeoutPolicy} from './serializeActivityBasedTimeoutPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicyCollectionResponse(writer: SerializationWriter, activityBasedTimeoutPolicyCollectionResponse: ActivityBasedTimeoutPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, activityBasedTimeoutPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", activityBasedTimeoutPolicyCollectionResponse.value as any, serializeActivityBasedTimeoutPolicy);
}
