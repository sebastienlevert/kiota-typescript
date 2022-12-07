import {PlannerTaskCreation} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {serializePlannerTeamsPublicationInfo} from './serializePlannerTeamsPublicationInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTaskCreation(writer: SerializationWriter, plannerTaskCreation: PlannerTaskCreation | undefined = {}) : void {
            writer.writeEnumValue<PlannerCreationSourceKind>("creationSourceKind", plannerTaskCreation.creationSourceKind);
            writer.writeObjectValueFromMethod("teamsPublicationInfo", plannerTaskCreation.teamsPublicationInfo as any, serializePlannerTeamsPublicationInfo);
}
