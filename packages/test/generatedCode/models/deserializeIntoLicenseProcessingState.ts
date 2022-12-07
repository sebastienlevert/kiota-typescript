import {LicenseProcessingState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseProcessingState(licenseProcessingState: LicenseProcessingState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "state": n => { licenseProcessingState.state = n.getStringValue() as any ; },
    }
}
