import {CleanWindowsDevicePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCleanWindowsDevicePostRequestBody(writer: SerializationWriter, cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("keepUserData", cleanWindowsDevicePostRequestBody.keepUserData);
}
