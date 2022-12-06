import {serializeDeviceCompliancePolicyAssignment} from '../../../../models/serializeDeviceCompliancePolicyAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("assignments", assignPostRequestBody.assignments as any, serializeDeviceCompliancePolicyAssignment);
}
