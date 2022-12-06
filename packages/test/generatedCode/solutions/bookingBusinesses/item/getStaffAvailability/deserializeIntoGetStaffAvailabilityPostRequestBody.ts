import {deserializeIntoDateTimeTimeZone} from '../../../../models/deserializeIntoDateTimeTimeZone';
import {GetStaffAvailabilityPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetStaffAvailabilityPostRequestBody(getStaffAvailabilityPostRequestBody: GetStaffAvailabilityPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { getStaffAvailabilityPostRequestBody.endDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "staffIds": n => { getStaffAvailabilityPostRequestBody.staffIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "startDateTime": n => { getStaffAvailabilityPostRequestBody.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
