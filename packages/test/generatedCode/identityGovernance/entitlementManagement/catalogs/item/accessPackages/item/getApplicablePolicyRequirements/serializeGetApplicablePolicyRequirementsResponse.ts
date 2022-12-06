import {serializeAccessPackageAssignmentRequestRequirements} from '../../../../../../../models/serializeAccessPackageAssignmentRequestRequirements';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetApplicablePolicyRequirementsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetApplicablePolicyRequirementsResponse(writer: SerializationWriter, getApplicablePolicyRequirementsResponse: GetApplicablePolicyRequirementsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getApplicablePolicyRequirementsResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getApplicablePolicyRequirementsResponse.value as any, serializeAccessPackageAssignmentRequestRequirements);
}
