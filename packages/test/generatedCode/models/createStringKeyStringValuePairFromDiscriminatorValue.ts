import {StringKeyStringValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringKeyStringValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) : StringKeyStringValuePair {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StringKeyStringValuePair();
}
