import {ExclusionGroupAssignmentTarget} from './index';
import {serializeGroupAssignmentTarget} from './serializeGroupAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExclusionGroupAssignmentTarget(writer: SerializationWriter, exclusionGroupAssignmentTarget: ExclusionGroupAssignmentTarget | undefined = {}) : void {
        serializeGroupAssignmentTarget(writer, exclusionGroupAssignmentTarget)
}
