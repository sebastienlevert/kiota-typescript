import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamworkHostedContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkHostedContent(teamworkHostedContent: TeamworkHostedContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkHostedContent),
        "contentBytes": n => { teamworkHostedContent.contentBytes = n.getStringValue() as any ; },
        "contentType": n => { teamworkHostedContent.contentType = n.getStringValue() as any ; },
    }
}
