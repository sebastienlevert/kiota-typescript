import {SecurityResource} from './index';
import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityResource(writer: SerializationWriter, securityResource: SecurityResource | undefined = {}) : void {
            writer.writeStringValue("@odata.type", securityResource.odataType);
            writer.writeStringValue("resource", securityResource.resource);
            writer.writeEnumValue<SecurityResourceType>("resourceType", securityResource.resourceType);
}
