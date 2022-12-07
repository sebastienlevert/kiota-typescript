import {OutOfOfficeSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutOfOfficeSettings(outOfOfficeSettings: OutOfOfficeSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isOutOfOffice": n => { outOfOfficeSettings.isOutOfOffice = n.getBooleanValue() as any ; },
        "message": n => { outOfOfficeSettings.message = n.getStringValue() as any ; },
    }
}
