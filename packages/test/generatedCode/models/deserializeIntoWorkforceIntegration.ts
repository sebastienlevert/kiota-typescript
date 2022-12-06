import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoWorkforceIntegrationEncryption} from './deserializeIntoWorkforceIntegrationEncryption';
import {WorkforceIntegration} from './index';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegration(workforceIntegration: WorkforceIntegration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(workforceIntegration),
        "apiVersion": n => { workforceIntegration.apiVersion = n.getNumberValue() as any ; },
        "displayName": n => { workforceIntegration.displayName = n.getStringValue() as any ; },
        "encryption": n => { workforceIntegration.encryption = n.getObject(deserializeIntoWorkforceIntegrationEncryption) as any ; },
        "isActive": n => { workforceIntegration.isActive = n.getBooleanValue() as any ; },
        "supportedEntities": n => { workforceIntegration.supportedEntities = n.getEnumValue<WorkforceIntegrationSupportedEntities>(WorkforceIntegrationSupportedEntities) as any ; },
        "url": n => { workforceIntegration.url = n.getStringValue() as any ; },
    }
}
