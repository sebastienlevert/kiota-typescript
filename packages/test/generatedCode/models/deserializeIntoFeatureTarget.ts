import {FeatureTargetType} from './featureTargetType';
import {FeatureTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureTarget(featureTarget: FeatureTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { featureTarget.id = n.getStringValue() as any ; },
        "@odata.type": n => { featureTarget.odataType = n.getStringValue() as any ; },
        "targetType": n => { featureTarget.targetType = n.getEnumValue<FeatureTargetType>(FeatureTargetType) as any ; },
    }
}
