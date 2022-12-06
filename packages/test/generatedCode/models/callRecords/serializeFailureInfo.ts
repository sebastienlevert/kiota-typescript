import {FailureStage} from './failureStage';
import {FailureInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFailureInfo(writer: SerializationWriter, failureInfo: FailureInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", failureInfo.odataType);
            writer.writeStringValue("reason", failureInfo.reason);
            writer.writeEnumValue<FailureStage>("stage", failureInfo.stage);
}
