import {AppRoleAssignmentCollectionResponse} from './index';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRoleAssignmentCollectionResponse(writer: SerializationWriter, appRoleAssignmentCollectionResponse: AppRoleAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appRoleAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appRoleAssignmentCollectionResponse.value as any, serializeAppRoleAssignment);
}
