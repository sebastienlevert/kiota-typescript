import {FeatureRolloutPolicy} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeatureRolloutPolicy(writer: SerializationWriter, featureRolloutPolicy: FeatureRolloutPolicy | undefined = {}) : void {
        serializeEntity(writer, featureRolloutPolicy)
            writer.writeCollectionOfObjectValuesFromMethod("appliesTo", featureRolloutPolicy.appliesTo as any, serializeDirectoryObject);
            writer.writeStringValue("description", featureRolloutPolicy.description);
            writer.writeStringValue("displayName", featureRolloutPolicy.displayName);
            writer.writeEnumValue<StagedFeatureName>("feature", featureRolloutPolicy.feature);
            writer.writeBooleanValue("isAppliedToOrganization", featureRolloutPolicy.isAppliedToOrganization);
            writer.writeBooleanValue("isEnabled", featureRolloutPolicy.isEnabled);
}
