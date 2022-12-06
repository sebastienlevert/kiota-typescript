import {ScheduleItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeScheduleItem} from './serializeScheduleItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleItemCollectionResponse(writer: SerializationWriter, scheduleItemCollectionResponse: ScheduleItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, scheduleItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", scheduleItemCollectionResponse.value as any, serializeScheduleItem);
}
