import {TeamworkApplicationIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkApplicationIdentity(writer: SerializationWriter, teamworkApplicationIdentity: TeamworkApplicationIdentity | undefined = {}) : void {
        serializeIdentity(writer, teamworkApplicationIdentity)
            writer.writeEnumValue<TeamworkApplicationIdentityType>("applicationIdentityType", teamworkApplicationIdentity.applicationIdentityType);
}
