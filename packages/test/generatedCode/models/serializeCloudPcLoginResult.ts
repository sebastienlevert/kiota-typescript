import {CloudPcLoginResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPcLoginResult(writer: SerializationWriter, cloudPcLoginResult: CloudPcLoginResult | undefined = {}) : void {
            writer.writeDateValue("time", cloudPcLoginResult.time);
}
