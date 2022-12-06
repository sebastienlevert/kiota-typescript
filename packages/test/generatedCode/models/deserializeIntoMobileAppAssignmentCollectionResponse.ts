import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileAppAssignment} from './deserializeIntoMobileAppAssignment';
import {MobileAppAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignmentCollectionResponse(mobileAppAssignmentCollectionResponse: MobileAppAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppAssignmentCollectionResponse),
        "value": n => { mobileAppAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppAssignment) as any ; },
    }
}
