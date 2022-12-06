import {SchedulingGroupCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSchedulingGroup} from './serializeSchedulingGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchedulingGroupCollectionResponse(writer: SerializationWriter, schedulingGroupCollectionResponse: SchedulingGroupCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, schedulingGroupCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", schedulingGroupCollectionResponse.value as any, serializeSchedulingGroup);
}
