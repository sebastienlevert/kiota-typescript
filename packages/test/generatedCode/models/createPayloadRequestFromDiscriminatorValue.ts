import {PayloadRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPayloadRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : PayloadRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PayloadRequest();
}
