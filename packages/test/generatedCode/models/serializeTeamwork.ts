import {Teamwork} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamwork(writer: SerializationWriter, teamwork: Teamwork | undefined = {}) : void {
        serializeEntity(writer, teamwork)
            writer.writeCollectionOfObjectValuesFromMethod("workforceIntegrations", teamwork.workforceIntegrations as any, serializeWorkforceIntegration);
}
