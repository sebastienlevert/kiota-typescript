import {FeatureTargetType} from './featureTargetType';
import {FeatureTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeatureTarget(writer: SerializationWriter, featureTarget: FeatureTarget | undefined = {}) : void {
            writer.writeStringValue("id", featureTarget.id);
            writer.writeStringValue("@odata.type", featureTarget.odataType);
            writer.writeEnumValue<FeatureTargetType>("targetType", featureTarget.targetType);
}
