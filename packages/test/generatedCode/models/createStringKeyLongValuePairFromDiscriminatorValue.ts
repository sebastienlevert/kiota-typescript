import {StringKeyLongValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringKeyLongValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) : StringKeyLongValuePair {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StringKeyLongValuePair();
}
