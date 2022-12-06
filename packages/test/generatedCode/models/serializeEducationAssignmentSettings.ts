import {EducationAssignmentSettings} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentSettings(writer: SerializationWriter, educationAssignmentSettings: EducationAssignmentSettings | undefined = {}) : void {
        serializeEntity(writer, educationAssignmentSettings)
            writer.writeBooleanValue("submissionAnimationDisabled", educationAssignmentSettings.submissionAnimationDisabled);
}
