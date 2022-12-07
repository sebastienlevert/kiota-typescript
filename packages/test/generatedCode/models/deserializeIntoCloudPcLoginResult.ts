import {CloudPcLoginResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPcLoginResult(cloudPcLoginResult: CloudPcLoginResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "time": n => { cloudPcLoginResult.time = n.getDateValue() as any ; },
    }
}
