import {Approval} from './index';
import {serializeApprovalStep} from './serializeApprovalStep';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApproval(writer: SerializationWriter, approval: Approval | undefined = {}) : void {
        serializeEntity(writer, approval)
            writer.writeCollectionOfObjectValuesFromMethod("steps", approval.steps as any, serializeApprovalStep);
}
