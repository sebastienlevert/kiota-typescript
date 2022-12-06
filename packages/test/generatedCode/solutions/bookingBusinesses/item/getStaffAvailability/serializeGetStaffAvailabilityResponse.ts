import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeStaffAvailabilityItem} from '../../../../models/serializeStaffAvailabilityItem';
import {GetStaffAvailabilityResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetStaffAvailabilityResponse(writer: SerializationWriter, getStaffAvailabilityResponse: GetStaffAvailabilityResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getStaffAvailabilityResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getStaffAvailabilityResponse.value as any, serializeStaffAvailabilityItem);
}
