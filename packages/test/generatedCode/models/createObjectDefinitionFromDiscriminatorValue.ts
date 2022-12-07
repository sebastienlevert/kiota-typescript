import {ObjectDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ObjectDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ObjectDefinition();
}
