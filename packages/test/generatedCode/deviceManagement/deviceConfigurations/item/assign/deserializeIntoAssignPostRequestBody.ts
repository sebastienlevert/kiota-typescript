import {deserializeIntoDeviceConfigurationAssignment} from '../../../../models/deserializeIntoDeviceConfigurationAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignments": n => { assignPostRequestBody.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationAssignment) as any ; },
    }
}
