import {serializeUpdateWindowsDeviceAccountActionParameter} from '../../../../../models/serializeUpdateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateWindowsDeviceAccountPostRequestBody(writer: SerializationWriter, updateWindowsDeviceAccountPostRequestBody: UpdateWindowsDeviceAccountPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("updateWindowsDeviceAccountActionParameter", updateWindowsDeviceAccountPostRequestBody.updateWindowsDeviceAccountActionParameter as any, serializeUpdateWindowsDeviceAccountActionParameter);
}
