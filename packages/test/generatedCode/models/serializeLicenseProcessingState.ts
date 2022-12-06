import {LicenseProcessingState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseProcessingState(writer: SerializationWriter, licenseProcessingState: LicenseProcessingState | undefined = {}) : void {
            writer.writeStringValue("@odata.type", licenseProcessingState.odataType);
            writer.writeStringValue("state", licenseProcessingState.state);
}
