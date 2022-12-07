import {PayloadTypes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPayloadTypesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PayloadTypes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PayloadTypes();
}
