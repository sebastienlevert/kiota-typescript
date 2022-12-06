import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {TeamworkApplicationIdentity} from './index';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkApplicationIdentity(teamworkApplicationIdentity: TeamworkApplicationIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkApplicationIdentity),
        "applicationIdentityType": n => { teamworkApplicationIdentity.applicationIdentityType = n.getEnumValue<TeamworkApplicationIdentityType>(TeamworkApplicationIdentityType) as any ; },
    }
}
