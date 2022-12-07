import {TeamworkTagIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagIdentity(writer: SerializationWriter, teamworkTagIdentity: TeamworkTagIdentity | undefined = {}) : void {
        serializeIdentity(writer, teamworkTagIdentity)
}
