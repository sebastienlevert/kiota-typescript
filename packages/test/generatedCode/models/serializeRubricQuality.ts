import {RubricQuality} from './index';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeRubricCriterion} from './serializeRubricCriterion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQuality(writer: SerializationWriter, rubricQuality: RubricQuality | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("criteria", rubricQuality.criteria as any, serializeRubricCriterion);
            writer.writeObjectValueFromMethod("description", rubricQuality.description as any, serializeEducationItemBody);
            writer.writeStringValue("displayName", rubricQuality.displayName);
            writer.writeStringValue("@odata.type", rubricQuality.odataType);
            writer.writeStringValue("qualityId", rubricQuality.qualityId);
            writer.writeNumberValue("weight", rubricQuality.weight);
}
