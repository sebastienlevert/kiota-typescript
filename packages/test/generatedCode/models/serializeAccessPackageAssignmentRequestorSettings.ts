import {AccessPackageAssignmentRequestorSettings} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestorSettings(writer: SerializationWriter, accessPackageAssignmentRequestorSettings: AccessPackageAssignmentRequestorSettings | undefined = {}) : void {
            writer.writeBooleanValue("allowCustomAssignmentSchedule", accessPackageAssignmentRequestorSettings.allowCustomAssignmentSchedule);
            writer.writeBooleanValue("enableOnBehalfRequestorsToAddAccess", accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToAddAccess);
            writer.writeBooleanValue("enableOnBehalfRequestorsToRemoveAccess", accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToRemoveAccess);
            writer.writeBooleanValue("enableOnBehalfRequestorsToUpdateAccess", accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToUpdateAccess);
            writer.writeBooleanValue("enableTargetsToSelfAddAccess", accessPackageAssignmentRequestorSettings.enableTargetsToSelfAddAccess);
            writer.writeBooleanValue("enableTargetsToSelfRemoveAccess", accessPackageAssignmentRequestorSettings.enableTargetsToSelfRemoveAccess);
            writer.writeBooleanValue("enableTargetsToSelfUpdateAccess", accessPackageAssignmentRequestorSettings.enableTargetsToSelfUpdateAccess);
            writer.writeStringValue("@odata.type", accessPackageAssignmentRequestorSettings.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("onBehalfRequestors", accessPackageAssignmentRequestorSettings.onBehalfRequestors as any, serializeSubjectSet);
}
