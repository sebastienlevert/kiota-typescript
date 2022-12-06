import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedEBookAssignment} from './deserializeIntoManagedEBookAssignment';
import {ManagedEBookAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookAssignmentCollectionResponse(managedEBookAssignmentCollectionResponse: ManagedEBookAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedEBookAssignmentCollectionResponse),
        "value": n => { managedEBookAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedEBookAssignment) as any ; },
    }
}
