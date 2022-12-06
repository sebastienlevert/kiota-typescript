import {AccessPackageApprovalStageCollectionResponse} from './index';
import {serializeAccessPackageApprovalStage} from './serializeAccessPackageApprovalStage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageApprovalStageCollectionResponse(writer: SerializationWriter, accessPackageApprovalStageCollectionResponse: AccessPackageApprovalStageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageApprovalStageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessPackageApprovalStageCollectionResponse.value as any, serializeAccessPackageApprovalStage);
}
