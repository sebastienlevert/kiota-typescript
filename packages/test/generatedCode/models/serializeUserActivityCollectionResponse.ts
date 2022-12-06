import {UserActivityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserActivity} from './serializeUserActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserActivityCollectionResponse(writer: SerializationWriter, userActivityCollectionResponse: UserActivityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userActivityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userActivityCollectionResponse.value as any, serializeUserActivity);
}
