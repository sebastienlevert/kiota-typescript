import {LicenseAssignmentState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseAssignmentState(writer: SerializationWriter, licenseAssignmentState: LicenseAssignmentState | undefined = {}) : void {
            writer.writeStringValue("assignedByGroup", licenseAssignmentState.assignedByGroup);
            writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", licenseAssignmentState.disabledPlans);
            writer.writeStringValue("error", licenseAssignmentState.error_escaped);
            writer.writeDateValue("lastUpdatedDateTime", licenseAssignmentState.lastUpdatedDateTime);
            writer.writeStringValue("skuId", licenseAssignmentState.skuId);
            writer.writeStringValue("state", licenseAssignmentState.state);
}
