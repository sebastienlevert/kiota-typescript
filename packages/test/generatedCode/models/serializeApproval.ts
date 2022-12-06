import {Approval} from './index';
import {serializeApprovalStage} from './serializeApprovalStage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApproval(writer: SerializationWriter, approval: Approval | undefined = {}) : void {
        serializeEntity(writer, approval)
            writer.writeCollectionOfObjectValuesFromMethod("stages", approval.stages as any, serializeApprovalStage);
}
