import {IdentityUserFlowAttributeAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityUserFlowAttributeAssignment} from './serializeIdentityUserFlowAttributeAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeAssignmentCollectionResponse(writer: SerializationWriter, identityUserFlowAttributeAssignmentCollectionResponse: IdentityUserFlowAttributeAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityUserFlowAttributeAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityUserFlowAttributeAssignmentCollectionResponse.value as any, serializeIdentityUserFlowAttributeAssignment);
}
