import {deserializeIntoCertificationControl} from './deserializeIntoCertificationControl';
import {ComplianceInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceInformation(complianceInformation: ComplianceInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificationControls": n => { complianceInformation.certificationControls = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCertificationControl) as any ; },
        "certificationName": n => { complianceInformation.certificationName = n.getStringValue() as any ; },
        "@odata.type": n => { complianceInformation.odataType = n.getStringValue() as any ; },
    }
}
