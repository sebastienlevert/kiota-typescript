import {AssociatedTeamInfo} from './index';
import {serializeTeamInfo} from './serializeTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfo(writer: SerializationWriter, associatedTeamInfo: AssociatedTeamInfo | undefined = {}) : void {
        serializeTeamInfo(writer, associatedTeamInfo)
}
