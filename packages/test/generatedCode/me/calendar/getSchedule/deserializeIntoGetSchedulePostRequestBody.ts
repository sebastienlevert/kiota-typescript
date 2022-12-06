import {deserializeIntoDateTimeTimeZone} from '../../../models/deserializeIntoDateTimeTimeZone';
import {GetSchedulePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetSchedulePostRequestBody(getSchedulePostRequestBody: GetSchedulePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "availabilityViewInterval": n => { getSchedulePostRequestBody.availabilityViewInterval = n.getNumberValue() as any ; },
        "endTime": n => { getSchedulePostRequestBody.endTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "schedules": n => { getSchedulePostRequestBody.schedules = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "startTime": n => { getSchedulePostRequestBody.startTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
