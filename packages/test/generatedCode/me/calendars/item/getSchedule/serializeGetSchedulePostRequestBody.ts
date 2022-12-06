import {serializeDateTimeTimeZone} from '../../../../models/serializeDateTimeTimeZone';
import {GetSchedulePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetSchedulePostRequestBody(writer: SerializationWriter, getSchedulePostRequestBody: GetSchedulePostRequestBody | undefined = {}) : void {
            writer.writeNumberValue("availabilityViewInterval", getSchedulePostRequestBody.availabilityViewInterval);
            writer.writeObjectValueFromMethod("endTime", getSchedulePostRequestBody.endTime as any, serializeDateTimeTimeZone);
            writer.writeCollectionOfPrimitiveValues<string>("schedules", getSchedulePostRequestBody.schedules);
            writer.writeObjectValueFromMethod("startTime", getSchedulePostRequestBody.startTime as any, serializeDateTimeTimeZone);
}
