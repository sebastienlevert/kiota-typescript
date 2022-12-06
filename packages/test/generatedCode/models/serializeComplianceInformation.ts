import {ComplianceInformation} from './index';
import {serializeCertificationControl} from './serializeCertificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceInformation(writer: SerializationWriter, complianceInformation: ComplianceInformation | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("certificationControls", complianceInformation.certificationControls as any, serializeCertificationControl);
            writer.writeStringValue("certificationName", complianceInformation.certificationName);
            writer.writeStringValue("@odata.type", complianceInformation.odataType);
}
