import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from '../../../../models/deserializeIntoUnifiedRoleEligibilitySchedule';
import {FilterByCurrentUserWithOnResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilitySchedule) as any ; },
    }
}
