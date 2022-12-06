import {deserializeIntoAccessReviewHistoryDefinition} from './deserializeIntoAccessReviewHistoryDefinition';
import {deserializeIntoAccessReviewScheduleDefinition} from './deserializeIntoAccessReviewScheduleDefinition';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessReviewSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewSet(accessReviewSet: AccessReviewSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewSet),
        "definitions": n => { accessReviewSet.definitions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewScheduleDefinition) as any ; },
        "historyDefinitions": n => { accessReviewSet.historyDefinitions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewHistoryDefinition) as any ; },
    }
}
