import {DeviceLogCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceLogCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceLogCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceLogCollectionResponse();
}
