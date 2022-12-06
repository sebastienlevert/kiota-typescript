import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppRoleAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppRoleAssignmentCollectionResponse(appRoleAssignmentCollectionResponse: AppRoleAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appRoleAssignmentCollectionResponse),
        "value": n => { appRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRoleAssignment) as any ; },
    }
}
