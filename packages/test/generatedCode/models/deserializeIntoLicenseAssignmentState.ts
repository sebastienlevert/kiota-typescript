import {LicenseAssignmentState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseAssignmentState(licenseAssignmentState: LicenseAssignmentState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedByGroup": n => { licenseAssignmentState.assignedByGroup = n.getStringValue() as any ; },
        "disabledPlans": n => { licenseAssignmentState.disabledPlans = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "error": n => { licenseAssignmentState.error_escaped = n.getStringValue() as any ; },
        "lastUpdatedDateTime": n => { licenseAssignmentState.lastUpdatedDateTime = n.getDateValue() as any ; },
        "skuId": n => { licenseAssignmentState.skuId = n.getStringValue() as any ; },
        "state": n => { licenseAssignmentState.state = n.getStringValue() as any ; },
    }
}
