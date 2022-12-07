import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamsTemplate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTemplate(teamsTemplate: TeamsTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsTemplate),
    }
}
