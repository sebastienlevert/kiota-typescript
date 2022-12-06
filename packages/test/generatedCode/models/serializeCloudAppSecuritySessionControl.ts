import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {CloudAppSecuritySessionControl} from './index';
import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudAppSecuritySessionControl(writer: SerializationWriter, cloudAppSecuritySessionControl: CloudAppSecuritySessionControl | undefined = {}) : void {
        serializeConditionalAccessSessionControl(writer, cloudAppSecuritySessionControl)
            writer.writeEnumValue<CloudAppSecuritySessionControlType>("cloudAppSecurityType", cloudAppSecuritySessionControl.cloudAppSecurityType);
}
