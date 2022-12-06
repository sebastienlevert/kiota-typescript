import {deserializeIntoUpdateWindowsDeviceAccountActionParameter} from '../../../../models/deserializeIntoUpdateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateWindowsDeviceAccountPostRequestBody(updateWindowsDeviceAccountPostRequestBody: UpdateWindowsDeviceAccountPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "updateWindowsDeviceAccountActionParameter": n => { updateWindowsDeviceAccountPostRequestBody.updateWindowsDeviceAccountActionParameter = n.getObject(deserializeIntoUpdateWindowsDeviceAccountActionParameter) as any ; },
    }
}
