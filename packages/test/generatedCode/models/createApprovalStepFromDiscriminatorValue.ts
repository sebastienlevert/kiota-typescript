import {ApprovalStep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalStepFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalStep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalStep();
}
