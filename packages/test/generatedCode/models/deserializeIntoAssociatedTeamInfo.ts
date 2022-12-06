import {deserializeIntoTeamInfo} from './deserializeIntoTeamInfo';
import {AssociatedTeamInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssociatedTeamInfo(associatedTeamInfo: AssociatedTeamInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamInfo(associatedTeamInfo),
    }
}
