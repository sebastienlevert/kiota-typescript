import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {TeamworkTagIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagIdentity(teamworkTagIdentity: TeamworkTagIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkTagIdentity),
    }
}
