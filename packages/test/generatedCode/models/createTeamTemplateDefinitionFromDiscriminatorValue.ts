import {TeamTemplateDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamTemplateDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamTemplateDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamTemplateDefinition();
}
