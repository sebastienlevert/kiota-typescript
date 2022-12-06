import {serializeDateTimeTimeZone} from '../../../../models/serializeDateTimeTimeZone';
import {GetStaffAvailabilityPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetStaffAvailabilityPostRequestBody(writer: SerializationWriter, getStaffAvailabilityPostRequestBody: GetStaffAvailabilityPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("endDateTime", getStaffAvailabilityPostRequestBody.endDateTime as any, serializeDateTimeTimeZone);
            writer.writeCollectionOfPrimitiveValues<string>("staffIds", getStaffAvailabilityPostRequestBody.staffIds);
            writer.writeObjectValueFromMethod("startDateTime", getStaffAvailabilityPostRequestBody.startDateTime as any, serializeDateTimeTimeZone);
}
