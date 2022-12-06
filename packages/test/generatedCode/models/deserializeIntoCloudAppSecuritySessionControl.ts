import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {CloudAppSecuritySessionControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudAppSecuritySessionControl(cloudAppSecuritySessionControl: CloudAppSecuritySessionControl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(cloudAppSecuritySessionControl),
        "cloudAppSecurityType": n => { cloudAppSecuritySessionControl.cloudAppSecurityType = n.getEnumValue<CloudAppSecuritySessionControlType>(CloudAppSecuritySessionControlType) as any ; },
    }
}
