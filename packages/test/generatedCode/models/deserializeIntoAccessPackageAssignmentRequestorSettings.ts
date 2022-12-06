import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {AccessPackageAssignmentRequestorSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestorSettings(accessPackageAssignmentRequestorSettings: AccessPackageAssignmentRequestorSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCustomAssignmentSchedule": n => { accessPackageAssignmentRequestorSettings.allowCustomAssignmentSchedule = n.getBooleanValue() as any ; },
        "enableOnBehalfRequestorsToAddAccess": n => { accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToAddAccess = n.getBooleanValue() as any ; },
        "enableOnBehalfRequestorsToRemoveAccess": n => { accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToRemoveAccess = n.getBooleanValue() as any ; },
        "enableOnBehalfRequestorsToUpdateAccess": n => { accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToUpdateAccess = n.getBooleanValue() as any ; },
        "enableTargetsToSelfAddAccess": n => { accessPackageAssignmentRequestorSettings.enableTargetsToSelfAddAccess = n.getBooleanValue() as any ; },
        "enableTargetsToSelfRemoveAccess": n => { accessPackageAssignmentRequestorSettings.enableTargetsToSelfRemoveAccess = n.getBooleanValue() as any ; },
        "enableTargetsToSelfUpdateAccess": n => { accessPackageAssignmentRequestorSettings.enableTargetsToSelfUpdateAccess = n.getBooleanValue() as any ; },
        "@odata.type": n => { accessPackageAssignmentRequestorSettings.odataType = n.getStringValue() as any ; },
        "onBehalfRequestors": n => { accessPackageAssignmentRequestorSettings.onBehalfRequestors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
    }
}
