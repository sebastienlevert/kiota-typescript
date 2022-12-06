import {VppLicensingType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVppLicensingType(writer: SerializationWriter, vppLicensingType: VppLicensingType | undefined = {}) : void {
            writer.writeStringValue("@odata.type", vppLicensingType.odataType);
            writer.writeBooleanValue("supportsDeviceLicensing", vppLicensingType.supportsDeviceLicensing);
            writer.writeBooleanValue("supportsUserLicensing", vppLicensingType.supportsUserLicensing);
}
