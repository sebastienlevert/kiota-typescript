import {PlannerExternalReferences} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerExternalReferences(writer: SerializationWriter, plannerExternalReferences: PlannerExternalReferences | undefined = {}) : void {
            writer.writeStringValue("@odata.type", plannerExternalReferences.odataType);
}
