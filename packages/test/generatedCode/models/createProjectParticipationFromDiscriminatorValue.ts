import {ProjectParticipation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProjectParticipationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProjectParticipation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProjectParticipation();
}
