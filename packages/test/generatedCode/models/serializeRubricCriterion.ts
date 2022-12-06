import {RubricCriterion} from './index';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricCriterion(writer: SerializationWriter, rubricCriterion: RubricCriterion | undefined = {}) : void {
            writer.writeObjectValueFromMethod("description", rubricCriterion.description as any, serializeEducationItemBody);
            writer.writeStringValue("@odata.type", rubricCriterion.odataType);
}
