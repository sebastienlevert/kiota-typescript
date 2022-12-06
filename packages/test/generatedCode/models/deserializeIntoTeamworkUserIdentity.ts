import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {TeamworkUserIdentity} from './index';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkUserIdentity(teamworkUserIdentity: TeamworkUserIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkUserIdentity),
        "userIdentityType": n => { teamworkUserIdentity.userIdentityType = n.getEnumValue<TeamworkUserIdentityType>(TeamworkUserIdentityType) as any ; },
    }
}
