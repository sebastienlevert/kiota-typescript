import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeamsApp} from './deserializeIntoTeamsApp';
import {deserializeIntoTeamsAppDefinition} from './deserializeIntoTeamsAppDefinition';
import {TeamsAppInstallation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstallation(teamsAppInstallation: TeamsAppInstallation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppInstallation),
        "teamsApp": n => { teamsAppInstallation.teamsApp = n.getObject(deserializeIntoTeamsApp) as any ; },
        "teamsAppDefinition": n => { teamsAppInstallation.teamsAppDefinition = n.getObject(deserializeIntoTeamsAppDefinition) as any ; },
    }
}
