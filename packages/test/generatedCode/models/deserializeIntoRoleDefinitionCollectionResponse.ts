import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {RoleDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleDefinitionCollectionResponse(roleDefinitionCollectionResponse: RoleDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roleDefinitionCollectionResponse),
        "value": n => { roleDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoleDefinition) as any ; },
    }
}
