import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TermsAndConditionsAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAssignment(termsAndConditionsAssignment: TermsAndConditionsAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsAndConditionsAssignment),
        "target": n => { termsAndConditionsAssignment.target = n.getObject(deserializeIntoDeviceAndAppManagementAssignmentTarget) as any ; },
    }
}
