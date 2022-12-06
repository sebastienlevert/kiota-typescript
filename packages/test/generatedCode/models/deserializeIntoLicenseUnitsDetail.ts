import {LicenseUnitsDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseUnitsDetail(licenseUnitsDetail: LicenseUnitsDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "enabled": n => { licenseUnitsDetail.enabled = n.getNumberValue() as any ; },
        "@odata.type": n => { licenseUnitsDetail.odataType = n.getStringValue() as any ; },
        "suspended": n => { licenseUnitsDetail.suspended = n.getNumberValue() as any ; },
        "warning": n => { licenseUnitsDetail.warning = n.getNumberValue() as any ; },
    }
}
