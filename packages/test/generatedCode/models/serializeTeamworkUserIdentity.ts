import {TeamworkUserIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkUserIdentity(writer: SerializationWriter, teamworkUserIdentity: TeamworkUserIdentity | undefined = {}) : void {
        serializeIdentity(writer, teamworkUserIdentity)
            writer.writeEnumValue<TeamworkUserIdentityType>("userIdentityType", teamworkUserIdentity.userIdentityType);
}
