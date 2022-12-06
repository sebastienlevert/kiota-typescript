import {serializeManagedEBookAssignment} from '../../../../models/serializeManagedEBookAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("managedEBookAssignments", assignPostRequestBody.managedEBookAssignments as any, serializeManagedEBookAssignment);
}
