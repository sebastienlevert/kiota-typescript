import {ObjectMapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectMappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : ObjectMapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ObjectMapping();
}
