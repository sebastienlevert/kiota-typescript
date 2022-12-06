import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyAssignment} from '../../../../models/serializeDeviceCompliancePolicyAssignment';
import {AssignResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignResponse(writer: SerializationWriter, assignResponse: AssignResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", assignResponse.value as any, serializeDeviceCompliancePolicyAssignment);
}
