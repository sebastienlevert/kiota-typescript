import {TermsAndConditionsAssignment} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAssignment(writer: SerializationWriter, termsAndConditionsAssignment: TermsAndConditionsAssignment | undefined = {}) : void {
        serializeEntity(writer, termsAndConditionsAssignment)
            writer.writeObjectValueFromMethod("target", termsAndConditionsAssignment.target as any, serializeDeviceAndAppManagementAssignmentTarget);
}
