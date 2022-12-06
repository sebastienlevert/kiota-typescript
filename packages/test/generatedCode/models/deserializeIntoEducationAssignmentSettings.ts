import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentSettings(educationAssignmentSettings: EducationAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentSettings),
        "submissionAnimationDisabled": n => { educationAssignmentSettings.submissionAnimationDisabled = n.getBooleanValue() as any ; },
    }
}
