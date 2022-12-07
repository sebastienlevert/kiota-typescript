import {TeamworkHostedContent} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkHostedContent(writer: SerializationWriter, teamworkHostedContent: TeamworkHostedContent | undefined = {}) : void {
        serializeEntity(writer, teamworkHostedContent)
            writer.writeStringValue("contentBytes", teamworkHostedContent.contentBytes);
            writer.writeStringValue("contentType", teamworkHostedContent.contentType);
}
