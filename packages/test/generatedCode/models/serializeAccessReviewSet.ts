import {AccessReviewSet} from './index';
import {serializeAccessReviewHistoryDefinition} from './serializeAccessReviewHistoryDefinition';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewSet(writer: SerializationWriter, accessReviewSet: AccessReviewSet | undefined = {}) : void {
        serializeEntity(writer, accessReviewSet)
            writer.writeCollectionOfObjectValuesFromMethod("definitions", accessReviewSet.definitions as any, serializeAccessReviewScheduleDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("historyDefinitions", accessReviewSet.historyDefinitions as any, serializeAccessReviewHistoryDefinition);
}
