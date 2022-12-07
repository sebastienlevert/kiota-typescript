import {TeamsTemplate} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTemplate(writer: SerializationWriter, teamsTemplate: TeamsTemplate | undefined = {}) : void {
        serializeEntity(writer, teamsTemplate)
}
