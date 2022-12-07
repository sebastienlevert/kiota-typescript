import {TeamInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamInfo();
}
