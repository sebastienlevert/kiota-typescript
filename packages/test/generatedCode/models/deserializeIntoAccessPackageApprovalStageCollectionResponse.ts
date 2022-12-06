import {deserializeIntoAccessPackageApprovalStage} from './deserializeIntoAccessPackageApprovalStage';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessPackageApprovalStageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageApprovalStageCollectionResponse(accessPackageApprovalStageCollectionResponse: AccessPackageApprovalStageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageApprovalStageCollectionResponse),
        "value": n => { accessPackageApprovalStageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageApprovalStage) as any ; },
    }
}
