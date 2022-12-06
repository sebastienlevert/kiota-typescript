import {deserializeIntoGroupAssignmentTarget} from './deserializeIntoGroupAssignmentTarget';
import {ExclusionGroupAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExclusionGroupAssignmentTarget(exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGroupAssignmentTarget(exclusionGroupAssignmentTarget),
    }
}
