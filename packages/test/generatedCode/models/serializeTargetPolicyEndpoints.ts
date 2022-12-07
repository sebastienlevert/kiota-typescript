import {TargetPolicyEndpoints} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetPolicyEndpoints(writer: SerializationWriter, targetPolicyEndpoints: TargetPolicyEndpoints | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("platformTypes", targetPolicyEndpoints.platformTypes);
}
