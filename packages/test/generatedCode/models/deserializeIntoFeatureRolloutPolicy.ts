import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FeatureRolloutPolicy} from './index';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureRolloutPolicy(featureRolloutPolicy: FeatureRolloutPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(featureRolloutPolicy),
        "appliesTo": n => { featureRolloutPolicy.appliesTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "description": n => { featureRolloutPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { featureRolloutPolicy.displayName = n.getStringValue() as any ; },
        "feature": n => { featureRolloutPolicy.feature = n.getEnumValue<StagedFeatureName>(StagedFeatureName) as any ; },
        "isAppliedToOrganization": n => { featureRolloutPolicy.isAppliedToOrganization = n.getBooleanValue() as any ; },
        "isEnabled": n => { featureRolloutPolicy.isEnabled = n.getBooleanValue() as any ; },
    }
}
