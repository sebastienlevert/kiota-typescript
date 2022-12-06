import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoStaffAvailabilityItem} from '../../../../models/deserializeIntoStaffAvailabilityItem';
import {GetStaffAvailabilityResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetStaffAvailabilityResponse(getStaffAvailabilityResponse: GetStaffAvailabilityResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getStaffAvailabilityResponse),
        "value": n => { getStaffAvailabilityResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStaffAvailabilityItem) as any ; },
    }
}
