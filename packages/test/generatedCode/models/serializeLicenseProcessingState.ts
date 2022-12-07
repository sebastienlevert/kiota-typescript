import {LicenseProcessingState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseProcessingState(writer: SerializationWriter, licenseProcessingState: LicenseProcessingState | undefined = {}) : void {
            writer.writeStringValue("state", licenseProcessingState.state);
}
