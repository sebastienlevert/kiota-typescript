import {TeamsApp} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsApp(writer: SerializationWriter, teamsApp: TeamsApp | undefined = {}) : void {
        serializeEntity(writer, teamsApp)
            writer.writeCollectionOfObjectValuesFromMethod("appDefinitions", teamsApp.appDefinitions as any, serializeTeamsAppDefinition);
            writer.writeStringValue("displayName", teamsApp.displayName);
            writer.writeEnumValue<TeamsAppDistributionMethod>("distributionMethod", teamsApp.distributionMethod);
            writer.writeStringValue("externalId", teamsApp.externalId);
}
