import {TeamsAppInstallation} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstallation(writer: SerializationWriter, teamsAppInstallation: TeamsAppInstallation | undefined = {}) : void {
        serializeEntity(writer, teamsAppInstallation)
            writer.writeObjectValueFromMethod("teamsApp", teamsAppInstallation.teamsApp as any, serializeTeamsApp);
            writer.writeObjectValueFromMethod("teamsAppDefinition", teamsAppInstallation.teamsAppDefinition as any, serializeTeamsAppDefinition);
}
