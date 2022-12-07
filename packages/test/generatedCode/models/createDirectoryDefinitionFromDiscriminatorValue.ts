import {DirectoryDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryDefinition();
}
