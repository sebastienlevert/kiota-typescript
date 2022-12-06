import {WorkforceIntegration} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeWorkforceIntegrationEncryption} from './serializeWorkforceIntegrationEncryption';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkforceIntegration(writer: SerializationWriter, workforceIntegration: WorkforceIntegration | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, workforceIntegration)
            writer.writeNumberValue("apiVersion", workforceIntegration.apiVersion);
            writer.writeStringValue("displayName", workforceIntegration.displayName);
            writer.writeObjectValueFromMethod("encryption", workforceIntegration.encryption as any, serializeWorkforceIntegrationEncryption);
            writer.writeBooleanValue("isActive", workforceIntegration.isActive);
            writer.writeEnumValue<WorkforceIntegrationSupportedEntities>("supportedEntities", workforceIntegration.supportedEntities);
            writer.writeStringValue("url", workforceIntegration.url);
}
