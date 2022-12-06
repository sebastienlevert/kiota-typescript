import {CleanWindowsDevicePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCleanWindowsDevicePostRequestBody(cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "keepUserData": n => { cleanWindowsDevicePostRequestBody.keepUserData = n.getBooleanValue() as any ; },
    }
}
