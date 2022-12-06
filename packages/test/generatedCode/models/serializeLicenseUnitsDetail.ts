import {LicenseUnitsDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseUnitsDetail(writer: SerializationWriter, licenseUnitsDetail: LicenseUnitsDetail | undefined = {}) : void {
            writer.writeNumberValue("enabled", licenseUnitsDetail.enabled);
            writer.writeStringValue("@odata.type", licenseUnitsDetail.odataType);
            writer.writeNumberValue("suspended", licenseUnitsDetail.suspended);
            writer.writeNumberValue("warning", licenseUnitsDetail.warning);
}
