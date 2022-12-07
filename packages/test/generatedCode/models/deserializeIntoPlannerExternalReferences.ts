import {PlannerExternalReferences} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerExternalReferences(plannerExternalReferences: PlannerExternalReferences | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
