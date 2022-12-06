import {deserializeIntoAppRole} from './deserializeIntoAppRole';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppRoleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppRoleCollectionResponse(appRoleCollectionResponse: AppRoleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appRoleCollectionResponse),
        "value": n => { appRoleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppRole) as any ; },
    }
}
