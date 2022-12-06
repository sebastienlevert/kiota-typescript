import {deserializeIntoAccessPackageAssignmentRequestRequirements} from '../../../../../models/deserializeIntoAccessPackageAssignmentRequestRequirements';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetApplicablePolicyRequirementsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetApplicablePolicyRequirementsResponse(getApplicablePolicyRequirementsResponse: GetApplicablePolicyRequirementsResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getApplicablePolicyRequirementsResponse),
        "value": n => { getApplicablePolicyRequirementsResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignmentRequestRequirements) as any ; },
    }
}
