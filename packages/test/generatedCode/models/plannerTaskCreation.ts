import {PlannerTeamsPublicationInfo} from './index';
import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTaskCreation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The creationSourceKind property */
    creationSourceKind?: PlannerCreationSourceKind;
    /** The teamsPublicationInfo property */
    teamsPublicationInfo?: PlannerTeamsPublicationInfo;
}
