import {SecurityResource} from './index';
import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityResource(securityResource: SecurityResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { securityResource.odataType = n.getStringValue() as any ; },
        "resource": n => { securityResource.resource = n.getStringValue() as any ; },
        "resourceType": n => { securityResource.resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType) as any ; },
    }
}
