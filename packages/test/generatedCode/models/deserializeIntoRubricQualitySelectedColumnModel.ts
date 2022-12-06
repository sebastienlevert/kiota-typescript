import {RubricQualitySelectedColumnModel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualitySelectedColumnModel(rubricQualitySelectedColumnModel: RubricQualitySelectedColumnModel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "columnId": n => { rubricQualitySelectedColumnModel.columnId = n.getStringValue() as any ; },
        "@odata.type": n => { rubricQualitySelectedColumnModel.odataType = n.getStringValue() as any ; },
        "qualityId": n => { rubricQualitySelectedColumnModel.qualityId = n.getStringValue() as any ; },
    }
}
