import {PayloadResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPayloadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PayloadResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PayloadResponse();
}
