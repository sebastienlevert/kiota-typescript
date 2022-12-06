import {deserializeIntoMobileAppAssignment} from '../../../../models/deserializeIntoMobileAppAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "mobileAppAssignments": n => { assignPostRequestBody.mobileAppAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppAssignment) as any ; },
    }
}
