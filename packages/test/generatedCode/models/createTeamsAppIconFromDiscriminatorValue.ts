import {TeamsAppIcon} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppIconFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppIcon {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppIcon();
}
