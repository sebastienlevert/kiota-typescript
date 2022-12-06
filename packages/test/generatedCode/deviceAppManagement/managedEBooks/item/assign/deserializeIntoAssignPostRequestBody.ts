import {deserializeIntoManagedEBookAssignment} from '../../../../models/deserializeIntoManagedEBookAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "managedEBookAssignments": n => { assignPostRequestBody.managedEBookAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedEBookAssignment) as any ; },
    }
}
